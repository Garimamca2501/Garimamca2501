import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Rovicare',
      role: 'Backend Developer',
      date: '03/2025',
      tech: 'C#, .NET, ASP.NET Core, SQL Server, Azure, REST APIs',
      highlights: [
        'Designed and developed RESTful APIs for business workflows.',
        'Implemented Clean Architecture and SOLID principles.',
        'Worked on subscription-based features and bulk import modules.',
        'Optimized SQL Server queries and stored procedures.',
        'Deployed and validated applications on Microsoft Azure.',
        'Performed API testing using Postman.'
      ]
    },
    {
      title: 'Survey Web App',
      role: 'Full Stack Academic Project',
      date: 'Project Showcase',
      tech: 'HTML, CSS, JavaScript, ASP.NET, Entity Framework',
      highlights: [
        'Developed a nutrition survey application with an admin panel for dynamic survey management.',
        'Implemented parent-child hierarchical questions.',
        'Built secure authentication and CRUD operations using Entity Framework.'
      ]
    }
  ];
}
