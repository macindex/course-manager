import { Component, OnInit } from '@angular/core';
import { Course } from './course';


@Component({
    selector: 'app-course-list',
    templateUrl: 'course-list.component.html'
    //template: '<h2> Course list</h2>'
})

export class CourseListComponent implements OnInit {
    courses: Course [] = [];

    ngOnInit(): void{
        this.courses = [
        {
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '/assets/images/forms.png',
            price: 99.99,
            code: 'JXG-9865',
            duration: 120,
            rating: 5.5,
            releaseDate: 'May, 22, 2020'
        },
        {
            id: 2,
            name: 'Angular: Forms',
            imageUrl: '/assets/images/http.png',
            price: 99.99,
            code: 'JOK-6869',
            duration: 120,
            rating: 5.6,
            releaseDate: 'May, 22, 2020'
        }
    ]

    }
}