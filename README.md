![NeuroFlix Logo](https://neuroflix.vercel.app/static/media/Logo.6f12fc7545e36058e8cd.png)

## Introduction

This project is a React-based web application designed to provide users with movie recommendations, information, and browsing options. It integrates with several APIs to fetch movie data, trailers, and genre information. The application also incorporates user authentication and Redux for state management.

## Features

### 1. Movie Suggestions
- Allows users to search for movie suggestions based on specific queries.
- Utilizes the OpenAI API to generate movie suggestions based on user queries.
- Fetches movie data from The Movie Database (TMDb) API to provide detailed information about suggested movies.
- Displays a list of movie suggestions with relevant details such as title, release date, and poster.

### 2. Browsing Categories
- Offers users the ability to browse movies based on different categories such as Now Playing, Popular, and Top Rated.
- Fetches movie data from TMDb API for each category and displays them in a paginated format.
- Includes navigation buttons for users to navigate between pages within each category.

### 3. Genre-based Browsing
- Allows users to browse movies based on specific genres.
- Fetches movie data from TMDb API filtered by genre and displays them in a paginated format.
- Includes navigation buttons for users to navigate between pages within each genre category.

### 4. User Authentication
- Implements user authentication using Firebase Authentication.
- Allows users to sign in with their email and password or via other authentication providers supported by Firebase.
- Stores user authentication state using Redux for easy access across components.

### 5. Responsive Design
- Ensures that the web application is responsive and accessible across different devices and screen sizes.
- Utilizes responsive design techniques such as media queries and flexbox/grid layouts to adapt the UI based on the viewport size.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Set up Firebase authentication by creating a project on the Firebase console and configuring authentication methods.
5. Obtain API keys for TMDb and OpenAI APIs and update them in the appropriate files (`constants.js`).
6. Run the application using `npm start`.
7. Access the application in your web browser at `http://localhost:3000`.

## Tech Stack

- React.js
- Redux Toolkit
- React Router
- Firebase (Authentication)
- TMDb API
- OpenAI API

## Folder Structure

```
/src
|-- Components
|   |-- InfoTopContainer.js
|   |-- CastList.js
|   |-- VideoGrid.js
|   |-- FullScreenVideo.js
|   |-- GenreItem.js
|   |-- CrewPerson.js
|   |-- SuggestionButton.js
|   |-- SuggestionContainer.js
|   |-- ...
|
|-- Hooks
|   |-- Movies
|   |   |-- useNowPlayingMovies.js
|   |   |-- usePopularMovies.js
|   |   |-- useTopRatedMovies.js
|   |   |-- ...
|   |-- Genres
|   |   |-- useMovieGenre.js
|   |   |-- useGenreList.js
|   |   |-- ...
|
|-- Utils
|   |-- constants.js
|   |-- IconRenderer.js
|   |-- Store
|       |-- userSlice.js
|       |-- movieSlice.js
|       |-- GenreSlice.js
|       |-- suggestionSlice.js
|
|-- Firebase
|   |-- firebase.js
|
|-- App.js
|-- index.js
|-- index.css
```

## Credits

- This project utilizes data from [The Movie Database (TMDb)](https://www.themoviedb.org/) API.
- Movie recommendations are generated using the [OpenAI](https://openai.com/) API.
- Icons used in the project are sourced from [React Icons](https://react-icons.github.io/react-icons/).

---
