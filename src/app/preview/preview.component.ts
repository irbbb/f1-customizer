import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { share } from 'rxjs';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(public sharedService: SharedService) {
    this.sharedService.miVariable$.subscribe((name: boolean) => {
      if (name) {
        this.uploadProduct();
      }
    });
  }

  public uploadProduct() {
    var c = document.createElement('canvas');
    var img = document.getElementById('custom-12') as HTMLImageElement;
    

    if(img === null){
      console.error('Image not found');
      return;
    }

    c.height = img.naturalHeight;
    c.width = img.naturalWidth;
    var ctx = c.getContext('2d');
      
    if (ctx === null){
      console.log('Could not get 2D context');
      return;
    }  

    ctx.drawImage(img, 0, 0, c.width, c.height);

    var base64String = c.toDataURL();
    (<HTMLInputElement>document.getElementById('image-field')).value = base64String;

    var phrase = document.getElementById('custom-13')!;
    (<HTMLInputElement>document.getElementById('phrase-field')).value = phrase.innerHTML;

    var name = document.getElementById('custom-17')!;
    (<HTMLInputElement>document.getElementById('name-field')).value = name.innerHTML;

    var quantity = document.getElementById('custom-quantity')!;
    (<HTMLInputElement>document.getElementById('quantity_6496267310c12')).value = quantity.innerHTML;

    let form = <HTMLButtonElement>document.getElementById('submitForm');
    form.click();
      
  }
}
