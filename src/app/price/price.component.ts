import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent {
  constructor(public sharedService: SharedService) {}

  pricing() {
    return (this.sharedService.price * this.sharedService.quantity).toFixed(1);
  }
}
