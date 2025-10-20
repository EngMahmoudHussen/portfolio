import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Front-End Developer Intern',
      company: 'National Telecommunication Institute (NTI)',
      period: 'March – August 2024',
      description:
        'Worked on developing responsive front-end interfaces using Angular and Bootstrap. Implemented reusable UI components and improved website accessibility and performance. Collaborated with mentors and other trainees to deliver real client-based projects.',
      technologies: ['Angular', 'Bootstrap', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      role: 'Freelance Front-End Developer',
      company: 'Self-Employed',
      period: 'September 2024 – Present',
      description:
        'Delivered custom web projects for small businesses and startups. Focused on building user-friendly, mobile-first websites using Angular, JavaScript, and responsive design principles. Integrated APIs and managed hosting and deployment.',
      technologies: ['Angular 17', 'JavaScript', 'SCSS', 'Figma', 'Netlify'],
    },
  ];
}
