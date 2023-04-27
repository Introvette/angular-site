import { Component } from '@angular/core';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  timeline: TimelineEvent[] = [
    {
      date: 'May 2014 - Aug 2014',
      title: 'Facilities Management Intern',
      description: '@ Atrium Health in Charlotte, NC - Compiled regular reports for upper management to ensure accuracy of data. - Streamlined administrative process for environmental services department, reducing paperwork and increasing organization. - Gained invaluable insight into executive decisions by shadowing key leaders in the field.'
    },
    {
      date: 'May 2018 - Aug 2022',
      title: 'Restaurant General Manager',
      description: '@ Anntonys Caribbean Cafe in Charlotte, NC - Developed social media content informed by analytics. - Crafted and updated menus, monitored inventory levels, and assigned tasks to employees. - Designed schedules taking into account staff requests and holidays. Provided daily inspiration to the team and supervised front-of-house activities. '
    },
    {
      date: 'Aug 2022 - Feb 2023',
      title: 'Hack Reactor Student',
      description: '19 week Software Engineering Bootcamp - 19-week software engineering immersive program with over 1000+ hours of coding. Full-Stack development with JavaScript, Python, React, Django, FastAPI, Docker, Redux Toolkit PostgreSQL, HTML, and CSS. - • Relevant Coursework: Web sockets, Docker, MySQL, MongoDB, and JSON.'
    },

  ];
}
