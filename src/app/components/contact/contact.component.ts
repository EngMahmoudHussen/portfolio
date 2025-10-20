import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contacts = [
  {
    platform: 'Email',
    icon: 'fas fa-envelope',
    link: 'mailto:mahmoudhussen2044@gmail.com',
    buttonText: 'Send Me an Email',
  },
  {
    platform: 'GitHub',
    icon: 'fab fa-github',
    link: 'https://github.com/EngMahmoudHussen',
    buttonText: 'Check My GitHub',
  },
  {
    platform: 'LinkedIn',
    icon: 'fab fa-linkedin',
    link: 'https://www.linkedin.com/in/mahmoud-hussen-bb9895329',
    buttonText: 'Visit LinkedIn Profile',
  },
  {
    platform: 'WhatsApp',
    icon: 'fab fa-whatsapp',
    link: 'https://wa.me/201014770108',
    buttonText: 'Chat on WhatsApp',
  },
];

}
