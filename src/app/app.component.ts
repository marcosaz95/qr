import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentOrder: string = "";
  @ViewChild('result') resultElement: ElementRef;
  elementType: 'url' | 'canvas' | 'img' = 'img';
  value: string = 'algo más';
  valueScanner: any = "nothing yet";
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  constructor(private renderer: Renderer2) {

  }

  ngOnInit() {
    // this.qrScannerComponent.getMediaDevices().then(devices => {
    //   console.log(devices);
    //   const videoDevices: MediaDeviceInfo[] = [];
    //   for (const device of devices) {
    //     if (device.kind.toString() === 'videoinput') {
    //       videoDevices.push(device);
    //     }
    //   }
    //   if (videoDevices.length > 0) {
    //     let choosenDev;
    //     for (const dev of videoDevices) {
    //       if (dev.label.includes('back')) {
    //         choosenDev = dev;
    //         break;
    //       }
    //     }
    //     if (choosenDev) {
    //       this.qrScannerComponent.chooseCamera.next(choosenDev);
    //     } else {
    //       this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
    //     }
    //   }
    // });

    // this.qrScannerComponent.capturedQr.subscribe(result => {
    //   this.valueScanner = result;
    // });
  }

  showDetail(event) {
    this.currentOrder = event;
  }

  something(event) {
    console.log(event)
    let element: Element = this.renderer.createElement('p');
    element.innerHTML = event.result;
    this.renderElement(element);
  }

  renderElement(element) {
    for (let node of this.resultElement.nativeElement.childNodes) {
      this.renderer.removeChild(this.resultElement.nativeElement, node);
    }
    this.renderer.appendChild(this.resultElement.nativeElement, element);
  }
}
