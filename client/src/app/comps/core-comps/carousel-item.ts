import { Component } from '@angular/core';

@Component({
  selector: 'odm-carousel-item',
  standalone: false,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
      flex: 0 0 auto;
      scroll-snap-align: start;
    }
  `]
})
export class CarouselItem {

}
