import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache, ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { environment } from '../environments/environment';
//import { LOCAL_STORAGE_KEY } from './services/authentication.service';
const LOCAL_STORAGE_KEY = 'TODO';

export function createApollo(httpLink: HttpLink) {
  const authLink = setContext(() => {
    const token =
      typeof window === 'object' && localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!token) {
      return {};
    } else {
      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    }
  });

  let uri = environment.graphql_url;
  if (!uri) {
    uri = window.location.origin + environment.graphql_path;
  }

  const link = ApolloLink.from([
    authLink,
    httpLink.create({
      uri,
    }),
  ]);

  const merge = (existing, incoming, { mergeObjects }) =>
    mergeObjects(existing, incoming);
  return {
    link,
    cache: new InMemoryCache({
      typePolicies: {
        IoRestorecommerceAuthRoleAssociation: {
          // Disabled as the id fields are not actually unique identifiers and cache serves the same object
          keyFields: false,
        },
        IoRestorecommerceAttributeAttribute: {
          // Disabled as the id fields are not actually unique identifiers and cache serves the same object
          keyFields: false,
        },
        MasterDataQuery: {
          merge,
        },
        IdentityQuery: {
          merge,
        },
      },
    }),
  };
}

@NgModule({
  exports: [HttpClientModule, ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
