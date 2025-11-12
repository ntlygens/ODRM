import { Component, Input, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'odm-data-carousel',
  standalone: false,
  template: `
    <div class="carousel-container">
      <div class="carousel-wrapper">
        <div 
          #track
          class="carousel-track"
          [style.transform]="'translateX(' + translateX + 'px)'"
          cdkDrag
          [cdkDragFreeDragPosition]="dragPosition"
          (cdkDragEnded)="onDragEnd($event)"
          [cdkDragConstrainPosition]="constrainDragPosition">
          <div 
            class="carousel-slide" 
            *ngFor="let item of items; let i = index"
            [class.active]="i === currentIndex">
            <img [src]="item.image" [alt]="item.title || 'Carousel image'">
            <div class="carousel-content" *ngIf="item.title || item.description">
              <h3 *ngIf="item.title">{{ item.title }}</h3>
              <p *ngIf="item.description">{{ item.description }}</p>
            </div>
          </div>
        </div>

        <button 
          mat-icon-button 
          class="carousel-nav prev"
          (click)="previous()"
          [disabled]="currentIndex === 0 && !loop"
          *ngIf="showNavigation">
          <mat-icon>chevron_left</mat-icon>
        </button>

        <button 
          mat-icon-button 
          class="carousel-nav next"
          (click)="next()"
          [disabled]="currentIndex === items.length - 1 && !loop"
          *ngIf="showNavigation">
          <mat-icon>chevron_right</mat-icon>
        </button>
      </div>

      <div class="carousel-indicators" *ngIf="showIndicators">
        <button
          *ngFor="let item of items; let i = index"
          class="indicator"
          [class.active]="i === currentIndex"
          (click)="goToSlide(i)"
          [attr.aria-label]="'Go to slide ' + (i + 1)">
        </button>
      </div>
    </div>
  `,
  styles: [`
    .carousel-container {
      width: 100%;
      position: relative;
    }

    .carousel-wrapper {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .carousel-track {
      display: flex;
      transition: transform 0.3s ease-in-out;
      cursor: grab;
    }

    .carousel-track:active {
      cursor: grabbing;
    }

    .carousel-slide {
      min-width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f5f5f5;
    }

    .carousel-slide img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: block;
    }

    .carousel-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      color: white;
      padding: 24px;
    }

    .carousel-content h3 {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: 500;
    }

    .carousel-content p {
      margin: 0;
      font-size: 14px;
      opacity: 0.9;
    }

    .carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.9);
      z-index: 10;
      transition: all 0.3s ease;
    }

    .carousel-nav:hover:not(:disabled) {
      background: white;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .carousel-nav:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .carousel-nav.prev {
      left: 16px;
    }

    .carousel-nav.next {
      right: 16px;
    }

    .carousel-indicators {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 16px;
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: none;
      background: #ddd;
      cursor: pointer;
      padding: 0;
      transition: all 0.3s ease;
    }

    .indicator:hover {
      background: #bbb;
    }

    .indicator.active {
      background: #3f51b5;
      width: 32px;
      border-radius: 6px;
    }  
  `],
})
export class DataCarousel implements OnInit, OnDestroy, AfterViewInit {
  @Input() items: CarouselItem[] = [];
  @Input() autoPlay = false;
  @Input() interval = 3000;
  @Input() loop = true;
  @Input() showNavigation = true;
  @Input() showIndicators = true;

  @ViewChild('track', { read: ElementRef }) track!: ElementRef;

  currentIndex = 0;
  translateX = 0;
  dragPosition = { x: 0, y: 0 };
  private autoPlayInterval?: number;
  private containerWidth = 0;

  ngOnInit() {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngAfterViewInit() {
    this.containerWidth = this.track.nativeElement.parentElement.offsetWidth;
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    } else if (this.loop) {
      this.currentIndex = 0;
    }
    this.updatePosition();
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.loop) {
      this.currentIndex = this.items.length - 1;
    }
    this.updatePosition();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.updatePosition();
  }

  onDragEnd(event: CdkDragEnd) {
    const threshold = 50;
    const dragDistance = event.distance.x;

    if (dragDistance < -threshold) {
      this.next();
    } else if (dragDistance > threshold) {
      this.previous();
    }

    // Reset drag position
    this.dragPosition = { x: 0, y: 0 };
  }

  constrainDragPosition = (point: { x: number; y: number }) => {
    return { x: point.x, y: 0 };
  };

  private updatePosition() {
    this.containerWidth = this.track.nativeElement.parentElement.offsetWidth;
    this.translateX = -this.currentIndex * this.containerWidth;
    this.dragPosition = { x: 0, y: 0 };
    
    if (this.autoPlay) {
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  private startAutoPlay() {
    this.autoPlayInterval = window.setInterval(() => {
      this.next();
    }, this.interval);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
}

export interface CarouselItem {
  image: string;
  title?: string;
  description?: string;
}

