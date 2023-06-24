import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pick-quote',
  templateUrl: './pick-quote.component.html',
  styleUrls: ['./pick-quote.component.css']
})
export class PickQuoteComponent {
  constructor (public sharedService: SharedService) {}
}
