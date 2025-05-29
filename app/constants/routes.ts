/**
 * Application route constants
 */

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE: (name: string) => `/services/${slugify(name)}`,
  CONTACT: '/contact',
  BOOK_A_DEMO: '/book-a-demo',
  CASE_STUDIES: '/case-studies',
  CASE_STUDY: (name: string) => `/case-studies/${slugify(name)}`,
  PRODUCTS: '/products',
  PRODUCT: (name: string) => `/products/${slugify(name)}`,
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/signup',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOT_FOUND: '*',
};
