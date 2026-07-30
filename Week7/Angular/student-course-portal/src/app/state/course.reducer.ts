import { createReducer, on } from '@ngrx/store';
import { initialState } from './course.state';
import * as CourseActions from './course.actions';

export const courseReducer = createReducer(

  initialState,

  on(CourseActions.loadCoursesSuccess, (state, action) => ({

    ...state,

    courses: action.courses

  }))

);