import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseInfoComponent } from './course-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipe/replace.pipe';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../star/star.component';

@NgModule({
	declarations: [
	CourseListComponent,
    CourseInfoComponent,
    ReplacePipe,
    StarComponent
    ], 
    imports: [
        CommonModule,
        FormsModule,
		RouterModule.forChild([
	{
      //path: '', redirectTo: 'courses', pathMatch: 'full' //será passado vazio
      path: 'courses/info/:id', component: CourseInfoComponent	
      },
      {
      path: 'courses', component: CourseListComponent
      },
	])
	]
})
export class CourseModule {

}
