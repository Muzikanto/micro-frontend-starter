# Micro Frontend Demo

A sample repo for demoing a micro frontend architecture setup.

## Getting started

1. Run: `npm start`
2. Navigate to `http://localhost:3000/`

Main Host App: `http://localhost:3000/`
Shared Remote: `http://localhost:3001/`

## Architecture

TBD

## Tech Stack

- [Turborepo](https://turborepo.org/)
- React
- Typescript
- Webpack v5 (w/ Module Federation)

## Related Blog Posts

- How to use Webpack Module Federation in React: https://betterprogramming.pub/how-to-use-webpack-module-federation-in-react-70455086b2b0
- Zustand in a Micro Frontend: https://betterprogramming.pub/zustand-in-a-micro-frontend-b92d02a51577

### Open Items

- Dynamic remote URLs
- Deployment
- Sharing state from host to application (props)
- Sharing global state from host to remotes (zustand?)
- Sharing local storage (persist cart)
- Central analytics event stream
- Error Boundary/Safe loading. + Suspense in 'FederatedWrapper'
- Versioning between host and remotes
- Versioning node_modules?
- Routing. How do you do in-browser linking from a remote component when the host is the one controlling the router? What happens if you use mismatching versions of react-router?
- How can you share local/session state between remote and host?
