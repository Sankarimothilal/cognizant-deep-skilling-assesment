import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourseIds: string[] = [];

  private enrolledCoursesSubject =
    new BehaviorSubject<string[]>([]);

  enrolledCourses$ =
    this.enrolledCoursesSubject.asObservable();

  private courseMap: {
    [key: string]: string
  } = {
    'Java Programming': '1',
    'Angular Development': '2',
    'Spring Boot': '3',
    'React JS': '4',
    'Microservices': '5'
  };

  enroll(courseId: string): void {

    if (
      !this.enrolledCourseIds.includes(
        courseId
      )
    ) {

      this.enrolledCourseIds.push(
        courseId
      );

      this.sendUpdate();

    }

  }

  enrollByCourseName(
    courseName: string
  ): void {

    const courseId =
      this.courseMap[courseName];

    if (
      courseId &&
      !this.enrolledCourseIds.includes(
        courseId
      )
    ) {

      this.enrolledCourseIds.push(
        courseId
      );

      this.sendUpdate();

    }

  }

  unenroll(
    courseId: string
  ): void {

    this.enrolledCourseIds =
      this.enrolledCourseIds.filter(
        id => id !== courseId
      );

    this.sendUpdate();

  }

  isEnrolled(
    courseId: string
  ): boolean {

    return this.enrolledCourseIds.includes(
      courseId
    );

  }

  getEnrolledCourseIds(): string[] {

    return this.enrolledCourseIds;

  }

  private sendUpdate(): void {

    this.enrolledCoursesSubject.next(
      [...this.enrolledCourseIds]
    );

  }

}