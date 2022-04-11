# Create a project with react app

1. create repository on git and give the project name
2. Open terminal and go in the folder where you want to create the project
3. run `npx create-react-app project-name` and use the same project name used for github
4. `cd project name` to go into the project folder
5. `code .` to open the project in visual studio code
6. delete files that you don't need
7. In React from version 18 you need to modify index.js when using react-router-dom version 5
     `import {createRoot} from 'react-dom/client'` instead of `import ReactDOM from 'react-dom'` 
     delete what follows and write the following:
    `const root = createRoot(document.getElementById('root'))`;
    `root.render(<App />)`;
8. create 2 folders: components and pages 
9. on the terminal write `yarn start` to launch the project on google chrome
10. on the terminal write `ctrl c` to block the open process of the original create-react-app
11. To add a library (like react-router-dom) on the terminal write `yarn add library name`
12. `yarn start` per avviare l'app
13. in all the files where you need the library, write `import library name` 
14. Follow instructions on github to link github rep to the local folder
