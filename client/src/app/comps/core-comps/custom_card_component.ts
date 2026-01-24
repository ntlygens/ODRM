// custom-card.component.ts
import { Component, Input, ContentChild } from '@angular/core';
import { CardItem } from './dynamic-grid-enum';

// Data model for card
export interface CardData {
  id?: string | number;
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  backgroundColor?: string;
  borderColor?: string;
  metadata?: any;
}

// Directive to mark card header content
@Component({
  selector: 'app-card-header',
  standalone: false,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CardHeaderComponent {}

// Directive to mark card header content
@Component({
  selector: 'app-card-footer',
  standalone: false,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CardFooterComponent {}

// Directive to mark card footer content
@Component({
  selector: 'app-card-content',
  standalone: false,
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
  standalone: false,
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
  selector: 'odm-custom-card',
  standalone: false,
  template: `
    <div
      class="custom-card"
      [class.placeholder]="isPlaceholder"
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

      @if (!imageUrl && hasFooter) {
        <div class="card-footer">
          <ng-content select="app-card-footer"></ng-content>
        </div>
      }
    
      <!-- Actions Section -->
      @if (hasActions) {
        <div class="card-actions">
          <ng-content select="app-card-actions"></ng-content>
        </div>
      }
    </div>
    `,
  styles: [`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    .custom-card {
      height: 100%;
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
      cursor: pointer;
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


    /* from dynamic card below */
    // .dynamic-card {
    //   height: 100%;
    //   display: flex;
    //   flex-direction: column;
    //   overflow: hidden;
    //   transition: transform 0.3s ease, box-shadow 0.3s ease;
    //   cursor: pointer;
    // }


    .custom-card:hover:not(.placeholder) {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .custom-card.placeholder {
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

    /* Dynamic Card Styles Above */



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
    
    .card-footer {
      padding: 0 16px 16px;
    }

    .card-body {
      padding: 16px;
      flex: 1;
    }

    .card-title h3 {
      margin: 0 0 8px;
      font-size: 20px;
      font-weight: 500;
      color: #1a237e;
      letter-spacing: 0.15px;
    }

    .card-subtitle {
      display: block;
      font-size: 14px;
      color: #5c6bc0;
      margin-bottom: 8px;
      font-weight: 400;
    }

    .card-content {
      color: #37474f;
      font-size: 14px;
      line-height: 1.6;
      letter-spacing: 0.25px;
      flex-shrink: 0;
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
  @Input() cardData?: CardItem | null = null;
  @Input() isPlaceholder: boolean = false;

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
  @ContentChild(CardHeaderComponent) hasFooter?: CardFooterComponent;
  @ContentChild(CardActionsComponent) hasActions?: CardActionsComponent;
}


