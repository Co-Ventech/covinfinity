/**
 * Application route constants
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  CONNECT: '/connect',
  CASE_STUDIES: '/case-study',
  CASE_STUDY: (id: string) => `/case-study/${id}`,
  DASHBOARD: '/dashboard',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOT_FOUND: '*',
};
