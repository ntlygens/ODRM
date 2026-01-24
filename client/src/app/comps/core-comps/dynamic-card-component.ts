import { AfterContentInit, Component, Input, OnInit } from "@angular/core";
import { CardItem, Orientation } from "./dynamic-grid-enum";


@Component({
  selector: 'odm-dynamic-card',
    standalone: false,
    template: ` 
    <mat-card [class.placeholder]="isPlaceholder" class="dynamic-card">
      @if (!isPlaceholder) {
        <div class="card-image-container">
          <img 
            mat-card-image 
            [src]="cardData?.imgUrl" 
            [alt]="cardData?.title"
            (error)="onImageError()">
        </div>
      }
      
      <mat-card-content>
        @if (!isPlaceholder) {
          <mat-card-title>{{ cardData?.title }}</mat-card-title>
          <mat-card-subtitle>{{ cardData?.subtitle }}</mat-card-subtitle>
          <p class="card-text">{{ cardData!.content }}</p>
        }
        
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    .dynamic-card {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
    }

    .dynamic-card:hover:not(.placeholder) {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .dynamic-card.placeholder {
      background: linear-gradient(135deg, #e0e0e0 25%, #f5f5f5 25%, #f5f5f5 50%, #e0e0e0 50%, #e0e0e0 75%, #f5f5f5 75%, #f5f5f5);
      background-size: 20px 20px;
      cursor: default;
    }

    .card-image-container {
      width: 100%;
      flex: 1;
      overflow: hidden;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    mat-card-content {
      padding: 16px;
      flex-shrink: 0;
    }

    mat-card-title {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;
    }

    mat-card-subtitle {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 8px;
    }

    .card-text {
      font-size: 14px;
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.7);
      margin: 0;
    }
  `]
})
export class DynamicCardComponent implements OnInit, AfterContentInit {
  @Input() cardData?: CardItem | null = null;
  @Input() isPlaceholder: boolean = false;

  ngOnInit() {
    console.log('DynamicCardComponent initialized.');

  }

  ngAfterContentInit() {
    // Additional initialization if needed
    if (!this.cardData && !this.isPlaceholder) {
      console.error('DynamicCardComponent requires cardData input');
    }
  }

  onImageError() {
    console.error('Failed to load image:', this.cardData?.imgUrl);
  }  


}

