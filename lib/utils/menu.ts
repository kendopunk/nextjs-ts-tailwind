/*
 * lib/utils/menu.ts
 * Description: Site-wide menu configuration
 * Copyright (c) 2020 Mark Fehrenbacher
 */

const menuConfig: MF.MenuCfgItem[] = [
  {
    id: 'home',
    route: '/',
    menuLabel: 'Home',
    tooltip: 'Go home'
  },
  {
    id: 'cc',
    route: '/conventions',
    menuLabel: 'Coding Conventions',
    tocLabel: 'Coding Conventions',
    snippet: 'A brief discussion on some of the coding conventions in this repository',
    tooltip: 'Some coding conventions'
  },
  {
    id: 'gql',
    route: '/graphql',
    menuLabel: 'GraphQL Example',
    tocLabel: 'GraphQL Example w/ GitHub User API',
    snippet: "Using the GitHub User API to demonstrate GraphQL integration with Next.js' /api",
    tooltip: 'Apollo and GitHub user API'
  },
  {
    id: 'apollo',
    route: '/codegen',
    menuLabel: 'GraphQL + Typescript',
    tocLabel: 'GraphQL + Typescript',
    snippet: 'Some simple instructions for generating TS typings for Apollo/GraphQL',
    tooltip: 'Apollo and Typescript'
  },
  {
    id: 'buttons',
    route: '/buttons',
    menuLabel: 'TW Buttons',
    tocLabel: 'Tailwind Button Examples',
    snippet: 'A small collection of button components with TailwindCSS',
    tooltip: 'Example Tailwind buttons'
  },
  {
    id: 'containers',
    route: '/containers',
    menuLabel: 'TW Containers',
    tocLabel: 'Tailwind Container Examples',
    snippet: 'A collection of TailwindCSS containers',
    tooltip: 'Example Tailwind containers'
  },
  {
    id: '404',
    route: '/custom404',
    menuLabel: 'Custom 404',
    tocLabel: 'Custom 404 Route',
    snippet: 'How to build a custom 404 page in Next.js',
    tooltip: 'Building a custom 404 page'
  },
  {
    id: 'ack',
    route: '/acknowledgements',
    menuLabel: 'Acknowledgements',
    tocLabel: 'Acknowledgements',
    snippet:
      'Gotta give credit where credit is due...links to references used to build this little project',
    tooltip: 'References'
  }
]

export default menuConfig
