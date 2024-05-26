// /// <reference types="@angular/localize" />

// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(AppRoutingModule, HttpClientModule)
//   ]
// }).catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));