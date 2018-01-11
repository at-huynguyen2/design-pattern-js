import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FactoryComponent } from './factory/factory.component';
import { BuilderComponent } from './builder/builder.component';

const routes: Routes = [
  { path: 'factories', component: FactoryComponent },
  { path: 'builders', component: BuilderComponent },
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
