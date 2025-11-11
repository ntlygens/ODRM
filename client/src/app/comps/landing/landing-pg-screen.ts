import { Component, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ServiceScreenInterface, ODMStateType  } from './landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';


@Component({
  selector: 'odm-landing-pg-screen',
  standalone: false,
  template: `
      <div> <p> Landing Screen </p> </div>
      <mat-grid-list style="width: 100%; height: 100%;" cols="2" gutterSize="4">
        @for (tile of tiles$; track tile._id; let idx = $index, e = $even) {
            <mat-grid-tile>
              <odm-srvc-select-screen [tileData]='tile'></odm-srvc-select-screen>
            </mat-grid-tile>

          } @empty {
            <mat-card><mat-card-content>no products available.</mat-card-content></mat-card>
          }

        <!-- <ng-container *ngIf="!tiles$ || tiles$.length === 0">
          <mat-card><mat-card-content> products available.</mat-card-content></mat-card>
        </ng-container> -->
      </mat-grid-list>
  `,
  styles: [``],
})
export class LandingPgScreen implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;
  srvcScrnInterface$ = {} as WritableSignal<ServiceScreenInterface[]>;
  
  tiles$: ServiceScreenInterface[] = [];
  tileBackgrounds$: ServiceScreenInterface[] = [];

  constructor(
    private uis: GuiDataService,
    private sanitizer: DomSanitizer,
  ) {
      // const dynamicBackground: SafeStyle;
      this.getAllSrvcScrnData();
      
      // for (const obj of this.tiles$) {
      //   this.dynamicBackground = this.sanitizer.bypassSecurityTrustStyle(`url(${obj.img})`);
      //   console.log('dynamic back: ', this.dynamicBackground);
      // }
      // // this.tiles$ = this.srvcScrnInterface$();

      // // this.dynamicBackground = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageUrl})`);
  }

  ngOnInit(): void {
    this.getAllUserData();
    this.getAllSrvcScrnData();
  }

  // private sntzeBackgroundImgs(objs: ServiceScreenInterface[]) {
  //   for (const obj of objs) {
  //     this.dynamicBackground = this.sanitizer.bypassSecurityTrustStyle(`url(${obj.img})`);
  //     console.log('dynamic back: ', this.dynamicBackground);
  //   }
  //   this.tiles$ = this.srvcScrnInterface$();

    
  // }

  private getAllUserData() {
    this.userInterface$ = this.uis.allUserData$;
    this.uis.getAllUserData();
  } 
  
  private getAllSrvcScrnData() {
    this.srvcScrnInterface$ = this.uis.allSrvcScrnData$;
    this.uis.getAllSrvcScrnData();
    this.tiles$ = this.srvcScrnInterface$();
    // this.sntzeBackgroundImgs(this.srvcScrnInterface$());
  } 

  trackById(index: number, item: ServiceScreenInterface) {
    return item && item._id;
  }

  // private changeImage(newUrl: string) {
  //   this.imageUrl = newUrl;
  //   this.dynamicBackground = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageUrl})`);
  // }


}
