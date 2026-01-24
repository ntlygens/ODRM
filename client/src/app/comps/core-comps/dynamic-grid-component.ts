import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { CardItem, GridItem, Orientation } from './dynamic-grid-enum';

// dynamic-grid.component.ts
@Component({
  selector: 'odm-dynamic-grid',
  standalone: false,
  template: `
    <mat-grid-list [cols]="columns" [rowHeight]="rowHeight" [gutterSize]="gutterSize">
      @for (item of gridItems; track item.data?._id || 'placeholder-' + $index) {
        <!-- <div>
          @if(!item.isPlaceholder) {
             <mat-grid-tile>
               <mat-grid-tile-header> Title is: {{item.data?.title}}</mat-grid-tile-header>
               <div>
                <img [src]="item.data?.imgUrl">
               </div>
             </mat-grid-tile>
            } @else {
             <p> This is a placeholder </p>
            }
        </div> -->
        <mat-grid-tile
          [colspan]="item.cols"
          [rowspan]="item.rows">
          
          @if(!item.isPlaceholder) {
            <odm-dynemic-card 
              [cardData]="item.data"
              [isPlaceholder]="false"
              [style.width.%]="100"
              [style.height.%]="100">
            </odm-dynemic-card>

            <!-- <mat-grid-tile-header> Title is: {{item.data?.title}}</mat-grid-tile-header>
            <div>
              <img [src]="item.data?.imgUrl">
            </div> -->
          
          } @else {
            <odm-dynemic-card [isPlaceholder]="true"></odm-dynemic-card>
          }
        
        </mat-grid-tile>
      }
      
      <!-- <mat-grid-tile 
        *ngFor="let item of gridItems; trackBy: trackByFn"
        [colspan]="item.cols"
        [rowspan]="item.rows">
        <odm-dynemic-card *ngIf="!isPlaceholder"
          [cardData]!="item.data"
          [isPlaceholder]="item.isPlaceholder"
          [style.width.%]="100"
          [style.height.%]="100">
        </odm-dynemic-card>

        @if(!item.isPlaceholder) {
          <odm-dynemic-card 
            [cardData]!="item.data"
            [style.width.%]="100"
            [style.height.%]="100">
          </odm-dynemic-card>
        
        }
        <odm-dynemic-card [isPlaceholder]="true"></odm-dynemic-card>
        
      </mat-grid-tile> -->
    </mat-grid-list>
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px;
    }

    mat-grid-list {
      background: #ffffff;
    }

    mat-grid-tile {
      overflow: visible;
    }
  `]
})
export class DynamicGridComponent implements OnInit, AfterViewInit, AfterContentInit {
  @Input() cardItems: CardItem[] = [];
  @Input() columns = 0;
  @Input() rowHeight = '300px';
  @Input() gutterSize = '16px';

  gridItems: GridItem[] = [];
  
  private n = 0;
  private orientations: string[] = [];
  private oriented = '';

  ngOnInit() {
    this.calculateColumns();
    console.log('DynamicGridComponent initialized with', this.cardItems.length, 'items.');
  }

  ngAfterViewInit() {
    // this.calculateGridLayout();

    window.addEventListener('resize', () => {
      this.calculateColumns();
      // this.calculateGridLayout();
    });
  }

  ngAfterContentInit() {
    this.calculateGridLayout();
  }

  private calculateColumns() {  
    const width = window.innerWidth;
    if (width <= 600) {
      this.columns = 2;
    } else if (width > 600 && width < 1024) {
      this.columns = 3;
    } else if (width > 1024 && width < 1280) {
      this.columns = 4;
    } else {
      this.columns = 4;
    }
  } 

  private async calculateGridLayout() {
    this.gridItems = [];
    const orientations = await this.getImageOrientations();
    // console.log('Image orientations detected:', orientations[18], 'for image 5.');
    
    let currentCol = 0;
    let currentRow = 0;
    const rowTracker: number[] = new Array(100).fill(0); // Track column usage per row

    for (let i = 0; i < this.cardItems.length; i++) {
      const orientation = orientations[i];
      let cols = 1;
      let rows = 1;

      console.log('Orientation for item', i, 'is', orientation);
      // Determine size based on orientation
      if (orientation === Orientation.PORTRAIT) {
        cols = 1;
        rows = 2;
      } else if (orientation === Orientation.LANDSCAPE) {
        cols = 2;
        rows = 1;
      } else {
        cols = 1;
        rows = 1;
      }

      // Find next available position
      while (rowTracker[currentRow] + cols > this.columns) {
        // Check if there's exactly 1 column space left in current row
        const spaceLeft = this.columns - rowTracker[currentRow];
        if (spaceLeft === 1) {
          // Add square placeholder
          this.gridItems.push({
            cols: 1,
            rows: 1,
            isPlaceholder: true
          });
          rowTracker[currentRow] += 1;
        }
        currentRow++;
      }

      // Add the item
      this.gridItems.push({
        data: this.cardItems[i],
        cols,
        rows,
        isPlaceholder: false
      });

      // Update row tracker
      for (let r = currentRow; r < currentRow + rows; r++) {
        rowTracker[r] += cols;
      }

      // Move to next position
      currentCol = rowTracker[currentRow];
      if (currentCol >= this.columns) {
        currentRow++;
        currentCol = 0;
      }
    }

    // Fill any remaining space in the last row
    const lastRowSpace = this.columns - rowTracker[currentRow];
    if (lastRowSpace > 0 && lastRowSpace < this.columns) {
      for (let i = 0; i < lastRowSpace; i++) {
        this.gridItems.push({
          cols: 1,
          rows: 1,
          isPlaceholder: true
        });
      }
    }
  }

