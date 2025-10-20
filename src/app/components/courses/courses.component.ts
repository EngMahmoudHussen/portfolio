import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  courses = [
    {
      name: 'Introduction To Computer Science',
      place: 'Teaching Planet – American Board, Giza Governorate',
      time: 'April – October 2024',
      details:
        'Successfully completed a 120-hour certified course introducing the fundamentals of computer science. The program covered essential topics such as C Programming, Data Structures, Algorithms, Pointers, Problem-Oriented Programming (POP), Recursion, Python (with OOP and Data Analysis), Databases, Linux Command Line, Web Fundamentals (HTML, CSS3, JavaScript with OOP and CRUD), Bootstrap, and Git & GitHub. This course provided a strong technical foundation and hands-on experience in both programming and web development.',
      certificate: 'assets/images/Certifcate.pdf',
    },
    {
      name: 'Advanced Angular 17 Development',
      place: 'Self-Learning – YouTube (Marwan Abubakr)',
      time: '2025',
      details:
        'Completed an in-depth self-learning program focused on modern Angular 17 development. Covered component architecture, TypeScript, routing, services, dependency injection, reactive forms, RxJS, API integration, and real-world project structuring. This course strengthened my ability to build dynamic, scalable, and maintainable single-page applications with Angular.',
      certificate: '',
    },
  ];
}
