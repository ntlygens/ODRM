import { Component, OnInit } from '@angular/core';
import { CARD_DATA } from './dynamic-grid-enum';

// import { CardItem } from './card-item.interface';


// dynamic-card.component.ts
// @Component({
//   selector: 'app-dynamic-card',
//   standalone: true,
//   imports: [CommonModule, MatCardModule],
//   template: `
//     <mat-card [class.placeholder]="isPlaceholder" class="dynamic-card">
//       <div class="card-image-container" *ngIf="!isPlaceholder">
//         <img 
//           mat-card-image 
//           [src]="cardData.imgUrl" 
//           [alt]="cardData.title"
//           (load)="onImageLoad($event)"
//           (error)="onImageError()">
//       </div>
//       <mat-card-content *ngIf="!isPlaceholder">
//         <mat-card-title>{{ cardData.title }}</mat-card-title>
//         <mat-card-subtitle>{{ cardData.subtitle }}</mat-card-subtitle>
//         <p class="card-text">{{ cardData.content }}</p>
//       </mat-card-content>
//     </mat-card>
//   `,
//   styles: [`
//     :host {
//       display: block;
//       height: 100%;
//     }

//     .dynamic-card {
//       height: 100%;
//       display: flex;
//       flex-direction: column;
//       overflow: hidden;
//       transition: transform 0.3s ease, box-shadow 0.3s ease;
//       cursor: pointer;
//     }

//     .dynamic-card:hover:not(.placeholder) {
//       transform: translateY(-4px);
//       box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//     }

//     .dynamic-card.placeholder {
//       background: linear-gradient(135deg, #e0e0e0 25%, #f5f5f5 25%, #f5f5f5 50%, #e0e0e0 50%, #e0e0e0 75%, #f5f5f5 75%, #f5f5f5);
//       background-size: 20px 20px;
//       cursor: default;
//     }

//     .card-image-container {
//       width: 100%;
//       flex: 1;
//       overflow: hidden;
//       background: #f5f5f5;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//     }

//     .card-image-container img {
//       width: 100%;
//       height: 100%;
//       object-fit: cover;
//     }

//     mat-card-content {
//       padding: 16px;
//       flex-shrink: 0;
//     }

//     mat-card-title {
//       font-size: 18px;
//       font-weight: 500;
//       margin-bottom: 8px;
//     }

//     mat-card-subtitle {
//       font-size: 14px;
//       color: rgba(0, 0, 0, 0.6);
//       margin-bottom: 8px;
//     }

//     .card-text {
//       font-size: 14px;
//       line-height: 1.5;
//       color: rgba(0, 0, 0, 0.7);
//       margin: 0;
//     }
//   `]
// })
// export class DynamicCardComponent implements OnInit {
//   @Input() cardData!: CardItem;
//   @Input() isPlaceholder = false;
//   @Input() orientation: Orientation = 'landscape';

//   ngOnInit() {
//     if (!this.cardData && !this.isPlaceholder) {
//       console.error('DynamicCardComponent requires cardData input');
//     }
//   }

//   onImageLoad(event: Event) {
//     const img = event.target as HTMLImageElement;
//     const width = img.naturalWidth;
//     const height = img.naturalHeight;

//     // Determine actual orientation from loaded image //
    

//     // const ratio = width / height;
//     // if (Math.abs(ratio - 1) < 0.1) {
//     //   this.orientation = 'square';
//     // } else if (ratio > 1) {
//     //   this.orientation = 'landscape';
//     // } else {
//     //   this.orientation = 'portrait';
//     // }
//     console.log(img.alt, 'image loaded as ', this.orientation, 'with dimensions = W:', width, ' & H:', height);
//   }

//   onImageError() {
//     console.error('Failed to load image:', this.cardData?.imgUrl);
//   }
// }

// // dynamic-grid.component.ts
// @Component({
//   selector: 'app-dynamic-grid',
//   standalone: true,
//   imports: [CommonModule, MatGridListModule, DynamicCardComponent],
//   template: `
//     <mat-grid-list [cols]="columns" [rowHeight]="rowHeight" [gutterSize]="gutterSize">
//       <mat-grid-tile 
//         *ngFor="let item of gridItems; trackBy: trackByFn"
//         [colspan]="item.cols"
//         [rowspan]="item.rows">
//         <app-dynamic-card 
//           [cardData]="item.data!"
//           [isPlaceholder]="item.isPlaceholder"
//           [style.width.%]="100"
//           [style.height.%]="100">
//         </app-dynamic-card>
//       </mat-grid-tile>
//     </mat-grid-list>
//   `,
//   styles: [`
//     :host {
//       display: block;
//       padding: 16px;
//     }

//     mat-grid-list {
//       background: #ffffff;
//     }

//     mat-grid-tile {
//       overflow: unset !important;
//     }
//   `]
// })
// export class DynamicGridComponent implements OnInit {
//   @Input() cardItems: CardItem[] = [];
//   @Input() columns = 0;
//   @Input() rowHeight = '300px';
//   @Input() gutterSize = '16px';

//   gridItems: GridItem[] = [];
//   private n = 0;
//   private oriented = '';

//   ngOnInit() {
//     this.calculateColumns();
//     this.calculateGridLayout();

