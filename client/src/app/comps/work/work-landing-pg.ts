import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageUrl?: string;
}

@Component({
  selector: 'odm-work-landing-pg',
  standalone: false,
  template: `
    <p>
      work-landing-pg works!
    </p>
    <app-jumbotron></app-jumbotron>
    <div style="gap: 10px; justify-content: space-between; margin: 20px 0;">
      <mat-grid-list cols="4" rowHeight="100px" gutterSize="10px">
        @for (tile of tiles; track tile) {
        <mat-grid-tile
          [colspan]="tile.cols"
          [rowspan]="tile.rows"
          [style.background-color]="tile.color"
          [style.background-image]="tile.imageUrl ? 'url(' + tile.imageUrl + ')' : 'none'"
          [style.background-size]="tile.imageUrl ? 'cover' : 'initial'"
          [style.background-position]="tile.imageUrl ? 'center' : 'initial'"
          
          >{{tile.text}}</mat-grid-tile>
        }  
      </mat-grid-list>
    
    
    
    <!-- <app-custom-card
        style="flex: 2;"
        title="Work Landing Page Card"
        subtitle="This is a custom card component used in the Work Landing Page."  
        description="this is the description of the content contained with the card that is being dispoalyed."
        imageUrl="./assets/core-assets/imgs/merchant_gui/Seafood_Btn.png"
      ></app-custom-card>
      <app-custom-card
        style="flex: 1;"
        title="Another Workhard here are."
      ></app-custom-card>
      <app-custom-card
        style="flex: 1;"
        title="Another Workhard here are."
      ></app-custom-card>
      <app-custom-card
        style="flex: 1;"
        title="Another Workhard here are."
      ></app-custom-card> -->
    </div>
  `,
  styles: ``,
})
export class WorkLandingPg {
   tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'},    
  ];
}
