import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *                 compliant with the date-time format outlined in section 5.6 of
   *                 the RFC 3339 profile of the ISO 8601 standard for representation
   *                 of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  GoogleProtobufAnyValue: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *                 compliant with the date-time format outlined in section 5.6 of
   *                 the RFC 3339 profile of the ISO 8601 standard for representation
   *                 of dates and times using the Gregorian calendar.
   */
  IDateTime: any;
  MapScalar: any;
  TodoScalar: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccessControlAccessControlQuery = {
  __typename?: 'AccessControlAccessControlQuery';
  IsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlResponse>;
  WhatIsAllowed?: Maybe<ProtoIoRestorecommerceAccessControlReverseQuery>;
};


export type AccessControlAccessControlQueryIsAllowedArgs = {
  input: IIoRestorecommerceAccessControlRequest;
};


export type AccessControlAccessControlQueryWhatIsAllowedArgs = {
  input: IIoRestorecommerceAccessControlRequest;
};

export type AccessControlMutation = {
  __typename?: 'AccessControlMutation';
  policy: AccessControlPolicyMutation;
  policy_set: AccessControlPolicySetMutation;
  rule: AccessControlRuleMutation;
};

export type AccessControlPolicyMutation = {
  __typename?: 'AccessControlPolicyMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
};


export type AccessControlPolicyMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlPolicyMutationMutateArgs = {
  input: IIoRestorecommercePolicyPolicyList;
};

export type AccessControlPolicyQuery = {
  __typename?: 'AccessControlPolicyQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicyPolicyListResponse>;
};


export type AccessControlPolicyQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type AccessControlPolicySetMutation = {
  __typename?: 'AccessControlPolicySetMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
};


export type AccessControlPolicySetMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlPolicySetMutationMutateArgs = {
  input: IIoRestorecommercePolicySetPolicySetList;
};

export type AccessControlPolicySetQuery = {
  __typename?: 'AccessControlPolicySetQuery';
  Read?: Maybe<ProtoIoRestorecommercePolicySetPolicySetListResponse>;
};


export type AccessControlPolicySetQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type AccessControlQuery = {
  __typename?: 'AccessControlQuery';
  access_control: AccessControlAccessControlQuery;
  policy: AccessControlPolicyQuery;
  policy_set: AccessControlPolicySetQuery;
  rule: AccessControlRuleQuery;
};

export type AccessControlRuleMutation = {
  __typename?: 'AccessControlRuleMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
};


export type AccessControlRuleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type AccessControlRuleMutationMutateArgs = {
  input: IIoRestorecommerceRuleRuleList;
};

export type AccessControlRuleQuery = {
  __typename?: 'AccessControlRuleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRuleRuleListResponse>;
};


export type AccessControlRuleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type CatalogManufacturerMutation = {
  __typename?: 'CatalogManufacturerMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
};


export type CatalogManufacturerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogManufacturerMutationMutateArgs = {
  input: IIoRestorecommerceManufacturerManufacturerList;
};

export type CatalogManufacturerQuery = {
  __typename?: 'CatalogManufacturerQuery';
  Read?: Maybe<ProtoIoRestorecommerceManufacturerManufacturerListResponse>;
};


export type CatalogManufacturerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type CatalogMutation = {
  __typename?: 'CatalogMutation';
  manufacturer: CatalogManufacturerMutation;
  price_group: CatalogPriceGroupMutation;
  product: CatalogProductMutation;
  product_category: CatalogProductCategoryMutation;
  product_prototype: CatalogProductPrototypeMutation;
};

export type CatalogPriceGroupMutation = {
  __typename?: 'CatalogPriceGroupMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
};


export type CatalogPriceGroupMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogPriceGroupMutationMutateArgs = {
  input: IIoRestorecommercePriceGroupPriceGroupList;
};

export type CatalogPriceGroupQuery = {
  __typename?: 'CatalogPriceGroupQuery';
  Read?: Maybe<ProtoIoRestorecommercePriceGroupPriceGroupListResponse>;
};


export type CatalogPriceGroupQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type CatalogProductCategoryMutation = {
  __typename?: 'CatalogProductCategoryMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
};


export type CatalogProductCategoryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogProductCategoryMutationMutateArgs = {
  input: IIoRestorecommerceProductCategoryProductCategoryList;
};

export type CatalogProductCategoryQuery = {
  __typename?: 'CatalogProductCategoryQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductCategoryProductCategoryListResponse>;
};


export type CatalogProductCategoryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type CatalogProductMutation = {
  __typename?: 'CatalogProductMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
};


export type CatalogProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogProductMutationMutateArgs = {
  input: IIoRestorecommerceProductProductList;
};

export type CatalogProductPrototypeMutation = {
  __typename?: 'CatalogProductPrototypeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};


export type CatalogProductPrototypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type CatalogProductPrototypeMutationMutateArgs = {
  input: IIoRestorecommerceProductPrototypeProductPrototypeList;
};

export type CatalogProductPrototypeQuery = {
  __typename?: 'CatalogProductPrototypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};


export type CatalogProductPrototypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type CatalogProductQuery = {
  __typename?: 'CatalogProductQuery';
  Read?: Maybe<ProtoIoRestorecommerceProductProductListResponse>;
};


export type CatalogProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type CatalogQuery = {
  __typename?: 'CatalogQuery';
  manufacturer: CatalogManufacturerQuery;
  price_group: CatalogPriceGroupQuery;
  product: CatalogProductQuery;
  product_category: CatalogProductCategoryQuery;
  product_prototype: CatalogProductPrototypeQuery;
};

/** The facade status */
export type FacadeStatusType = {
  __typename?: 'FacadeStatusType';
  running: Scalars['Boolean'];
};

export type FulfillmentFulfillmentCourierMutation = {
  __typename?: 'FulfillmentFulfillmentCourierMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};


export type FulfillmentFulfillmentCourierMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type FulfillmentFulfillmentCourierMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentCourierFulfillmentCourierList;
};

export type FulfillmentFulfillmentCourierQuery = {
  __typename?: 'FulfillmentFulfillmentCourierQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};


export type FulfillmentFulfillmentCourierQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type FulfillmentFulfillmentMutation = {
  __typename?: 'FulfillmentFulfillmentMutation';
  Cancel?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Evaluate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Submit?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  Track?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  TriggerInvoice?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
};


export type FulfillmentFulfillmentMutationCancelArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};


export type FulfillmentFulfillmentMutationCreateInvoiceArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList;
};


export type FulfillmentFulfillmentMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type FulfillmentFulfillmentMutationEvaluateArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationSubmitArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentList;
};


export type FulfillmentFulfillmentMutationTrackArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};


export type FulfillmentFulfillmentMutationTriggerInvoiceArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList;
};


export type FulfillmentFulfillmentMutationWithdrawArgs = {
  input: IIoRestorecommerceFulfillmentFulfillmentIdList;
};

