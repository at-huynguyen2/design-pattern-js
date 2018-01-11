import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MarkdownModule } from 'ngx-md';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { FactoryComponent } from './factory/factory.component';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    FactoryComponent,
    AbstractFactoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
