import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopPCComponent } from './shop-pc/shop-pc.component';
import {HttpClientModule} from '@angular/common/http';
import {PcDataService} from './services/pc-data.service';
import { ShopItemPCComponent } from './shop-item-pc/shop-item-pc.component';
import { ShopDetailsPCComponent } from './shop-details-pc/shop-details-pc.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopPCComponent,
    ShopItemPCComponent,
    ShopDetailsPCComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    PcDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
