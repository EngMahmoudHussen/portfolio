import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    { name: 'HTML5', icon: 'pi pi-code', color: '#e44d26' },
    { name: 'CSS3', icon: 'pi pi-palette', color: '#264de4' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'pi pi-cog', color: '#007acc' },
    { name: 'Angular 17', icon: 'pi pi-desktop', color: '#dd1b16' },
    { name: 'Bootstrap', icon: 'pi pi-table', color: '#563d7c' },
    { name: 'Git & GitHub', icon: 'fa-brands fa-github', color: '#171515' },
    { name: 'Figma', icon: 'pi pi-pencil', color: '#a259ff' },
  ];
}
