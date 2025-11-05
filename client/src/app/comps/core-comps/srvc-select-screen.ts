import { Component, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ODMStateType } from '../landing/landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-srvc-select-screen',
  standalone: false,
  template: `
    <div> <p> Slctr Screen </p> </div>
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
      #srvcSlctrCntnr {
        width: 100%;
        height: 100%;
      }
    `],
})

export class SrvcSelectScreen implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;

  constructor(
    private uis: GuiDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const homeUI = ODMStateType.HOME;
    console.log(`home: ${homeUI}`)
  }

  ngOnInit(): void {
    this.getAllData();
  }

  private getAllData() {
    this.userInterface$ = this.uis.allData$;
    this.uis.getAllData();
  } 

  startUserXp() {
    // this.uis.setStartPg(false);
    this.router.navigate(['u'], {relativeTo: this.route});
  }

  startMrchntXp() {
    // console.log('accessed from web');
    // this.gs.setStartPg(false);
    // window.open(`${this.rmtURL}`, '_self');
   }

}
