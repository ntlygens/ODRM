import { Component, OnInit } from '@angular/core';
import { CARD_DATA } from './dynamic-grid-enum';

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