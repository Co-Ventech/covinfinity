// Technology categories with available icons
export const technologies = [
  { id: 1, name: 'AI Engineer', icon: '/artificial-intelligence.png', iconWhite: '/logo-white.png' },
  { id: 2, name: 'Frontend Dev', icon: '/frontend_icon.png', iconWhite: '/logo-white.png' },
  { id: 3, name: 'Backend Dev', icon: '/backend.png', iconWhite: '/logo-white.png' },
  { id: 4, name: 'Android Dev', icon: '/Android.png', iconWhite: '/logo-white.png' },
  { id: 5, name: 'iOS Engineer', icon: '/apple-icon.png', iconWhite: '/logo-white.png' },
];

// Skill to icon mapping
const skillIconMap: Record<string, string> = {
  'React': '/react.svg',
  'JavaScript': '/javaScript.png',
  'Node.js': '/Nodejs.svg',
  'Python': '/python.svg',
  'PyTorch': '/pytorch.png',
  'TensorFlow': '/tensorflow.svg',
  'Data Science': '/dataScience.svg',
  'Computer Vision': '/computerVision.png',
  'Machine Learning': '/machineLearning.svg',
  'NLP': '/nlp.svg',
  'BERT': '/bert.png',
  'React Native': '/react.svg',
  'Transformers': '/tersformers.svg',
  'TypeScript': '/typeScript.svg',
  'Firebase': '/firebase.svg',
  'Vue.js': '/vue.svg',
  'Nuxt.js': '/nuxt.png',
  'TailwindCSS': '/tailwind.svg',
  'Java': '/java.svg',
  'Spring Boot': '/spring-boot.png',
  'MongoDB': '/mongodb.svg',
  'Express': '/express.svg',
  'PostgreSQL': '/postgress-sql.png',
  'GraphQL': '/graph-hql.svg',
  'Django': '/django.svg',
  'Kotlin': '/kotlin.svg',
  'Android SDK': '/android-sdk.png',
  'Jetpack Compose': '/jetpack.svg',
  'Flutter': '/fllutter.svg',
  'Dart': '/dart.png',
  'RxJava': '/rxjava.svg',
  'Swift': '/swift.svg',
  'SwiftUI': '/swift.svg',
  'Core Data': '/coredata.svg',
  'UIKit': '/ui-kit.svg',
  'ARKit': '/ar-kit.svg',
  'SpriteKit': '/sprite-kit.svg',
  'Metal': '/metal.svg',
};

// Helper to map skills to objects with icons
function mapSkills(skills: string[]) {
  return skills.map(label => ({ label, icon: skillIconMap[label] || '' }));
}

export type SkillWithIcon = { label: string; icon?: string };

// Developer interface
export type Developer = {
  id: number;
  name: string;
  avatar: string;
  skills: SkillWithIcon[];
  description?: string;
  category: number; // Reference to technology/category ID
  rating?: number; // Rating from 1-5 to determine top talents
};

