## Router

su linea di comando cmd c per bloccare un processo se in corso
yarn add react-router-dom  per installare la libreria
su file principale (index.js or App.js) import { BrowserRouter as Router } from 'react-router-dom';

`<Router>
  <App />
</Router>`   intorno a tutto il componente App 

dentro i  vari file `import {Switch, Route, Link, useParams} from 'react-router-dom'` a seconda di quello che serve

## Switch

A <Switch> looks through all its children <Route> elements and renders the first one whose path matches the current URL. Use a <Switch> any time
  you have multiple routes, but you want only one of them to render at a time

`<Switch>
  <Route exact path="/">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
  <Route path="/dashboard">
    <Dashboard />
  </Route>
  <Route path="/:id" children={<Child />} />
</Switch>`

## Link
A <Link> is a string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.


`function BasicExample() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/dashboard">Dashboard</Link>
    </>
  )
}`

## UseParams
It is a hook provided by react-router-dom. Params are placeholders in the URL that begin with a colon,

`function Child() {
  We can use the `useParams` hook here to access the dynamic pieces of the URL.
  For example, if the path is /my-path/:myParam and the url is /my-path/12, myParam will be "12"//
  let { myParam } = useParams();`
  
  `return
    <div> <h3>ID: {myParam}</h3> </div>
}`
