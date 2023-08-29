# To-Do List App

## Description: 
The application allows the user to read and modify a list of items, with modifications including creating new items, editing existing items, and deleting individual items or the entire list.

The app was created by [Create React App] and involves a lot of React.js and React Components, in addition to HTML and CSS.

After hosting the app on GitHub Pages, I performed E2E testing on the app using Cypress. 


## Some Challenges I encountered: 

One of the difficulties I came across when working on this project was the fact that I could no longer reference the value of an HTML element in JSX as easily as I could with HTML script. 
This required me to learn more about React references and incorporate them into my JSX code. 

Another issue I encountered, and one that I have been unable to solve up until now, is the fact that after an item had been created and edited, attempting to delete the item will result in a different
item being deleted. In addition, after that is done, the edited item will not be deleted unless I clear the entire list. During my attempts to fix the bug, I noticed that the list I use to keep track 
of the items in the list is edited and deleted as intended during this process, and even the rendering process was done correctly. However, somehow, the list displayed was simply incorrect. After spending
multiple hours attempting to handle this bug, I decided to move on to other projects and return to this issue when I have time. 


## Plans for the future: 

I intend to return to this project and handle the bug mentioned in the second paragraph above when I have time. 


The app can be accessed with the following link: 
https://gerald-z.github.io/Todo-List/ 









# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
