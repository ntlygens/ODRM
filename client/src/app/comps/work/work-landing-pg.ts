import { Component } from '@angular/core';
import { JumbotronDataModel } from '../core-comps/jumbo-tron';


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
    <odm-jumbotron class="jumbotronBanner" [data]="jumbotronBannerData"></odm-jumbotron>
    <mat-grid-list style="width: 100%; height: 100%;" cols="4" gutterSize="8" rowHeight="2:1">
      <mat-grid-tile>
        <app-custom-card
          title="Total Projects"
          description="You have 12 active projects.">
          <mat-icon matCardIcon>folder_open</mat-icon>
        </app-custom-card>
      </mat-grid-tile>
      <mat-grid-tile>
        <app-custom-card
          title="Total Projects"
          description="You have 12 active projects.">
          <mat-icon matCardIcon>folder_open</mat-icon>
        </app-custom-card>
      </mat-grid-tile>
      <mat-grid-tile>
        <app-custom-card
          title="Total Projects"
          description="You have 12 active projects.">
          <mat-icon matCardIcon>folder_open</mat-icon>
        </app-custom-card>
      </mat-grid-tile>
    </mat-grid-list> 
    <div style="gap: 10px; justify-content: space-between; margin: 20px 0;">
      <app-dc-grid></app-dc-grid>
      <!-- <mat-grid-list cols="4" rowHeight="100px" gutterSize="10px">
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
    
      <app-custom-card
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
  styles: [`
    .jumbotronBanner {
      text-align: center;
      // display: flex;
      // flex-direction: column;
      // justify-content: center;
      // align-items: center;
      // height: 300px;
      // margin-bottom: 20px;
    }

  `],
})
export class WorkLandingPg {
   tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop'},    
  ];
  
  jumbotronBannerData: JumbotronDataModel = {
    title: 'Welcome to the Work Landing Page',
    subtitle: 'Your gateway to productivity',
    imagePosition: 'background',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=400&fit=crop',
    overlay: false,
    overlayOpacity: 0.5,
  };
}