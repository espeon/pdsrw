/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as FirehoseIndexImport } from './routes/firehose/index'
import { Route as AtHandleIndexImport } from './routes/at:/$handle.index'

// Create Virtual Routes

const CounterLazyImport = createFileRoute('/counter')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()
const AtHandleCollectionIndexLazyImport = createFileRoute(
  '/at:/$handle/$collection/',
)()
const AtHandleCollectionRkeyLazyImport = createFileRoute(
  '/at:/$handle/$collection/$rkey',
)()

// Create/Update Routes

const CounterLazyRoute = CounterLazyImport.update({
  id: '/counter',
  path: '/counter',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/counter.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const FirehoseIndexRoute = FirehoseIndexImport.update({
  id: '/firehose/',
  path: '/firehose/',
  getParentRoute: () => rootRoute,
} as any)

const AtHandleIndexRoute = AtHandleIndexImport.update({
  id: '/at:/$handle/',
  path: '/at:/$handle/',
  getParentRoute: () => rootRoute,
} as any)

const AtHandleCollectionIndexLazyRoute =
  AtHandleCollectionIndexLazyImport.update({
    id: '/at:/$handle/$collection/',
    path: '/at:/$handle/$collection/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/at:/$handle/$collection.index.lazy').then((d) => d.Route),
  )

const AtHandleCollectionRkeyLazyRoute = AtHandleCollectionRkeyLazyImport.update(
  {
    id: '/at:/$handle/$collection/$rkey',
    path: '/at:/$handle/$collection/$rkey',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/at:/$handle.$collection.$rkey.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/counter': {
      id: '/counter'
      path: '/counter'
      fullPath: '/counter'
      preLoaderRoute: typeof CounterLazyImport
      parentRoute: typeof rootRoute
    }
    '/firehose/': {
      id: '/firehose/'
      path: '/firehose'
      fullPath: '/firehose'
      preLoaderRoute: typeof FirehoseIndexImport
      parentRoute: typeof rootRoute
    }
    '/at:/$handle/': {
      id: '/at:/$handle/'
      path: '/at:/$handle'
      fullPath: '/at:/$handle'
      preLoaderRoute: typeof AtHandleIndexImport
      parentRoute: typeof rootRoute
    }
    '/at:/$handle/$collection/$rkey': {
      id: '/at:/$handle/$collection/$rkey'
      path: '/at:/$handle/$collection/$rkey'
      fullPath: '/at:/$handle/$collection/$rkey'
      preLoaderRoute: typeof AtHandleCollectionRkeyLazyImport
      parentRoute: typeof rootRoute
    }
    '/at:/$handle/$collection/': {
      id: '/at:/$handle/$collection/'
      path: '/at:/$handle/$collection'
      fullPath: '/at:/$handle/$collection'
      preLoaderRoute: typeof AtHandleCollectionIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/counter': typeof CounterLazyRoute
  '/firehose': typeof FirehoseIndexRoute
  '/at:/$handle': typeof AtHandleIndexRoute
  '/at:/$handle/$collection/$rkey': typeof AtHandleCollectionRkeyLazyRoute
  '/at:/$handle/$collection': typeof AtHandleCollectionIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/counter': typeof CounterLazyRoute
  '/firehose': typeof FirehoseIndexRoute
  '/at:/$handle': typeof AtHandleIndexRoute
  '/at:/$handle/$collection/$rkey': typeof AtHandleCollectionRkeyLazyRoute
  '/at:/$handle/$collection': typeof AtHandleCollectionIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/counter': typeof CounterLazyRoute
  '/firehose/': typeof FirehoseIndexRoute
  '/at:/$handle/': typeof AtHandleIndexRoute
  '/at:/$handle/$collection/$rkey': typeof AtHandleCollectionRkeyLazyRoute
  '/at:/$handle/$collection/': typeof AtHandleCollectionIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/counter'
    | '/firehose'
    | '/at:/$handle'
    | '/at:/$handle/$collection/$rkey'
    | '/at:/$handle/$collection'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/counter'
    | '/firehose'
    | '/at:/$handle'
    | '/at:/$handle/$collection/$rkey'
    | '/at:/$handle/$collection'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/counter'
    | '/firehose/'
    | '/at:/$handle/'
    | '/at:/$handle/$collection/$rkey'
    | '/at:/$handle/$collection/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  CounterLazyRoute: typeof CounterLazyRoute
  FirehoseIndexRoute: typeof FirehoseIndexRoute
  AtHandleIndexRoute: typeof AtHandleIndexRoute
  AtHandleCollectionRkeyLazyRoute: typeof AtHandleCollectionRkeyLazyRoute
  AtHandleCollectionIndexLazyRoute: typeof AtHandleCollectionIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  CounterLazyRoute: CounterLazyRoute,
  FirehoseIndexRoute: FirehoseIndexRoute,
  AtHandleIndexRoute: AtHandleIndexRoute,
  AtHandleCollectionRkeyLazyRoute: AtHandleCollectionRkeyLazyRoute,
  AtHandleCollectionIndexLazyRoute: AtHandleCollectionIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/counter",
        "/firehose/",
        "/at:/$handle/",
        "/at:/$handle/$collection/$rkey",
        "/at:/$handle/$collection/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/counter": {
      "filePath": "counter.lazy.tsx"
    },
    "/firehose/": {
      "filePath": "firehose/index.tsx"
    },
    "/at:/$handle/": {
      "filePath": "at:/$handle.index.tsx"
    },
    "/at:/$handle/$collection/$rkey": {
      "filePath": "at:/$handle.$collection.$rkey.lazy.tsx"
    },
    "/at:/$handle/$collection/": {
      "filePath": "at:/$handle/$collection.index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
