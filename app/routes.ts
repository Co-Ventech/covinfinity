import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'),
  route('about', './routes/about.tsx'),
  route('services', './routes/services.tsx'),
  route('contact', './routes/contact.tsx'),
  route('connect', './routes/connect.tsx'),
   route("case-studies", "./routes/case-studies.tsx"), 
] satisfies RouteConfig;