  private async getImageOrientations(): Promise<string[]> {
    const orientations: string[] = [];
    
    for (const item of this.cardItems) {
      // console.log('Getting orientation for image URL:', item.imgUrl);
      try {
        const orientation = await this.detectImageOrientation(item.imgUrl);
        orientations.push(orientation);
      } catch {
        // Default to landscape if detection fails
        orientations.push(Orientation.LANDSCAPE);
      }
    }
    
    return orientations;
  }

  private async detectImageOrientation(url: string): Promise<string> {
    // console.log('detectImageOrientation called for URL:', url);
    const dUrl = new URL(url, window.location.href);
    const sParams = new URLSearchParams(dUrl.search);
    // const dUrlParams = dUrl.searchParams;
    const w = parseInt(sParams.get('w') || '0', 10);
    const h = parseInt(sParams.get('h') || '0', 10);
    // console.log('Parsed URL W: ', w);
    // const w:number = dUrl.searchParams.get('w') as unknown as number;
    // const h:number = dUrl.searchParams.get('h') as unknown as number;

    // console.log('Image dimensions from URL params: W=', w, ' H=', h);         

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {

        // Determine orientation from actual image dimensions //
        // const ratio = img.width / img.height;
        // if (Math.abs(ratio - 1) < 0.1) {
        //   resolve(Orientation.SQUARE);
        //   this.oriented = Orientation.SQUARE;
        // } else if (ratio > 1) {
        //   resolve(Orientation.LANDSCAPE);
        //   this.oriented = Orientation.LANDSCAPE;
        // } else {
        //   resolve(Orientation.PORTRAIT);
        //   this.oriented = Orientation.PORTRAIT;
        // }

        // Use dimensions from URL params //
        if (w > h) {
          resolve(Orientation.LANDSCAPE);
          this.oriented = Orientation.LANDSCAPE;
        } else if (w < h) {
          resolve(Orientation.PORTRAIT);
          this.oriented = Orientation.PORTRAIT;
        } else {
          resolve(Orientation.SQUARE);
          this.oriented = Orientation.SQUARE;
        }

      };
      img.onerror = () => resolve(Orientation.LANDSCAPE);
      img.src = url;

      // console.log( this.oriented, 'called for image ( ', this.n, ' ).');
      console.log('detectImageOrientation of', this.oriented, 'called for image ( ', this.n, ' ).');
      this.n++;

    });

    // return new Promise((resolve) => {
    //   const img = new Image();
    //   img.onload = () => {

    //     // const ratio = img.width / img.height;
    //     // if (Math.abs(ratio - 1) < 0.1) {
    //     //   resolve('square');
    //     //   this.oriented = 'square';
    //     // } else if (ratio > 1) {
    //     //   resolve('landscape');
    //     //   this.oriented = 'landscape';
    //     // } else {
    //     //   resolve('portrait');
    //     //   this.oriented = 'portrait';
    //     // }

    //     const w = dUrl.searchParams.get('w') as unknown as number;
    //     const h = dUrl.searchParams.get('h') as unknown as number;

    //     console.log('Image dimensions from URL params: W=', w, ' H=', h); 

    //     if (w > h) {
    //       resolve('landscape');
    //       this.oriented = 'landscape';
    //     } else if (w < h) {
    //       resolve('portrait');
    //       this.oriented = 'portrait';
    //     } else {
    //       resolve('square');
    //       this.oriented = 'square';
    //     }

    //     this.n++;
    //   };
    //   img.onerror = () => resolve('landscape');
    //   img.src = url;
          
    //   console.log( this.oriented, 'called for image ( ', this.n, ' ).');
    //   // console.log('detectImageOrientation of', this.oriented, 'called for image ( ', this.n, ' ).');

    // });
  }

}
