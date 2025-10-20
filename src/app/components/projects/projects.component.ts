import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'E-Commerce Product Page',
      description:
        'A modern, responsive e-commerce product page with interactive image gallery, cart management, and elegant layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/ecommerce.png',
      link: 'https://engmahmoudhussen.github.io/ecommerce-product-page/',
    },
    {
      title: 'Cats Adoption Website',
      description:
        'A heartwarming website dedicated to cat adoption, built with HTML, CSS, and JavaScript. Features adoption listings and a responsive gallery.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/cats.png',
      link: 'https://engmahmoudhussen.github.io/pets/',
    },
    {
      title: 'Calculator App',
      description:
        'A responsive calculator web app built using HTML, CSS, and JavaScript. Designed for clean UI and smooth functionality.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/calculator.png',
      link: 'https://engmahmoudhussen.github.io/project-calacaletor/',
    },
    {
      title: 'Petto Palace',
      description:
        'A modern pet store landing page showcasing products and adoption info. Built with responsive design and smooth animations.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'assets/images/petto.png',
      link: 'https://engmahmoudhussen.github.io/pato-responsiv/',
    },
  ];
}
