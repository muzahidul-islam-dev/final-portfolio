import WalkinroomImage   from './../assets/img/mockup/booking.png'
import SchoolManagement  from './../assets/img/mockup/school.png'
import CarWashDetailing  from './../assets/img/mockup/carwash.png'
import Afaqljadwaa       from './../assets/img/mockup/afaqaljadwa.png'
import GmdFoundation     from './../assets/img/mockup/gmdfoundation.png'
import Beatrettreatdr    from './../assets/img/mockup/beatretreat.png'

export interface Project {
  title:       string;
  link:        string;
  thumbnail:   string;
  tags:        string[];
  description: string;
}

const Projects: Project[] = [
  {
    title:       "GMD Foundation",
    link:        "https://gmdfoundation.org/",
    thumbnail:   GmdFoundation,
    tags:        ["WordPress", "PHP"],
    description: "A non-profit foundation website with donation management, event listings, and a full CMS backend.",
  },
  {
    title:       "Walkinroom",
    link:        "https://walkinroom.com",
    thumbnail:   WalkinroomImage,
    tags:        ["Next.js", "Laravel", "MySQL"],
    description: "A hotel booking platform with real-time availability, payment integration, and admin dashboard.",
  },
  {
    title:       "Car Wash Detailing",
    link:        "https://popularcarwashdetailing.com/",
    thumbnail:   CarWashDetailing,
    tags:        ["WordPress", "PHP"],
    description: "Business website for a car wash service with online booking and service showcase.",
  },
  {
    title:       "Afaqal Jadwaa",
    link:        "https://afaqaljadwaa.com/",
    thumbnail:   Afaqljadwaa,
    tags:        ["WordPress", "PHP"],
    description: "A scheduling and appointment management system built for Arabic-speaking users.",
  },
  {
    title:       "Beat Retreat",
    link:        "https://beatretreatdr.com/",
    thumbnail:   Beatrettreatdr,
    tags:        ["WordPress", "PHP"],
    description: "Music retreat booking website with event management and e-commerce functionality.",
  },
  {
    title:       "School Management System",
    link:        "#",
    thumbnail:   SchoolManagement,
    tags:        ["Laravel", "MySQL"],
    description: "Full-featured school ERP — student records, attendance, grades, and staff management.",
  },
];

export default Projects;
