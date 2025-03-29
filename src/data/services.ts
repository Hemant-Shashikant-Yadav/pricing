import { Category, ServiceOption } from '../types';

export const categories: Category[] = [
  {
    id: 'websites',
    name: 'Website Development',
    description: 'Custom websites tailored to your needs',
    icon: 'Globe'
  },
  {
    id: 'webapps',
    name: 'Web Application',
    description: 'Full-featured web applications',
    icon: 'Browser'
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile apps',
    icon: 'Smartphone'
  },
  {
    id: 'database',
    name: 'Database Solutions',
    description: 'Database implementation and management',
    icon: 'Database'
  },
  {
    id: 'backend',
    name: 'Backend Development',
    description: 'Server-side technologies and frameworks',
    icon: 'Server'
  },
  {
    id: 'frontend',
    name: 'Frontend Development',
    description: 'Modern frontend frameworks and libraries',
    icon: 'Layout'
  }
];

export const services: ServiceOption[] = [
  // Website Development
  {
    id: 'static-website',
    label: 'Static Website',
    price: 1500,
    category: 'websites'
  },
  {
    id: 'dynamic-website',
    label: 'Dynamic Website',
    price: 3000,
    category: 'websites'
  },
  {
    id: 'cms-integration',
    label: 'CMS Integration',
    price: 1000,
    category: 'websites'
  },
  {
    id: 'seo-optimization',
    label: 'SEO Optimization',
    price: 800,
    category: 'websites'
  },
  
  // Web Application
  {
    id: 'user-auth',
    label: 'User Authentication',
    price: 1500,
    category: 'webapps'
  },
  {
    id: 'database-integration',
    label: 'Database Integration',
    price: 2000,
    category: 'webapps'
  },
  {
    id: 'api-development',
    label: 'API Development',
    price: 2500,
    category: 'webapps'
  },
  {
    id: 'payment-integration',
    label: 'Payment Integration',
    price: 1800,
    category: 'webapps'
  },
  
  // Mobile Development
  {
    id: 'ios-development',
    label: 'iOS Development',
    price: 5000,
    category: 'mobile'
  },
  {
    id: 'android-development',
    label: 'Android Development',
    price: 5000,
    category: 'mobile'
  },
  {
    id: 'cross-platform',
    label: 'Cross-Platform Development',
    price: 7000,
    category: 'mobile'
  },
  {
    id: 'push-notifications',
    label: 'Push Notifications',
    price: 1000,
    category: 'mobile'
  },

  // Database Solutions
  {
    id: 'postgresql',
    label: 'PostgreSQL Implementation',
    price: 2000,
    category: 'database'
  },
  {
    id: 'mongodb',
    label: 'MongoDB Implementation',
    price: 2000,
    category: 'database'
  },
  {
    id: 'mysql',
    label: 'MySQL Implementation',
    price: 1800,
    category: 'database'
  },
  {
    id: 'redis',
    label: 'Redis Cache Integration',
    price: 1500,
    category: 'database'
  },
  {
    id: 'data-migration',
    label: 'Data Migration Service',
    price: 2500,
    category: 'database'
  },

  // Backend Development
  {
    id: 'nodejs',
    label: 'Node.js Development',
    price: 3000,
    category: 'backend'
  },
  {
    id: 'python',
    label: 'Python Development',
    price: 3000,
    category: 'backend'
  },
  {
    id: 'java',
    label: 'Java Development',
    price: 3500,
    category: 'backend'
  },
  {
    id: 'golang',
    label: 'Go Development',
    price: 3500,
    category: 'backend'
  },
  {
    id: 'graphql',
    label: 'GraphQL API',
    price: 2500,
    category: 'backend'
  },

  // Frontend Development
  {
    id: 'react',
    label: 'React Development',
    price: 3000,
    category: 'frontend'
  },
  {
    id: 'vue',
    label: 'Vue.js Development',
    price: 3000,
    category: 'frontend'
  },
  {
    id: 'angular',
    label: 'Angular Development',
    price: 3500,
    category: 'frontend'
  },
  {
    id: 'nextjs',
    label: 'Next.js Implementation',
    price: 3500,
    category: 'frontend'
  },
  {
    id: 'responsive-design',
    label: 'Responsive Design',
    price: 1500,
    category: 'frontend'
  }
];