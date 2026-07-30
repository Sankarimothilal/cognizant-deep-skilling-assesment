import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { ReactiveEnrollment } from './pages/reactive-enrollment/reactive-enrollment';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'courses', component: CourseList },
  {
    path: 'profile',
    component: StudentProfile,
    canActivate: [authGuard]
  },
  { path: 'enroll', component: EnrollmentForm },
  { path: 'reactive', component: ReactiveEnrollment }
];