import { Component, effect, EventEmitter, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { UserInterface } from '../core-func/landing-pg-model';

@Component({
  selector: 'odm-landing-pg-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  MatButtonModule,
    MatRadioModule,
    CommonModule
  ],
  template: `
    <form class="uiData-form" [formGroup]="uiDataForm" (submit)="onSubmit()">
      <mat-form-field appearance="fill">
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" required />
        @if(name?.invalid) {
          <mat-error *ngIf="name?.errors?.['required']">Name is required</mat-error>
        }
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Img</mat-label>
        <input matInput formControlName="img" required />
        @if(img?.invalid) {
          <mat-error *ngIf="name?.errors?.['required']">IMG is required</mat-error>
        }
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Desc</mat-label>
        <input matInput formControlName="desc" required />
        @if(desc?.invalid) {
          <mat-error *ngIf="desc?.errors?.['required']">Desc is required</mat-error>
        }
      </mat-form-field>

      <mat-form-field appearance="fill">
        <mat-label>Content</mat-label>
        <input matInput formControlName="content" required />
        @if(content?.invalid) {
          <mat-error *ngIf="content?.errors?.['required']">Content is required</mat-error>
        }
      </mat-form-field>

      <mat-radio-group formControlName="pgLoc" aria-label="Select UserInterface Level">
        <mat-radio-button value="Landing" required>Landing</mat-radio-button>
        <mat-radio-button value="Home">Home</mat-radio-button> 
        <mat-radio-button value="Work">Work</mat-radio-button> 
        <mat-radio-button value="Restaurant">Restaurant</mat-radio-button> 
        <mat-radio-button value="Roadside">Roadside</mat-radio-button>
      </mat-radio-group>
        
      
      <button mat-raised-button color="primary" type="submit" [disabled]="uiDataForm.invalid">
        Add
      </button>
    </form>
  `,
  styles: `
    .uiData-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 2rem;
    }
    .mat-mdc-radio-button ~ .mat-mdc-radio-button {
      margin-right: 16px;
    }
    .mat-mdc-form-field {
      width: 100%;
    }


  `,
})
export class LandingPgForm {
  // private fb = inject(FormBuilder);
  initialState = input<UserInterface>();

  @Output()
  formValuesChanged = new EventEmitter<UserInterface>();
  
  @Output()
  formSubmitted = new EventEmitter<UserInterface>();

  // uiDataForm: FormGroup<any>;

  uiDataForm: FormGroup<any> = this.fb.group({
        name: ['', [Validators.required,  Validators.minLength(3)]],
        img: ['', [Validators.required, Validators.minLength(5)]],  
        desc: ['', [Validators.required, Validators.minLength(10)]],  
        content: ['', [Validators.required, Validators.minLength(10)]],  
        pgLoc: ['landing', [Validators.required]],
      });

  constructor( private fb: FormBuilder) {
  
    effect(() => {
      this.uiDataForm.setValue({
        name: this.initialState()?.name || '',
        img: this.initialState()?.img || '',  
        desc: this.initialState()?.desc || '',  
        content: this.initialState()?.content || '',  
        pgLoc: this.initialState()?.pgLoc || 'landing',
      });

      // this.uiDataForm.valueChanges.subscribe((value: UserInterface) => {
      //   this.formValuesChanged.emit(value);
      // });
    });
  }


  get name() {
    return this.uiDataForm.get('name');
  }

  get img() {
    return this.uiDataForm.get('img');
  }
  
  get desc() {
    return this.uiDataForm.get('desc');
  }

  get content() {
    return this.uiDataForm.get('content');
  }

  get pgLoc() {
    return this.uiDataForm.get('pgLoc');
  } 

  onSubmit() {
    // if (this.uiDataForm.valid) {
      this.formSubmitted.emit(this.uiDataForm.value as UserInterface);
        console.log('UI-DataForm Submitted!', this.uiDataForm.value);
      // this.router.navigate(['/']);
    // } else {
    //   console.log('Form Invalid!', this.uiDataForm.value);
    // } 
  }


}


