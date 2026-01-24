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
        <odm-custom-card
          title="Total Projects"
          description="You have 12 active projects.">
          <mat-icon matCardIcon>folder_open</mat-icon>
        </odm-custom-card>
      </mat-grid-tile>
      <mat-grid-tile>
        <odm-dynamic-card
          [isPlaceholder]="true" >
        </odm-dynamic-card>
        <!-- <odm-custom-card
          title="Total Projects"
          description="You have 12 active projects.">
          <mat-icon matCardIcon>folder_open</mat-icon>
        </odm-custom-card> -->
      </mat-grid-tile>
      <mat-grid-tile>
        <odm-custom-card
          title="Total Projects"
          description="You have 12 active projects.">
          <mat-icon matCardIcon>folder_open</mat-icon>
        </odm-custom-card>
      </mat-grid-tile>
    </mat-grid-list> 
    
    <div style=" margin: 20px 0;">
      <app-dc-grid></app-dc-grid>
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