import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Front-End Development',
      icon: 'fa-solid fa-laptop-code',
      description:
        'Building fast, responsive, and dynamic web interfaces using Angular 17, TypeScript, and modern UI frameworks like PrimeNG and Bootstrap.',
    },
    {
      title: 'UI/UX Implementation',
      icon: 'fa-solid fa-pencil-ruler',
      description:
        'Designing and developing responsive user interfaces from scratch using Angular and modern front-end practices, focusing on clean code structure and excellent user experience.',
    },

    {
      title: 'Performance Optimization',
      icon: 'fa-solid fa-rocket',
      description:
        'Improving website speed, accessibility, and SEO performance through efficient code structure and best practices.',
    },
    {
      title: 'Freelance Web Projects',
      icon: 'fa-solid fa-briefcase',
      description:
        'Delivering high-quality web projects for startups and personal brands, from concept to deployment on modern hosting platforms.',
    },
  ];
}
