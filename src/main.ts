import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import {environment} from './environments/environment';

// if(environment.production){
//   enableProdMode();
// }

// bootstrapApplication(AppComponent);

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
import { importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import {  HttpClientModule } from "@angular/common/http";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
// import { provideRouter} from "@angular/router";
// import { APP_ROUTES } from "../src/app/routing/routing";
// import { KeycloakAngularModule, KeycloakBearerInterceptor, KeycloakService } from "keycloak-angular";
// import { initializer } from "./app/auth/auth-init";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule,  CommonModule, BrowserModule,MatCardModule,MatDialogModule),            
    // provideRouter(APP_ROUTES),  
    // {provide: KeycloakService, useClass: KeycloakService},      
     
    // { provide: HTTP_INTERCEPTORS, useClass: KeycloakBearerInterceptor, multi: true },    
  ]
});
