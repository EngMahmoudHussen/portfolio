import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css',
})
export class AchievementsComponent {
  achievements = [
    {
      icon: 'fas fa-code',
      title: 'Featured Projects',
      description:
        'Developed multiple responsive and dynamic web applications using Angular 17, TypeScript, and PrimeNG — showcasing front-end development skills.',
      link: 'https://github.com/YourGitHubUsername?tab=repositories',
      linkText: 'View Projects',
    },
    {
      icon: 'fas fa-certificate',
      title: 'NTI Front-End Training',
      description:
        'Currently completing the NTI Front-End Web Development training program, including HTML, CSS, JS, Angular, and a final freelance project.',
      link: '#',
      linkText: 'View Certificate (Coming Soon)',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Introduction to Computer Science',
      description:
        'Successfully completed the Introduction to Computer Science program, covering programming fundamentals, algorithms, and database basics.',
      link: '/assets/images/Certifcate.pdf',
      linkText: 'View Certificate',
    },
  ];
}
