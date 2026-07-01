import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI SaaS Social Media Manager',
    category: 'Full-Stack & AI',
    year: '2026',
    slug: 'ai-saas-social-media-manager',
    coverImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
    description:
      'A production-style Next.js and TypeScript application designed for automated, AI-driven social media content generation and campaign scheduling.',
    role: 'Architected the Next.js app structure, integrated LLM generation endpoints, and built the analytics dashboard.',
    client: 'AI SaaS Platform',
    camera: 'Next.js, TypeScript, OpenAI API, Tailwind CSS, Prisma',
    location: 'Cloud Hosted',
    techStack: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    highlights: [
      'Leveraged state-of-the-art LLMs to generate high-engagement social media posts based on user prompts and brand voice.',
      'Designed an interactive content calendar and queue system for automated cross-platform campaign scheduling.',
      'Implemented robust user authentication, request caching, and a responsive workspace UI.'
    ],
    links: {
      repo: 'https://github.com/yuv9799/ai-saas-social-media-manager'
    },
    images: [
      {
        id: '1-1',
        src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800',
        alt: 'AI SaaS Social Media Manager dashboard',
        aspectRatio: 'landscape',
        caption: 'AI generation workspace and content scheduling pipeline.'
      }
    ]
  },
  {
    id: '2',
    title: 'Customer Segmentation Engine',
    category: 'Machine Learning',
    year: '2026',
    slug: 'customer-segmentation-engine',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description:
      'An advanced machine learning web application that segments customers using the K-Means clustering algorithm, featuring interactive cluster distributions and real-time inference.',
    role: 'Developed the FastAPI backend, scikit-learn clustering pipeline, and interactive React client.',
    client: 'Data Analytics System',
    camera: 'Python, FastAPI, scikit-learn, React, TypeScript, Tailwind CSS',
    location: 'Local / Remote Inference API',
    techStack: ['Python', 'FastAPI', 'scikit-learn', 'React', 'TypeScript', 'Tailwind CSS', 'pandas'],
    highlights: [
      'Implemented K-Means clustering for customer grouping based on demographic and transactional features.',
      'Built a FastAPI backend supporting both single customer evaluation and high-volume batch segmentation.',
      'Designed dynamic frontend visualizations displaying the elbow method curve and scatter plot cluster groupings.'
    ],
    links: {
      repo: 'https://github.com/yuv9799/customer-segmentation'
    },
    images: [
      {
        id: '2-1',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        alt: 'Customer Segmentation cluster plots',
        aspectRatio: 'landscape',
        caption: 'Real-time segmentation dashboard showing cluster demographics.'
      }
    ]
  },
  {
    id: '3',
    title: 'Diabetes Prediction Platform',
    category: 'Machine Learning',
    year: '2026',
    slug: 'diabetes-prediction-platform',
    coverImage: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800',
    description:
      'A diagnostic analysis system predicting diabetic risk using Support Vector Machine (SVM) classifiers trained on Pima Indian diagnostic measurements.',
    role: 'Trained the SVM classifier model, built Jupyter analysis workflows, and developed the web preview tool.',
    client: 'Health Diagnostic System',
    camera: 'Python, Support Vector Machine (SVM), pandas, scikit-learn, Streamlit',
    location: 'Diagnostic ML inference',
    techStack: ['Python', 'scikit-learn', 'SVM Classifier', 'pandas', 'NumPy', 'Streamlit'],
    highlights: [
      'Trained an SVM classifier achieving high recall on patient diabetic markers using Pima Indians dataset.',
      'Engineered automated data preprocessing, outlier removal, and standard scaling pipelines for raw metrics.',
      'Deployed a Streamlit web app providing direct interface for clinicians to input glucose, insulin, and blood pressure levels.'
    ],
    links: {
      repo: 'https://github.com/yuv9799/diabetes-predictor'
    },
    images: [
      {
        id: '3-1',
        src: 'https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&q=80&w=800',
        alt: 'Diabetes Prediction dashboard',
        aspectRatio: 'landscape',
        caption: 'Diagnostic metrics input and SVM classifier model outcomes.'
      }
    ]
  },
  {
    id: '4',
    title: 'Tab-Pocalypse: Memory Leak Simulator',
    category: 'Canvas Simulation',
    year: '2026',
    slug: 'tab-pocalypse',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    description:
      'A chaotic, real-time physics simulation and visual game that models browser memory leakage through falling tab physical bodies and dynamic system health metrics.',
    role: 'Built the HTML5 Canvas physics engine, system load calculators, and interactive glitch animations.',
    client: 'Interactive Web Simulation',
    camera: 'JavaScript, HTML5 Canvas, Matter.js Physics concept, CSS Animations',
    location: 'Browser-based execution',
    techStack: ['JavaScript', 'HTML5 Canvas', 'Matter.js Physics', 'CSS Glitch Effects', 'Audio APIs'],
    highlights: [
      'Engineered a 2D physics body environment representing browser tabs piling up with mass, bounce, and drag.',
      'Created mock system metrics dashboards tracking CPU load, RAM leakage, temperature, and cognitive overload.',
      'Designed progressive glitch UI overlays triggering an event-horizon collapse animation upon reaching limits.'
    ],
    links: {
      repo: 'https://github.com/yuv9799/os-storage-manager'
    },
    images: [
      {
        id: '4-1',
        src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
        alt: 'Tab-Pocalypse gameplay screenshot',
        aspectRatio: 'landscape',
        caption: 'Chaos simulation canvas with falling tab physics and metric bars.'
      }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
