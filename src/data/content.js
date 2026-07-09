import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiSupabase,
  SiPostman,
  SiFlutter,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { HiOutlineMail } from 'react-icons/hi'
import profileImg from '../images/profile.jpeg'
import habraac from '../images/habraac.png'
import global from '../images/global.jpg'
import horyaal from '../images/horyaal.png'
import sssh from '../images/somalisudanes.png'
import internship from '../images/interneship.png'
import exam from '../images/exam.jpg'
import vaccine from '../images/vaccinations.jpg'
import workers from '../images/emAwk.jpg'
import remindme from '../images/rdme.jpeg'

export const profile = {
  name: 'Faiza Mahdi',
  roles: ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver'],
  tagline:
    'I design and develop modern, scalable, responsive, and user-friendly web applications with beautiful user experiences.',
  resumeUrl: '/Faiza_Mahdi_Professional_CV.pdf',
  email: 'faizamahdi76@gmail.com',
  location: 'Mogadishu, Somalia',
  image:  profileImg,
  logo: '/logo.png',
  whiteLogo: '/nobg.png',
}

export const socials = [
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/Eng-faiza/' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/faiza-mahdi-a53b1335a' },
  { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com/faizamahdi' },
  { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com/faa_z_m' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/612310405' },
  { name: 'Email', icon: HiOutlineMail, url: 'mailto:faizamahdi76@gmail.com' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#timeline' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Happy Clients', value: 15, suffix: '+' },
  { label: 'Years Learning', value: 4, suffix: '+' },
  { label: 'Technologies Mastered', value: 18, suffix: '+' },
]

export const aboutContent = {
  summary:
    'I am a passionate Full Stack Developer specializing in creating modern web applications using React, Node.js, Express, MongoDB, Flutter, and Supabase. I enjoy transforming ideas into elegant digital experiences that combine beautiful design with powerful functionality.',
  highlights: [
    'Built and shipped 20+ full-stack products across web and mobile',
    'Designed end-to-end UI/UX systems from wireframe to production',
    'Comfortable owning a project from database schema to pixel-perfect UI',
  ],
  education: [
    { school: 'BSc. Computer Science', period: '2022 — 2026', detail: 'Focused on software engineering and human-computer interaction' },
  ],
  goals:
    'My goal is to keep building products that feel effortless to use, while mentoring the next generation of developers and designers along the way.',
}

export const skills = {
  Frontend: [
    { name: 'React', icon: FaReact, level: 92 },
    { name: 'JavaScript', icon: SiJavascript, level: 90 },
    { name: 'HTML', icon: FaHtml5, level: 96 },
    { name: 'CSS', icon: FaCss3Alt, level: 94 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 93 },
    { name: 'Bootstrap', icon: FaBootstrap, level: 85 },
    { name: 'Next.js', icon: SiNextdotjs, level: 80 },
  ],
  Backend: [
    { name: 'Node.js', icon: FaNodeJs, level: 88 },
    { name: 'Express', icon: SiExpress, level: 86 },
    { name: 'MongoDB', icon: SiMongodb, level: 84 },
    { name: 'Supabase', icon: SiSupabase, level: 82 },
    { name: 'REST API', icon: FaNodeJs, level: 90 },
  ],
  Tools: [
    { name: 'Git', icon: FaGitAlt, level: 91 },
    { name: 'GitHub', icon: FaGithub, level: 91 },
    { name: 'Figma', icon: FaFigma, level: 87 },
    { name: 'VS Code', icon: VscVscode, level: 95 },
    { name: 'Postman', icon: SiPostman, level: 86 },
    { name: 'Flutter', icon: SiFlutter, level: 78 },
  ],
}

export const services = [
  {
    title: 'Web Development',
    description: 'End-to-end web application development, from concept to deployment.',
  },
  {
    title: 'Frontend Development',
    description: 'Pixel-perfect, performant interfaces built with modern React patterns.',
  },
  {
    title: 'Backend Development',
    description: 'Scalable APIs and server architecture built for reliability.',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design systems that balance beauty and usability.',
  },
  {
    title: 'Responsive Website Design',
    description: 'Interfaces that feel native on every screen size and device.',
  },
  {
    title: 'Database Design',
    description: 'Efficient, well-structured schemas for MongoDB and SQL databases.',
  },
  {
    title: 'API Development',
    description: 'RESTful services designed for clarity, security, and speed.',
  },
  {
    title: 'Flutter App Development',
    description: 'Cross-platform mobile apps with native-feeling performance.',
  },
]

export const projects = [
  {
    title: 'habraac website',
    description:
      'technology company website that showcases their services, portfolio,team members and more other informations.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: 'https://habraac.com/',
    github: '#',
    image:habraac,
  },
  {
    title: 'global fertility website ',
    description: 'A modern website for global fertility Hospital with appointment booking and information sections.',
    tags: ['react.js', 'Node.js', 'MongoDB'],
    demo: 'https://global.habtech.app/',
    github: '#',
    image: global,
  },
  {
    title: 'horyaal hospital website ',
    description: 'A modern website for Horyaal Hospital with appointment booking and information sections.',
    tags: ['react.js', 'Node.js', 'MongoDB'],
    demo: 'https://horyaal.habtech.app/',
    github: '#',
    image: horyaal,
  },
  {
    title: 'somali sudanes hospital website ',
    description: 'A modern website for somali sudanes Hospital with appointment booking and information sections.',
    tags: ['react.js', 'Node.js', 'MongoDB'],
    demo: 'https://ssshospital.so/',
    github: '#',
    image: sssh,
  },
  {
    title: 'Student Internship Management System',
    description:
      'A platform that streamlines internship applications, tracking, and evaluation for students and coordinators.',
    tags: ['React', 'Node.js', 'MongoDB'],
    demo: '#',
    github: '#',
    image: internship,
  },
  {
    title: 'university exam management System',
    description: 'A system for managing university exams, including scheduling, registration, and attendance management.',
    tags: ['React', 'Express', 'MongoDB'],
    demo: '#',
    github: '#',
    image: exam,
  },
  {
    title: 'Vaccination Management System',
    description: 'Digitized vaccination scheduling and record-keeping for clinics.',
    tags: ['React', 'Supabase', 'Tailwind'],
    demo: '#',
    github: '#',
    image: vaccine,
  },
  
  {
    title: 'Workers & Employers Platform',
    description: 'A marketplace connecting skilled workers with employers for short and long-term work.',
    tags: ['React', 'MongoDB', 'Express'],
    demo: '#',
    github: '#',
    image: workers,
  },
  {
    title: 'remindme Flutter App',
    description: 'A cross-platform reminder app with a smooth, native-feeling UI.',
    tags: ['Flutter', 'Supabase'],
    demo: '#',
    github: '#',
    image: remindme,
  },
]

export const timeline = [
  {
    type: 'Education',
    title: 'BSc. Computer Science',
    place: 'University',
    period: '2022 — 2026',
    description: 'Studied software engineering, databases, and human-computer interaction.',
  },
  {
    type: 'Certification',
    title: 'Full Stack Web Development',
    place: 'Online and offline Certification',
    period: '2022-2026',
    description: 'Completed an intensive program covering the MERN stack and other stacks. ',
  },
  {
    type: 'Project',
    title: 'First Freelance Client Project',
    place: 'Freelance',
    period: '2023',
    description: 'Delivered a full booking platform for a local business.',
  },
  {
    type: 'Certification',
    title: 'UI/UX Design Specialization',
    place: 'Online Certification',
    period: '2023',
    description: 'Focused on design systems, prototyping, and usability testing.',
  },
  {
    type: 'Achievement',
    title: 'Launched StyleHub',
    place: 'Personal Project',
    period: '2024',
    description: 'Released a Flutter e-commerce app with a growing user base.',
  },
  {
    type: 'Achievement',
    title: '20+ Projects Delivered',
    place: 'Freelance & Contract Work',
    period: '2024 — Present',
    description: 'Continuously building full-stack products for clients worldwide.',
  },
]

export const testimonials = [
  {
    name: 'Amina Yusuf',
    role: 'Product Manager, Nexora',
    quote:
      'Working with Faiza was seamless — she translated our vague requirements into a polished, reliable product ahead of schedule.',
    rating: 5,
  },
  {
    name: 'James Carter',
    role: 'Founder, LaunchPad Studio',
    quote:
      'The attention to detail on the UI was outstanding. Our users noticed the difference within the first week.',
    rating: 5,
  },
  {
    name: 'Sara Ibrahim',
    role: 'CTO, Greenline Tech',
    quote:
      'Faiza is one of the few developers who genuinely cares about both the backend architecture and the user experience.',
    rating: 5,
  },
  {
    name: 'Daniel Osei',
    role: 'Operations Lead, MedConnect',
    quote:
      'Communication was excellent throughout, and the final product exceeded what we imagined was possible on our budget.',
    rating: 4,
  },
]
