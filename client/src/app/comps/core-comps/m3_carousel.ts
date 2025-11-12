// carousel.component.ts
import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  template: '<ng-content></ng-content>',
  styles: [`
    :host {
      display: block;
      flex: 0 0 auto;
      scroll-snap-align: start;
    }
  `]
})
export class CarouselItemComponent {}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, CdkScrollable],
  template: `
    <div class="carousel-container">
      <button 
        mat-icon-button 
        class="carousel-nav prev"
        [disabled]="!canScrollPrev"
        (click)="scrollPrev()"
        *ngIf="showNavigation">
        <mat-icon>chevron_left</mat-icon>
      </button>

      <div 
        #scrollContainer
        class="carousel-scroll-container"
        cdkScrollable
        (scroll)="onScroll()">
        <div class="carousel-content">
          <ng-content></ng-content>
        </div>
      </div>

      <button 
        mat-icon-button 
        class="carousel-nav next"
        [disabled]="!canScrollNext"
        (click)="scrollNext()"
        *ngIf="showNavigation">
        <mat-icon>chevron_right</mat-icon>
      </button>
    </div>

    <div class="carousel-indicators" *ngIf="showIndicators">
      <button
        *ngFor="let page of pages; let i = index"
        class="indicator"
        [class.active]="i === currentPage"
        (click)="scrollToPage(i)"
        [attr.aria-label]="'Go to page ' + (i + 1)">
      </button>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .carousel-container {
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .carousel-scroll-container {
      flex: 1;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .carousel-scroll-container::-webkit-scrollbar {
      display: none;
    }

    .carousel-content {
      display: flex;
      gap: 16px;
      padding: 8px 0;
    }

    .carousel-nav {
      flex-shrink: 0;
      z-index: 1;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .carousel-nav:disabled {
      opacity: 0.3;
    }

    .carousel-indicators {
      display: flex;
      justify-content: center;
      gap: 8px;
      margin-top: 16px;
    }

    .indicator {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: none;
      background: rgba(0, 0, 0, 0.2);
      cursor: pointer;
      padding: 0;
      transition: all 0.3s ease;
    }

    .indicator:hover {
      background: rgba(0, 0, 0, 0.4);
    }

    .indicator.active {
      width: 24px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.6);
    }
  `]
})
export class CarouselComponent implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ContentChildren(CarouselItemComponent) items!: QueryList<CarouselItemComponent>;

  @Input() itemWidth = 200;
  @Input() visibleItems = 3;
  @Input() showNavigation = true;
  @Input() showIndicators = true;
  @Input() autoScroll = false;
  @Input() autoScrollInterval = 3000;

  canScrollPrev = false;
  canScrollNext = false;
  currentPage = 0;
  pages: number[] = [];

  private autoScrollTimer?: number;
  private resizeObserver?: ResizeObserver;

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateScrollState();
      this.calculatePages();
      
      if (this.autoScroll) {
        this.startAutoScroll();
      }

      // Watch for container resize
      this.resizeObserver = new ResizeObserver(() => {
        this.updateScrollState();
        this.calculatePages();
      });
      this.resizeObserver.observe(this.scrollContainer.nativeElement);
    });
  }

  ngOnDestroy() {
    this.stopAutoScroll();
    this.resizeObserver?.disconnect();
  }

  onScroll() {
    this.updateScrollState();
    this.updateCurrentPage();
    
    if (this.autoScroll) {
      this.resetAutoScroll();
    }
  }

  scrollPrev() {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  scrollNext() {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  scrollToPage(pageIndex: number) {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = container.clientWidth * pageIndex * 0.8;
    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  }

  private updateScrollState() {
    const container = this.scrollContainer.nativeElement;
    this.canScrollPrev = container.scrollLeft > 0;
    this.canScrollNext = 
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1;
  }

  private updateCurrentPage() {
    const container = this.scrollContainer.nativeElement;
    const pageWidth = container.clientWidth * 0.8;
    this.currentPage = Math.round(container.scrollLeft / pageWidth);
  }

  private calculatePages() {
    const container = this.scrollContainer.nativeElement;
    const totalWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;
    const pageCount = Math.ceil(totalWidth / (visibleWidth * 0.8));
    this.pages = Array.from({ length: pageCount }, (_, i) => i);
  }

  private startAutoScroll() {
    this.autoScrollTimer = window.setInterval(() => {
      if (this.canScrollNext) {
        this.scrollNext();
      } else {
        // Reset to beginning
        this.scrollContainer.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, this.autoScrollInterval);
  }

  private stopAutoScroll() {
    if (this.autoScrollTimer) {
      clearInterval(this.autoScrollTimer);
    }
  }

  private resetAutoScroll() {
    this.stopAutoScroll();
    if (this.autoScroll) {
      this.startAutoScroll();
    }
  }
}

// Example usage component
@Component({
  selector: 'app-carousel-demo',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CarouselItemComponent, MatButtonModule],
  template: `
    <div class="demo-container">
      <h2>Multi-Browse Carousel Demo</h2>
      
      <app-carousel 
        [showNavigation]="true"
        [showIndicators]="true"
        [autoScroll]="false">
        <app-carousel-item *ngFor="let item of carouselItems" class="carousel-card">
          <div class="card-content">
            <div class="card-image" [style.background]="item.color">
              <span class="card-number">{{ item.id }}</span>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <button mat-button color="primary">Learn More</button>
          </div>
        </app-carousel-item>
      </app-carousel>
    </div>
  `,
  styles: [`
    .demo-container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }

    h2 {
      margin-bottom: 24px;
      color: #333;
    }

    .carousel-card {
      width: 280px;
      min-width: 280px;
    }

    .card-content {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    }

    .card-image {
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-number {
      font-size: 48px;
      font-weight: bold;
      color: white;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .card-content h3 {
      margin: 16px;
      font-size: 18px;
      font-weight: 500;
    }

    .card-content p {
      margin: 0 16px 16px;
      color: #666;
      font-size: 14px;
    }

    .card-content button {
      margin: 0 16px 16px;
    }
  `]
})
export class CarouselDemoComponent {
  carouselItems = [
    { id: 1, title: 'Item One', description: 'Description for first item', color: '#6366f1' },
    { id: 2, title: 'Item Two', description: 'Description for second item', color: '#8b5cf6' },
    { id: 3, title: 'Item Three', description: 'Description for third item', color: '#ec4899' },
    { id: 4, title: 'Item Four', description: 'Description for fourth item', color: '#f43f5e' },
    { id: 5, title: 'Item Five', description: 'Description for fifth item', color: '#f97316' },
    { id: 6, title: 'Item Six', description: 'Description for sixth item', color: '#eab308' },
    { id: 7, title: 'Item Seven', description: 'Description for seventh item', color: '#22c55e' },
    { id: 8, title: 'Item Eight', description: 'Description for eighth item', color: '#14b8a6' },
  ];
}