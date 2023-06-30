import { Component } from '@angular/core';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  timeline: TimelineEvent[] = [
    {
      date: 'June 2023 - Present',
      title: 'Web Developer Specialist',
      description:
        '@ Charlotte-Mecklenburg Schools - Assisting in the development and maintenance of web applications, including debugging, testing, and implementing enhancements to improve performance and functionality.',
    },
    {
      date: 'Aug 2022 - Feb 2023',
      title: 'Hack Reactor Student',
      description:
        '19 week Software Engineering Bootcamp - 19-week software engineering immersive program with over 1000+ hours of coding. - Full-Stack development with JavaScript, Python, React, Django, FastAPI, Docker, Redux Toolkit PostgreSQL, HTML, and CSS. - Relevant Coursework: Web sockets, MySQL, MongoDB, and JSON.',
    },
    {
      date: 'Oct 2020 - Nov 2021',
      title: 'Social Media // Web Designer',
      description:
        '@ 33Headies LLC - Developed, designed, and managed the ecommerce website for merchandise and glass art, ensuring its functionality and appealing design. - Served as the primary contact for wholesale transactions with glass artists, fostering strong relationships and facilitating smooth business operations. - Utilized company analytics and sales data to create engaging and effective content, resulting in increased brand visibility and revenue.',
    },
    {
      date: 'May 2018 - Aug 2022',
      title: 'Restaurant General Manager // Content Manager',
      description:
        "@ Anntonys Caribbean Cafe in Charlotte, NC - Created, designed, and oversaw the maintenance of the ecommerce website for the restaurant's sauce. - Developed social media content informed by analytics. - Crafted and updated menus, monitored inventory levels, and assigned tasks to employees. - Designed schedules taking into account staff requests and holidays. - Provided daily inspiration to the team and supervised front-of-house activities.",
    },
    {
      date: 'May 2014 - Aug 2014',
      title: 'Facilities Management Intern',
      description:
        '@ Atrium Health in Charlotte, NC - Compiled regular reports for upper management to ensure accuracy of data. - Streamlined administrative process for environmental services department, reducing paperwork and increasing organization. - Gained invaluable insight into executive decisions by shadowing key leaders in the field.',
    },
  ];

  expandedIndex: number | null = null;

  toggleExpand(index: number): void {
    if (this.expandedIndex === index) {
      this.expandedIndex = null;
    } else {
      this.expandedIndex = index;
    }
  }
}
