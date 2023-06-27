import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  constructor(public sharedService: SharedService) {}

  addToCart() {
    this.sharedService.miVariable$.next(true)
  }
}