export type FulfillmentFulfillmentProductMutation = {
  __typename?: 'FulfillmentFulfillmentProductMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};


export type FulfillmentFulfillmentProductMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type FulfillmentFulfillmentProductMutationMutateArgs = {
  input: IIoRestorecommerceFulfillmentProductFulfillmentProductList;
};

export type FulfillmentFulfillmentProductQuery = {
  __typename?: 'FulfillmentFulfillmentProductQuery';
  Find?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};


export type FulfillmentFulfillmentProductQueryFindArgs = {
  input: IIoRestorecommerceFulfillmentProductPackingSolutionQueryList;
};


export type FulfillmentFulfillmentProductQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type FulfillmentFulfillmentQuery = {
  __typename?: 'FulfillmentFulfillmentQuery';
  Read?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
};


export type FulfillmentFulfillmentQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type FulfillmentMutation = {
  __typename?: 'FulfillmentMutation';
  fulfillment: FulfillmentFulfillmentMutation;
  fulfillment_courier: FulfillmentFulfillmentCourierMutation;
  fulfillment_product: FulfillmentFulfillmentProductMutation;
};

export type FulfillmentQuery = {
  __typename?: 'FulfillmentQuery';
  fulfillment: FulfillmentFulfillmentQuery;
  fulfillment_courier: FulfillmentFulfillmentCourierQuery;
  fulfillment_product: FulfillmentFulfillmentProductQuery;
};

export type GoogleProtobufAny = {
  __typename?: 'GoogleProtobufAny';
  typeUrl?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IGoogleProtobufAny = {
  typeUrl?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['GoogleProtobufAnyValue']>;
};

export type IIoRestorecommerceAccessControlContext = {
  resources?: InputMaybe<Array<IGoogleProtobufAny>>;
  security?: InputMaybe<IGoogleProtobufAny>;
  subject?: InputMaybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceAccessControlRequest = {
  context?: InputMaybe<IIoRestorecommerceAccessControlContext>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};

export type IIoRestorecommerceAddressAddress = {
  addressAddition?: InputMaybe<IIoRestorecommerceAddressAddressAddition>;
  altitude?: InputMaybe<Scalars['Float']>;
  buildingNumber?: InputMaybe<Scalars['String']>;
  businessAddress?: InputMaybe<IIoRestorecommerceAddressBusinessAddress>;
  countryId?: InputMaybe<Scalars['String']>;
  geoCoordinates?: InputMaybe<IIoRestorecommerceAddressGeoPoint>;
  id?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  packStation?: InputMaybe<IIoRestorecommerceAddressPackStation>;
  postcode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  residentialAddress?: InputMaybe<IIoRestorecommerceAddressResidentialAddress>;
  street?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressAddressAddition = {
  field1?: InputMaybe<Scalars['String']>;
  field2?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressAddressList = {
  items?: InputMaybe<Array<IIoRestorecommerceAddressAddress>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceAddressBillingAddress = {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  comments?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<IIoRestorecommerceAddressContact>;
};

export type IIoRestorecommerceAddressBusinessAddress = {
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressContact = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressGeoPoint = {
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceAddressPackStation = {
  postNumber?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  stationNumber?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressResidentialAddress = {
  familyName?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  midName?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAddressShippingAddress = {
  address?: InputMaybe<IIoRestorecommerceAddressAddress>;
  comments?: InputMaybe<Scalars['String']>;
  contact?: InputMaybe<IIoRestorecommerceAddressContact>;
};

export type IIoRestorecommerceAmountAmount = {
  currencyId?: InputMaybe<Scalars['String']>;
  gross?: InputMaybe<Scalars['Float']>;
  net?: InputMaybe<Scalars['Float']>;
  vats?: InputMaybe<Array<IIoRestorecommerceAmountVat>>;
};

export type IIoRestorecommerceAmountVat = {
  taxId?: InputMaybe<Scalars['String']>;
  vat?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceAttributeAttribute = {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  id?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthRoleAssociation = {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  created?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthTokens = {
  clientId?: InputMaybe<Scalars['String']>;
  expiresIn?: InputMaybe<Scalars['IDateTime']>;
  interactive?: InputMaybe<Scalars['Boolean']>;
  lastLogin?: InputMaybe<Scalars['IDateTime']>;
  name?: InputMaybe<Scalars['String']>;
  scopes?: InputMaybe<Array<Scalars['String']>>;
  token?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLog = {
  activity?: InputMaybe<Scalars['String']>;
  date?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  ipv4Address?: InputMaybe<Scalars['String']>;
  ipv6Address?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  operatingSystem?: InputMaybe<Scalars['String']>;
  subjectId?: InputMaybe<Scalars['String']>;
  tokenName?: InputMaybe<Scalars['String']>;
  userAgent?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceAuthenticationLogAuthenticationLogList = {
  items?: InputMaybe<Array<IIoRestorecommerceAuthenticationLogAuthenticationLog>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceCommandCommand = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parameters?: InputMaybe<Array<IIoRestorecommerceCommandCommandParameter>>;
};

export type IIoRestorecommerceCommandCommandList = {
  items?: InputMaybe<Array<IIoRestorecommerceCommandCommand>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceCommandCommandParameter = {
  description?: InputMaybe<Scalars['String']>;
  field?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<IoRestorecommerceCommandCommandParameterParameterType>;
};

export type IIoRestorecommerceContactPointContactPoint = {
  contactPointTypeIds?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  physicalAddressId?: InputMaybe<Scalars['String']>;
  telephone?: InputMaybe<Scalars['String']>;
  timezoneId?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceContactPointContactPointList = {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointContactPoint>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceContactPointTypeContactPointType = {
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceContactPointTypeContactPointTypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceContactPointTypeContactPointType>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceCountryCountry = {
  countryCode?: InputMaybe<Scalars['String']>;
  economicAreas?: InputMaybe<Array<Scalars['String']>>;
  geographicalName?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCountryCountryList = {
  items?: InputMaybe<Array<IIoRestorecommerceCountryCountry>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceCustomerCommercial = {
  organizationId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCustomerCustomer = {
  commercial?: InputMaybe<IIoRestorecommerceCustomerCommercial>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  private?: InputMaybe<IIoRestorecommerceCustomerPrivate>;
  publicSector?: InputMaybe<IIoRestorecommerceCustomerPublicSector>;
};

export type IIoRestorecommerceCustomerCustomerList = {
  items?: InputMaybe<Array<IIoRestorecommerceCustomerCustomer>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceCustomerPrivate = {
  contactPointIds?: InputMaybe<Array<Scalars['String']>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceCustomerPublicSector = {
  organizationId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFileFile = {
  bytes?: InputMaybe<Scalars['Int']>;
  caption?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  thumbnail?: InputMaybe<IIoRestorecommerceImageImage>;
  url?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFilterFilter = {
  field?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
  operation?: InputMaybe<IoRestorecommerceFilterFilterOperation>;
  type?: InputMaybe<IoRestorecommerceFilterFilterValueType>;
  value?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFilterFilterOp = {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilter>>;
  operator?: InputMaybe<IoRestorecommerceFilterFilterOpOperator>;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  configuration?: InputMaybe<IGoogleProtobufAny>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  shopIds?: InputMaybe<Array<Scalars['String']>>;
  stubType?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentCourierFulfillmentCourierList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentCourierFulfillmentCourier>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentEvent = {
  details?: InputMaybe<IGoogleProtobufAny>;
  location?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
  timestamp?: InputMaybe<Scalars['IDateTime']>;
};

export type IIoRestorecommerceFulfillmentFulfillment = {
  customerId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  labels?: InputMaybe<Array<IIoRestorecommerceFulfillmentLabel>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  packaging?: InputMaybe<IIoRestorecommerceFulfillmentPackaging>;
  references?: InputMaybe<Array<IIoRestorecommerceReferenceReference>>;
  shopId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  trackings?: InputMaybe<Array<IIoRestorecommerceFulfillmentTracking>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentFulfillmentId = {
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IGoogleProtobufAny>;
  shipmentNumbers?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceFulfillmentFulfillmentIdList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentId>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest = {
  invoiceNumber?: InputMaybe<Scalars['String']>;
  paymentHints?: InputMaybe<Array<Scalars['String']>>;
  sections?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceSection>>;
};

export type IIoRestorecommerceFulfillmentFulfillmentInvoiceRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentFulfillmentInvoiceSection = {
  fulfillmentId?: InputMaybe<Scalars['String']>;
  selectedParcels?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceFulfillmentFulfillmentList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillment>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentItem = {
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentLabel = {
  parcelId?: InputMaybe<Scalars['String']>;
  pdf?: InputMaybe<Scalars['String']>;
  png?: InputMaybe<Scalars['String']>;
  shipmentNumber?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<IoRestorecommerceFulfillmentState>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
  url?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentPackaging = {
  exportDescription?: InputMaybe<Scalars['String']>;
  exportType?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  notify?: InputMaybe<Scalars['String']>;
  parcels?: InputMaybe<Array<IIoRestorecommerceFulfillmentParcel>>;
  recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
};

export type IIoRestorecommerceFulfillmentParcel = {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentProductFulfillmentProduct = {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  courierId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  destinationZones?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  startZones?: InputMaybe<Array<Scalars['String']>>;
  taxIds?: InputMaybe<Array<Scalars['String']>>;
  variants?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductVariant>>;
};

export type IIoRestorecommerceFulfillmentProductFulfillmentProductList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductFulfillmentProduct>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentProductPackingSolutionQuery = {
  customerId?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentItem>>;
  preferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  recipient?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  reference?: InputMaybe<IIoRestorecommerceReferenceReference>;
  sender?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  shopId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceFulfillmentProductPackingSolutionQueryList = {
  items?: InputMaybe<Array<IIoRestorecommerceFulfillmentProductPackingSolutionQuery>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceFulfillmentProductPreferences = {
  couriers?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  options?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceFulfillmentProductVariant = {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxSize?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
};

export type IIoRestorecommerceFulfillmentTracking = {
  details?: InputMaybe<IGoogleProtobufAny>;
  events?: InputMaybe<Array<IIoRestorecommerceFulfillmentEvent>>;
  shipmentNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<IIoRestorecommerceStatusStatus>;
};

export type IIoRestorecommerceGeometryBoundingBox3D = {
  height?: InputMaybe<Scalars['Float']>;
  length?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceImageImage = {
  caption?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  index?: InputMaybe<Scalars['Int']>;
  length?: InputMaybe<Scalars['Float']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceInvoiceFulfillmentItem = {
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceInvoiceInvoice = {
  customerId?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  fromDate?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  paymentHints?: InputMaybe<Array<Scalars['String']>>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  recipient?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  references?: InputMaybe<Array<IIoRestorecommerceReferenceReference>>;
  sections?: InputMaybe<Array<IIoRestorecommerceInvoiceSection>>;
  sender?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  sent?: InputMaybe<Scalars['Boolean']>;
  shopId?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['IDateTime']>;
  toDate?: InputMaybe<Scalars['IDateTime']>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  userId?: InputMaybe<Scalars['String']>;
  withdrawn?: InputMaybe<Scalars['Boolean']>;
};

export type IIoRestorecommerceInvoiceInvoiceId = {
  channelIds?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IGoogleProtobufAny>;
};

export type IIoRestorecommerceInvoiceInvoiceIdList = {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoiceId>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceInvoiceInvoiceList = {
  items?: InputMaybe<Array<IIoRestorecommerceInvoiceInvoice>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceInvoiceManualItem = {
  descritpion?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceInvoicePosition = {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  contractStartDate?: InputMaybe<Scalars['Float']>;
  fulfillmentItem?: InputMaybe<IIoRestorecommerceInvoiceFulfillmentItem>;
  id?: InputMaybe<Scalars['String']>;
  manualItem?: InputMaybe<IIoRestorecommerceInvoiceManualItem>;
  productItem?: InputMaybe<IIoRestorecommerceInvoiceProductItem>;
  quantity?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
};

export type IIoRestorecommerceInvoiceProductItem = {
  productId?: InputMaybe<Scalars['String']>;
  variantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceInvoiceRequestInvoiceNumber = {
  context?: InputMaybe<IGoogleProtobufAny>;
  shopId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceInvoiceSection = {
  amounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  customerRemark?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  positions?: InputMaybe<Array<IIoRestorecommerceInvoicePosition>>;
};

export type IIoRestorecommerceJobBackoff = {
  delay?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<IoRestorecommerceJobBackoffType>;
};

export type IIoRestorecommerceJobData = {
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  subjectId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceJobJob = {
  data?: InputMaybe<IIoRestorecommerceJobData>;
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<IIoRestorecommerceJobJobOptions>;
  queueName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  when?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceJobJobFilter = {
  jobIds?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceJobJobList = {
  items?: InputMaybe<Array<IIoRestorecommerceJobJob>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceJobJobOptions = {
  attempts?: InputMaybe<Scalars['Int']>;
  backoff?: InputMaybe<IIoRestorecommerceJobBackoff>;
  jobId?: InputMaybe<Scalars['String']>;
  priority?: InputMaybe<IoRestorecommerceJobJobOptionsPriority>;
  removeOnComplete?: InputMaybe<Scalars['Boolean']>;
  repeat?: InputMaybe<IIoRestorecommerceJobRepeat>;
  timeout?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceJobJobReadRequest = {
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  filter?: InputMaybe<IIoRestorecommerceJobJobFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  sort?: InputMaybe<IoRestorecommerceJobJobReadRequestSortOrder>;
};

export type IIoRestorecommerceJobRepeat = {
  count?: InputMaybe<Scalars['Int']>;
  cron?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['String']>;
  every?: InputMaybe<Scalars['Int']>;
  jobId?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  tz?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceLocaleLocale = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  value?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceLocaleLocaleList = {
  items?: InputMaybe<Array<IIoRestorecommerceLocaleLocale>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceLocationLocation = {
  addressId?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceLocationLocationList = {
  items?: InputMaybe<Array<IIoRestorecommerceLocationLocation>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceManufacturerManufacturer = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceManufacturerManufacturerList = {
  items?: InputMaybe<Array<IIoRestorecommerceManufacturerManufacturer>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceMetaMeta = {
  acls?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  created?: InputMaybe<Scalars['IDateTime']>;
  createdBy?: InputMaybe<Scalars['String']>;
  modified?: InputMaybe<Scalars['IDateTime']>;
  modifiedBy?: InputMaybe<Scalars['String']>;
  owners?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceNotificationNotification = {
  bodyTemplate?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  notificationChannelIds?: InputMaybe<Array<Scalars['String']>>;
  subjectTemplate?: InputMaybe<Scalars['String']>;
  telephoneNumber?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceNotificationNotificationList = {
  items?: InputMaybe<Array<IIoRestorecommerceNotificationNotification>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceOauthExchangeCodeRequest = {
  code?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOauthGetTokenRequest = {
  service?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOrderFulfillmentRequest = {
  data?: InputMaybe<IGoogleProtobufAny>;
  exportDescription?: InputMaybe<Scalars['String']>;
  exportType?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['String']>;
  selectedItems?: InputMaybe<Array<Scalars['String']>>;
  senderAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
};

export type IIoRestorecommerceOrderFulfillmentRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderFulfillmentRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceOrderItem = {
  amount?: InputMaybe<IIoRestorecommerceAmountAmount>;
  id?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  unitPrice?: InputMaybe<IIoRestorecommercePricePrice>;
  variantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOrderOrder = {
  billingAddress?: InputMaybe<IIoRestorecommerceAddressBillingAddress>;
  customerId?: InputMaybe<Scalars['String']>;
  customerOrderNr?: InputMaybe<Scalars['String']>;
  customerRemark?: InputMaybe<Scalars['String']>;
  fulfillmentState?: InputMaybe<IoRestorecommerceFulfillmentState>;
  id?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommerceOrderItem>>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  notificationEmail?: InputMaybe<Scalars['String']>;
  orderState?: InputMaybe<IoRestorecommerceOrderOrderState>;
  packagingPreferences?: InputMaybe<IIoRestorecommerceFulfillmentProductPreferences>;
  paymentState?: InputMaybe<IoRestorecommerceInvoicePaymentState>;
  shippingAddress?: InputMaybe<IIoRestorecommerceAddressShippingAddress>;
  shopId?: InputMaybe<Scalars['String']>;
  totalAmounts?: InputMaybe<Array<IIoRestorecommerceAmountAmount>>;
  userId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOrderOrderIdList = {
  ids?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceOrderOrderList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderOrder>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceOrderOrderingInvoiceRequest = {
  invoiceNumber?: InputMaybe<Scalars['String']>;
  paymentHints?: InputMaybe<Array<Scalars['String']>>;
  sections?: InputMaybe<Array<IIoRestorecommerceOrderOrderingInvoiceSection>>;
};

export type IIoRestorecommerceOrderOrderingInvoiceRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrderOrderingInvoiceRequest>>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceOrderOrderingInvoiceSection = {
  fulfillmentMode?: InputMaybe<IoRestorecommerceOrderFulfillmentInvoiceMode>;
  orderId?: InputMaybe<Scalars['String']>;
  selectedFulfillments?: InputMaybe<Array<IIoRestorecommerceFulfillmentFulfillmentInvoiceSection>>;
  selectedItems?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceOrganizationOrganization = {
  contactPointIds?: InputMaybe<Array<Scalars['String']>>;
  data?: InputMaybe<IGoogleProtobufAny>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isicV4?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<IIoRestorecommerceImageImage>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
  paymentMethodIds?: InputMaybe<Array<Scalars['String']>>;
  registration?: InputMaybe<Scalars['String']>;
  registrationCourt?: InputMaybe<Scalars['String']>;
  vatId?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOrganizationOrganizationList = {
  items?: InputMaybe<Array<IIoRestorecommerceOrganizationOrganization>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceOstorageCopyRequestItem = {
  bucket?: InputMaybe<Scalars['String']>;
  copySource?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
};

export type IIoRestorecommerceOstorageCopyRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOstorageCopyRequestItem>>;
};

export type IIoRestorecommerceOstorageDeleteRequest = {
  bucket?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageGetRequest = {
  bucket?: InputMaybe<Scalars['String']>;
  download?: InputMaybe<Scalars['Boolean']>;
  key?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageListRequest = {
  bucket?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IIoRestorecommerceFilterFilterOp>;
  maxKeys?: InputMaybe<Scalars['Int']>;
  prefix?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageMoveRequestItem = {
  bucket?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
  sourceObject?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageMoveRequestList = {
  items?: InputMaybe<Array<IIoRestorecommerceOstorageMoveRequestItem>>;
};

export type IIoRestorecommerceOstorageObject = {
  bucket?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  object?: InputMaybe<Scalars['Upload']>;
  options?: InputMaybe<IIoRestorecommerceOstorageOptions>;
  url?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceOstorageOptions = {
  contentDisposition?: InputMaybe<Scalars['String']>;
  contentLanguage?: InputMaybe<Scalars['String']>;
  contentType?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  encoding?: InputMaybe<Scalars['String']>;
  length?: InputMaybe<Scalars['Int']>;
  md5?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  version?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentCaptureRequest = {
  currency?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
  paymentSum?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
};

export type IIoRestorecommercePaymentItem = {
  amount?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommercePaymentPaymentRequest = {
  currency?: InputMaybe<Scalars['String']>;
  payerId?: InputMaybe<Scalars['String']>;
  paymentId?: InputMaybe<Scalars['String']>;
  paymentSum?: InputMaybe<Scalars['Int']>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
  token?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePaymentSetupRequest = {
  allowGuestCheckout?: InputMaybe<Scalars['Boolean']>;
  cancelReturnUrl?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  handling?: InputMaybe<Scalars['Int']>;
  ip?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<IIoRestorecommercePaymentItem>>;
  provider?: InputMaybe<IoRestorecommercePaymentProvider>;
  returnUrl?: InputMaybe<Scalars['String']>;
  shipping?: InputMaybe<Scalars['Int']>;
  subtotal?: InputMaybe<Scalars['Int']>;
  tax?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommercePolicyPolicy = {
  combiningAlgorithm?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  rules?: InputMaybe<Array<Scalars['String']>>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};

export type IIoRestorecommercePolicyPolicyList = {
  items?: InputMaybe<Array<IIoRestorecommercePolicyPolicy>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommercePolicySetPolicySet = {
  combiningAlgorithm?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  policies?: InputMaybe<Array<Scalars['String']>>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};

export type IIoRestorecommercePolicySetPolicySetList = {
  items?: InputMaybe<Array<IIoRestorecommercePolicySetPolicySet>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommercePriceGroupPriceGroup = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommercePriceGroupPriceGroupList = {
  items?: InputMaybe<Array<IIoRestorecommercePriceGroupPriceGroup>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommercePricePrice = {
  currencyId?: InputMaybe<Scalars['String']>;
  regularPrice?: InputMaybe<Scalars['Float']>;
  sale?: InputMaybe<Scalars['Boolean']>;
  salePrice?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceProductAssociation = {
  data?: InputMaybe<IGoogleProtobufAny>;
  productId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<IoRestorecommerceProductAssociationType>;
};

export type IIoRestorecommerceProductBundle = {
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  prePackaged?: InputMaybe<IIoRestorecommerceProductPackage>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  products?: InputMaybe<Array<IIoRestorecommerceProductBundleProduct>>;
};

export type IIoRestorecommerceProductBundleProduct = {
  priceRatio?: InputMaybe<Scalars['Float']>;
  productId?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  variantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductCategoryParent = {
  parentId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductCategoryProductCategory = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<IIoRestorecommerceProductCategoryParent>;
  priceGroupId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductCategoryProductCategoryList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductCategoryProductCategory>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceProductIndividualProduct = {
  categoryId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  gtin?: InputMaybe<Scalars['String']>;
  manufacturerId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  originCountryId?: InputMaybe<Scalars['String']>;
  physical?: InputMaybe<IIoRestorecommerceProductPhysicalProduct>;
  prototypeId?: InputMaybe<Scalars['String']>;
  service?: InputMaybe<IIoRestorecommerceProductServiceProduct>;
  taricCode?: InputMaybe<Scalars['String']>;
  taxIds?: InputMaybe<Array<Scalars['String']>>;
  virtual?: InputMaybe<IIoRestorecommerceProductVirtualProduct>;
};

export type IIoRestorecommerceProductPackage = {
  rotatable?: InputMaybe<Scalars['Boolean']>;
  sizeInCm?: InputMaybe<IIoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: InputMaybe<Scalars['Float']>;
};

export type IIoRestorecommerceProductPhysicalProduct = {
  variants?: InputMaybe<Array<IIoRestorecommerceProductPhysicalVariant>>;
};

export type IIoRestorecommerceProductPhysicalVariant = {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  package?: InputMaybe<IIoRestorecommerceProductPackage>;
  parentVariantId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceProductProduct = {
  active?: InputMaybe<Scalars['Boolean']>;
  associations?: InputMaybe<Array<IIoRestorecommerceProductAssociation>>;
  bundle?: InputMaybe<IIoRestorecommerceProductBundle>;
  data?: InputMaybe<IGoogleProtobufAny>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  product?: InputMaybe<IIoRestorecommerceProductIndividualProduct>;
  shopId?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceProductProductList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductProduct>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceProductPrototypeProductPrototype = {
  categoryId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  version?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceProductPrototypeProductPrototypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceProductPrototypeProductPrototype>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceProductServiceProduct = {
  variants?: InputMaybe<Array<IIoRestorecommerceProductServiceVariant>>;
};

export type IIoRestorecommerceProductServiceVariant = {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  parentVariantId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceProductVirtualProduct = {
  variants?: InputMaybe<Array<IIoRestorecommerceProductVirtualVariant>>;
};

export type IIoRestorecommerceProductVirtualVariant = {
  description?: InputMaybe<Scalars['String']>;
  files?: InputMaybe<Array<IIoRestorecommerceFileFile>>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<IIoRestorecommerceImageImage>>;
  name?: InputMaybe<Scalars['String']>;
  parentVariantId?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<IIoRestorecommercePricePrice>;
  properties?: InputMaybe<Array<IIoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: InputMaybe<Scalars['String']>;
  stockLevel?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommercePropertyProperty = {
  id?: InputMaybe<Scalars['String']>;
  unitCode?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceReferenceReference = {
  instanceId?: InputMaybe<Scalars['String']>;
  instanceType?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseDeleteRequest = {
  analyzers?: InputMaybe<Array<Scalars['String']>>;
  collection?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceResourcebaseFieldFilter = {
  include?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseFilter = {
  field?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
  operation?: InputMaybe<IoRestorecommerceResourcebaseFilterOperation>;
  type?: InputMaybe<IoRestorecommerceResourcebaseFilterValueType>;
  value?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseFilterOp = {
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilter>>;
  operator?: InputMaybe<IoRestorecommerceResourcebaseFilterOpOperator>;
};

export type IIoRestorecommerceResourcebaseReadRequest = {
  customArguments?: InputMaybe<IGoogleProtobufAny>;
  customQueries?: InputMaybe<Array<Scalars['String']>>;
  fields?: InputMaybe<Array<IIoRestorecommerceResourcebaseFieldFilter>>;
  filters?: InputMaybe<Array<IIoRestorecommerceResourcebaseFilterOp>>;
  limit?: InputMaybe<Scalars['Int']>;
  localesLimiter?: InputMaybe<Array<Scalars['String']>>;
  offset?: InputMaybe<Scalars['Int']>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<IIoRestorecommerceResourcebaseSearch>;
  sorts?: InputMaybe<Array<IIoRestorecommerceResourcebaseSort>>;
};

export type IIoRestorecommerceResourcebaseSearch = {
  caseSensitive?: InputMaybe<Scalars['Boolean']>;
  fields?: InputMaybe<Array<Scalars['String']>>;
  search?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceResourcebaseSort = {
  field?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<IoRestorecommerceResourcebaseSortSortOrder>;
};

export type IIoRestorecommerceRoleRole = {
  assignableByRoles?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceRoleRoleList = {
  items?: InputMaybe<Array<IIoRestorecommerceRoleRole>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceRuleContextQuery = {
  filters?: InputMaybe<Array<IIoRestorecommerceFilterFilterOp>>;
  query?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceRuleRule = {
  condition?: InputMaybe<Scalars['String']>;
  contextQuery?: InputMaybe<IIoRestorecommerceRuleContextQuery>;
  description?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  target?: InputMaybe<IIoRestorecommerceRuleTarget>;
};

export type IIoRestorecommerceRuleRuleList = {
  items?: InputMaybe<Array<IIoRestorecommerceRuleRule>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceRuleTarget = {
  actions?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  resources?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  subjects?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
};

export type IIoRestorecommerceStatusStatus = {
  code?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTaxTax = {
  countryId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  rate?: InputMaybe<Scalars['Float']>;
  typeId?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTaxTaxList = {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTax>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceTaxTypeTaxType = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTaxTypeTaxTypeList = {
  items?: InputMaybe<Array<IIoRestorecommerceTaxTypeTaxType>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceTimezoneTimezone = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
};

export type IIoRestorecommerceTimezoneTimezoneList = {
  items?: InputMaybe<Array<IIoRestorecommerceTimezoneTimezone>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceTokenGrantId = {
  grantId?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTokenIdentifier = {
  id?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceTokenTokenData = {
  expiresIn?: InputMaybe<Scalars['IDateTime']>;
  id?: InputMaybe<Scalars['String']>;
  payload?: InputMaybe<IGoogleProtobufAny>;
  type?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUnitCodeUnitCode = {
  commonCode?: InputMaybe<Scalars['String']>;
  conversionFactor?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  groupId?: InputMaybe<Scalars['String']>;
  groupNumber?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  levelCategory?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['String']>;
  sector?: InputMaybe<IoRestorecommerceUnitCodeSector>;
  status?: InputMaybe<IoRestorecommerceUnitCodeStatusCode>;
  symbol?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUnitCodeUnitCodeList = {
  items?: InputMaybe<Array<IIoRestorecommerceUnitCodeUnitCode>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IIoRestorecommerceUserActivateRequest = {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserChangeEmailRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserChangePasswordRequest = {
  newPassword?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmEmailChangeRequest = {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmPasswordChangeRequest = {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserConfirmUserInvitationRequest = {
  activationCode?: InputMaybe<Scalars['String']>;
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserFindByRoleRequest = {
  attributes?: InputMaybe<Array<IIoRestorecommerceAttributeAttribute>>;
  role?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserFindByTokenRequest = {
  token?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserFindRequest = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserLoginRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserOrgIdRequest = {
  orgIds?: InputMaybe<Array<Scalars['String']>>;
};

export type IIoRestorecommerceUserRegisterRequest = {
  captchaCode?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  defaultScope?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  guest?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  timezoneId?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
};

export type IIoRestorecommerceUserRequestPasswordChangeRequest = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserSendActivationEmailRequest = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserSendInvitationEmailRequest = {
  identifier?: InputMaybe<Scalars['String']>;
  invitedByUserIdentifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserUnregisterRequest = {
  identifier?: InputMaybe<Scalars['String']>;
};

export type IIoRestorecommerceUserUser = {
  activationCode?: InputMaybe<Scalars['String']>;
  active?: InputMaybe<Scalars['Boolean']>;
  data?: InputMaybe<IGoogleProtobufAny>;
  defaultScope?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  guest?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<IIoRestorecommerceImageImage>;
  invite?: InputMaybe<Scalars['Boolean']>;
  invitedByUserFirstName?: InputMaybe<Scalars['String']>;
  invitedByUserLastName?: InputMaybe<Scalars['String']>;
  invitedByUserName?: InputMaybe<Scalars['String']>;
  lastAccess?: InputMaybe<Scalars['IDateTime']>;
  lastName?: InputMaybe<Scalars['String']>;
  localeId?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<IIoRestorecommerceMetaMeta>;
  name?: InputMaybe<Scalars['String']>;
  newEmail?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  roleAssociations?: InputMaybe<Array<IIoRestorecommerceAuthRoleAssociation>>;
  timezoneId?: InputMaybe<Scalars['String']>;
  tokens?: InputMaybe<Array<IIoRestorecommerceAuthTokens>>;
  unauthenticated?: InputMaybe<Scalars['Boolean']>;
  userType?: InputMaybe<IoRestorecommerceUserUserType>;
};

export type IIoRestorecommerceUserUserList = {
  items?: InputMaybe<Array<IIoRestorecommerceUserUser>>;
  mode?: InputMaybe<ModeType>;
  /** target scope */
  scope?: InputMaybe<Scalars['String']>;
  totalCount?: InputMaybe<Scalars['Int']>;
};

export type IdentityAuthenticationLogMutation = {
  __typename?: 'IdentityAuthenticationLogMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};


export type IdentityAuthenticationLogMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityAuthenticationLogMutationMutateArgs = {
  input: IIoRestorecommerceAuthenticationLogAuthenticationLogList;
};

export type IdentityAuthenticationLogQuery = {
  __typename?: 'IdentityAuthenticationLogQuery';
  Read?: Maybe<ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};


export type IdentityAuthenticationLogQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type IdentityMutation = {
  __typename?: 'IdentityMutation';
  authentication_log: IdentityAuthenticationLogMutation;
  o_auth: IdentityOAuthMutation;
  role: IdentityRoleMutation;
  token: IdentityTokenMutation;
  user: IdentityUserMutation;
};

export type IdentityOAuthMutation = {
  __typename?: 'IdentityOAuthMutation';
  AvailableServices?: Maybe<ProtoIoRestorecommerceOauthServicesResponse>;
  ExchangeCode?: Maybe<ProtoIoRestorecommerceOauthExchangeCodeResponse>;
  GenerateLinks?: Maybe<ProtoIoRestorecommerceOauthGenerateLinksResponse>;
  GetToken?: Maybe<ProtoIoRestorecommerceOauthGetTokenResponse>;
};


export type IdentityOAuthMutationExchangeCodeArgs = {
  input: IIoRestorecommerceOauthExchangeCodeRequest;
};


export type IdentityOAuthMutationGetTokenArgs = {
  input: IIoRestorecommerceOauthGetTokenRequest;
};

export type IdentityQuery = {
  __typename?: 'IdentityQuery';
  authentication_log: IdentityAuthenticationLogQuery;
  role: IdentityRoleQuery;
  token: IdentityTokenQuery;
  user: IdentityUserQuery;
};

export type IdentityRoleMutation = {
  __typename?: 'IdentityRoleMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
};


export type IdentityRoleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityRoleMutationMutateArgs = {
  input: IIoRestorecommerceRoleRoleList;
};

export type IdentityRoleQuery = {
  __typename?: 'IdentityRoleQuery';
  Read?: Maybe<ProtoIoRestorecommerceRoleRoleListResponse>;
};


export type IdentityRoleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type IdentityTokenMutation = {
  __typename?: 'IdentityTokenMutation';
  consume?: Maybe<ProtoGoogleProtobufAny>;
  destroy?: Maybe<ProtoGoogleProtobufAny>;
  revokeByGrantId?: Maybe<ProtoGoogleProtobufAny>;
  upsert?: Maybe<ProtoGoogleProtobufAny>;
};


export type IdentityTokenMutationConsumeArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};


export type IdentityTokenMutationDestroyArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};


export type IdentityTokenMutationRevokeByGrantIdArgs = {
  input: IIoRestorecommerceTokenGrantId;
};


export type IdentityTokenMutationUpsertArgs = {
  input: IIoRestorecommerceTokenTokenData;
};

export type IdentityTokenQuery = {
  __typename?: 'IdentityTokenQuery';
  find?: Maybe<ProtoGoogleProtobufAny>;
};


export type IdentityTokenQueryFindArgs = {
  input: IIoRestorecommerceTokenIdentifier;
};

export type IdentityUserMutation = {
  __typename?: 'IdentityUserMutation';
  Activate?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ChangePassword?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  ConfirmUserInvitation?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  DeleteUsersByOrg?: Maybe<ProtoIoRestorecommerceUserDeleteUsersByOrgResponse>;
  Login?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  Register?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  RequestEmailChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  RequestPasswordChange?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendActivationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  SendInvitationEmail?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
  Unregister?: Maybe<ProtoIoRestorecommerceStatusOperationStatusObj>;
};


export type IdentityUserMutationActivateArgs = {
  input: IIoRestorecommerceUserActivateRequest;
};


export type IdentityUserMutationChangePasswordArgs = {
  input: IIoRestorecommerceUserChangePasswordRequest;
};


export type IdentityUserMutationConfirmEmailChangeArgs = {
  input: IIoRestorecommerceUserConfirmEmailChangeRequest;
};


export type IdentityUserMutationConfirmPasswordChangeArgs = {
  input: IIoRestorecommerceUserConfirmPasswordChangeRequest;
};


export type IdentityUserMutationConfirmUserInvitationArgs = {
  input: IIoRestorecommerceUserConfirmUserInvitationRequest;
};


export type IdentityUserMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type IdentityUserMutationDeleteUsersByOrgArgs = {
  input: IIoRestorecommerceUserOrgIdRequest;
};


export type IdentityUserMutationLoginArgs = {
  input: IIoRestorecommerceUserLoginRequest;
};


export type IdentityUserMutationMutateArgs = {
  input: IIoRestorecommerceUserUserList;
};


export type IdentityUserMutationRegisterArgs = {
  input: IIoRestorecommerceUserRegisterRequest;
};


export type IdentityUserMutationRequestEmailChangeArgs = {
  input: IIoRestorecommerceUserChangeEmailRequest;
};


export type IdentityUserMutationRequestPasswordChangeArgs = {
  input: IIoRestorecommerceUserRequestPasswordChangeRequest;
};


export type IdentityUserMutationSendActivationEmailArgs = {
  input: IIoRestorecommerceUserSendActivationEmailRequest;
};


export type IdentityUserMutationSendInvitationEmailArgs = {
  input: IIoRestorecommerceUserSendInvitationEmailRequest;
};


export type IdentityUserMutationUnregisterArgs = {
  input: IIoRestorecommerceUserUnregisterRequest;
};

export type IdentityUserQuery = {
  __typename?: 'IdentityUserQuery';
  Find?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByRole?: Maybe<ProtoIoRestorecommerceUserUserListResponse>;
  FindByToken?: Maybe<ProtoIoRestorecommerceUserUserResponse>;
  Read?: Maybe<ProtoIoRestorecommerceUserUserListWithRoleResponse>;
};


export type IdentityUserQueryFindArgs = {
  input: IIoRestorecommerceUserFindRequest;
};


export type IdentityUserQueryFindByRoleArgs = {
  input: IIoRestorecommerceUserFindByRoleRequest;
};


export type IdentityUserQueryFindByTokenArgs = {
  input: IIoRestorecommerceUserFindByTokenRequest;
};


export type IdentityUserQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type InvoicingInvoiceMutation = {
  __typename?: 'InvoicingInvoiceMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  GenerateInvoiceNumber?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceNumberResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Render?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Send?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
};


export type InvoicingInvoiceMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type InvoicingInvoiceMutationGenerateInvoiceNumberArgs = {
  input: IIoRestorecommerceInvoiceRequestInvoiceNumber;
};


export type InvoicingInvoiceMutationMutateArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingInvoiceMutationRenderArgs = {
  input: IIoRestorecommerceInvoiceInvoiceList;
};


export type InvoicingInvoiceMutationSendArgs = {
  input: IIoRestorecommerceInvoiceInvoiceIdList;
};


export type InvoicingInvoiceMutationWithdrawArgs = {
  input: IIoRestorecommerceInvoiceInvoiceIdList;
};

export type InvoicingInvoiceQuery = {
  __typename?: 'InvoicingInvoiceQuery';
  Read?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
};


export type InvoicingInvoiceQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type InvoicingMutation = {
  __typename?: 'InvoicingMutation';
  invoice: InvoicingInvoiceMutation;
};

export type InvoicingQuery = {
  __typename?: 'InvoicingQuery';
  invoice: InvoicingInvoiceQuery;
};

export type IoRestorecommerceAccessControlResponse = {
  __typename?: 'IoRestorecommerceAccessControlResponse';
  decision?: Maybe<IoRestorecommerceAccessControlResponseDecision>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export enum IoRestorecommerceAccessControlResponseDecision {
  Deny = 'DENY',
  Indeterminate = 'INDETERMINATE',
  NotApplicable = 'NOT_APPLICABLE',
  Permit = 'PERMIT'
}

export type IoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'IoRestorecommerceAccessControlReverseQuery';
  obligations?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  policySets?: Maybe<Array<IoRestorecommercePolicySetPolicySetRq>>;
};

export type IoRestorecommerceAddressAddress = {
  __typename?: 'IoRestorecommerceAddressAddress';
  addressAddition?: Maybe<IoRestorecommerceAddressAddressAddition>;
  altitude?: Maybe<Scalars['Float']>;
  buildingNumber?: Maybe<Scalars['String']>;
  businessAddress?: Maybe<IoRestorecommerceAddressBusinessAddress>;
  country?: Maybe<IoRestorecommerceCountryCountry>;
  countryId?: Maybe<Scalars['String']>;
  geoCoordinates?: Maybe<IoRestorecommerceAddressGeoPoint>;
  id?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  packStation?: Maybe<IoRestorecommerceAddressPackStation>;
  postcode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  residentialAddress?: Maybe<IoRestorecommerceAddressResidentialAddress>;
  street?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressAddressAddition = {
  __typename?: 'IoRestorecommerceAddressAddressAddition';
  field1?: Maybe<Scalars['String']>;
  field2?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressAddressListResponse = {
  __typename?: 'IoRestorecommerceAddressAddressListResponse';
  items?: Maybe<Array<IoRestorecommerceAddressAddressResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceAddressAddressResponse = {
  __typename?: 'IoRestorecommerceAddressAddressResponse';
  payload?: Maybe<IoRestorecommerceAddressAddress>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceAddressBillingAddress = {
  __typename?: 'IoRestorecommerceAddressBillingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  comments?: Maybe<Scalars['String']>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
};

export type IoRestorecommerceAddressBusinessAddress = {
  __typename?: 'IoRestorecommerceAddressBusinessAddress';
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressContact = {
  __typename?: 'IoRestorecommerceAddressContact';
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressGeoPoint = {
  __typename?: 'IoRestorecommerceAddressGeoPoint';
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceAddressPackStation = {
  __typename?: 'IoRestorecommerceAddressPackStation';
  postNumber?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  stationNumber?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressResidentialAddress = {
  __typename?: 'IoRestorecommerceAddressResidentialAddress';
  familyName?: Maybe<Scalars['String']>;
  givenName?: Maybe<Scalars['String']>;
  midName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAddressShippingAddress = {
  __typename?: 'IoRestorecommerceAddressShippingAddress';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  comments?: Maybe<Scalars['String']>;
  contact?: Maybe<IoRestorecommerceAddressContact>;
};

export type IoRestorecommerceAmountAmount = {
  __typename?: 'IoRestorecommerceAmountAmount';
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
  currencyId?: Maybe<Scalars['String']>;
  gross?: Maybe<Scalars['Float']>;
  net?: Maybe<Scalars['Float']>;
  vats?: Maybe<Array<IoRestorecommerceAmountVat>>;
};

export type IoRestorecommerceAmountVat = {
  __typename?: 'IoRestorecommerceAmountVAT';
  tax?: Maybe<IoRestorecommerceTaxTax>;
  taxId?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceAttributeAttribute = {
  __typename?: 'IoRestorecommerceAttributeAttribute';
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthRoleAssociation = {
  __typename?: 'IoRestorecommerceAuthRoleAssociation';
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  created?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthTokens = {
  __typename?: 'IoRestorecommerceAuthTokens';
  clientId?: Maybe<Scalars['String']>;
  expiresIn?: Maybe<Scalars['DateTime']>;
  interactive?: Maybe<Scalars['Boolean']>;
  lastLogin?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  scopes?: Maybe<Array<Scalars['String']>>;
  token?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLog = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLog';
  activity?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  ipv4Address?: Maybe<Scalars['String']>;
  ipv6Address?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  operatingSystem?: Maybe<Scalars['String']>;
  subjectId?: Maybe<Scalars['String']>;
  tokenName?: Maybe<Scalars['String']>;
  userAgent?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  items?: Maybe<Array<IoRestorecommerceAuthenticationLogAuthenticationLogResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceAuthenticationLogAuthenticationLogResponse = {
  __typename?: 'IoRestorecommerceAuthenticationLogAuthenticationLogResponse';
  payload?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLog>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCommandCommand = {
  __typename?: 'IoRestorecommerceCommandCommand';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parameters?: Maybe<Array<IoRestorecommerceCommandCommandParameter>>;
};

export type IoRestorecommerceCommandCommandListResponse = {
  __typename?: 'IoRestorecommerceCommandCommandListResponse';
  items?: Maybe<Array<IoRestorecommerceCommandCommandResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceCommandCommandParameter = {
  __typename?: 'IoRestorecommerceCommandCommandParameter';
  description?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  properties?: Maybe<Scalars['String']>;
  type?: Maybe<IoRestorecommerceCommandCommandParameterParameterType>;
};

export enum IoRestorecommerceCommandCommandParameterParameterType {
  ArrayValue = 'array_value',
  BooleanValue = 'boolean_value',
  NumberValue = 'number_value',
  ObjectValue = 'object_value',
  StringValue = 'string_value'
}

export type IoRestorecommerceCommandCommandResponse = {
  __typename?: 'IoRestorecommerceCommandCommandResponse';
  payload?: Maybe<IoRestorecommerceCommandCommand>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceContactPointContactPoint = {
  __typename?: 'IoRestorecommerceContactPointContactPoint';
  contactPointType?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointType>>;
  contactPointTypeIds?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  localeId?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  physicalAddress?: Maybe<IoRestorecommerceAddressAddress>;
  physicalAddressId?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointContactPointResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceContactPointContactPointResponse = {
  __typename?: 'IoRestorecommerceContactPointContactPointResponse';
  payload?: Maybe<IoRestorecommerceContactPointContactPoint>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceContactPointTypeContactPointType = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointType';
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceContactPointTypeContactPointTypeResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceContactPointTypeContactPointTypeResponse = {
  __typename?: 'IoRestorecommerceContactPointTypeContactPointTypeResponse';
  payload?: Maybe<IoRestorecommerceContactPointTypeContactPointType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCountryCountry = {
  __typename?: 'IoRestorecommerceCountryCountry';
  countryCode?: Maybe<Scalars['String']>;
  economicAreas?: Maybe<Array<Scalars['String']>>;
  geographicalName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCountryCountryListResponse = {
  __typename?: 'IoRestorecommerceCountryCountryListResponse';
  items?: Maybe<Array<IoRestorecommerceCountryCountryResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceCountryCountryResponse = {
  __typename?: 'IoRestorecommerceCountryCountryResponse';
  payload?: Maybe<IoRestorecommerceCountryCountry>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCurrencyCurrency = {
  __typename?: 'IoRestorecommerceCurrencyCurrency';
  countryId?: Maybe<Scalars['String']>;
  customExchangeRates?: Maybe<Array<IoRestorecommerceCurrencyExchangeRate>>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCurrencyExchangeRate = {
  __typename?: 'IoRestorecommerceCurrencyExchangeRate';
  amount?: Maybe<Scalars['Float']>;
  expenses?: Maybe<Scalars['Float']>;
  rate?: Maybe<Scalars['Float']>;
  toCurrencyId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCustomerCommercial = {
  __typename?: 'IoRestorecommerceCustomerCommercial';
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCustomerCustomer = {
  __typename?: 'IoRestorecommerceCustomerCustomer';
  commercial?: Maybe<IoRestorecommerceCustomerCommercial>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  private?: Maybe<IoRestorecommerceCustomerPrivate>;
  publicSector?: Maybe<IoRestorecommerceCustomerPublicSector>;
};

export type IoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerListResponse';
  items?: Maybe<Array<IoRestorecommerceCustomerCustomerResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceCustomerCustomerResponse = {
  __typename?: 'IoRestorecommerceCustomerCustomerResponse';
  payload?: Maybe<IoRestorecommerceCustomerCustomer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceCustomerPrivate = {
  __typename?: 'IoRestorecommerceCustomerPrivate';
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceCustomerPublicSector = {
  __typename?: 'IoRestorecommerceCustomerPublicSector';
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFileFile = {
  __typename?: 'IoRestorecommerceFileFile';
  bytes?: Maybe<Scalars['Int']>;
  caption?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Scalars['String']>>;
  thumbnail?: Maybe<IoRestorecommerceImageImage>;
  url?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFilterFilter = {
  __typename?: 'IoRestorecommerceFilterFilter';
  field?: Maybe<Scalars['String']>;
  filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
  operation?: Maybe<IoRestorecommerceFilterFilterOperation>;
  type?: Maybe<IoRestorecommerceFilterFilterValueType>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFilterFilterOp = {
  __typename?: 'IoRestorecommerceFilterFilterOp';
  filters?: Maybe<Array<IoRestorecommerceFilterFilter>>;
  operator?: Maybe<IoRestorecommerceFilterFilterOpOperator>;
};

export enum IoRestorecommerceFilterFilterOpOperator {
  And = 'and',
  Or = 'or'
}

export enum IoRestorecommerceFilterFilterOperation {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  ILike = 'iLike',
  In = 'in',
  IsEmpty = 'isEmpty',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq'
}

export enum IoRestorecommerceFilterFilterValueType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export type IoRestorecommerceFulfillmentCourierFulfillmentCourier = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourier';
  configuration?: Maybe<GoogleProtobufAny>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  shopIds?: Maybe<Array<Scalars['String']>>;
  shops?: Maybe<Array<IoRestorecommerceShopShop>>;
  stubType?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse = {
  __typename?: 'IoRestorecommerceFulfillmentCourierFulfillmentCourierResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentEvent = {
  __typename?: 'IoRestorecommerceFulfillmentEvent';
  details?: Maybe<GoogleProtobufAny>;
  location?: Maybe<Scalars['String']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type IoRestorecommerceFulfillmentFulfillment = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillment';
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  customerId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  labels?: Maybe<Array<IoRestorecommerceFulfillmentLabel>>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  packaging?: Maybe<IoRestorecommerceFulfillmentPackaging>;
  references?: Maybe<Array<IoRestorecommerceReferenceReference>>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  trackings?: Maybe<Array<IoRestorecommerceFulfillmentTracking>>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentFulfillmentListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceFulfillmentFulfillmentResponse = {
  __typename?: 'IoRestorecommerceFulfillmentFulfillmentResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentFulfillment>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentItem = {
  __typename?: 'IoRestorecommerceFulfillmentItem';
  package?: Maybe<IoRestorecommerceProductPackage>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentLabel = {
  __typename?: 'IoRestorecommerceFulfillmentLabel';
  parcelId?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  png?: Maybe<Scalars['String']>;
  shipmentNumber?: Maybe<Scalars['String']>;
  state?: Maybe<IoRestorecommerceFulfillmentState>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
  url?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentPackaging = {
  __typename?: 'IoRestorecommerceFulfillmentPackaging';
  exportDescription?: Maybe<Scalars['String']>;
  exportType?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  notify?: Maybe<Scalars['String']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  recipient?: Maybe<IoRestorecommerceAddressShippingAddress>;
  sender?: Maybe<IoRestorecommerceAddressShippingAddress>;
};

export type IoRestorecommerceFulfillmentParcel = {
  __typename?: 'IoRestorecommerceFulfillmentParcel';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceFulfillmentItem>>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProduct = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProduct';
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  courier?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourier>;
  courierId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  destinationZones?: Maybe<Array<Scalars['String']>>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  startZones?: Maybe<Array<Scalars['String']>>;
  taxIds?: Maybe<Array<Scalars['String']>>;
  variants?: Maybe<Array<IoRestorecommerceFulfillmentProductVariant>>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProductListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentProductFulfillmentProductResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceFulfillmentProductFulfillmentProductResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductFulfillmentProductResponse';
  payload?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentProductPackingSolution = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolution';
  amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  compactness?: Maybe<Scalars['Float']>;
  homogeneity?: Maybe<Scalars['Float']>;
  parcels?: Maybe<Array<IoRestorecommerceFulfillmentParcel>>;
  score?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceFulfillmentProductPackingSolutionListResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  items?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolutionResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceFulfillmentProductPackingSolutionResponse = {
  __typename?: 'IoRestorecommerceFulfillmentProductPackingSolutionResponse';
  reference?: Maybe<IoRestorecommerceReferenceReference>;
  solutions?: Maybe<Array<IoRestorecommerceFulfillmentProductPackingSolution>>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceFulfillmentProductPreferences = {
  __typename?: 'IoRestorecommerceFulfillmentProductPreferences';
  couriers?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  options?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceFulfillmentProductVariant = {
  __typename?: 'IoRestorecommerceFulfillmentProductVariant';
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  maxSize?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  maxWeight?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
};

export enum IoRestorecommerceFulfillmentState {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Failed = 'FAILED',
  Fulfilled = 'FULFILLED',
  Invalid = 'INVALID',
  InTransit = 'IN_TRANSIT',
  Submitted = 'SUBMITTED',
  Withdrawn = 'WITHDRAWN'
}

export type IoRestorecommerceFulfillmentTracking = {
  __typename?: 'IoRestorecommerceFulfillmentTracking';
  details?: Maybe<GoogleProtobufAny>;
  events?: Maybe<Array<IoRestorecommerceFulfillmentEvent>>;
  shipmentNumber?: Maybe<Scalars['String']>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceGeometryBoundingBox3D = {
  __typename?: 'IoRestorecommerceGeometryBoundingBox3D';
  height?: Maybe<Scalars['Float']>;
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceImageImage = {
  __typename?: 'IoRestorecommerceImageImage';
  caption?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['String']>;
  index?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Float']>;
  tags?: Maybe<Array<Scalars['String']>>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceInvoiceFulfillmentItem = {
  __typename?: 'IoRestorecommerceInvoiceFulfillmentItem';
  product?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceInvoiceInvoice = {
  __typename?: 'IoRestorecommerceInvoiceInvoice';
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  customerId?: Maybe<Scalars['String']>;
  documents?: Maybe<Array<IoRestorecommerceFileFile>>;
  fromDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  invoiceNumber?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentHints?: Maybe<Array<Scalars['String']>>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  recipient?: Maybe<IoRestorecommerceAddressBillingAddress>;
  references?: Maybe<Array<IoRestorecommerceReferenceReference>>;
  sections?: Maybe<Array<IoRestorecommerceInvoiceSection>>;
  sender?: Maybe<IoRestorecommerceAddressBillingAddress>;
  sent?: Maybe<Scalars['Boolean']>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  toDate?: Maybe<Scalars['DateTime']>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
  withdrawn?: Maybe<Scalars['Boolean']>;
};

export type IoRestorecommerceInvoiceInvoiceListResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceListResponse';
  items?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceInvoiceInvoiceNumberResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceNumberResponse';
  invoiceNumber?: Maybe<Scalars['String']>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceInvoiceInvoiceResponse = {
  __typename?: 'IoRestorecommerceInvoiceInvoiceResponse';
  payload?: Maybe<IoRestorecommerceInvoiceInvoice>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceInvoiceManualItem = {
  __typename?: 'IoRestorecommerceInvoiceManualItem';
  descritpion?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
};

export enum IoRestorecommerceInvoicePaymentState {
  Payed = 'PAYED',
  Unpayed = 'UNPAYED'
}

export type IoRestorecommerceInvoicePosition = {
  __typename?: 'IoRestorecommerceInvoicePosition';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  attributes?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  contractStartDate?: Maybe<Scalars['Float']>;
  fulfillmentItem?: Maybe<IoRestorecommerceInvoiceFulfillmentItem>;
  id?: Maybe<Scalars['String']>;
  manualItem?: Maybe<IoRestorecommerceInvoiceManualItem>;
  productItem?: Maybe<IoRestorecommerceInvoiceProductItem>;
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<IoRestorecommercePricePrice>;
};

export type IoRestorecommerceInvoiceProductItem = {
  __typename?: 'IoRestorecommerceInvoiceProductItem';
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceInvoiceSection = {
  __typename?: 'IoRestorecommerceInvoiceSection';
  amounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  customerRemark?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  positions?: Maybe<Array<IoRestorecommerceInvoicePosition>>;
};

export type IoRestorecommerceJobBackoff = {
  __typename?: 'IoRestorecommerceJobBackoff';
  delay?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceJobBackoffType>;
};

export enum IoRestorecommerceJobBackoffType {
  Exponential = 'EXPONENTIAL',
  Fixed = 'FIXED'
}

export type IoRestorecommerceJobData = {
  __typename?: 'IoRestorecommerceJobData';
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  payload?: Maybe<GoogleProtobufAny>;
  subjectId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceJobJob = {
  __typename?: 'IoRestorecommerceJobJob';
  data?: Maybe<IoRestorecommerceJobData>;
  id?: Maybe<Scalars['String']>;
  options?: Maybe<IoRestorecommerceJobJobOptions>;
  queueName?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  when?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceJobJobListResponse = {
  __typename?: 'IoRestorecommerceJobJobListResponse';
  items?: Maybe<Array<IoRestorecommerceJobJobResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceJobJobOptions = {
  __typename?: 'IoRestorecommerceJobJobOptions';
  attempts?: Maybe<Scalars['Int']>;
  backoff?: Maybe<IoRestorecommerceJobBackoff>;
  jobId?: Maybe<Scalars['String']>;
  priority?: Maybe<IoRestorecommerceJobJobOptionsPriority>;
  removeOnComplete?: Maybe<Scalars['Boolean']>;
  repeat?: Maybe<IoRestorecommerceJobRepeat>;
  timeout?: Maybe<Scalars['Int']>;
};

export enum IoRestorecommerceJobJobOptionsPriority {
  Critical = 'CRITICAL',
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM',
  Normal = 'NORMAL'
}

export enum IoRestorecommerceJobJobReadRequestSortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
  Unsorted = 'UNSORTED'
}

export type IoRestorecommerceJobJobResponse = {
  __typename?: 'IoRestorecommerceJobJobResponse';
  payload?: Maybe<IoRestorecommerceJobJob>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceJobRepeat = {
  __typename?: 'IoRestorecommerceJobRepeat';
  count?: Maybe<Scalars['Int']>;
  cron?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  every?: Maybe<Scalars['Int']>;
  jobId?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  tz?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceLocaleLocale = {
  __typename?: 'IoRestorecommerceLocaleLocale';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleListResponse';
  items?: Maybe<Array<IoRestorecommerceLocaleLocaleResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceLocaleLocaleResponse = {
  __typename?: 'IoRestorecommerceLocaleLocaleResponse';
  payload?: Maybe<IoRestorecommerceLocaleLocale>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceLocationLocation = {
  __typename?: 'IoRestorecommerceLocationLocation';
  address?: Maybe<IoRestorecommerceAddressAddress>;
  addressId?: Maybe<Scalars['String']>;
  data?: Maybe<GoogleProtobufAny>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceLocationLocation>;
  parentId?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceLocationLocationListResponse = {
  __typename?: 'IoRestorecommerceLocationLocationListResponse';
  items?: Maybe<Array<IoRestorecommerceLocationLocationResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceLocationLocationResponse = {
  __typename?: 'IoRestorecommerceLocationLocationResponse';
  payload?: Maybe<IoRestorecommerceLocationLocation>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceManufacturerManufacturer = {
  __typename?: 'IoRestorecommerceManufacturerManufacturer';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerListResponse';
  items?: Maybe<Array<IoRestorecommerceManufacturerManufacturerResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceManufacturerManufacturerResponse = {
  __typename?: 'IoRestorecommerceManufacturerManufacturerResponse';
  payload?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceMetaMeta = {
  __typename?: 'IoRestorecommerceMetaMeta';
  acls?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  created?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<Scalars['String']>;
  modified?: Maybe<Scalars['DateTime']>;
  modifiedBy?: Maybe<Scalars['String']>;
  owners?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceNotificationNotification = {
  __typename?: 'IoRestorecommerceNotificationNotification';
  bodyTemplate?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  notificationChannelIds?: Maybe<Array<Scalars['String']>>;
  subjectTemplate?: Maybe<Scalars['String']>;
  telephoneNumber?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceNotificationNotificationListResponse = {
  __typename?: 'IoRestorecommerceNotificationNotificationListResponse';
  items?: Maybe<Array<IoRestorecommerceNotificationNotificationResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceNotificationNotificationResponse = {
  __typename?: 'IoRestorecommerceNotificationNotificationResponse';
  items?: Maybe<IoRestorecommerceNotificationNotification>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOauthExchangeCodeResponse = {
  __typename?: 'IoRestorecommerceOauthExchangeCodeResponse';
  email?: Maybe<Scalars['String']>;
  token?: Maybe<IoRestorecommerceAuthTokens>;
  user?: Maybe<IoRestorecommerceUserUserResponse>;
};

export type IoRestorecommerceOauthGenerateLinksResponse = {
  __typename?: 'IoRestorecommerceOauthGenerateLinksResponse';
  links?: Maybe<Scalars['MapScalar']>;
};

export type IoRestorecommerceOauthGetTokenResponse = {
  __typename?: 'IoRestorecommerceOauthGetTokenResponse';
  status?: Maybe<IoRestorecommerceStatusStatus>;
  token?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOauthServicesResponse = {
  __typename?: 'IoRestorecommerceOauthServicesResponse';
  services?: Maybe<Array<Scalars['String']>>;
};

export enum IoRestorecommerceOrderFulfillmentInvoiceMode {
  Exclude = 'EXCLUDE',
  Include = 'INCLUDE'
}

export type IoRestorecommerceOrderItem = {
  __typename?: 'IoRestorecommerceOrderItem';
  amount?: Maybe<IoRestorecommerceAmountAmount>;
  id?: Maybe<Scalars['String']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  unitPrice?: Maybe<IoRestorecommercePricePrice>;
  variantId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOrderOrder = {
  __typename?: 'IoRestorecommerceOrderOrder';
  billingAddress?: Maybe<IoRestorecommerceAddressBillingAddress>;
  customer?: Maybe<IoRestorecommerceCustomerCustomer>;
  customerId?: Maybe<Scalars['String']>;
  customerOrderNr?: Maybe<Scalars['String']>;
  customerRemark?: Maybe<Scalars['String']>;
  fulfillmentState?: Maybe<IoRestorecommerceFulfillmentState>;
  id?: Maybe<Scalars['String']>;
  items?: Maybe<Array<IoRestorecommerceOrderItem>>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  notificationEmail?: Maybe<Scalars['String']>;
  orderState?: Maybe<IoRestorecommerceOrderOrderState>;
  packagingPreferences?: Maybe<IoRestorecommerceFulfillmentProductPreferences>;
  paymentState?: Maybe<IoRestorecommerceInvoicePaymentState>;
  shippingAddress?: Maybe<IoRestorecommerceAddressShippingAddress>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  totalAmounts?: Maybe<Array<IoRestorecommerceAmountAmount>>;
  user?: Maybe<IoRestorecommerceUserUser>;
  userId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOrderOrderListResponse = {
  __typename?: 'IoRestorecommerceOrderOrderListResponse';
  items?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceOrderOrderResponse = {
  __typename?: 'IoRestorecommerceOrderOrderResponse';
  payload?: Maybe<IoRestorecommerceOrderOrder>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export enum IoRestorecommerceOrderOrderState {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Done = 'DONE',
  Failed = 'FAILED',
  Invalid = 'INVALID',
  InProcess = 'IN_PROCESS',
  Submitted = 'SUBMITTED',
  Withdrawn = 'WITHDRAWN'
}

export type IoRestorecommerceOrderOrderSubmitListResponse = {
  __typename?: 'IoRestorecommerceOrderOrderSubmitListResponse';
  fulfillments?: Maybe<Array<IoRestorecommerceFulfillmentFulfillmentResponse>>;
  invoices?: Maybe<Array<IoRestorecommerceInvoiceInvoiceResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  orders?: Maybe<Array<IoRestorecommerceOrderOrderResponse>>;
};

export type IoRestorecommerceOrganizationOrganization = {
  __typename?: 'IoRestorecommerceOrganizationOrganization';
  contactPointIds?: Maybe<Array<Scalars['String']>>;
  contactPoints?: Maybe<Array<IoRestorecommerceContactPointContactPoint>>;
  data?: Maybe<GoogleProtobufAny>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  isicV4?: Maybe<Scalars['String']>;
  logo?: Maybe<IoRestorecommerceImageImage>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceOrganizationOrganization>;
  parentId?: Maybe<Scalars['String']>;
  paymentMethodIds?: Maybe<Array<Scalars['String']>>;
  paymentMethods?: Maybe<Array<IoRestorecommercePaymentMethodPaymentMethod>>;
  registration?: Maybe<Scalars['String']>;
  registrationCourt?: Maybe<Scalars['String']>;
  vatId?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationListResponse';
  items?: Maybe<Array<IoRestorecommerceOrganizationOrganizationResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceOrganizationOrganizationResponse = {
  __typename?: 'IoRestorecommerceOrganizationOrganizationResponse';
  payload?: Maybe<IoRestorecommerceOrganizationOrganization>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageCopyResponseItem = {
  __typename?: 'IoRestorecommerceOstorageCopyResponseItem';
  bucket?: Maybe<Scalars['String']>;
  copySource?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
};

export type IoRestorecommerceOstorageCopyResponseList = {
  __typename?: 'IoRestorecommerceOstorageCopyResponseList';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<Array<IoRestorecommerceOstorageCopyResponsePayloadWithStatus>>;
};

export type IoRestorecommerceOstorageCopyResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageCopyResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageCopyResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageListResponse = {
  __typename?: 'IoRestorecommerceOstorageListResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<Array<IoRestorecommerceOstorageObjectsDataWithPayloadStatus>>;
};

export type IoRestorecommerceOstorageMoveResponseItem = {
  __typename?: 'IoRestorecommerceOstorageMoveResponseItem';
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
  sourceObject?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOstorageMoveResponseList = {
  __typename?: 'IoRestorecommerceOstorageMoveResponseList';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  responses?: Maybe<Array<IoRestorecommerceOstorageMoveResponsePayloadWithStatus>>;
};

export type IoRestorecommerceOstorageMoveResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageMoveResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageMoveResponseItem>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageObjectData = {
  __typename?: 'IoRestorecommerceOstorageObjectData';
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  objectName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOstorageObjectResponse = {
  __typename?: 'IoRestorecommerceOstorageObjectResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  response?: Maybe<IoRestorecommerceOstorageObjectResponsePayloadWithStatus>;
};

export type IoRestorecommerceOstorageObjectResponsePayload = {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayload';
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  object?: Maybe<Scalars['TodoScalar']>;
  options?: Maybe<IoRestorecommerceOstorageOptions>;
  url?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOstorageObjectResponsePayloadWithStatus = {
  __typename?: 'IoRestorecommerceOstorageObjectResponsePayloadWithStatus';
  payload?: Maybe<IoRestorecommerceOstorageObjectResponsePayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageObjectsDataWithPayloadStatus = {
  __typename?: 'IoRestorecommerceOstorageObjectsDataWithPayloadStatus';
  payload?: Maybe<IoRestorecommerceOstorageObjectData>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageOptions = {
  __typename?: 'IoRestorecommerceOstorageOptions';
  contentDisposition?: Maybe<Scalars['String']>;
  contentLanguage?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  data?: Maybe<GoogleProtobufAny>;
  encoding?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  md5?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  version?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceOstoragePutResponse = {
  __typename?: 'IoRestorecommerceOstoragePutResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  response?: Maybe<IoRestorecommerceOstoragePutResponseWithPayloadStatus>;
};

export type IoRestorecommerceOstoragePutResponseWithPayloadStatus = {
  __typename?: 'IoRestorecommerceOstoragePutResponseWithPayloadStatus';
  payload?: Maybe<IoRestorecommerceOstorageResponse>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceOstorageResponse = {
  __typename?: 'IoRestorecommerceOstorageResponse';
  bucket?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Int']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  tags?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  url?: Maybe<Scalars['String']>;
};

export type IoRestorecommercePaymentMethodPaymentMethod = {
  __typename?: 'IoRestorecommercePaymentMethodPaymentMethod';
  data?: Maybe<GoogleProtobufAny>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  paymentMethod?: Maybe<IoRestorecommercePaymentMethodPaymentMethodEnum>;
  transferType?: Maybe<IoRestorecommercePaymentMethodTransferTypeEnum>;
};

export enum IoRestorecommercePaymentMethodPaymentMethodEnum {
  DirectDebit = 'DIRECT_DEBIT',
  Paypal = 'PAYPAL',
  WireTransfer = 'WIRE_TRANSFER'
}

export enum IoRestorecommercePaymentMethodTransferTypeEnum {
  Both = 'BOTH',
  Receive = 'RECEIVE',
  Send = 'SEND'
}

export type IoRestorecommercePaymentPaymentPayload = {
  __typename?: 'IoRestorecommercePaymentPaymentPayload';
  executedOn?: Maybe<Scalars['String']>;
  paymentId?: Maybe<Scalars['String']>;
};

export type IoRestorecommercePaymentPaymentPayloadStatus = {
  __typename?: 'IoRestorecommercePaymentPaymentPayloadStatus';
  payload?: Maybe<IoRestorecommercePaymentPaymentPayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePaymentPaymentResponse = {
  __typename?: 'IoRestorecommercePaymentPaymentResponse';
  item?: Maybe<IoRestorecommercePaymentPaymentPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export enum IoRestorecommercePaymentProvider {
  Adyen = 'Adyen',
  AuthorizeNet = 'AuthorizeNet',
  AuthorizeNetCim = 'AuthorizeNetCIM',
  AxcessMs = 'AxcessMS',
  BbsNetaxept = 'BBSNetaxept',
  Balanced = 'Balanced',
  BamboraAsiaPacific = 'BamboraAsiaPacific',
  BankFrick = 'BankFrick',
  Banwire = 'Banwire',
  BarclaysePdqExtraPlus = 'BarclaysePDQExtraPlus',
  Be2Bill = 'Be2Bill',
  Beanstreamcom = 'Beanstreamcom',
  BluePay = 'BluePay',
  Borgun = 'Borgun',
  Braintree = 'Braintree',
  BridgePay = 'BridgePay',
  CamsCentralAccountManagementSystem = 'CAMSCentralAccountManagementSystem',
  CardSave = 'CardSave',
  CardStream = 'CardStream',
  Cardknox = 'Cardknox',
  Cashnet = 'Cashnet',
  Cecabank = 'Cecabank',
  Cenpos = 'Cenpos',
  Checkoutcom = 'Checkoutcom',
  Clearhaus = 'Clearhaus',
  Commercegate = 'Commercegate',
  Conekta = 'Conekta',
  CyberSource = 'CyberSource',
  Dibs = 'DIBS',
  DataCash = 'DataCash',
  EvoCanada = 'EVOCanada',
  Efsnet = 'Efsnet',
  ElavonMyVirtualMerchant = 'ElavonMyVirtualMerchant',
  Exact = 'Exact',
  Ezic = 'Ezic',
  FatZebra = 'FatZebra',
  FederatedCanada = 'FederatedCanada',
  FinansbankWebPos = 'FinansbankWebPOS',
  FirstDataGlobalGatewaye4 = 'FirstDataGlobalGatewaye4',
  FirstGiving = 'FirstGiving',
  Flo2Cash = 'Flo2Cash',
  GarantiSanalPos = 'GarantiSanalPOS',
  GlobalTransport = 'GlobalTransport',
  Hdfc = 'HDFC',
  HeartlandPaymentSystems = 'HeartlandPaymentSystems',
  Ipp = 'IPP',
  InspireCommerce = 'InspireCommerce',
  InstaPay = 'InstaPay',
  Iridium = 'Iridium',
  JetPay = 'JetPay',
  Komoju = 'Komoju',
  LinkPoint = 'LinkPoint',
  LitleCo = 'LitleCo',
  Monei = 'MONEI',
  MasterCardInternetGatewayServiceMiGs = 'MasterCardInternetGatewayServiceMiGS',
  MerchantOneGateway = 'MerchantOneGateway',
  MerchantWare = 'MerchantWARE',
  MerchantWarrior = 'MerchantWarrior',
  MerchanteSolutions = 'MerchanteSolutions',
  Mercury = 'Mercury',
  MetricsGlobal = 'MetricsGlobal',
  ModernPayments = 'ModernPayments',
  Moneris = 'Moneris',
  MoneyMovers = 'MoneyMovers',
  NabTransact = 'NABTransact',
  NeLiXTransaX = 'NELiXTransaX',
  NetpayGateway = 'NETPAYGateway',
  NeTbilling = 'NETbilling',
  Nmi = 'NMI',
  NoProvider = 'NO_PROVIDER',
  NetRegistry = 'NetRegistry',
  Ogone = 'Ogone',
  Omise = 'Omise',
  Openpay = 'Openpay',
  OptimalPayments = 'OptimalPayments',
  OrbitalPaymentech = 'OrbitalPaymentech',
  Paymill = 'PAYMILL',
  PslPaymentSolutions = 'PSLPaymentSolutions',
  Pagarme = 'Pagarme',
  PagoFacil = 'PagoFacil',
  PayConex = 'PayConex',
  PayGatePayXml = 'PayGatePayXML',
  PayHub = 'PayHub',
  PayJunction = 'PayJunction',
  PayPalExpressCheckout = 'PayPalExpressCheckout',
  PayPalExpressCheckoutUk = 'PayPalExpressCheckoutUK',
  PayPalExpressCheckoutforDigitalGoods = 'PayPalExpressCheckoutforDigitalGoods',
  PayPalPayflowPro = 'PayPalPayflowPro',
  PayPalPaymentsProUk = 'PayPalPaymentsProUK',
  PayPalPaymentsProUs = 'PayPalPaymentsProUS',
  PayPalWebsitePaymentsProCa = 'PayPalWebsitePaymentsProCA',
  PaySecure = 'PaySecure',
  PayUIndia = 'PayUIndia',
  PayWay = 'PayWay',
  PayboxDirect = 'PayboxDirect',
  Payeezy = 'Payeezy',
  Payex = 'Payex',
  PaymentExpress = 'PaymentExpress',
  Payscout = 'Payscout',
  Paystation = 'Paystation',
  PinPayments = 'PinPayments',
  PlugnPay = 'PlugnPay',
  Psigate = 'Psigate',
  QuantumGateway = 'QuantumGateway',
  QuickBooksMerchantServices = 'QuickBooksMerchantServices',
  QuickBooksPayments = 'QuickBooksPayments',
  QuickPay = 'QuickPay',
  Qvalent = 'Qvalent',
  Raven = 'Raven',
  Realex = 'Realex',
  Redsys = 'Redsys',
  S5 = 'S5',
  SagePay = 'SagePay',
  SagePaymentSolutions = 'SagePaymentSolutions',
  SallieMae = 'SallieMae',
  SecureNet = 'SecureNet',
  SecurePay = 'SecurePay',
  SecurePayTech = 'SecurePayTech',
  SecurionPay = 'SecurionPay',
  SkipJack = 'SkipJack',
  SoEasyPay = 'SoEasyPay',
  Spreedly = 'Spreedly',
  Stripe = 'Stripe',
  Swipe = 'Swipe',
  Tns = 'TNS',
  TransFirst = 'TransFirst',
  TransactPro = 'TransactPro',
  Transnational = 'Transnational',
  Trexle = 'Trexle',
  TrustCommerce = 'TrustCommerce',
  UsAePay = 'USAePay',
  VancoPaymentSolutions = 'VancoPaymentSolutions',
  Verifi = 'Verifi',
  ViaKlix = 'ViaKLIX',
  WePay = 'WePay',
  WebPay = 'WebPay',
  Wirecard = 'Wirecard',
  WorldpayGlobal = 'WorldpayGlobal',
  WorldpayOnline = 'WorldpayOnline',
  WorldpayUs = 'WorldpayUS',
  EPay = 'ePay',
  EWay = 'eWAY',
  EWayRapid = 'eWAYRapid',
  IAtsPayments = 'iATSPayments',
  ITransact = 'iTransact',
  MaxiPago = 'maxiPago',
  StPayGatewayNet = 'stPayGatewayNet'
}

export type IoRestorecommercePaymentSetupPayload = {
  __typename?: 'IoRestorecommercePaymentSetupPayload';
  confirmInitiationUrl?: Maybe<Scalars['String']>;
  initiatedOn?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type IoRestorecommercePaymentSetupPayloadStatus = {
  __typename?: 'IoRestorecommercePaymentSetupPayloadStatus';
  payload?: Maybe<IoRestorecommercePaymentSetupPayload>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePaymentSetupResponse = {
  __typename?: 'IoRestorecommercePaymentSetupResponse';
  item?: Maybe<IoRestorecommercePaymentSetupPayloadStatus>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommercePolicyPolicy = {
  __typename?: 'IoRestorecommercePolicyPolicy';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Scalars['String']>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
};

export type IoRestorecommercePolicyPolicyListResponse = {
  __typename?: 'IoRestorecommercePolicyPolicyListResponse';
  items?: Maybe<Array<IoRestorecommercePolicyPolicyResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommercePolicyPolicyRq = {
  __typename?: 'IoRestorecommercePolicyPolicyRQ';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  hasRules?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<IoRestorecommerceRuleRuleRq>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
};

export type IoRestorecommercePolicyPolicyResponse = {
  __typename?: 'IoRestorecommercePolicyPolicyResponse';
  payload?: Maybe<IoRestorecommercePolicyPolicy>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePolicySetPolicySet = {
  __typename?: 'IoRestorecommercePolicySetPolicySet';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<Scalars['String']>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
};

export type IoRestorecommercePolicySetPolicySetListResponse = {
  __typename?: 'IoRestorecommercePolicySetPolicySetListResponse';
  items?: Maybe<Array<IoRestorecommercePolicySetPolicySetResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommercePolicySetPolicySetRq = {
  __typename?: 'IoRestorecommercePolicySetPolicySetRQ';
  combiningAlgorithm?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  id?: Maybe<Scalars['String']>;
  policies?: Maybe<Array<IoRestorecommercePolicyPolicyRq>>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
};

export type IoRestorecommercePolicySetPolicySetResponse = {
  __typename?: 'IoRestorecommercePolicySetPolicySetResponse';
  payload?: Maybe<IoRestorecommercePolicySetPolicySet>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePriceGroupPriceGroup = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroup';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupListResponse';
  items?: Maybe<Array<IoRestorecommercePriceGroupPriceGroupResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommercePriceGroupPriceGroupResponse = {
  __typename?: 'IoRestorecommercePriceGroupPriceGroupResponse';
  payload?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommercePricePrice = {
  __typename?: 'IoRestorecommercePricePrice';
  currency?: Maybe<IoRestorecommerceCurrencyCurrency>;
  currencyId?: Maybe<Scalars['String']>;
  regularPrice?: Maybe<Scalars['Float']>;
  sale?: Maybe<Scalars['Boolean']>;
  salePrice?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceProductAssociation = {
  __typename?: 'IoRestorecommerceProductAssociation';
  data?: Maybe<GoogleProtobufAny>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<IoRestorecommerceProductAssociationType>;
};

export enum IoRestorecommerceProductAssociationType {
  Accessory = 'ACCESSORY',
  Miscellaneous = 'MISCELLANEOUS',
  Recommendation = 'RECOMMENDATION'
}

export type IoRestorecommerceProductBundle = {
  __typename?: 'IoRestorecommerceProductBundle';
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  prePackaged?: Maybe<IoRestorecommerceProductPackage>;
  price?: Maybe<IoRestorecommercePricePrice>;
  products?: Maybe<Array<IoRestorecommerceProductBundleProduct>>;
};

export type IoRestorecommerceProductBundleProduct = {
  __typename?: 'IoRestorecommerceProductBundleProduct';
  priceRatio?: Maybe<Scalars['Float']>;
  product?: Maybe<IoRestorecommerceProductProduct>;
  productId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
  variantId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductCategoryParent = {
  __typename?: 'IoRestorecommerceProductCategoryParent';
  parentId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductCategoryProductCategory = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategory';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  parent?: Maybe<IoRestorecommerceProductCategoryParent>;
  priceGroup?: Maybe<IoRestorecommercePriceGroupPriceGroup>;
  priceGroupId?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse';
  items?: Maybe<Array<IoRestorecommerceProductCategoryProductCategoryResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceProductCategoryProductCategoryResponse = {
  __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse';
  payload?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductIndividualProduct = {
  __typename?: 'IoRestorecommerceProductIndividualProduct';
  category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  categoryId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  gtin?: Maybe<Scalars['String']>;
  manufacturer?: Maybe<IoRestorecommerceManufacturerManufacturer>;
  manufacturerId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  originCountryId?: Maybe<Scalars['String']>;
  origin_country?: Maybe<IoRestorecommerceCountryCountry>;
  physical?: Maybe<IoRestorecommerceProductPhysicalProduct>;
  prototype?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
  prototypeId?: Maybe<Scalars['String']>;
  service?: Maybe<IoRestorecommerceProductServiceProduct>;
  taricCode?: Maybe<Scalars['String']>;
  tax?: Maybe<Array<IoRestorecommerceTaxTax>>;
  taxIds?: Maybe<Array<Scalars['String']>>;
  virtual?: Maybe<IoRestorecommerceProductVirtualProduct>;
};

export type IoRestorecommerceProductPackage = {
  __typename?: 'IoRestorecommerceProductPackage';
  rotatable?: Maybe<Scalars['Boolean']>;
  sizeInCm?: Maybe<IoRestorecommerceGeometryBoundingBox3D>;
  weightInKg?: Maybe<Scalars['Float']>;
};

export type IoRestorecommerceProductPhysicalProduct = {
  __typename?: 'IoRestorecommerceProductPhysicalProduct';
  variants?: Maybe<Array<IoRestorecommerceProductPhysicalVariant>>;
};

export type IoRestorecommerceProductPhysicalVariant = {
  __typename?: 'IoRestorecommerceProductPhysicalVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  package?: Maybe<IoRestorecommerceProductPackage>;
  parentVariantId?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceProductProduct = {
  __typename?: 'IoRestorecommerceProductProduct';
  active?: Maybe<Scalars['Boolean']>;
  associations?: Maybe<Array<IoRestorecommerceProductAssociation>>;
  bundle?: Maybe<IoRestorecommerceProductBundle>;
  data?: Maybe<GoogleProtobufAny>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  product?: Maybe<IoRestorecommerceProductIndividualProduct>;
  shop?: Maybe<IoRestorecommerceShopShop>;
  shopId?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Scalars['String']>>;
};

export type IoRestorecommerceProductProductListResponse = {
  __typename?: 'IoRestorecommerceProductProductListResponse';
  items?: Maybe<Array<IoRestorecommerceProductProductResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceProductProductResponse = {
  __typename?: 'IoRestorecommerceProductProductResponse';
  payload?: Maybe<IoRestorecommerceProductProduct>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductPrototypeProductPrototype = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototype';
  category?: Maybe<IoRestorecommerceProductCategoryProductCategory>;
  categoryId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeListResponse';
  items?: Maybe<Array<IoRestorecommerceProductPrototypeProductPrototypeResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceProductPrototypeProductPrototypeResponse = {
  __typename?: 'IoRestorecommerceProductPrototypeProductPrototypeResponse';
  payload?: Maybe<IoRestorecommerceProductPrototypeProductPrototype>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceProductServiceProduct = {
  __typename?: 'IoRestorecommerceProductServiceProduct';
  variants?: Maybe<Array<IoRestorecommerceProductServiceVariant>>;
};

export type IoRestorecommerceProductServiceVariant = {
  __typename?: 'IoRestorecommerceProductServiceVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  parentVariantId?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceProductVirtualProduct = {
  __typename?: 'IoRestorecommerceProductVirtualProduct';
  variants?: Maybe<Array<IoRestorecommerceProductVirtualVariant>>;
};

export type IoRestorecommerceProductVirtualVariant = {
  __typename?: 'IoRestorecommerceProductVirtualVariant';
  description?: Maybe<Scalars['String']>;
  files?: Maybe<Array<IoRestorecommerceFileFile>>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<IoRestorecommerceImageImage>>;
  name?: Maybe<Scalars['String']>;
  parentVariantId?: Maybe<Scalars['String']>;
  price?: Maybe<IoRestorecommercePricePrice>;
  properties?: Maybe<Array<IoRestorecommercePropertyProperty>>;
  stockKeepingUnit?: Maybe<Scalars['String']>;
  stockLevel?: Maybe<Scalars['Int']>;
};

export type IoRestorecommercePropertyProperty = {
  __typename?: 'IoRestorecommercePropertyProperty';
  id?: Maybe<Scalars['String']>;
  unitCode?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceReferenceReference = {
  __typename?: 'IoRestorecommerceReferenceReference';
  instanceId?: Maybe<Scalars['String']>;
  instanceType?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'IoRestorecommerceResourcebaseDeleteResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};

export enum IoRestorecommerceResourcebaseFilterOpOperator {
  And = 'and',
  Or = 'or'
}

export enum IoRestorecommerceResourcebaseFilterOperation {
  Eq = 'eq',
  Gt = 'gt',
  Gte = 'gte',
  ILike = 'iLike',
  In = 'in',
  IsEmpty = 'isEmpty',
  Lt = 'lt',
  Lte = 'lte',
  Neq = 'neq'
}

export enum IoRestorecommerceResourcebaseFilterValueType {
  Array = 'ARRAY',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  String = 'STRING'
}

export enum IoRestorecommerceResourcebaseSortSortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
  Unsorted = 'UNSORTED'
}

export type IoRestorecommerceRoleRole = {
  __typename?: 'IoRestorecommerceRoleRole';
  assignableByRoles?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceRoleRoleListResponse = {
  __typename?: 'IoRestorecommerceRoleRoleListResponse';
  items?: Maybe<Array<IoRestorecommerceRoleRoleResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceRoleRoleResponse = {
  __typename?: 'IoRestorecommerceRoleRoleResponse';
  payload?: Maybe<IoRestorecommerceRoleRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceRuleContextQuery = {
  __typename?: 'IoRestorecommerceRuleContextQuery';
  filters?: Maybe<Array<IoRestorecommerceFilterFilterOp>>;
  query?: Maybe<Scalars['String']>;
};

export enum IoRestorecommerceRuleEffect {
  Deny = 'DENY',
  Permit = 'PERMIT'
}

export type IoRestorecommerceRuleRule = {
  __typename?: 'IoRestorecommerceRuleRule';
  condition?: Maybe<Scalars['String']>;
  contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
  description?: Maybe<Scalars['String']>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
};

export type IoRestorecommerceRuleRuleListResponse = {
  __typename?: 'IoRestorecommerceRuleRuleListResponse';
  items?: Maybe<Array<IoRestorecommerceRuleRuleResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceRuleRuleRq = {
  __typename?: 'IoRestorecommerceRuleRuleRQ';
  condition?: Maybe<Scalars['String']>;
  contextQuery?: Maybe<IoRestorecommerceRuleContextQuery>;
  effect?: Maybe<IoRestorecommerceRuleEffect>;
  evaluationCacheable?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  target?: Maybe<IoRestorecommerceRuleTarget>;
};

export type IoRestorecommerceRuleRuleResponse = {
  __typename?: 'IoRestorecommerceRuleRuleResponse';
  payload?: Maybe<IoRestorecommerceRuleRule>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceRuleTarget = {
  __typename?: 'IoRestorecommerceRuleTarget';
  actions?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  resources?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
  subjects?: Maybe<Array<IoRestorecommerceAttributeAttribute>>;
};

export type IoRestorecommerceShopShop = {
  __typename?: 'IoRestorecommerceShopShop';
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<IoRestorecommerceOrganizationOrganization>;
  organizationId?: Maybe<Scalars['String']>;
  shopNumber?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusOperationStatus = {
  __typename?: 'IoRestorecommerceStatusOperationStatus';
  code?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusOperationStatusObj = {
  __typename?: 'IoRestorecommerceStatusOperationStatusObj';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
};

export type IoRestorecommerceStatusStatus = {
  __typename?: 'IoRestorecommerceStatusStatus';
  code?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceStatusStatusListResponse = {
  __typename?: 'IoRestorecommerceStatusStatusListResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  status?: Maybe<Array<IoRestorecommerceStatusStatus>>;
};

export type IoRestorecommerceTaxTax = {
  __typename?: 'IoRestorecommerceTaxTax';
  country?: Maybe<IoRestorecommerceCountryCountry>;
  countryId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  rate?: Maybe<Scalars['Float']>;
  type?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  typeId?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceTaxTaxListResponse = {
  __typename?: 'IoRestorecommerceTaxTaxListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTaxResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceTaxTaxResponse = {
  __typename?: 'IoRestorecommerceTaxTaxResponse';
  payload?: Maybe<IoRestorecommerceTaxTax>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTaxTypeTaxType = {
  __typename?: 'IoRestorecommerceTaxTypeTaxType';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  type?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeListResponse';
  items?: Maybe<Array<IoRestorecommerceTaxTypeTaxTypeResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceTaxTypeTaxTypeResponse = {
  __typename?: 'IoRestorecommerceTaxTypeTaxTypeResponse';
  payload?: Maybe<IoRestorecommerceTaxTypeTaxType>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceTimezoneTimezone = {
  __typename?: 'IoRestorecommerceTimezoneTimezone';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
};

export type IoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneListResponse';
  items?: Maybe<Array<IoRestorecommerceTimezoneTimezoneResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceTimezoneTimezoneResponse = {
  __typename?: 'IoRestorecommerceTimezoneTimezoneResponse';
  payload?: Maybe<IoRestorecommerceTimezoneTimezone>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export enum IoRestorecommerceUnitCodeSector {
  Acoustics = 'ACOUSTICS',
  AtomicAndNuclearPhysics = 'ATOMIC_AND_NUCLEAR_PHYSICS',
  CharacteristicNumbers = 'CHARACTERISTIC_NUMBERS',
  ElectricityAndMagnetism = 'ELECTRICITY_AND_MAGNETISM',
  Heat = 'HEAT',
  LightAndRelatedElectromagneticRadiations = 'LIGHT_AND_RELATED_ELECTROMAGNETIC_RADIATIONS',
  Mechanics = 'MECHANICS',
  Miscellaneous = 'MISCELLANEOUS',
  NuclearReactionsAndIonizingRadiations = 'NUCLEAR_REACTIONS_AND_IONIZING_RADIATIONS',
  PeriodicAndRelatedPhases = 'PERIODIC_AND_RELATED_PHASES',
  PhysicalChemistryAndMolecularPhysics = 'PHYSICAL_CHEMISTRY_AND_MOLECULAR_PHYSICS',
  SolidStatePhysics = 'SOLID_STATE_PHYSICS',
  SpaceAndTime = 'SPACE_AND_TIME',
  Unknown = 'UNKNOWN'
}

export enum IoRestorecommerceUnitCodeStatusCode {
  Added = 'ADDED',
  ChangedCharacteristic = 'CHANGED_CHARACTERISTIC',
  ChangedName = 'CHANGED_NAME',
  Deprecated = 'DEPRECATED',
  MarkedAsDeleted = 'MARKED_AS_DELETED',
  Reinstated = 'REINSTATED'
}

export type IoRestorecommerceUnitCodeUnitCode = {
  __typename?: 'IoRestorecommerceUnitCodeUnitCode';
  commonCode?: Maybe<Scalars['String']>;
  conversionFactor?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  groupNumber?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  levelCategory?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  sector?: Maybe<IoRestorecommerceUnitCodeSector>;
  status?: Maybe<IoRestorecommerceUnitCodeStatusCode>;
  symbol?: Maybe<Scalars['String']>;
};

export type IoRestorecommerceUnitCodeUnitCodeListResponse = {
  __typename?: 'IoRestorecommerceUnitCodeUnitCodeListResponse';
  items?: Maybe<Array<IoRestorecommerceUnitCodeUnitCodeResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceUnitCodeUnitCodeResponse = {
  __typename?: 'IoRestorecommerceUnitCodeUnitCodeResponse';
  payload?: Maybe<IoRestorecommerceUnitCodeUnitCode>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserDeleteUsersByOrgResponse = {
  __typename?: 'IoRestorecommerceUserDeleteUsersByOrgResponse';
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  userIds?: Maybe<Array<Scalars['String']>>;
};

export type IoRestorecommerceUserUser = {
  __typename?: 'IoRestorecommerceUserUser';
  activationCode?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  data?: Maybe<GoogleProtobufAny>;
  defaultScope?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  guest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  invite?: Maybe<Scalars['Boolean']>;
  invitedByUserFirstName?: Maybe<Scalars['String']>;
  invitedByUserLastName?: Maybe<Scalars['String']>;
  invitedByUserName?: Maybe<Scalars['String']>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  localeId?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
};

export type IoRestorecommerceUserUserListResponse = {
  __typename?: 'IoRestorecommerceUserUserListResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceUserUserListWithRoleResponse = {
  __typename?: 'IoRestorecommerceUserUserListWithRoleResponse';
  items?: Maybe<Array<IoRestorecommerceUserUserRoleResponse>>;
  operationStatus?: Maybe<IoRestorecommerceStatusOperationStatus>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IoRestorecommerceUserUserResponse = {
  __typename?: 'IoRestorecommerceUserUserResponse';
  payload?: Maybe<IoRestorecommerceUserUser>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export type IoRestorecommerceUserUserRole = {
  __typename?: 'IoRestorecommerceUserUserRole';
  activationCode?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  data?: Maybe<GoogleProtobufAny>;
  defaultScope?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  guest?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<IoRestorecommerceImageImage>;
  invite?: Maybe<Scalars['Boolean']>;
  invitedByUserFirstName?: Maybe<Scalars['String']>;
  invitedByUserLastName?: Maybe<Scalars['String']>;
  invitedByUserName?: Maybe<Scalars['String']>;
  lastAccess?: Maybe<Scalars['DateTime']>;
  lastName?: Maybe<Scalars['String']>;
  locale?: Maybe<IoRestorecommerceLocaleLocale>;
  localeId?: Maybe<Scalars['String']>;
  meta?: Maybe<IoRestorecommerceMetaMeta>;
  name?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  roleAssociations?: Maybe<Array<IoRestorecommerceAuthRoleAssociation>>;
  roles?: Maybe<Array<IoRestorecommerceRoleRole>>;
  timezone?: Maybe<IoRestorecommerceTimezoneTimezone>;
  timezoneId?: Maybe<Scalars['String']>;
  tokens?: Maybe<Array<IoRestorecommerceAuthTokens>>;
  unauthenticated?: Maybe<Scalars['Boolean']>;
  userType?: Maybe<IoRestorecommerceUserUserType>;
};

export type IoRestorecommerceUserUserRoleResponse = {
  __typename?: 'IoRestorecommerceUserUserRoleResponse';
  payload?: Maybe<IoRestorecommerceUserUserRole>;
  status?: Maybe<IoRestorecommerceStatusStatus>;
};

export enum IoRestorecommerceUserUserType {
  Guest = 'GUEST',
  IndividualUser = 'INDIVIDUAL_USER',
  OrgUser = 'ORG_USER',
  TechnicalUser = 'TECHNICAL_USER'
}

export enum ModeType {
  Create = 'CREATE',
  Update = 'UPDATE',
  Upsert = 'UPSERT'
}

export type Mutation = {
  __typename?: 'Mutation';
  access_control: AccessControlMutation;
  catalog: CatalogMutation;
  fulfillment: FulfillmentMutation;
  identity: IdentityMutation;
  invoicing: InvoicingMutation;
  master_data: ResourceMutation;
  notification: NotificationMutation;
  ordering: OrderingMutation;
  ostorage: OstorageMutation;
  payment: PaymentMutation;
  scheduling: SchedulingMutation;
};

export type NotificationMutation = {
  __typename?: 'NotificationMutation';
  notification: NotificationNotificationMutation;
};

export type NotificationNotificationMutation = {
  __typename?: 'NotificationNotificationMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
};


export type NotificationNotificationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type NotificationNotificationMutationMutateArgs = {
  input: IIoRestorecommerceNotificationNotificationList;
};

export type NotificationNotificationQuery = {
  __typename?: 'NotificationNotificationQuery';
  Read?: Maybe<ProtoIoRestorecommerceNotificationNotificationListResponse>;
};


export type NotificationNotificationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type NotificationQuery = {
  __typename?: 'NotificationQuery';
  notification: NotificationNotificationQuery;
};

export type OrderingMutation = {
  __typename?: 'OrderingMutation';
  order: OrderingOrderMutation;
};

export type OrderingOrderMutation = {
  __typename?: 'OrderingOrderMutation';
  Cancel?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  CreateFulfillment?: Maybe<ProtoIoRestorecommerceFulfillmentFulfillmentListResponse>;
  CreateInvoice?: Maybe<ProtoIoRestorecommerceInvoiceInvoiceListResponse>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Evaluate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
  QueryPackingSolution?: Maybe<ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
  Submit?: Maybe<ProtoIoRestorecommerceOrderOrderSubmitListResponse>;
  TriggerFulfillment?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  TriggerInvoice?: Maybe<ProtoIoRestorecommerceStatusStatusListResponse>;
  Withdraw?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
};


export type OrderingOrderMutationCancelArgs = {
  input: IIoRestorecommerceOrderOrderIdList;
};


export type OrderingOrderMutationCreateFulfillmentArgs = {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
};


export type OrderingOrderMutationCreateInvoiceArgs = {
  input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
};


export type OrderingOrderMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type OrderingOrderMutationEvaluateArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationMutateArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationQueryPackingSolutionArgs = {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
};


export type OrderingOrderMutationSubmitArgs = {
  input: IIoRestorecommerceOrderOrderList;
};


export type OrderingOrderMutationTriggerFulfillmentArgs = {
  input: IIoRestorecommerceOrderFulfillmentRequestList;
};


export type OrderingOrderMutationTriggerInvoiceArgs = {
  input: IIoRestorecommerceOrderOrderingInvoiceRequestList;
};


export type OrderingOrderMutationWithdrawArgs = {
  input: IIoRestorecommerceOrderOrderIdList;
};

export type OrderingOrderQuery = {
  __typename?: 'OrderingOrderQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrderOrderListResponse>;
};


export type OrderingOrderQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type OrderingQuery = {
  __typename?: 'OrderingQuery';
  order: OrderingOrderQuery;
};

export type OstorageMutation = {
  __typename?: 'OstorageMutation';
  object: OstorageObjectMutation;
};

export type OstorageObjectMutation = {
  __typename?: 'OstorageObjectMutation';
  Copy?: Maybe<ProtoIoRestorecommerceOstorageCopyResponseList>;
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Move?: Maybe<ProtoIoRestorecommerceOstorageMoveResponseList>;
  Put?: Maybe<ProtoIoRestorecommerceOstoragePutResponse>;
};


export type OstorageObjectMutationCopyArgs = {
  input: IIoRestorecommerceOstorageCopyRequestList;
};


export type OstorageObjectMutationDeleteArgs = {
  input: IIoRestorecommerceOstorageDeleteRequest;
};


export type OstorageObjectMutationMoveArgs = {
  input: IIoRestorecommerceOstorageMoveRequestList;
};


export type OstorageObjectMutationPutArgs = {
  input: IIoRestorecommerceOstorageObject;
};

export type OstorageObjectQuery = {
  __typename?: 'OstorageObjectQuery';
  Get?: Maybe<ProtoIoRestorecommerceOstorageObjectResponse>;
  List?: Maybe<ProtoIoRestorecommerceOstorageListResponse>;
};


export type OstorageObjectQueryGetArgs = {
  input: IIoRestorecommerceOstorageGetRequest;
};


export type OstorageObjectQueryListArgs = {
  input: IIoRestorecommerceOstorageListRequest;
};

export type OstorageQuery = {
  __typename?: 'OstorageQuery';
  object: OstorageObjectQuery;
};

export type PaymentMutation = {
  __typename?: 'PaymentMutation';
  payment: PaymentPaymentMutation;
};

export type PaymentPaymentMutation = {
  __typename?: 'PaymentPaymentMutation';
  Authorize?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Capture?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  Purchase?: Maybe<ProtoIoRestorecommercePaymentPaymentResponse>;
  SetupAuthorization?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
  SetupPurchase?: Maybe<ProtoIoRestorecommercePaymentSetupResponse>;
};


export type PaymentPaymentMutationAuthorizeArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentPaymentMutationCaptureArgs = {
  input: IIoRestorecommercePaymentCaptureRequest;
};


export type PaymentPaymentMutationPurchaseArgs = {
  input: IIoRestorecommercePaymentPaymentRequest;
};


export type PaymentPaymentMutationSetupAuthorizationArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};


export type PaymentPaymentMutationSetupPurchaseArgs = {
  input: IIoRestorecommercePaymentSetupRequest;
};

export type ProtoGoogleProtobufAny = {
  __typename?: 'ProtoGoogleProtobufAny';
  details?: Maybe<GoogleProtobufAny>;
};

export type ProtoIoRestorecommerceAccessControlResponse = {
  __typename?: 'ProtoIoRestorecommerceAccessControlResponse';
  details?: Maybe<IoRestorecommerceAccessControlResponse>;
};

export type ProtoIoRestorecommerceAccessControlReverseQuery = {
  __typename?: 'ProtoIoRestorecommerceAccessControlReverseQuery';
  details?: Maybe<IoRestorecommerceAccessControlReverseQuery>;
};

export type ProtoIoRestorecommerceAddressAddressListResponse = {
  __typename?: 'ProtoIoRestorecommerceAddressAddressListResponse';
  details?: Maybe<IoRestorecommerceAddressAddressListResponse>;
};

export type ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse = {
  __typename?: 'ProtoIoRestorecommerceAuthenticationLogAuthenticationLogListResponse';
  details?: Maybe<IoRestorecommerceAuthenticationLogAuthenticationLogListResponse>;
};

export type ProtoIoRestorecommerceCommandCommandListResponse = {
  __typename?: 'ProtoIoRestorecommerceCommandCommandListResponse';
  details?: Maybe<IoRestorecommerceCommandCommandListResponse>;
};

export type ProtoIoRestorecommerceContactPointContactPointListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointContactPointListResponse';
  details?: Maybe<IoRestorecommerceContactPointContactPointListResponse>;
};

export type ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse';
  details?: Maybe<IoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};

export type ProtoIoRestorecommerceCountryCountryListResponse = {
  __typename?: 'ProtoIoRestorecommerceCountryCountryListResponse';
  details?: Maybe<IoRestorecommerceCountryCountryListResponse>;
};

export type ProtoIoRestorecommerceCustomerCustomerListResponse = {
  __typename?: 'ProtoIoRestorecommerceCustomerCustomerListResponse';
  details?: Maybe<IoRestorecommerceCustomerCustomerListResponse>;
};

export type ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentCourierFulfillmentCourierListResponse>;
};

export type ProtoIoRestorecommerceFulfillmentFulfillmentListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentFulfillmentListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentFulfillmentListResponse>;
};

export type ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductFulfillmentProductListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentProductFulfillmentProductListResponse>;
};

export type ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse = {
  __typename?: 'ProtoIoRestorecommerceFulfillmentProductPackingSolutionListResponse';
  details?: Maybe<IoRestorecommerceFulfillmentProductPackingSolutionListResponse>;
};

export type ProtoIoRestorecommerceInvoiceInvoiceListResponse = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceListResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceListResponse>;
};

export type ProtoIoRestorecommerceInvoiceInvoiceNumberResponse = {
  __typename?: 'ProtoIoRestorecommerceInvoiceInvoiceNumberResponse';
  details?: Maybe<IoRestorecommerceInvoiceInvoiceNumberResponse>;
};

export type ProtoIoRestorecommerceJobJobListResponse = {
  __typename?: 'ProtoIoRestorecommerceJobJobListResponse';
  details?: Maybe<IoRestorecommerceJobJobListResponse>;
};

export type ProtoIoRestorecommerceLocaleLocaleListResponse = {
  __typename?: 'ProtoIoRestorecommerceLocaleLocaleListResponse';
  details?: Maybe<IoRestorecommerceLocaleLocaleListResponse>;
};

export type ProtoIoRestorecommerceLocationLocationListResponse = {
  __typename?: 'ProtoIoRestorecommerceLocationLocationListResponse';
  details?: Maybe<IoRestorecommerceLocationLocationListResponse>;
};

export type ProtoIoRestorecommerceManufacturerManufacturerListResponse = {
  __typename?: 'ProtoIoRestorecommerceManufacturerManufacturerListResponse';
  details?: Maybe<IoRestorecommerceManufacturerManufacturerListResponse>;
};

export type ProtoIoRestorecommerceNotificationNotificationListResponse = {
  __typename?: 'ProtoIoRestorecommerceNotificationNotificationListResponse';
  details?: Maybe<IoRestorecommerceNotificationNotificationListResponse>;
};

export type ProtoIoRestorecommerceOauthExchangeCodeResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthExchangeCodeResponse';
  details?: Maybe<IoRestorecommerceOauthExchangeCodeResponse>;
};

export type ProtoIoRestorecommerceOauthGenerateLinksResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthGenerateLinksResponse';
  details?: Maybe<IoRestorecommerceOauthGenerateLinksResponse>;
};

export type ProtoIoRestorecommerceOauthGetTokenResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthGetTokenResponse';
  details?: Maybe<IoRestorecommerceOauthGetTokenResponse>;
};

export type ProtoIoRestorecommerceOauthServicesResponse = {
  __typename?: 'ProtoIoRestorecommerceOauthServicesResponse';
  details?: Maybe<IoRestorecommerceOauthServicesResponse>;
};

export type ProtoIoRestorecommerceOrderOrderListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrderOrderListResponse';
  details?: Maybe<IoRestorecommerceOrderOrderListResponse>;
};

export type ProtoIoRestorecommerceOrderOrderSubmitListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrderOrderSubmitListResponse';
  details?: Maybe<IoRestorecommerceOrderOrderSubmitListResponse>;
};

export type ProtoIoRestorecommerceOrganizationOrganizationListResponse = {
  __typename?: 'ProtoIoRestorecommerceOrganizationOrganizationListResponse';
  details?: Maybe<IoRestorecommerceOrganizationOrganizationListResponse>;
};

export type ProtoIoRestorecommerceOstorageCopyResponseList = {
  __typename?: 'ProtoIoRestorecommerceOstorageCopyResponseList';
  details?: Maybe<IoRestorecommerceOstorageCopyResponseList>;
};

export type ProtoIoRestorecommerceOstorageListResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageListResponse';
  details?: Maybe<IoRestorecommerceOstorageListResponse>;
};

export type ProtoIoRestorecommerceOstorageMoveResponseList = {
  __typename?: 'ProtoIoRestorecommerceOstorageMoveResponseList';
  details?: Maybe<IoRestorecommerceOstorageMoveResponseList>;
};

export type ProtoIoRestorecommerceOstorageObjectResponse = {
  __typename?: 'ProtoIoRestorecommerceOstorageObjectResponse';
  details?: Maybe<IoRestorecommerceOstorageObjectResponse>;
};

export type ProtoIoRestorecommerceOstoragePutResponse = {
  __typename?: 'ProtoIoRestorecommerceOstoragePutResponse';
  details?: Maybe<IoRestorecommerceOstoragePutResponse>;
};

export type ProtoIoRestorecommercePaymentPaymentResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentPaymentResponse';
  details?: Maybe<IoRestorecommercePaymentPaymentResponse>;
};

export type ProtoIoRestorecommercePaymentSetupResponse = {
  __typename?: 'ProtoIoRestorecommercePaymentSetupResponse';
  details?: Maybe<IoRestorecommercePaymentSetupResponse>;
};

export type ProtoIoRestorecommercePolicyPolicyListResponse = {
  __typename?: 'ProtoIoRestorecommercePolicyPolicyListResponse';
  details?: Maybe<IoRestorecommercePolicyPolicyListResponse>;
};

export type ProtoIoRestorecommercePolicySetPolicySetListResponse = {
  __typename?: 'ProtoIoRestorecommercePolicySetPolicySetListResponse';
  details?: Maybe<IoRestorecommercePolicySetPolicySetListResponse>;
};

export type ProtoIoRestorecommercePriceGroupPriceGroupListResponse = {
  __typename?: 'ProtoIoRestorecommercePriceGroupPriceGroupListResponse';
  details?: Maybe<IoRestorecommercePriceGroupPriceGroupListResponse>;
};

export type ProtoIoRestorecommerceProductCategoryProductCategoryListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse';
  details?: Maybe<IoRestorecommerceProductCategoryProductCategoryListResponse>;
};

export type ProtoIoRestorecommerceProductProductListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductProductListResponse';
  details?: Maybe<IoRestorecommerceProductProductListResponse>;
};

export type ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceProductPrototypeProductPrototypeListResponse';
  details?: Maybe<IoRestorecommerceProductPrototypeProductPrototypeListResponse>;
};

export type ProtoIoRestorecommerceResourcebaseDeleteResponse = {
  __typename?: 'ProtoIoRestorecommerceResourcebaseDeleteResponse';
  details?: Maybe<IoRestorecommerceResourcebaseDeleteResponse>;
};

export type ProtoIoRestorecommerceRoleRoleListResponse = {
  __typename?: 'ProtoIoRestorecommerceRoleRoleListResponse';
  details?: Maybe<IoRestorecommerceRoleRoleListResponse>;
};

export type ProtoIoRestorecommerceRuleRuleListResponse = {
  __typename?: 'ProtoIoRestorecommerceRuleRuleListResponse';
  details?: Maybe<IoRestorecommerceRuleRuleListResponse>;
};

export type ProtoIoRestorecommerceStatusOperationStatusObj = {
  __typename?: 'ProtoIoRestorecommerceStatusOperationStatusObj';
  details?: Maybe<IoRestorecommerceStatusOperationStatusObj>;
};

export type ProtoIoRestorecommerceStatusStatusListResponse = {
  __typename?: 'ProtoIoRestorecommerceStatusStatusListResponse';
  details?: Maybe<IoRestorecommerceStatusStatusListResponse>;
};

export type ProtoIoRestorecommerceTaxTaxListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTaxListResponse';
  details?: Maybe<IoRestorecommerceTaxTaxListResponse>;
};

export type ProtoIoRestorecommerceTaxTypeTaxTypeListResponse = {
  __typename?: 'ProtoIoRestorecommerceTaxTypeTaxTypeListResponse';
  details?: Maybe<IoRestorecommerceTaxTypeTaxTypeListResponse>;
};

export type ProtoIoRestorecommerceTimezoneTimezoneListResponse = {
  __typename?: 'ProtoIoRestorecommerceTimezoneTimezoneListResponse';
  details?: Maybe<IoRestorecommerceTimezoneTimezoneListResponse>;
};

export type ProtoIoRestorecommerceUnitCodeUnitCodeListResponse = {
  __typename?: 'ProtoIoRestorecommerceUnitCodeUnitCodeListResponse';
  details?: Maybe<IoRestorecommerceUnitCodeUnitCodeListResponse>;
};

export type ProtoIoRestorecommerceUserDeleteUsersByOrgResponse = {
  __typename?: 'ProtoIoRestorecommerceUserDeleteUsersByOrgResponse';
  details?: Maybe<IoRestorecommerceUserDeleteUsersByOrgResponse>;
};

export type ProtoIoRestorecommerceUserUserListResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListResponse';
  details?: Maybe<IoRestorecommerceUserUserListResponse>;
};

export type ProtoIoRestorecommerceUserUserListWithRoleResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserListWithRoleResponse';
  details?: Maybe<IoRestorecommerceUserUserListWithRoleResponse>;
};

export type ProtoIoRestorecommerceUserUserResponse = {
  __typename?: 'ProtoIoRestorecommerceUserUserResponse';
  details?: Maybe<IoRestorecommerceUserUserResponse>;
};

/** The root of all queries */
export type Query = {
  __typename?: 'Query';
  access_control: AccessControlQuery;
  catalog: CatalogQuery;
  fulfillment: FulfillmentQuery;
  identity: IdentityQuery;
  invoicing: InvoicingQuery;
  master_data: ResourceQuery;
  notification: NotificationQuery;
  ordering: OrderingQuery;
  ostorage: OstorageQuery;
  scheduling: SchedulingQuery;
  status?: Maybe<FacadeStatusType>;
};

export type ResourceAddressMutation = {
  __typename?: 'ResourceAddressMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
};


export type ResourceAddressMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceAddressMutationMutateArgs = {
  input: IIoRestorecommerceAddressAddressList;
};

export type ResourceAddressQuery = {
  __typename?: 'ResourceAddressQuery';
  Read?: Maybe<ProtoIoRestorecommerceAddressAddressListResponse>;
};


export type ResourceAddressQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceCommandMutation = {
  __typename?: 'ResourceCommandMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};


export type ResourceCommandMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceCommandMutationMutateArgs = {
  input: IIoRestorecommerceCommandCommandList;
};

export type ResourceCommandQuery = {
  __typename?: 'ResourceCommandQuery';
  Read?: Maybe<ProtoIoRestorecommerceCommandCommandListResponse>;
};


export type ResourceCommandQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceContactPointMutation = {
  __typename?: 'ResourceContactPointMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
};


export type ResourceContactPointMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceContactPointMutationMutateArgs = {
  input: IIoRestorecommerceContactPointContactPointList;
};

export type ResourceContactPointQuery = {
  __typename?: 'ResourceContactPointQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointContactPointListResponse>;
};


export type ResourceContactPointQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceContactPointTypeMutation = {
  __typename?: 'ResourceContactPointTypeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};


export type ResourceContactPointTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceContactPointTypeMutationMutateArgs = {
  input: IIoRestorecommerceContactPointTypeContactPointTypeList;
};

export type ResourceContactPointTypeQuery = {
  __typename?: 'ResourceContactPointTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceContactPointTypeContactPointTypeListResponse>;
};


export type ResourceContactPointTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceCountryMutation = {
  __typename?: 'ResourceCountryMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
};


export type ResourceCountryMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceCountryMutationMutateArgs = {
  input: IIoRestorecommerceCountryCountryList;
};

export type ResourceCountryQuery = {
  __typename?: 'ResourceCountryQuery';
  Read?: Maybe<ProtoIoRestorecommerceCountryCountryListResponse>;
};


export type ResourceCountryQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceCustomerMutation = {
  __typename?: 'ResourceCustomerMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};


export type ResourceCustomerMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceCustomerMutationMutateArgs = {
  input: IIoRestorecommerceCustomerCustomerList;
};

export type ResourceCustomerQuery = {
  __typename?: 'ResourceCustomerQuery';
  Read?: Maybe<ProtoIoRestorecommerceCustomerCustomerListResponse>;
};


export type ResourceCustomerQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceLocaleMutation = {
  __typename?: 'ResourceLocaleMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
};


export type ResourceLocaleMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceLocaleMutationMutateArgs = {
  input: IIoRestorecommerceLocaleLocaleList;
};

export type ResourceLocaleQuery = {
  __typename?: 'ResourceLocaleQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocaleLocaleListResponse>;
};


export type ResourceLocaleQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceLocationMutation = {
  __typename?: 'ResourceLocationMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
};


export type ResourceLocationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceLocationMutationMutateArgs = {
  input: IIoRestorecommerceLocationLocationList;
};

export type ResourceLocationQuery = {
  __typename?: 'ResourceLocationQuery';
  Read?: Maybe<ProtoIoRestorecommerceLocationLocationListResponse>;
};


export type ResourceLocationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceMutation = {
  __typename?: 'ResourceMutation';
  address: ResourceAddressMutation;
  command: ResourceCommandMutation;
  contact_point: ResourceContactPointMutation;
  contact_point_type: ResourceContactPointTypeMutation;
  country: ResourceCountryMutation;
  customer: ResourceCustomerMutation;
  locale: ResourceLocaleMutation;
  location: ResourceLocationMutation;
  organization: ResourceOrganizationMutation;
  tax: ResourceTaxMutation;
  tax_type: ResourceTaxTypeMutation;
  timezone: ResourceTimezoneMutation;
  unit_code: ResourceUnitCodeMutation;
};

export type ResourceOrganizationMutation = {
  __typename?: 'ResourceOrganizationMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
};


export type ResourceOrganizationMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceOrganizationMutationMutateArgs = {
  input: IIoRestorecommerceOrganizationOrganizationList;
};

export type ResourceOrganizationQuery = {
  __typename?: 'ResourceOrganizationQuery';
  Read?: Maybe<ProtoIoRestorecommerceOrganizationOrganizationListResponse>;
};


export type ResourceOrganizationQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceQuery = {
  __typename?: 'ResourceQuery';
  address: ResourceAddressQuery;
  command: ResourceCommandQuery;
  contact_point: ResourceContactPointQuery;
  contact_point_type: ResourceContactPointTypeQuery;
  country: ResourceCountryQuery;
  customer: ResourceCustomerQuery;
  locale: ResourceLocaleQuery;
  location: ResourceLocationQuery;
  organization: ResourceOrganizationQuery;
  tax: ResourceTaxQuery;
  tax_type: ResourceTaxTypeQuery;
  timezone: ResourceTimezoneQuery;
  unit_code: ResourceUnitCodeQuery;
};

export type ResourceTaxMutation = {
  __typename?: 'ResourceTaxMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};


export type ResourceTaxMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTaxMutationMutateArgs = {
  input: IIoRestorecommerceTaxTaxList;
};

export type ResourceTaxQuery = {
  __typename?: 'ResourceTaxQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTaxListResponse>;
};


export type ResourceTaxQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceTaxTypeMutation = {
  __typename?: 'ResourceTaxTypeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
};


export type ResourceTaxTypeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTaxTypeMutationMutateArgs = {
  input: IIoRestorecommerceTaxTypeTaxTypeList;
};

export type ResourceTaxTypeQuery = {
  __typename?: 'ResourceTaxTypeQuery';
  Read?: Maybe<ProtoIoRestorecommerceTaxTypeTaxTypeListResponse>;
};


export type ResourceTaxTypeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceTimezoneMutation = {
  __typename?: 'ResourceTimezoneMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};


export type ResourceTimezoneMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceTimezoneMutationMutateArgs = {
  input: IIoRestorecommerceTimezoneTimezoneList;
};

export type ResourceTimezoneQuery = {
  __typename?: 'ResourceTimezoneQuery';
  Read?: Maybe<ProtoIoRestorecommerceTimezoneTimezoneListResponse>;
};


export type ResourceTimezoneQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type ResourceUnitCodeMutation = {
  __typename?: 'ResourceUnitCodeMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
};


export type ResourceUnitCodeMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type ResourceUnitCodeMutationMutateArgs = {
  input: IIoRestorecommerceUnitCodeUnitCodeList;
};

export type ResourceUnitCodeQuery = {
  __typename?: 'ResourceUnitCodeQuery';
  Read?: Maybe<ProtoIoRestorecommerceUnitCodeUnitCodeListResponse>;
};


export type ResourceUnitCodeQueryReadArgs = {
  input: IIoRestorecommerceResourcebaseReadRequest;
};

export type SchedulingJobMutation = {
  __typename?: 'SchedulingJobMutation';
  Delete?: Maybe<ProtoIoRestorecommerceResourcebaseDeleteResponse>;
  Mutate?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
};


export type SchedulingJobMutationDeleteArgs = {
  input: IIoRestorecommerceResourcebaseDeleteRequest;
};


export type SchedulingJobMutationMutateArgs = {
  input: IIoRestorecommerceJobJobList;
};

export type SchedulingJobQuery = {
  __typename?: 'SchedulingJobQuery';
  Read?: Maybe<ProtoIoRestorecommerceJobJobListResponse>;
};


export type SchedulingJobQueryReadArgs = {
  input: IIoRestorecommerceJobJobReadRequest;
};

export type SchedulingMutation = {
  __typename?: 'SchedulingMutation';
  job: SchedulingJobMutation;
};

export type SchedulingQuery = {
  __typename?: 'SchedulingQuery';
  job: SchedulingJobQuery;
};

export type Subscription = {
  __typename?: 'Subscription';
  catalogProducts?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillmentCouriers?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillment_products?: Maybe<SubscriptionOutput>;
  fulfillmentFulfillments?: Maybe<SubscriptionOutput>;
  identityUsers?: Maybe<SubscriptionOutput>;
  invoicingInvoices?: Maybe<SubscriptionOutput>;
  orderingOrders?: Maybe<SubscriptionOutput>;
};


export type SubscriptionCatalogProductsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentCouriersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillment_ProductsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionFulfillmentFulfillmentsArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionIdentityUsersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionInvoicingInvoicesArgs = {
  action?: InputMaybe<SubscriptionAction>;
};


export type SubscriptionOrderingOrdersArgs = {
  action?: InputMaybe<SubscriptionAction>;
};

export enum SubscriptionAction {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

export type SubscriptionOutput = {
  __typename?: 'SubscriptionOutput';
  id?: Maybe<Scalars['String']>;
};

export type CreateOrderMutationVariables = Exact<{
  input: IIoRestorecommerceOrderOrderList;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', ordering: { __typename?: 'OrderingMutation', order: { __typename?: 'OrderingOrderMutation', Submit?: { __typename?: 'ProtoIoRestorecommerceOrderOrderSubmitListResponse', details?: { __typename?: 'IoRestorecommerceOrderOrderSubmitListResponse', orders?: Array<{ __typename?: 'IoRestorecommerceOrderOrderResponse', payload?: { __typename?: 'IoRestorecommerceOrderOrder', id?: string | null, userId?: string | null, customerId?: string | null, orderState?: IoRestorecommerceOrderOrderState | null, paymentState?: IoRestorecommerceInvoicePaymentState | null, fulfillmentState?: IoRestorecommerceFulfillmentState | null, items?: Array<{ __typename?: 'IoRestorecommerceOrderItem', id?: string | null, productId?: string | null, product?: { __typename?: 'IoRestorecommerceProductProduct', id?: string | null, product?: { __typename?: 'IoRestorecommerceProductIndividualProduct', name?: string | null, category?: { __typename?: 'IoRestorecommerceProductCategoryProductCategory', id?: string | null, name?: string | null } | null, physical?: { __typename?: 'IoRestorecommerceProductPhysicalProduct', variants?: Array<{ __typename?: 'IoRestorecommerceProductPhysicalVariant', id?: string | null, name?: string | null, stockKeepingUnit?: string | null }> | null } | null } | null } | null }> | null } | null }> | null, operationStatus?: { __typename?: 'IoRestorecommerceStatusOperationStatus', message?: string | null, code?: number | null } | null } | null } | null } } };

export type ProductCategoryQueryQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;


export type ProductCategoryQueryQuery = { __typename?: 'Query', catalog: { __typename?: 'CatalogQuery', product_category: { __typename?: 'CatalogProductCategoryQuery', Read?: { __typename?: 'ProtoIoRestorecommerceProductCategoryProductCategoryListResponse', details?: { __typename?: 'IoRestorecommerceProductCategoryProductCategoryListResponse', totalCount?: number | null, items?: Array<{ __typename?: 'IoRestorecommerceProductCategoryProductCategoryResponse', payload?: { __typename?: 'IoRestorecommerceProductCategoryProductCategory', id?: string | null, name?: string | null, description?: string | null, parent?: { __typename?: 'IoRestorecommerceProductCategoryParent', parentId?: string | null } | null, image?: { __typename?: 'IoRestorecommerceImageImage', filename?: string | null, caption?: string | null, url?: string | null } | null } | null, status?: { __typename?: 'IoRestorecommerceStatusStatus', code?: number | null, message?: string | null } | null }> | null, operationStatus?: { __typename?: 'IoRestorecommerceStatusOperationStatus', code?: number | null, message?: string | null } | null } | null } | null } } };

export type ProductsQueryQueryVariables = Exact<{
  input: IIoRestorecommerceResourcebaseReadRequest;
}>;


export type ProductsQueryQuery = { __typename?: 'Query', catalog: { __typename?: 'CatalogQuery', product: { __typename?: 'CatalogProductQuery', Read?: { __typename?: 'ProtoIoRestorecommerceProductProductListResponse', details?: { __typename?: 'IoRestorecommerceProductProductListResponse', totalCount?: number | null, items?: Array<{ __typename?: 'IoRestorecommerceProductProductResponse', payload?: { __typename?: 'IoRestorecommerceProductProduct', id?: string | null, product?: { __typename?: 'IoRestorecommerceProductIndividualProduct', name?: string | null, description?: string | null, categoryId?: string | null, category?: { __typename?: 'IoRestorecommerceProductCategoryProductCategory', id?: string | null, name?: string | null, parent?: { __typename?: 'IoRestorecommerceProductCategoryParent', parentId?: string | null } | null } | null, physical?: { __typename?: 'IoRestorecommerceProductPhysicalProduct', variants?: Array<{ __typename?: 'IoRestorecommerceProductPhysicalVariant', id?: string | null, name?: string | null, description?: string | null, stockKeepingUnit?: string | null, stockLevel?: number | null, parentVariantId?: string | null, price?: { __typename?: 'IoRestorecommercePricePrice', regularPrice?: number | null, sale?: boolean | null, salePrice?: number | null } | null, package?: { __typename?: 'IoRestorecommerceProductPackage', rotatable?: boolean | null, weightInKg?: number | null, sizeInCm?: { __typename?: 'IoRestorecommerceGeometryBoundingBox3D', height?: number | null, length?: number | null, width?: number | null } | null } | null, images?: Array<{ __typename?: 'IoRestorecommerceImageImage', filename?: string | null, url?: string | null, caption?: string | null }> | null, properties?: Array<{ __typename?: 'IoRestorecommercePropertyProperty', id?: string | null, value?: string | null }> | null }> | null } | null } | null, meta?: { __typename?: 'IoRestorecommerceMetaMeta', owners?: Array<{ __typename?: 'IoRestorecommerceAttributeAttribute', id?: string | null, value?: string | null, attributes?: Array<{ __typename?: 'IoRestorecommerceAttributeAttribute', id?: string | null, value?: string | null }> | null }> | null } | null } | null, status?: { __typename?: 'IoRestorecommerceStatusStatus', code?: number | null, message?: string | null } | null }> | null, operationStatus?: { __typename?: 'IoRestorecommerceStatusOperationStatus', code?: number | null, message?: string | null } | null } | null } | null } } };

export const CreateOrderDocument = gql`
    mutation CreateOrder($input: IIoRestorecommerceOrderOrderList!) {
  ordering {
    order {
      Submit(input: $input) {
        details {
          orders {
            payload {
              id
              userId
              customerId
              orderState
              paymentState
              fulfillmentState
              items {
                id
                productId
                product {
                  id
                  product {
                    name
                    category {
                      id
                      name
                    }
                    physical {
                      variants {
                        id
                        name
                        stockKeepingUnit
                      }
                    }
                  }
                }
              }
            }
          }
          operationStatus {
            message
            code
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrderGQL extends Apollo.Mutation<CreateOrderMutation, CreateOrderMutationVariables> {
    document = CreateOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductCategoryQueryDocument = gql`
    query ProductCategoryQuery($input: IIoRestorecommerceResourcebaseReadRequest!) {
  catalog {
    product_category {
      Read(input: $input) {
        details {
          items {
            payload {
              id
              name
              description
              parent {
                parentId
              }
              image {
                filename
                caption
                url
              }
            }
            status {
              code
              message
            }
          }
          totalCount
          operationStatus {
            code
            message
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductCategoryQueryGQL extends Apollo.Query<ProductCategoryQueryQuery, ProductCategoryQueryQueryVariables> {
    document = ProductCategoryQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProductsQueryDocument = gql`
    query ProductsQuery($input: IIoRestorecommerceResourcebaseReadRequest!) {
  catalog {
    product {
      Read(input: $input) {
        details {
          items {
            payload {
              id
              product {
                name
                description
                categoryId
                category {
                  id
                  name
                  parent {
                    parentId
                  }
                }
                physical {
                  variants {
                    id
                    name
                    description
                    price {
                      regularPrice
                      sale
                      salePrice
                    }
                    stockKeepingUnit
                    stockLevel
                    parentVariantId
                    package {
                      rotatable
                      sizeInCm {
                        height
                        length
                        width
                      }
                      weightInKg
                    }
                    images {
                      filename
                      url
                      caption
                    }
                    properties {
                      id
                      value
                    }
                  }
                }
              }
              meta {
                owners {
                  id
                  value
                  attributes {
                    id
                    value
                  }
                }
              }
            }
            status {
              code
              message
            }
          }
          totalCount
          operationStatus {
            code
            message
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProductsQueryGQL extends Apollo.Query<ProductsQueryQuery, ProductsQueryQueryVariables> {
    document = ProductsQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    