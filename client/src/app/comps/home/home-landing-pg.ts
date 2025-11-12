import { Component } from '@angular/core';

@Component({
  selector: 'odm-home-landing-pg',
  standalone: false,
  template: `
    <p>
      home-landing-pg works!
    </p>
    
    <div class="demo-container">
      <h2>Multi-Browse Carousel Demo</h2>
      
      <odm-uncontained-data-carousel 
        [showNavigation]="true"
        [showIndicators]="true"
        [autoScroll]="false">
        <odm-carousel-item *ngFor="let item of carouselItems" class="carousel-card">
          <div class="card-content">
            <div class="card-image" [style.background]="item.color">
              <span class="card-number">{{ item.id }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button mat-button color="primary">Learn More</button>
          </div>
        </odm-carousel-item>
      </odm-uncontained-data-carousel>
    </div>
    
    <!-- <odm-data-carousel
        [items]="carouselItems"
        [autoPlay]="true"
        [interval]="4000"
        [loop]="true"
        [showNavigation]="true"
        [showIndicators]="true">
    </odm-data-carousel> -->
  `,
  styles: [`
    // :host {
    //   display: block;
    //   flex: 0 0 auto;
    //   scroll-snap-align: start;
    // }
    
    
    .demo-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      margin-bottom: 24px;
      color: #333;
    }

    .carousel-card {
      width: 280px;
      min-width: 280px;
    }

    .card-content {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-number {
      font-size: 48px;
      font-weight: bold;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .card-content h3 {
      margin: 16px;
      font-size: 18px;
      font-weight: 500;
    }

    .card-content p {
      margin: 0 16px 16px;
      color: #666;
      font-size: 14px;
    }

    .card-content button {
      margin: 0 16px 16px;
    }
  `],
})
export class HomeLandingPg {
  carouselItems = [
    { id: 1, title: 'Item One', description: 'Description for first item', color: '#6366f1' },
    { id: 2, title: 'Item Two', description: 'Description for second item', color: '#8b5cf6' },
    { id: 3, title: 'Item Three', description: 'Description for third item', color: '#ec4899' },
    { id: 4, title: 'Item Four', description: 'Description for fourth item', color: '#f43f5e' },
    { id: 5, title: 'Item Five', description: 'Description for fifth item', color: '#f97316' },
    { id: 6, title: 'Item Six', description: 'Description for sixth item', color: '#eab308' },
    { id: 7, title: 'Item Seven', description: 'Description for seventh item', color: '#22c55e' },
    { id: 8, title: 'Item Eight', description: 'Description for eighth item', color: '#14b8a6' },
  ];
  // carouselItems: CarouselItem[] = [
  //     {
  //       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  //       title: 'Mountain Landscape',
  //       description: 'Beautiful mountain scenery with stunning views'
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop',
  //       title: 'Forest Path',
  //       description: 'A serene path through the woods'
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=400&fit=crop',
  //       title: 'Coastal Sunset',
  //       description: 'Golden hour at the beach'
  //     },
  //     {
  //       image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=400&fit=crop',
  //       title: 'Northern Lights',
  //       description: 'Aurora borealis in the night sky'
  //     }
  //   ];
 }

 export interface CarouselItem {
  image: string;
  title?: string;
  description?: string;
}
