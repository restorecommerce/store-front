import { Injectable, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TranslationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('./')) {
      const filePath = path.join(process.cwd(), 'dist', 'store-front', 'browser', req.url);
      let encoding = 'utf8';

      if (req.responseType === 'arraybuffer') {
        encoding = null;
      }

      let body = fs.readFileSync(filePath, {
        encoding: encoding as any
      });

      if (req.responseType === 'json') {
        body = JSON.parse(body as any);
      }

      return of(new HttpResponse({
        status: 200,
        body
      }));
    }

    return next.handle(req);
  }
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: TranslationInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
