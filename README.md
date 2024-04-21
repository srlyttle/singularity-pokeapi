## Requirements

1. As a user I want to be able to load the initial page and see all the Pokemon categories
2. As a user I want to be able to click on one category/type and see all the Pokemons that belongs to that category/type
3. As a user I want to be able to click in one of the Pokemon and see the Pokemon basic information and statuses in a graph
4. As a user I want in the initial page be able to search for a specific Pokemon and filter
5. As a user I want to be able to see the same Pokemon in different categories/types if it has two or more categories/types


## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn



then, run the development server:

```bash
npm run dev
# or
yarn dev
```

To run the cypress e2e tests

```bash
npm run cypress:open
# or
yarn cypress:open
```

- select E2E Testing
- choose your browser
- select start E2E Testing in (your browser)
- click on the acceptance.criteria.cy.js Spec link

## Technologies used

The project is built using Next.js (14) with app routing

- Next.js 
- React-Query
- Styled-Components
- React-ApexCharts
- Cypress

## Architecture overview

The latest version of Next leverages SSR and by using React-Query we are lean on the cache from the queries.
For this reason I have created page container components that are client components are rendered within the page/server components. All data fetching is done from client components.
Using styled components adds slightly more files and bloat to the app, having used tailwind extensively recently with next it feels like a slower workflow to create the styled components.
Cypress was chosen for the tests because it allowed to test the AC and run various scenarios.
