export const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'blog', 'contact']

export const SKILLS = {
  Frontend: [
    { name: 'React.js', level: 85 },
    { name: 'JavaScript (ES6+)', level: 85 },
    { name: 'TypeScript', level: 50 },
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    // { name: 'Redux Toolkit', level: 60 },
    // { name: 'Next.js', level: 65 },
  ],
  Backend: [
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'REST APIs', level: 85 },
    { name: 'MySQL', level: 60 },
  ],
  Tools: [
    { name: 'Git & GitHub', level: 85 },
    { name: 'VS Code', level: 95 },
    // { name: 'Figma', level: 70 },
    { name: 'Postman', level: 85 },
    { name: 'WordPress', level: 85 },
    { name: 'Vite / Webpack', level: 75 },
  ],
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Fitbloom - Your Fitness Guide',
    tagline: 'Full-stack Consultation Booking Platform',
    description:
      'Appointment booking website for a Dietician clinic, with role based access ',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    category: 'Fullstack',
    github: 'https://github.com/rohitchornele/FitBloom',
    live: 'https://fit-bloom.vercel.app/',
    accent: '#FF0000',
  },
  {
    id: 2,
    title: 'NextGPT- AI Assitant',
    tagline: 'Chatgpt Inspired AI tool',
    description:
      'NextGPT is a web-based application built using MERN stack, that uses artificial intelligence to answer the questions and to create images from text prompts.',
    tech: ['React', 'Node.js', 'GEMINI API', 'AI', 'MongoDB'],
    category: 'CMS',
    github: 'https://github.com/rohitchornele/nextgpt',
    live: 'https://nextgpt-psi.vercel.app/',
    accent: '#4CAF50',
  },
  {
    id: 3,
    title: 'School Management System',
    tagline: 'Admin & academic dashboard',
    description:
      'A comprehensive school management dashboard for admins, teachers, and students. Features attendance tracking, grade management, timetable scheduling, and fee management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind'],
    category: 'Fullstack',
    github: 'https://github.com/rohitchornele/school_management',
    live: 'https://school-management-ndw8.onrender.com/',
    accent: '#7C3AED',
  },
  {
    id: 4,
    title: 'Admin Dashboard',
    tagline: 'Admin Dashboard for a business',
    description:
      'Web-based platform that allows businesses to keep track of their all the business operations including number of orders, revenue, feedback etc.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Markdown', 'Netlify'],
    category: 'Frontend',
    github: 'https://github.com/rohitchornele/dashboard',
    live: 'https://fitpeo-dashboard-rohit.netlify.app/',
    accent: '#F59E0B',
  },
]

export const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'Tata Consultancy Services',
    type: 'Full-time',
    period: 'Jan 2022 – May 2024',
    duration: '2 years, 4 months',
    location: 'India - Hybrid',
    description:
      'Worked as a frontend-focused software engineer, building and maintaining production React applications. Collaborated with design and backend teams to ship features used by thousands of users.',
    highlights: [
      'Built and maintained 5+ React web applications from scratch',
      'Reduced page load time by 40% through code-splitting and lazy loading',
      'Developed reusable component libraries used across multiple projects',
      'Integrated REST APIs and managed state with Redux Toolkit',
      'Participated in code reviews, agile sprints, and daily standups',
      'Mentored 2 junior developers on React best practices',
    ],
    tech: ['React', 'Redux', 'JavaScript', 'Node.js', 'MongoDB', 'Git'],
  },
]



// export const BLOG = [
//   {
//     id: 1,
//     title: 'YouTube Clone',
//     tagline: 'Full-stack video platform',
//     description:
//       'A feature-rich YouTube clone built with the MERN stack. Supports video upload, streaming, comments, likes, subscriptions, and user authentication with JWT.',
//     tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
//     category: 'Fullstack',
//     github: 'https://github.com/rohitchornele',
//     live: '#',
//     accent: '#FF0000',
//   },
//   {
//     id: 2,
//     title: 'LMS Website',
//     tagline: 'Learning Management System',
//     description:
//       'A robust Learning Management System built with WordPress and custom plugin development. Includes course creation, student enrollment, quizzes, and progress tracking.',
//     tech: ['WordPress', 'PHP', 'LearnDash', 'WooCommerce', 'MySQL'],
//     category: 'CMS',
//     github: 'https://github.com/rohitchornele',
//     live: '#',
//     accent: '#4CAF50',
//   },
//   {
//     id: 3,
//     title: 'School Management System',
//     tagline: 'Admin & academic dashboard',
//     description:
//       'A comprehensive school management dashboard for admins, teachers, and students. Features attendance tracking, grade management, timetable scheduling, and fee management.',
//     tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Chart.js', 'Tailwind'],
//     category: 'Fullstack',
//     github: 'https://github.com/rohitchornele',
//     live: '#',
//     accent: '#7C3AED',
//   },
//   {
//     id: 4,
//     title: 'Travel Blog Website',
//     tagline: 'Immersive travel storytelling',
//     description:
//       'A visually stunning travel blog with rich media galleries, interactive maps, category filtering, and a markdown-powered CMS for beautiful travel stories.',
//     tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Markdown', 'Netlify'],
//     category: 'Frontend',
//     github: 'https://github.com/rohitchornele',
//     live: '#',
//     accent: '#F59E0B',
//   },
// ]
