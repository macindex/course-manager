import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';


@Component({
    //selector: 'app-course-list',
    templateUrl: './course-list.component.html'
    //template: '<h2> Course list</h2>'
})

export class CourseListComponent implements OnInit {
    filteredCourses: Course[] = [];
    _courses: Course[] = [];
    _filterBy: string;

    constructor(private courseService: CourseService){ }

    ngOnInit(): void{
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

        set filter(value: string){
	    this._filterBy = value;

	    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

        get filter(){
	    return this._filterBy;
}

    //     this.courses = [
    //     {
    //         id: 1,
    //         name: 'Angular: Forms',
    //         imageUrl: '/assets/images/forms.png',
    //         price: 99.99,
    //         code: 'JXG-9865',
    //         duration: 120,
    //         rating: 5.5,
    //         releaseDate: 'May, 22, 2020'
    //     },
    //     {
    //         id: 2,
    //         name: 'Angular: Forms',
    //         imageUrl: '/assets/images/http.png',
    //         price: 99.99,
    //         code: 'JOK-6869',
    //         duration: 120,
    //         rating: 5.6,
    //         releaseDate: 'May, 22, 2020'
    //     }
    // ]

}
