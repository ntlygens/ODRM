import { Component, effect, EventEmitter, Output, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { Employee } from '../core-func/employee-model';

@Component({
  selector: 'odm-employee-form',
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
    <form class="employee-form" [formGroup]="employeeForm" (submit)="onSubmit()">
      <mat-form-field appearance="fill">
        <mat-label>Name</mat-label>
        <input matInput formControlName="name" required />
        @if(name?.invalid) {
          <mat-error *ngIf="name?.errors?.['required']">Position is required</mat-error>
        }
      </mat-form-field>
      
      <mat-form-field appearance="fill">
        <mat-label>Position</mat-label>
        <input matInput formControlName="position" required />
        @if (position?.invalid) {
          <mat-error *ngIf="position?.errors?.['required']">Position is required</mat-error>
        }
      </mat-form-field>
      
      <mat-radio-group formControlName="level" aria-label="Select Employee Level">
        <mat-radio-button value="junior" required>Junior</mat-radio-button>
        <mat-radio-button value="mid">Mid</mat-radio-button> 
        <mat-radio-button value="senior">Senior</mat-radio-button>
      </mat-radio-group>
        
      
      <button mat-raised-button color="primary" type="submit" [disabled]="employeeForm.invalid">
        Add
      </button>
    </form>
  `,
  styles: `
    .employee-form {
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
export class EmployeeForm {
  // private fb = inject(FormBuilder);
  initialState = input<Employee>();

  @Output()
  formValuesChanged = new EventEmitter<Employee>();
  
  @Output()
  formSubmitted = new EventEmitter<Employee>();

  // employeeForm: FormGroup<any>;

  employeeForm: FormGroup<any> = this.fb.group({
        name: ['', [Validators.required,  Validators.minLength(3)]],
        position: ['', [Validators.required, Validators.minLength(5)]],  
        level: ['junior', [Validators.required]],
      });

  constructor( private fb: FormBuilder) {
  
    effect(() => {
      this.employeeForm.setValue({
        name: this.initialState()?.name || '',
        position: this.initialState()?.position || '',
        level: this.initialState()?.level || 'junior'
      });

      // this.employeeForm.valueChanges.subscribe((value: Employee) => {
      //   this.formValuesChanged.emit(value);
      // });
    });
  }


  get name() {
    return this.employeeForm.get('name');
  }

  get position() {
    return this.employeeForm.get('position');
  }

  get level() {
    return this.employeeForm.get('level');
  } 

  onSubmit() {
    // if (this.employeeForm.valid) {
      this.formSubmitted.emit(this.employeeForm.value as Employee);
        console.log('Form Submitted!', this.employeeForm.value);
      // this.router.navigate(['/']);
    // } else {
    //   console.log('Form Invalid!', this.employeeForm.value);
    // } 
  }


}


