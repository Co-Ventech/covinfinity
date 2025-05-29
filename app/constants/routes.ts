/**
 * Application route constants
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  BOOK_A_DEMO: '/book-a-demo',
  CASE_STUDIES: '/case-study',
  CASE_STUDY: (id: string) => `/case-study/${id}`,
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOT_FOUND: '*',
};
