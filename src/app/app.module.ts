import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PreviewComponent } from './preview/preview.component';
import { PickImageComponent } from './pick-image/pick-image.component';
import { PickQuoteComponent } from './pick-quote/pick-quote.component';
import { PickNameComponent } from './pick-name/pick-name.component';
import { PriceComponent } from './price/price.component';
import { QuantityComponent } from './quantity/quantity.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    PickImageComponent,
    PickQuoteComponent,
    PickNameComponent,
    PriceComponent,
    QuantityComponent,
    AddToCartComponent,
  ],
  imports: [BrowserModule, ImageCropperModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
