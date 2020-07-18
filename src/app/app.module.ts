import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { CourseListComponent } from './courses/course-List.component';
//import { StarComponent } from './star/star.component';
//import { ReplacePipe } from './pipe/replace.pipe';
import { RouterModule } from '@angular/router';
//import { NavBarComponent } from './nav-bar/nav-bar.component';
//import { Error404Component } from './components/error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';
import { Error404Component } from './core/components/error-404/error-404.component';
//import { CourseInfoComponent } from './courses/course-info.component';

@NgModule({
  declarations: [
    AppComponent,
    //NavBarComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    CourseModule,
    RouterModule.forRoot([      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
				path: '**', component: Error404Component
			}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
