import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-pick-image',
  templateUrl: './pick-image.component.html',
  styleUrls: ['./pick-image.component.css'],
})
export class PickImageComponent {
  imgChangeEvt: any = '';
  state: boolean = false;

  constructor(public sharedService: SharedService) {}

  onFileChange(event: any) {
    this.imgChangeEvt = event;
    this.state = true;
  }

  cropImg(event: ImageCroppedEvent) {
    this.sharedService.image = event.objectUrl;
  }

  imgLoad(event: LoadedImage) {}

  initCropper() {}

  imgFailed() {
    alert('Img failed to load');
  }

  apply() {
    this.state = false;
  }
}
