import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css'],
})
export class QuantityComponent {
  constructor(public sharedService: SharedService) {}

  addProduct() {
    this.sharedService.quantity = this.sharedService.quantity + 1;
  }

  subtractProduct() {
    if (this.sharedService.quantity > 1) {
      this.sharedService.quantity = this.sharedService.quantity - 1;
    }
  }
}
