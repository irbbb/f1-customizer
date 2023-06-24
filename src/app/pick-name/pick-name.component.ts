import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pick-name',
  templateUrl: './pick-name.component.html',
  styleUrls: ['./pick-name.component.css'],
})
export class PickNameComponent {
  constructor(public sharedService: SharedService) {}
}
