import { createRoute, createRootRoute } from '@tanstack/react-router';
import App from '../App';
import Poem from '../App';
import About from '../components/About';
import TableOfContents from '../components/TableOfContents';

const rootRoute = createRootRoute({
  component: App,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: TableOfContents,
});

const poemRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/poem/$poemId',
  component: Poem,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

export const routeTree = rootRoute.addChildren([indexRoute, poemRoute, aboutRoute]);
