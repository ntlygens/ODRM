import { Component, OnInit, WritableSignal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInterface, ServiceScreenInterface, ODMStateType  } from './landing-pg-model';
import { GuiDataService } from '../../core-func/gui-data-service';

@Component({
  selector: 'odm-landing-pg-screen',
  standalone: false,
  template: `
      <div> <p> Landing Screen </p> </div>
      <mat-grid-list cols="2" gutterSize="4">
          @for (tile of tiles; track tile._id; let idx = $index, e = $even) {
            <mat-grid-tile>
              <mat-card>
                <mat-card-title>
                  Item #{{ idx }} 
                </mat-card-title>
                <mat-card-content>
                  {{ tile.name }} - {{ tile.num | currency:'USD' }}
                </mat-card-content>
                  
                @if ($last) {
                  (Last item!)
                }
              </mat-card>
            </mat-grid-tile>

          } @empty {
            <mat-card><mat-card-content> products available.</mat-card-content></mat-card>
          }
          
      </mat-grid-list>
  `,
  styles: [`
    
    .mdc-card {
      display: flex;
      justify-content: space-between;
      text-align: center;
      width: 100%;
      height: 100%;
    }  

  `],
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
