import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NuevaPizzaPage } from './nueva-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaPizzaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NuevaPizzaPage]
})
export class NuevaPizzaPageModule {}
