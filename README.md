# User Cards

This project was created with
[Create React App](https://github.com/facebook/create-react-app). To get
acquainted and configure additional features
[refer to documentation](https://facebook.github.io/create-react-app/docs/getting-started).

This project implements user cards with the ability to follow them and view a
list of tweets.

## Overview

In this project we use React to create custom components and pages. We also use
React Router to configure routing and style-components for styling.

### Features

- Display user cards with their avatars, tweet counts, and followers.
- Ability to follow users. When clicking the Follow button, the text changes to
  Following, the button color changes, and the followers count increases by 1.
  Clicking the button again reverts the state to the initial values.
- Persistence of follower count and button state on page refresh.
- Pagination for loading more users.

### Technologies Used

- React
- React Router
- HTML
- styled-components

## Setup and Launch

1. Clone the repository to your local machine.
2. Install the project dependencies by running `npm install`.
3. Launch the project by running `npm start`.
4. Open a web browser and navigate to `http://localhost:3000` to see the
   application in action.

## Making Changes

If you wish to make changes to this project, please follow these steps:

1. Create a new branch with a descriptive name reflecting the content of your
   changes.
2. Make the necessary changes in the relevant files.
3. Test that everything works properly.
4. Commit your changes with a meaningful commit message.
5. Push the commit to this repository.
6. Create a new pull request with your changes.
