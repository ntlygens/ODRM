import { Component, Input, OnInit, WritableSignal } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ODMStateType, ServiceScreenInterface } from '../landing/landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-srvc-select-screen',
  standalone: false,
  template: `
    <div> <p> Slctr Screen </p> </div>
              <mat-card (click)='navigateToDetails(["{{this.tileData?.rte}}"])'>
                <mat-card-title>
                  Item #{{ tileData?._id}} 
                </mat-card-title>
                <mat-card-content>
                  {{ tileData?.name }} - {{ tileData?.num | currency:'USD' }}
                </mat-card-content>
                  
                <!-- @if ($last) {
                  {{ tile.name }} - {{ tile.num | currency:'USD' }}
                } -->
              </mat-card>
      <!-- mat-card-content>
        <table mat-table [dataSource]="userInterface$()" class="mat-elevation-z8">
          <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef> Name </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.name}} </td>
          </ng-container>

          <ng-container matColumnDef="img">
            <th mat-header-cell *matHeaderCellDef> Image </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.img}} </td>
          </ng-container>

          <ng-container matColumnDef="desc">
            <th mat-header-cell *matHeaderCellDef> Description </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.desc}} </td>
          </ng-container>

          <ng-container matColumnDef="content">
            <th mat-header-cell *matHeaderCellDef> Content </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.content}} </td>
          </ng-container>

          <ng-container matColumnDef="pgLoc">
            <th mat-header-cell *matHeaderCellDef> Page Loc </th>
            <td mat-cell *matCellDef="let userInterface"> {{userInterface.pgLoc}} </td>
          </ng-container>

          <ng-container matColumnDef="actions">
            <th mat-header-cell *matHeaderCellDef> Action </th>
            <td mat-cell *matCellDef="let userInterface">
              <button mat-raised-button [routerLink]="['/edit', userInterface._id]">Edit</button>
              <button mat-raised-button color="warn" (click)="deleteSelectedData(userInterface._id)">Delete</button>
            </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: ['name', 'img', 'desc', 'content', 'pgLoc', 'actions'];"></tr>
        </table>
      </mat-card-content> -->

    <!-- <div id='srvcSlctrCntnr' class="">
      <div id='CTA_div'>
        <button color='warn' (click)='startUserXp(); $event.preventDefault()' routerLinkActive='true' mat-flat-button type='button'>Get Started</button>
          <br>
        <button color='secondary' (click)='startMrchntXp();' routerLinkActive='true' mat-flat-button type='button'>Merchant</button>           
      </div>
    </div>      -->
  `,
  styles: [`
      .mdc-card {
        display: flex;
        justify-content: space-between;
        text-align: center;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;

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
