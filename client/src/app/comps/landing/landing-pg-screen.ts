import { Component, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ServiceScreenInterface, ODMStateType  } from './landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-landing-pg-screen',
  standalone: false,
  template: `
      <div> <p> Landing Screen </p> </div>
      <mat-grid-list cols="3" rowHeight="3" gutterSize="2">
        <mat-grid-tile>
          @for (tile of tiles; track tile._id; let idx = $index, e = $even) {
            <li>
              Item #{{ idx }} - {{ tile.name }} - {{ tile.num | currency:'USD' }}
              @if ($last) {
                (Last item!)
              }
            </li>
          } @empty {
            <li>No products available.</li>
          }
          
        </mat-grid-tile>
      </mat-grid-list>
  `,
  styles: ``,
})
export class LandingPgScreen implements OnInit {
  userInterface$ =  {} as WritableSignal<UserInterface[]>;
  srvcScrnInterface$ = {} as WritableSignal<ServiceScreenInterface[]>;
  tiles: ServiceScreenInterface[] = [];

  constructor(private uis: GuiDataService) {}

  ngOnInit(): void {
    this.getAllUserData();
    this.getAllSrvcScrnData();
  }

  private getAllUserData() {
    this.userInterface$ = this.uis.allUserData$;
    this.uis.getAllUserData();
  } 
  
  private getAllSrvcScrnData() {
    this.srvcScrnInterface$ = this.uis.allSrvcScrnData$;
    this.uis.getAllSrvcScrnData();
    this.tiles = this.srvcScrnInterface$();
  } 


}
