import {
  Code2,
  Palette,
  Database,
  Globe,
  Server,
  GitBranch,
  Terminal,
  Layers,
} from 'lucide-react';

export const heroData = {
  greeting: '👋 Hello, I\'m',
  name: 'Soe Yee Mon Htet',
  title: 'Full-Stack Developer',
  subtitle:
    'I build beautiful, accessible, and performant web applications with modern technologies.',
  statusText: 'Available for work',
  ctaPrimary: { label: 'View Projects', href: '#projects' },
  ctaSecondary: { label: 'Get in Touch', href: '#contact' },
};

export const aboutData = {
  title: 'About Me',
  paragraphs: [
    "I'm a passionate full-stack developer with a love for crafting clean, user-friendly digital experiences. My journey in software development started with curiosity about how things work on the web, and it has grown into a career of building products that people enjoy using.",
    'I specialize in React, Node.js, and modern web technologies. When I’m not coding, you’ll find me exploring new tools, contributing to open-source, or writing about what I learn.',
    "I believe great software comes from understanding both the user and the technology — and I bring that mindset to every project I work on.",
  ],
};

export const skillsData = [
  { name: 'React', icon: Code2 },
  { name: 'JavaScript', icon: Terminal },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Node.js', icon: Server },
  { name: 'Python', icon: Terminal },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Tailwind CSS', icon: Palette },
  { name: 'HTML & CSS', icon: Globe },
  { name: 'Git', icon: GitBranch },
  { name: 'Docker', icon: Layers },
  { name: 'REST APIs', icon: Server },
];

export const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack online store with cart, checkout, and payment integration. Built with React, Node.js, and Stripe.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description:
      'A real-time collaborative task management tool with drag-and-drop, Kanban boards, and team workspaces.',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A beautiful weather dashboard with 7-day forecasts, interactive maps, and location-based alerts.',
    tags: ['React', 'OpenWeather API', 'Chart.js'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Dev Blog',
    description:
      'A statically-generated blog with MDX content, syntax highlighting, and RSS feed. Optimized for SEO.',
    tags: ['Next.js', 'MDX', 'Tailwind CSS'],
    image: null,
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const contactData = {
  title: 'Get In Touch',
  subtitle:
    "I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message!",
  email: 'soeyeemon@example.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Soe-Yee-Mon-Htet', icon: GitBranch },
    { name: 'LinkedIn', url: '#', icon: Globe },
    { name: 'Twitter', url: '#', icon: Terminal },
  ],
};

export const footerData = {
  copyright: `© ${new Date().getFullYear()} Soe Yee Mon Htet. All rights reserved.`,
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
