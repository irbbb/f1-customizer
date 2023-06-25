import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormGroup, FormControl } from '@angular/forms';
import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

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
        this.generatePdfFromImage();
      }
    });
  }

  public generatePdfFromImage() {
    var node = document.getElementById('htmlData')!;
    htmlToImage
      .toPng(node)
      .then((dataUrl) => {
        const img = new Image();
        img.onload = () => {
          const pdf = new jsPDF('p', 'mm', 'a4');
          pdf.setLineWidth(1);

          const desiredWidthInMm = 150; // Tamaño deseado en milímetros
          const aspectRatio = img.height / img.width;
          const desiredHeightInMm = desiredWidthInMm * aspectRatio;

          const marginLeft = 10; // Margen izquierdo en milímetros
          const marginTop = 10; // Margen superior en milímetros
          pdf.addImage(
            img,
            'PNG',
            marginLeft,
            marginTop,
            desiredWidthInMm,
            desiredHeightInMm
          );

          const pdfBlob: Blob = pdf.output('blob');
          this.adaptResultToBase64(pdfBlob)
            .then((resp: string) => {
              (<HTMLInputElement>document.getElementById('title-field')).value = resp;
              let form = <HTMLButtonElement>document.getElementById("submitForm");
              form.click();
            })
            .catch((error) => console.log(error));
        };
        img.src = dataUrl;
      })
      .catch((error) => {
        console.error('Error, something went wrong!', error);
      });
  }

  private adaptResultToBase64(res: Blob): Promise<string> {
    let reader: FileReader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = () => {
        reject('Error reading file.');
      };
      reader.readAsDataURL(res);
    });
  }
}
