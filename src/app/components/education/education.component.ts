import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  educationList = [
    {
      degree: 'Bachelor of Business Systems and Administration',
      university: 'Mansoura University',
      startYear: '2022',
      endYear: '2026',
      details:
        'Currently pursuing a Bachelor’s degree in Business Systems and Administration at Mansoura University. The program combines business management with information technology, giving me a strong understanding of how digital solutions drive modern organizations. I’ve developed a deep interest in front-end web development — especially building interactive, data-driven applications using Angular.',
    },
    {
      degree: 'Front-End Development Internship',
      university: 'Information Technology Institute (NTI)',
      startYear: '25/8/2025',
      endYear: '25/10/2025',
      details:
        'Completed an intensive Front-End Development program at NTI, focusing on modern web technologies. Gained hands-on experience with HTML5, CSS3, Bootstrap, and JavaScript (ES6). Additionally, practiced UI design using Figma and explored freelance project management to deliver real-world digital solutions.',
    },
  ];
}
