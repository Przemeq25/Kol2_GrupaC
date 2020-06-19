import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopPCComponent} from './shop-pc/shop-pc.component';
import {ShopDetailsPCComponent} from './shop-details-pc/shop-details-pc.component';



const routes: Routes = [
  {
    path: '',
    component: ShopPCComponent,
  },
  {
    path: 'shop/item/details/:id',
    component: ShopDetailsPCComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
