import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./routes/home.tsx'),
  route('about', './routes/about.tsx'),
  route('services/:slug', './routes/service.tsx'),
  route('book-a-demo', './routes/book-a-demo.tsx'),
  route('contact', './routes/contact.tsx'),
  route('products/:slug', './routes/product.tsx'),
  route('case-studies', './routes/case-studies.tsx'),
  route('case-studies/:slug', './routes/test-case-study.tsx'),
  route('login', './routes/SignIn.tsx'),
  route('signup', './routes/SignUp.tsx'),
  route('*', './routes/404.tsx'),
] satisfies RouteConfig;
