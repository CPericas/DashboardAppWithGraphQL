# React Blog App
A simple and functional blog application built with React, Apollo Client, GraphQL, and React-Bootstrap. This app allows users to create, read, update, and delete posts. It also includes user profile details, album information, and todos. The app is designed to be responsive and showcases best practices in modern React development.

## Features
**User Profile**: View user profile information, including username, email, and location.

**Posts**:

View all posts created by the user.

View detailed information about a single post.

Edit or delete posts.

Create new posts.

**Album**: View album details.

**Todos**: View todo list with completion status.

**Responsive Design**: The app is mobile-first and responsive using React-Bootstrap.

**GraphQL Integration**: Fetch data from the server using Apollo Client and GraphQL.

## Technologies Used
**React** - Frontend JavaScript library for building user interfaces.

**Apollo Client** - State management and data fetching library for interacting with a GraphQL server.

**GraphQL** - Query language for APIs.

**React-Bootstrap** - Bootstrap components as React components for a responsive UI.

**TypeScript** - A superset of JavaScript that adds static types.

**React Router** - Declarative routing for navigating between pages.

# GraphQL API
This project communicates with a GraphQL API to fetch and manipulate data. Below are the GraphQL operations used:

**GET_USER_PROFILE**: Fetches the user profile details.

**GET_USER_POSTS**: Fetches all posts created by a specific user.

**GET_POST_DETAILS**: Fetches detailed information about a single post.

**UPDATE_POST**: Updates an existing post.

**DELETE_POST**: Deletes a post.

**CREATE_POST**: Creates a new post.

**GET_ALBUM**: Fetches album details.

**GET_TODO**: Fetches details about a specific todo.

**The GraphQL operations are defined in the graphql/queries.js and graphql/mutations.js files.**
