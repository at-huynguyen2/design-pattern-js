import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { FactoryComponent } from './factory/factory.component';
import { BuilderComponent } from './builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    BuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
