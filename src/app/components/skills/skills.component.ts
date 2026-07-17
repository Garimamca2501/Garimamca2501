import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  technicalSkills = [
    'C#',
    '.NET',
    'ASP.NET Core',
    'REST APIs',
    'SQL Server',
    'Microsoft Azure',
    'Postman',
    'Git',
    'GitHub',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Angular (Basic)',
    'Clean Architecture',
    'SOLID Principles',
    'Agile Scrum'
  ];

  strengths = [
    'Backend Development',
    'API Development',
    'Object-Oriented Programming',
    'Code Review',
    'Debugging',
    'Deployment',
    'SDLC'
  ];
}