//     console.log('DynamicGridComponent initialized with', this.cardItems.length, 'items.');
//   }

//   private calculateColumns() {  
//     const width = window.innerWidth;
//     if (width <= 600) {
//       this.columns = 2;
//     } else if (width > 600 && width < 1024) {
//       this.columns = 3;
//     } else if (width > 1024 && width < 1280) {
//       this.columns = 4;
//     } else {
//       this.columns = 4;
//     }
//   } 

//   private async calculateGridLayout() {
//     this.gridItems = [];
//     const orientations = await this.getImageOrientations();
    
//     let currentCol = 0;
//     let currentRow = 0;
//     const rowTracker: number[] = new Array(100).fill(0); // Track column usage per row

//     for (let i = 0; i < this.cardItems.length; i++) {
//       const orientation = orientations[i];
//       let cols = 1;
//       let rows = 1;

//       // Determine size based on orientation
//       if (orientation === 'portrait') {
//         cols = 1;
//         rows = 2;
//       } else if (orientation === 'landscape') {
//         cols = 2;
//         rows = 1;
//       } else {
//         cols = 1;
//         rows = 1;
//       }

//       // Find next available position
//       while (rowTracker[currentRow] + cols > this.columns) {
//         // Check if there's exactly 1 column space left in current row
//         const spaceLeft = this.columns - rowTracker[currentRow];
//         if (spaceLeft === 1) {
//           // Add square placeholder
//           this.gridItems.push({
//             cols: 1,
//             rows: 1,
//             isPlaceholder: true
//           });
//           rowTracker[currentRow] += 1;
//         }
//         currentRow++;
//       }

//       // Add the item
//       this.gridItems.push({
//         data: this.cardItems[i],
//         cols,
//         rows,
//         isPlaceholder: false
//       });

//       // Update row tracker
//       for (let r = currentRow; r < currentRow + rows; r++) {
//         rowTracker[r] += cols;
//       }

//       // Move to next position
//       currentCol = rowTracker[currentRow];
//       if (currentCol >= this.columns) {
//         currentRow++;
//         currentCol = 0;
//       }
//     }

//     // Fill any remaining space in the last row
//     const lastRowSpace = this.columns - rowTracker[currentRow];
//     if (lastRowSpace > 0 && lastRowSpace < this.columns) {
//       for (let i = 0; i < lastRowSpace; i++) {
//         this.gridItems.push({
//           cols: 1,
//           rows: 1,
//           isPlaceholder: true
//         });
//       }
//     }
//   }

//   private async getImageOrientations(): Promise<string[]> {
//     const orientations: string[] = [];
    
//     for (const item of this.cardItems) {
//       try {
//         const orientation = await this.detectImageOrientation(item.imgUrl);
//         orientations.push(orientation);
//       } catch {
//         // Default to landscape if detection fails
//         orientations.push('landscape');
//       }
//     }
    
//     return orientations;
//   }

//   private detectImageOrientation(url: string): Promise<string> {
//     let dUrl = new URL(url);
//     return new Promise((resolve) => {
//       const img = new Image();
//       img.onload = () => {
//         const ratio = img.width / img.height;

//         // if (Math.abs(ratio - 1) < 0.1) {
//         //   resolve('square');
//         //   this.oriented = 'square';
//         // } else if (ratio > 1) {
//         //   resolve('landscape');
//         //   this.oriented = 'landscape';
//         // } else {
//         //   resolve('portrait');
//         //   this.oriented = 'portrait';
//         // }
//         const w = dUrl.searchParams.get('w') as unknown as number;
//         const h = dUrl.searchParams.get('h') as unknown as number;

//         if (w > h) {
//           resolve('landscape');
//           this.oriented = 'landscape';
//         } else if (w < h) {
//           resolve('portrait');
//           this.oriented = 'portrait';
//         } else {
//           resolve('square');
//           this.oriented = 'square';
//         }

//         this.n++;
//       };
//       img.onerror = () => resolve('landscape');
//       img.src = url;
          
//       console.log( this.oriented, 'called for image ( ', this.n, ' ).');
//       // console.log('detectImageOrientation of', this.oriented, 'called for image ( ', this.n, ' ).');

//     });
//   }

//   trackByFn(index: number, item: GridItem): string {
//     return item.data?._id || `placeholder-${index}`;
//   }
// }

// app.component.ts (Demo)
@Component({
  selector: 'app-dc-grid',
  standalone: false,
  template: `
    <div class="app-container">
      <header>
        <h1>Dynamic Card Grid Gallery</h1>
        <p>Intelligent layout with automatic placeholder filling</p>
      </header>
      
      <odm-dynamic-grid 
        [cardItems]="cards"
        [columns]="4"
        [rowHeight]="'300px'"
        [gutterSize]="'16px'">
      </odm-dynamic-grid>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background: #fafafa;
    }

    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 32px 24px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    header h1 {
      margin: 0 0 8px 0;
      font-size: 32px;
      font-weight: 500;
    }

    header p {
      margin: 0;
      font-size: 16px;
      opacity: 0.9;
    }
  `]
})
export class DynamicContentGridComponent implements OnInit {
  cards = CARD_DATA;

  ngOnInit() {
    console.log('DynamicContentGridComponent initialized with', this.cards[4].content, 'cards.');
  }
}