# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tools Used

The external libraries that where used are:

### For styling:

[Emotion](https://emotion.sh/docs/introduction) along with the component library [material-ui](https://material-ui.com/)

### For state management:

[Redux](https://redux.js.org/) with [redux-toolkit](https://redux-toolkit.js.org/) and [redux-thunk](https://github.com/reduxjs/redux-thunk)

### For type checking:

[prop-types](https://github.com/facebook/prop-types)

### For code styling

[es-lint](https://eslint.org/) and [prettier](https://prettier.io/)

## Comments:

- Redux is not necessary for that size of the app and it was used for demonstration purposes.

- The purpose of the Redux accompanying libraries (thunk and toolkit) are to simplify the hassle of creating the store and new actions. We define the reducers and the tools generate the associated actions.

- For the sake of the application **LocalStorage** was used to save the user's data. It's a very simple way to store non-sensitive data and if we wanted to accomplish to have the data accessible through different devices we should build a serving application with the appropriate database. But for the sake of the task it felt appropriate.

- I followed a mobile first design so the app is fully usable in various screen sizes and devices.
