import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enrollment-form.html',
  styleUrl: './enrollment-form.css'
})
export class EnrollmentForm {

  student = {
    name: '',
    email: '',
    course: ''
  };

  submitted = false;

  constructor(
    private enrollmentService: EnrollmentService
  ) {}

  enroll(): void {

    if (
      this.student.name.trim() !== '' &&
      this.student.email.trim() !== '' &&
      this.student.course !== ''
    ) {

      this.enrollmentService.enrollByCourseName(
        this.student.course
      );

      this.submitted = true;

      console.log(
        'Enrollment successful:',
        this.student
      );

    }

  }

  resetForm(): void {

    this.student = {
      name: '',
      email: '',
      course: ''
    };

    this.submitted = false;

  }

}