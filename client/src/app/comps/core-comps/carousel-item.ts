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
      height: 100%;
    
    }
    :host .card-content {
        display: flex;
        flex-direction: column;
        height: 100%;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      }

  `]
})
export class CarouselItem {

}
