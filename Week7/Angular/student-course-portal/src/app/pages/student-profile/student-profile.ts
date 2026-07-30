import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {

  isEditing = false;

  student = {
    name: 'Sankari',
    department: 'Computer Science Engineering',
    year: 'IV Year',
    college: 'PSNA College of Engineering and Technology',
    email: 'sankari@gmail.com',
    phone: '+91 98765 43210',
    coursesCompleted: 4,
    coursesEnrolled: 6,
    certificates: 2,
    progress: 75
  };

  editProfile() {
    this.isEditing = !this.isEditing;
  }

  saveProfile() {
    this.isEditing = false;
    alert('Profile updated successfully!');
  }
}