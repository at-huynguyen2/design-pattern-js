import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FactoryComponent } from './factory/factory.component';
import { AbstractFactoryComponent } from './abstract-factory/abstract-factory.component';

const routes: Routes = [
  { path: 'factories', component: FactoryComponent },
  { path: 'abstract-factories', component: AbstractFactoryComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }
