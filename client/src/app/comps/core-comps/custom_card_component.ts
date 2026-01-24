// custom-card.component.ts
import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Directive to mark card header content
@Component({
  selector: 'app-card-header',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CardHeaderComponent {}

// Directive to mark card content
@Component({
  selector: 'app-card-content',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CardContentComponent {}

// Directive to mark card actions
@Component({
  selector: 'app-card-actions',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  `]
})
export class CardActionsComponent {}

// Main custom card component
@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [MatRippleModule],
  template: `
    <div
      class="custom-card"
      [class.clickable]="clickable"
      [class.elevated]="elevated"
      [style.background]="backgroundColor"
      [style.border-color]="borderColor"
      matRipple
      [matRippleDisabled]="!clickable">
    
      <!-- Image Section -->
      @if (imageUrl) {
        <div class="card-image">
          <img [src]="imageUrl" [alt]="imageAlt || 'Card image'" />
          @if (imageOverlay) {
            <div class="image-overlay">
              <ng-content select="app-card-header"></ng-content>
            </div>
          }
        </div>
      }
    
      <!-- Header Section (when no image) -->
      @if (!imageUrl && hasHeader) {
        <div class="card-header">
          <ng-content select="app-card-header"></ng-content>
        </div>
      }
    
      <!-- Content Section -->
      <div class="card-body">
        @if (title) {
          <div class="card-title">
            <h3>{{ title }}</h3>
            @if (subtitle) {
              <span class="card-subtitle">{{ subtitle }}</span>
            }
          </div>
        }
    
        <div class="card-content">
          <ng-content select="app-card-content"></ng-content>
          @if (description) {
            <p>{{ description }}</p>
          }
        </div>
      </div>
    
      <!-- Actions Section -->
      @if (hasActions) {
        <div class="card-actions">
          <ng-content select="app-card-actions"></ng-content>
        </div>
      }
    </div>
    `,
  styles: [`
    .custom-card {
      position: relative;
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      border: 1px solid rgba(200, 220, 235, 0.5);
      background: linear-gradient(135deg, 
        rgba(240, 248, 255, 0.9) 0%, 
        rgba(230, 242, 255, 0.9) 100%);
      overflow: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 
        0 1px 3px rgba(100, 150, 200, 0.08),
        0 1px 2px rgba(100, 150, 200, 0.06);
    }

    .custom-card.elevated {
      box-shadow: 
        0 4px 6px rgba(100, 150, 200, 0.1),
        0 2px 4px rgba(100, 150, 200, 0.08);
    }

    .custom-card.clickable {
      cursor: pointer;
    }

    .custom-card.clickable:hover {
      transform: translateY(-2px);
      box-shadow: 
        0 8px 12px rgba(100, 150, 200, 0.15),
        0 4px 8px rgba(100, 150, 200, 0.1);
      border-color: rgba(150, 200, 240, 0.6);
    }

    .custom-card.clickable:active {
      transform: translateY(0);
    }

    .card-image {
      position: relative;
      width: 100%;
      height: 200px;
      overflow: hidden;
      background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .custom-card.clickable:hover .card-image img {
      transform: scale(1.05);
    }

    .image-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 16px;
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.7) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
      );
      color: white;
    }

    .card-header {
      padding: 16px 16px 0;
    }

    .card-body {
      padding: 16px;
      flex: 1;
    }

    .card-title h3 {
      margin: 0 0 4px;
      font-size: 20px;
      font-weight: 500;
      color: #1a237e;
      letter-spacing: 0.15px;
    }

    .card-subtitle {
      display: block;
      font-size: 14px;
      color: #5c6bc0;
      margin-bottom: 12px;
      font-weight: 400;
    }

    .card-content {
      color: #37474f;
      font-size: 14px;
      line-height: 1.6;
      letter-spacing: 0.25px;
    }

    .card-content p {
      margin: 0;
    }

    .card-actions {
      padding: 8px 16px 16px;
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .card-image {
        height: 160px;
      }
    }
  `]
})
export class CustomCardComponent {
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() imageUrl?: string;
  @Input() imageAlt?: string;
  @Input() imageOverlay = false;
  @Input() clickable = false;
  @Input() elevated = false;
  @Input() backgroundColor?: string;
  @Input() borderColor?: string;

  @ContentChild(CardHeaderComponent) hasHeader?: CardHeaderComponent;
  @ContentChild(CardActionsComponent) hasActions?: CardActionsComponent;
}

// Data model for card
export interface CardData {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  metadata?: any;
}

// Demo component showing usage
@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [
    CustomCardComponent,
    CardHeaderComponent,
    CardContentComponent,
    CardActionsComponent,
    MatButtonModule,
    MatIconModule
],
  template: `
    <div class="demo-container">
      <h1>Custom Card Component Demo</h1>
    
      <div class="demo-section">
        <h2>Basic Cards with Data Input</h2>
        <div class="card-grid">
          @for (card of basicCards; track card) {
            <app-custom-card
              [title]="card.title"
              [description]="card.description"
              [clickable]="true"
              [elevated]="true">
              <app-card-actions>
                <button mat-button color="primary">Learn More</button>
                <button mat-icon-button>
                  <mat-icon>favorite_border</mat-icon>
                </button>
              </app-card-actions>
            </app-custom-card>
          }
        </div>
      </div>
    
      <div class="demo-section">
        <h2>Cards with Images</h2>
        <div class="card-grid">
          @for (card of imageCards; track card) {
            <app-custom-card
              [title]="card.title"
              [subtitle]="card.subtitle"
              [description]="card.description"
              [imageUrl]="card.imageUrl"
              [imageAlt]="card.imageAlt"
              [clickable]="true">
              <app-card-actions>
                <button mat-raised-button color="primary">View Details</button>
                <button mat-button>Share</button>
              </app-card-actions>
            </app-custom-card>
          }
        </div>
      </div>
    
      <div class="demo-section">
        <h2>Cards with Image Overlay</h2>
        <div class="card-grid">
          @for (card of overlayCards; track card) {
            <app-custom-card
              [imageUrl]="card.imageUrl"
              [imageOverlay]="true"
              [clickable]="true"
              [elevated]="true">
              <app-card-header>
                <h3 style="margin: 0; font-size: 24px;">{{ card.title }}</h3>
                <p style="margin: 4px 0 0; opacity: 0.9;">{{ card.subtitle }}</p>
              </app-card-header>
              <app-card-content>
                <p>{{ card.description }}</p>
              </app-card-content>
              <app-card-actions>
                <button mat-button style="color: white;">
                  <mat-icon>play_arrow</mat-icon>
                  Play
                </button>
                <button mat-icon-button style="color: white;">
                  <mat-icon>bookmark_border</mat-icon>
                </button>
              </app-card-actions>
            </app-custom-card>
          }
        </div>
      </div>
    
      <div class="demo-section">
        <h2>Custom Styled Cards</h2>
        <div class="card-grid">
          @for (card of customCards; track card) {
            <app-custom-card
              [title]="card.title"
              [subtitle]="card.subtitle"
              [description]="card.description"
              [backgroundColor]="card.metadata?.bgColor"
              [borderColor]="card.metadata?.borderColor"
              [elevated]="true">
              <app-card-content>
                <div style="display: flex; align-items: center; gap: 12px; margin-top: 8px;">
                  <mat-icon [style.color]="card.metadata?.iconColor">
                    {{ card.metadata?.icon }}
                  </mat-icon>
                  <span style="font-weight: 500;">{{ card.metadata?.label }}</span>
                </div>
              </app-card-content>
              <app-card-actions>
                <button mat-stroked-button [color]="card.metadata?.buttonColor">
                  Action
                </button>
              </app-card-actions>
            </app-custom-card>
          }
        </div>
      </div>
    
      <div class="demo-section">
        <h2>Compact Cards</h2>
        <div class="card-grid compact">
          @for (card of compactCards; track card) {
            <app-custom-card
              [title]="card.title"
              [description]="card.description"
              [clickable]="true">
            </app-custom-card>
          }
        </div>
      </div>
    </div>
    `,
  styles: [`
    .demo-container {
      padding: 24px;
      max-width: 1400px;
      margin: 0 auto;
      background: linear-gradient(135deg, #f5f7fa 0%, #e8f0f7 100%);
      min-height: 100vh;
    }

    h1 {
      color: #1a237e;
      margin-bottom: 32px;
      font-size: 32px;
      font-weight: 400;
    }

    h2 {
      color: #3949ab;
      margin-bottom: 16px;
      font-size: 24px;
      font-weight: 400;
    }

    .demo-section {
      margin-bottom: 48px;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 24px;
    }

    .card-grid.compact {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 16px;
    }

    @media (max-width: 768px) {
      .card-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CardDemoComponent {
  basicCards: CardData[] = [
    {
      id: 1,
      title: 'Ocean Breeze',
      description: 'Experience the calming sensation of coastal winds and gentle waves rolling onto sandy shores.'
    },
    {
      id: 2,
      title: 'Mountain Vista',
      description: 'Discover breathtaking views from peaks that touch the sky, where eagles soar and clouds drift by.'
    },
    {
      id: 3,
      title: 'Forest Path',
      description: 'Wander through ancient woodlands where sunlight filters through emerald canopies.'
    }
  ];

  imageCards: CardData[] = [
    {
      id: 4,
      title: 'Sunset Paradise',
      subtitle: 'Nature Photography',
      description: 'Golden hour captures the magic where sky meets earth in brilliant hues.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      imageAlt: 'Beautiful sunset over mountains'
    },
    {
      id: 5,
      title: 'Urban Dreams',
      subtitle: 'City Life',
      description: 'The pulse of modern life captured in steel, glass, and endless possibilities.',
      imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      imageAlt: 'Modern city skyline'
    },
    {
      id: 6,
      title: 'Serene Waters',
      subtitle: 'Landscape',
      description: 'Peaceful lakes reflecting the beauty of nature in perfect stillness.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      imageAlt: 'Calm lake with mountains'
    }
  ];

  overlayCards: CardData[] = [
    {
      id: 7,
      title: 'Adventure Awaits',
      subtitle: 'Explore the Unknown',
      description: 'Journey into uncharted territories and create unforgettable memories.',
      imageUrl: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop'
    },
    {
      id: 8,
      title: 'Digital Innovation',
      subtitle: 'Technology & Future',
      description: 'Shaping tomorrow with cutting-edge solutions and creative thinking.',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
    }
  ];

  customCards: CardData[] = [
    {
      id: 9,
      title: 'Success Metrics',
      subtitle: 'Performance Dashboard',
      description: 'Track your progress with detailed analytics and insights.',
      metadata: {
        bgColor: 'linear-gradient(135deg, rgba(232, 245, 233, 0.9) 0%, rgba(200, 230, 201, 0.9) 100%)',
        borderColor: 'rgba(129, 199, 132, 0.5)',
        icon: 'trending_up',
        iconColor: '#2e7d32',
        label: '+15.3% Growth',
        buttonColor: 'primary'
      }
    },
    {
      id: 10,
      title: 'Team Collaboration',
      subtitle: 'Workspace Tools',
      description: 'Connect with your team and boost productivity together.',
      metadata: {
        bgColor: 'linear-gradient(135deg, rgba(243, 229, 245, 0.9) 0%, rgba(225, 190, 231, 0.9) 100%)',
        borderColor: 'rgba(186, 104, 200, 0.5)',
        icon: 'groups',
        iconColor: '#7b1fa2',
        label: '24 Active Members',
        buttonColor: 'accent'
      }
    },
    {
      id: 11,
      title: 'Notifications',
      subtitle: 'Stay Updated',
      description: 'Never miss important updates and announcements.',
      metadata: {
        bgColor: 'linear-gradient(135deg, rgba(255, 243, 224, 0.9) 0%, rgba(255, 224, 178, 0.9) 100%)',
        borderColor: 'rgba(255, 167, 38, 0.5)',
        icon: 'notifications_active',
        iconColor: '#ef6c00',
        label: '3 New Messages',
        buttonColor: 'warn'
      }
    }
  ];

  compactCards: CardData[] = [
    { id: 12, title: 'Quick Link 1', description: 'Fast access to your favorite features.' },
    { id: 13, title: 'Quick Link 2', description: 'Navigate efficiently with shortcuts.' },
    { id: 14, title: 'Quick Link 3', description: 'Streamline your workflow today.' },
    { id: 15, title: 'Quick Link 4', description: 'Discover powerful tools at your fingertips.' }
  ];
}