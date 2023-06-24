import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  image: any = '/assets/alonso.jpg';
  quote: any =
    '"I like the danger, I like the adrenaline and I need it to race."';
  name: any = 'Fernando Alonso';
  quantity: number = 1;
  price: number = 19.9;

  public miVariable$ = new BehaviorSubject<boolean>(false);
}
