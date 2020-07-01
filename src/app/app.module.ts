import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt-PT';

registerLocaleData(localePt, 'pt');

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbToastrService,
  NbToastrModule,
  NbDialogService,
  NbDialogModule,
  NbSidebarModule,
  NbSidebarService,
  NbMenuModule,
  NbMenuService
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    SlickCarouselModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // fixme imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, NbToastrService, NbDialogService, NbSidebarService, NbMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
