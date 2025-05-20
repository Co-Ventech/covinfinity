import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'),
  route('about', './routes/about.tsx'),
  route('services', './routes/services.tsx'),
  route('contact', './routes/contact.tsx'),
  route('connect', './routes/connect.tsx'),
  route('product', './routes/product.tsx'),
  route('case-studies', './routes/case-studies.tsx'),
  route('sign-in', './routes/SignIn.tsx'),
  route('sign-up', './routes/SignUp.tsx'),
  //route('other-route', './routes/other-route.tsx'),
  route('case-studies/:case_study_id','./routes/other-route.tsx')
] satisfies RouteConfig;
