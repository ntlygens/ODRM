import { Component, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { CarouselItem } from './carousel-item';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'odm-uncontained-data-carousel',
  standalone: false,
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
  `],
})
export class UncontainedDataCarousel implements AfterViewInit, OnDestroy {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ContentChildren(CarouselItem) items!: QueryList<CarouselItem>;

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
