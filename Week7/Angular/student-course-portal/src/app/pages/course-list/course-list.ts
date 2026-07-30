import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  constructor(
    private enrollmentService: EnrollmentService
  ) {}

  courses = [

    {
      id: '1',
      name: 'Java Programming',
      icon: '☕',
      duration: '8 Weeks',
      fee: 2500,
      description: 'Learn Java fundamentals, OOP concepts, collections and programming.'
    },

    {
      id: '2',
      name: 'Angular Development',
      icon: '🅰️',
      duration: '6 Weeks',
      fee: 3000,
      description: 'Build modern and interactive web applications using Angular.'
    },

    {
      id: '3',
      name: 'Spring Boot',
      icon: '🌱',
      duration: '7 Weeks',
      fee: 2800,
      description: 'Develop powerful backend applications and REST APIs.'
    },

    {
      id: '4',
      name: 'React JS',
      icon: '⚛️',
      duration: '6 Weeks',
      fee: 2600,
      description: 'Create fast and responsive user interfaces using React.'
    },

    {
      id: '5',
      name: 'Microservices',
      icon: '🔗',
      duration: '8 Weeks',
      fee: 3500,
      description: 'Learn how to build scalable applications using microservices.'
    }

  ];

  enrollCourse(course: any): void {

    this.enrollmentService.enroll(course.id);

    alert(course.name + ' enrolled successfully!');

  }

}