// Enhanced developers data with diverse talents
export const developers: Developer[] = [
  // Frontend Developers
  {
    id: 1,
    name: 'John Smith',
    avatar: '/john.png',
    skills: mapSkills(['React', 'JavaScript', 'TypeScript']),
    category: 2, // Frontend Dev
    description:
      'John is a front-end developer skilled in HTML, CSS, JavaScript, React, and TypeScript. He creates user-friendly interfaces, thrives in teams, and loves open-source.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Aisha Patel',
    avatar: '/john.png',
    skills: mapSkills(['React Native', 'JavaScript', 'Firebase']),
    category: 2, // Frontend Dev
    description:
      'Aisha is a React Native developer who builds cross-platform mobile applications with clean, efficient code.',
    rating: 4,
  },
  {
    id: 9,
    name: 'Alex Johnson',
    avatar: '/john.png',
    skills: mapSkills(['Vue.js', 'Nuxt.js', 'TailwindCSS']),
    category: 2, // Frontend Dev
    description:
      'Alex is a Vue.js specialist who focuses on building elegant, responsive web applications with modern frameworks and tooling.',
    rating: 4,
  },
  {
    id: 11,
    name: 'Emma Williams',
    avatar: '/john.png',
    skills: mapSkills(['Angular', 'RxJS', 'NgRx']),
    category: 2, // Frontend Dev
    description:
      'Emma specializes in Angular development and enterprise-scale applications with complex state management needs.',
    rating: 3,
  },

  // AI Engineers
  {
    id: 2,
    name: 'Sarah Chen',
    avatar: '/john.png',
    skills: mapSkills(['Python', 'Machine Learning', 'TensorFlow']),
    category: 1, // AI Engineer
    description:
      'Sarah specializes in machine learning and AI systems with 5+ years of experience building ML models for enterprise clients.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Lisa Zhang',
    avatar: '/john.png',
    skills: mapSkills(['PyTorch', 'Computer Vision', 'Data Science']),
    category: 1, // AI Engineer
    description:
      'Lisa is an AI researcher focusing on computer vision applications with PyTorch and advanced neural networks.',
    rating: 4,
  },
  {
    id: 12,
    name: 'Raj Patel',
    avatar: '/john.png',
    skills: mapSkills(['NLP', 'BERT', 'Transformers']),
    category: 1, // AI Engineer
    description:
      'Raj is a natural language processing expert with deep experience in transformer models and large language model fine-tuning.',
    rating: 5,
  },

  // Backend Developers
  {
    id: 3,
    name: 'Michael Rodriguez',
    avatar: '/john.png',
    skills: mapSkills(['Java', 'Spring Boot', 'MongoDB']),
    category: 3, // Backend Dev
    description:
      'Michael is a backend developer experienced in building scalable APIs and microservices with Java and Spring Boot.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Thomas Wilson',
    avatar: '/john.png',
    skills: mapSkills(['Node.js', 'Express', 'PostgreSQL']),
    category: 3, // Backend Dev
    description:
      'Thomas specializes in Node.js development with experience in building RESTful APIs and database integration.',
    rating: 4,
  },
  {
    id: 13,
    name: 'Sophie Martin',
    avatar: '/john.png',
    skills: mapSkills(['Python', 'Django', 'GraphQL']),
    category: 3, // Backend Dev
    description:
      'Sophie builds robust backend systems with Django and GraphQL, specializing in high-performance database architectures.',
    rating: 3,
  },
  {
    id: 14,
    name: 'James Taylor',
    avatar: '/john.png',
    skills: mapSkills(['Go', 'Microservices', 'Docker']),
    category: 3, // Backend Dev
    description:
      'James is a Go developer focused on building high-performance microservices and containerized applications.',
    rating: 4,
  },

  // Android Developers
  {
    id: 4,
    name: 'Emily Johnson',
    avatar: '/john.png',
    skills: mapSkills(['Kotlin', 'Android SDK', 'Jetpack Compose']),
    category: 4, // Android Dev
    description:
      'Emily has 4 years of Android development experience creating native mobile applications with Kotlin and Jetpack Compose.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Jordan Lee',
    avatar: '/john.png',
    skills: mapSkills(['Flutter', 'Dart', 'Firebase']),
    category: 4, // Android Dev
    description:
      'Jordan is a cross-platform mobile developer specialized in Flutter, creating beautiful interfaces for both Android and iOS.',
    rating: 4,
  },
  {
    id: 15,
    name: 'Carlos Mendez',
    avatar: '/john.png',
    skills: mapSkills(['Java', 'Android SDK', 'RxJava']),
    category: 4, // Android Dev
    description:
      'Carlos has over 5 years of experience developing Android applications with a focus on clean architecture principles.',
    rating: 3,
  },

  // iOS Developers
  {
    id: 5,
    name: 'David Kim',
    avatar: '/john.png',
    skills: mapSkills(['Swift', 'SwiftUI', 'Core Data']),
    category: 5, // iOS Engineer
    description:
      'David is an iOS specialist with extensive experience building App Store applications using Swift and SwiftUI.',
    rating: 5,
  },
  {
    id: 16,
    name: 'Olivia Brown',
    avatar: '/john.png',
    skills: mapSkills(['Swift', 'UIKit', 'ARKit']),
    category: 5, // iOS Engineer
    description:
      'Olivia specializes in iOS development with a focus on augmented reality experiences using ARKit.',
    rating: 4,
  },
  {
    id: 17,
    name: 'Nathan Clark',
    avatar: '/john.png',
    skills: mapSkills(['Swift', 'Metal', 'SpriteKit']),
    category: 5, // iOS Engineer
    description:
      "Nathan is an iOS game developer with deep knowledge of Apple's graphics and gaming frameworks.",
    rating: 4,
  },
];
