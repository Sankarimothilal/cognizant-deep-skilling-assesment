import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css'
})
export class ReactiveEnrollment {

  enrollmentForm: FormGroup;

  courses: string[] = [
    'Java Programming',
    'Angular Development',
    'Spring Boot',
    'React JS',
    'Microservices'
  ];

  submitted = false;

  constructor(private fb: FormBuilder) {

    // Create the form inside the constructor
    this.enrollmentForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      course: ['', [
        Validators.required
      ]]
    });

  }

  get name() {
    return this.enrollmentForm.get('name');
  }

  get email() {
    return this.enrollmentForm.get('email');
  }

  get course() {
    return this.enrollmentForm.get('course');
  }

  onSubmit() {

    this.submitted = true;

    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
      return;
    }

    alert(
      'Enrollment Successful!\n\n' +
      'Name: ' + this.enrollmentForm.value.name + '\n' +
      'Email: ' + this.enrollmentForm.value.email + '\n' +
      'Course: ' + this.enrollmentForm.value.course
    );

    console.log(
      'Enrollment Details:',
      this.enrollmentForm.value
    );

    this.enrollmentForm.reset();
    this.submitted = false;
  }

  resetForm() {
    this.enrollmentForm.reset();
    this.submitted = false;
  }

}