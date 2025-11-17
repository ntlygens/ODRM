import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ODMStateType, ServiceScreenInterface } from './landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-srvc-select-screen',
  standalone: false,
  template: `
              <mat-card (click)='navigateToDetails([this.tileData?.rte])'>
                <mat-card-title>{{tileData?.name}}</mat-card-title>
                <img mat-card-image src="{{tileData?.img}}">
                <mat-card-content>
                  {{ tileData?.name }} - {{ tileData?.num | currency:'USD' }}
                </mat-card-content>
                  
              </mat-card>

  `,
  styles: [`
      .mdc-card {
        display: flex;
        justify-content: space-between;
        text-align: center;
        // width: 100%;
        // height: 100%;
        // background-size: cover;
        // background-repeat: no-repeat;

        .mat-mdc-card-image {
          width: 100%;
          object-fit: cover;
        }

      }  

    `],
})

export class SrvcSelectScreen implements OnInit {
  @Input() tileData?: ServiceScreenInterface;

  
  tileData$?: ServiceScreenInterface;
  userInterface$ =  {} as WritableSignal<UserInterface[]>;
  srvcScrnInterface$ = {} as WritableSignal<ServiceScreenInterface[]>;

  imageUrl: string = '';
  imageUrls: string[] = [];
  // dynamicBackground: SafeStyle;
  dynamicBackgrounds: SafeStyle[] = [];

  constructor(
    private uis: GuiDataService,
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) {
    // const tileData$?: ServiceScreenInterface;
    // this.tileData$ = this.tileData;

    const homeUI = ODMStateType.HOME;
    // console.log(`home: ${homeUI}`);

    // for (const obj of this.tileData$) {
    // this.dynamicBackground = this.sanitizer.bypassSecurityTrustStyle(`url(${this.tileData['img']})`);
    //     console.log('dynamic back: ', this.dynamicBackground);
    //   }
      // this.tiles$ = this.srvcScrnInterface$();
      // console.log('scrn data: ', this.tileData$.img);
      // this.dynamicBackground = this.sanitizer.bypassSecurityTrustStyle(`url(${this.imageUrl})`);

  }

  ngOnInit(): void {
    // this.getAllUserData();
    // this.tileData$ = this.tileData;
    console.log('scrn data: ', this.tileData?.img);
  }

  // private getAllUserData() {
  //   this.userInterface$ = this.uis.allUserData$;
  //   this.uis.getAllUserData();
  // } 

  startUserXp() {
    // this.uis.setStartPg(false);
    this.router.navigate(['u'], {relativeTo: this.route});
  }

  startMrchntXp() {
    // console.log('accessed from web');
    // this.gs.setStartPg(false);
    // window.open(`${this.rmtURL}`, '_self');
   }

  navigateToDetails(data?: any) {
  // navigateToDetails(itemId: number) {
    // Perform any necessary logic here before navigating
    console.log(`Navigating to details for item: ${data}`);
    this.router.navigate([`${data}`]);
  }

}
