import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EsriMapComponent } from './esri-map/esri-map.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { EsriLoaderService } from 'angular2-esri-loader';
import { EsriMapResolveService } from './esri-map/esri-map-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AppRoutingModule
  ],
  providers: [EsriLoaderService, EsriMapResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
