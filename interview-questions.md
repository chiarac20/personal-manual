## Clean Code

Examples of clean code practices are:
1)  using self-explanatory names for files, folders, methods and variable
2) good indentation
3) short functions
4) single responsibility functions
5) DRY (**D**on’t **R**epeat **Y**ourself)
6) KISS (**K**eep **I**t **S**imple **S**tupid)
7) No hard coded values

## Promises
They are objects introduced in ES6 and are used to manage the code in an asynchronous way.

### A promise has 2 attributes: 
1. an internal state (that can be pending, fulfilled or rejected) 
2. and an internal value (which exists only when the state is fulfilled or rejected).
   
### A promise has 3 methods: 
`.then (callbackResolve, callbackReject?)` It accepts a first callback (mandatory) and, when the promise resolves, calls it by passing it the internal value and ignores the second callback if there is. It accepts a second callback (optional) and,  when the promise rejects, calls it by passing it the internal value and ignores the first callback.

`.catch(callbackReject)` It accepts a callback (mandatory) and, when the promise rejects, calls it by passing it the internal value 

`.finally(callbackFinally)` It accepts a callback (mandatory) and, when the promise rejects or resolves, calls it without passing it any params.

By default initially the promise has a pending state. 

If `then`, `catch`, `finally` are called when the state is pending, they wait until the promise state changes to fulfilled or rejected and then they call the relevant callback.

If `then`, `catch`, `finally` are called when the state is already fulfilled or rejected, the relevant callback is called immediately but asynchronously.

Once the internal state becomes fulfilled or rejected the internal value changes and from that moment the internal state and internal value of the promise will never change for the rest of the promise’s life.

### .then, .catch and .finally return a new promise
If the callback of `then`, `catch` or `finally` returns a promise, the new promise will be the returned promise.

If the callback of `then`, `catch` or `finally` returns something that is not a promise, the new promise will be a promise that resolves with the returned value. Though the callback rejects, the new promise will resolve with the value the callback returns

If the callback of `then`, `catch` or `finally` doesn’t return anything, the new promise will be a promise that resolves with `undefined`.

If the callback of `then`, `catch` or `finally` throws an error, the new promise will reject with that error.

`Promise.all([promise1, promise2, promise3, ….])` is a function and accepts an array of promises. Promise.all returns a promise that resolves when all the promises resolve; rejects when the first promise rejects. 
The internal value of the returned promise is an array where each element is the internal value of the correspondent promise in the array. 

## Throw, Try-catch
In some cases, methods need to report an error to their caller and they cannot do it with return. To report the error we use the keyword `throw`. Throw is used like `return`: after the keyword we write just the info of the error we want to throw. The error can be a string, an object, a number, or anything else, generally it’s an instance of Error class (or of subclass), like `throw new Error(string)`. If an error is thrown, the code will no longer be executed. 
With try-catch we can handle the error and continue the code execution.
The try/catch bloc is structured with the keyword try, curly braces and the protected code that may throw an error. After the curly braces are closed, we write the catch keyword and between parenthesis a variable that will contain the thrown error, after the parenthesis are closed we open a new code block with curly braces, that code will be executed if an error is thrown in the try bloc. The `catch` bloc can be empty if we don’t want to handle the error.
If no error occurs in the try bloc, the code in the catch bloc is ignored.

Syntax: 

```
try {
   ...code may cause error
}
catch (err) {
   ...code to handle error or no code
}
```

## Async and await
Async is a syntax to use functions as promises. Await is a syntax to use promises synchronously.

The keyword `async` before a function makes the function return a promise. If the function returns something, the promise resolves with the returned value. If the function throws an error the promise rejects with that error.

In async functions, the keyword `await` before a promise makes the async function wait for the promise to resolve or reject. 
We can assign a variable to the result of await and, if the promise resolves,  that will be the value of the promise. If it rejects the async function will throw an error and it will stop the code, unless the error is handled through try-catch.
If we use try-catch and the promise resolves, it returns its value. If the promise rejects, the async function throws an error and the code in the catch bloc is executed.

## Pure functions
They are functions that given the same input always return the same output; these functions should not handle side effects or asynchronous tasks like http requests or deal with local storage.  

## Memoization
In pure functions, functions where the output only depends on the input and not on random or states, memoization is the processor associating an output to the related input before the return. The next time the method is called with the same input, the memoized output is returned directly without calculating it again

## Arrow function vs normal functions
An arrow function inherits the context from the mother function, while normal functions create their own context. Their syntax is different too.

## When do we use React Portals?
When we need to move a component to a different part of the app for example an overlay.

## Controlled vs uncontrolled components
Uncontrolled components are components where we use ref to interact with DOM elements especially in input or form components.
Controlled components are components where we manage and update the state and React manages the internal state.

## What is a hook?
It’s a React function that starts with the the prefix `use`

### Which are the rules for using hooks?
1) They can only be called inside react functions (React function components or custom hooks)
2) They can only be called at the top level (not in nested functions or if statements or any loop)

### What are custom hooks?
They are hooks that can contain stateful logic. They are used to outsource/move stateful logic. (For example to centralise the logic that we may be using in several components into re-usable functions and the custom hooks are then called in the various components). Unlike other functions, custom hooks can use React hooks. They need to start with the prefix ‘use’.

### When do we use useReducer?
It’s used to manage complex states or multiple states

### When do we use Context?
When we want to remove some logic from the App component and when several children components need access to data while their parent component does not.

### What is state Batching?
When we have 2 state updates in the same  synchronous code snippet one after each other (so not in a promise, but in a function for example) React batches the state updates together in one state change and reevaluates the component only once

### API
Application Programming Interface

### React Hooks:
`useState` (creates state and setter for state. When the new state is based on the previous state, pass to the setter a callback instead of the new state to ensure to get the latest state snapshots. 
Ex `[count, setCount]=useState(0)`
Instead of  `setCount(count+1)`  we use `setCount((prevCount) => prevCount + 1)`

`useRef` (creates references to dom)

`useEffect` handles side effects (details in my GitHub React/Hooks.md)

`useReducer` used to manage complex or multiple states that depend on each other (details in udemy course lesson 117)

`useContext` used to access data from a Context. We can have multiple contexts and context wrappers one around the other

`useImperativeHandle` allows us to interact with a component imperatively, for example by calling a function of a child component inside a parent component not by passing states to it. Imperative code using refs should be avoided in most cases. useImperativeHandle is used with [forwardRef](https://react.dev/reference/react/forwardRef)).With focus or scroll it may be useful. 

`useCallback` is used to store a callback and not recreate it again when the surrounding function runs again unless one of its dependencies changes. It accepts a callback and an array of dependencies. It’s used with React.memo for optimisation and to avoid unnecessary renders. 

`useMemo` is used to store/memoize any kind of data and not recreate it again when the surrounding function runs again unless one of its dependencies changes. It accepts a callback that returns the data to store and an array of dependencies. It’s used to store data when it would be performance intensive to recalculate something based on it. (For example for sorting values)


## Ways of optimising performance in React
`React.memo` prevents a component being reevaluated unless its props change, because it memoizes the last result. When exporting the component, we wrap it in React.memo()

`useCallback`

`useMemo`


## Redux
What is Redux?

It’s a state management system for cross-component or app-wide state, so it helps us manage states across multiple components or in the complete app, it’s an alternative to React Context. 
React Context is not optimised for high-frequency state changes so performance can be bad and Redux is easier to manage in dev mode through redux devtools (browser plugin)

Redux has the following: (details in udemy course lesson 229)
One central data store for all the states for the entire app. 
To get data . Components set up a subscription to the store and whenever the data changes the store notifies the components and then components can get the data they need and update the UI
To change store data we use a reducer (a function that takes a state and a dispatched action, and returns a new state based on that action. Reducers must be pure functions )
To trigger data changes components dispatch actions(a JS object that describes the operation the reducer should perform). Redux forwards action to the reducer and the reducer performs the operation described in the action and then returns the new state that will replace the existing state in the data store. When a state is changed, subscribing components are notified of the change so that they can update their UI

**Redux Toolkit** is a package that simplifies using Redux 

In the project run `npm install @reduxjs/toolkit react-redux --save`, then run `npm start`.

Alternatively: `yarn add @reduxjs/toolkit react-redux` and `yarn start`

In the src folder create ‘store’ folder where to keep all redux-related files and create an index.js file where to put all redux logic

### To create a slice of the global state
It is good to have a file per each state slice



```
import {createSlice} from ‘@reduxjs/toolkit’; // 1
const counterSlice = createSlice({ // 2
	name: ‘’, 
	initialState: {counter: 0, show: true}, 
	reducers: {
		add (state) {state.counter++}, 
		remove (state) {state.counter --},
		increase (state, action) {state.counter = state.counter + action.payload}
		toggle(state) {state.show = !state.show}
	}
});

export counterSlice.reducer; // 3
export const counterActions = counterSlice.actions; // 4
```

1. Create a slice of the global state
2. call `createSlice()` and pass to it an object that has name, initialState, reducers (a list of methods that receive the state and an action and change part of the state)
3. Export the `slice.reducer` (the group of all the methods inside the reducers in createSlice()) as we will need it in store folder in index.js
`createSlice()` automatically creates unique action identifiers for the different reducers and to get hold of these identifiers we can access the slice of `state.actions` and the different method names we have in the reducers attributes of the object we pass to createSlice, this create a method that when called will create action objects and will trigger the reducer method, indeed called action-creater method.
5. export the actions



### To create a store
In the store folder index.js  
1. import all the state slices reducers
2. `import {configureStore} from ‘@reduxjs/toolkit’` to create a store;
3. call configureStore and pass to it a configuration object where we set a reducer property and 	give as a value one reducer (a group of all the reducers used in createSlice) if we have only 	one state slice or an object of reducers if we have multiple state slices

```
const store = configureStore({reducer: counter.reducer})
// or
const store = configureStore({reducer: {count: counter.reducer}, {login: login.reducer}})
export default store
```
### To provide the store:
to give access to the store to all the components, in index.js (where we render the entire app) 

1. `import { Provider } from ‘react-redux’` and wrap the root component App with Provider
2. import the store in `index.js` and in the Provider set a store prop and give the value of the redux store. 

### To dispatch actions
In the component where we need the actions, 
1. `import {useDispatch} from ‘react-redux’;`
2. import the actions(which is an object that has the reducers methods as keys)
 
Call `useDispatch` that returns a dispatch function that we can call

When dispatching an action we access the actions and call the method we need and pass it a value if we need it, this will be stored in action.payload

 	import {useDispatch} from ‘react-redux’
	import {counterActions} from ‘./store/index.js’
	const dispatch=useDispatch();
	const incrementHandler = () => dispatch (counterActions.increment())
	const increaseHandler = () => dispatch(counterActions.increase(10)) 10 is accessed with action.payload

### To get data
1. `import {useSelector} from ‘react-redux’`
2. in the component call `useSelector` (once or multiple times if we need access to multiple slices of the state) and pass it a function that receives the state managed by redux and returns the slice of the state that we want to extract. When using useSelector react-redux automatically sets up a subscription to the store for that component and the 	component will receive the latest slice of state when that piece of data changes in the store `const counter = useSelector(state => state.count.counter)`

## React Router
It’s a package to create multipage React applications and provides client-side routing. Routing means that different paths in the url load different pages

In the folder of the project run `npm install react-router-dom@5 --save` or `yarn add react-router-dom@5`, then `yarn start`
In the App component 
1. `import {Route} from ‘react-router-dom’;`
2. wrap each component that we want to render with Route and add a path prop that is the path in the url

```
<Route path=“/welcome”> <Welcome/> </Route>
<Route path=“/products”> <Products/> </Route>
```

In `index.js` where we render the root component
`import {BrowserRouter} from ‘react-router-dom’` and wrap the App component
`<BrowserRouter> <App/> </BrowserRouter>`
### To create a link and navigate between pages

Import {Link} from react-router-dom with a `to` prop with the path where we want to navigate to. Unlike <a href> , <Link> doesn’t refresh the page.

For external pages use `<a href>`, for a different url inside the React app use `<Link>`

	import { Link } from ‘react-router-dom’
	<Link to=“/welcome”>  Welcome  </Link>
	<Link to=“/products”>  Products  </Link>

### To highlight the active link in the navigation
Import {NavLink} instead of {Link} from react-router-dom with a `to` prop and an `activeClassName` prop to set a css class when the link is active

	<NavLink to=“/welcome” activeClassName=“active”>  Welcome  </NavLink>
### To define dynamic paths we use in the path prop a special syntax   /:identifier

	<Route path=“/product-detail/:productId/:productIdInfo”>
		<ProductDetail>
	</Route>
### To extract route params, to get access to the value stored in the dynamic segment in the url
Inside the component to render (in this case inside ProductDetail)

		import { useParams } from ‘react-router-dom’
		// params will be an object where the keys are the dynamic segments leading to that page 
		import { useParams } from ‘react-router-dom’
		const params=useParams();
		const productIdentifier = params.productId;

### To ensure only one route is active at a time 
in App component `import { Switch } from ‘react-router-dom’;`

wrap all the Routes component with Switch component and add ‘exact’ prop if we have paths starting in the same way

	<Switch>
		<Route path=“/welcome”> <Welcome/></Route>
		<Route path=“/products” exact> <Products/></Route>
		<Route path=“/products/:productId”> <Products/></Route>
  	<Switch>

### To redirect the user 
Import { Redirect } from ‘react-router-dom’ with a “to” prop with the path we wish to use and put Redirect inside another Route

	import { Redirect } from “react-router-dom”
	<Route path=“/” exact >
		<Redirect to=“/welcome”/>
	</Route>

### What is nested routing?
It allows, at the route level, to have a parent component control the rendering of a child component for example to add specific information to an existing page. To do that we define a Route inside another Route. 
Instead of copying paths, we can import from ‘react-router-dom’ and then use useRouteMatch() that returns a match object with url and path as keys.

```
const match = useRouteMatch();
<Route path={`${match.path}/comment`}></Route>
```

### To show a not found page 
After all the routes write another Route with path=“*” so if no previous routes match the url entered, this will match all urls and render what is inside the Route.
```
<Switch>
	<Route path=“*”> Page not found </Route>
</Switch>
```

### What is programmatic navigation? 
It’s a way to navigate the user away from a page to a different page programmatically in our code. To do that we import useHistory and we can store the object returned in a constant. Then we use ‘replace’ or ‘push’. ‘push’  adds a new page to the history of pages, ‘replace’ replaces the current page.
With ‘push’ we can go back with the back button to the page we are coming from, with ‘replace’ we can’t.

```
Import { useHistory } from ‘react-router-dom’;
Const history=useHistory();
History.push(‘./products’);
```

When writing complex urls, we can use a string or a different structure 	Instead of a string we can pass an object with pathname and search as keys
```
<Link to=“/products/:productId?quantity=1”></Link>
// Or
<Link to={{pathname: “/products/:productId”, search:”?quantity=1”}}></Link>
```

### How to prevent the user from accidentally navigating away from a page, for example when entering data? 
We import ‘Prompt’ component from react-router-dom and we return it side by side with the form
Prompt accepts a `when` prop that accepts a boolean and a `message` prop that accepts a callback (with a location param that has the details of the new page) and returns the string to show if the user tries to navigate away.
If the user tries to leaves the page and when is set to `true`, the message will be displayed and if the user clicks ok, they will navigate away, if they click cancel they will stay on the page.

```
Import { Prompt } from ‘react-router-dom’
Return <div>
	<Prompt when={true} message={(location) => ‘Are you sure you want to navigate away?’}/>
	<Form />
</div>
```

### Query parameters
They are input given to the page through the url, for example filters in a search. They are optional and do not change the path. They are after ? in the url.

Example https://my-app/my/path?param1=value1&param2=value2#hash-part

| PATH | QUERY STRING | HASH |
|------|--------------|------|
| my-app/my/path | param1=value1&param2=value2 | hash-part |

The part after the question mark and before hash (#) is the query string, a string that contains the query parameters with this format key1=value1&key2=value2&... . & is called ampersand.

The name and values of the query parameters cannot contain &, #, =. To include these chars into the values of query parameters we can use `encodeURIComponent` method

To read the values in the query params we import useLocation from ‘react-router-dom’. This returns a location object that has the information of the currently loaded url (including pathname and the search properties which has query params).
Use new URLSearchParams(location.search) and pass to it location.search and that returns a queryParams object.
To access query parameters by key we use queryParams.get(‘name of the key’)

```
import {useLocation} from ‘react-router-dom’
const location=useLocation()
const queryParams=new URLSearchParams(location.search);
const sortValue = queryParams.get(‘sort)
```

## CSS

### SELECTOR PRIORITY
1. style: {}  Inline style
2. #id selector
3. .class selector
4. Tag selector

### PSEUDO-SELECTORS (PSEUDO CLASSES + PSEUDO ELEMENTS)
#### PSEUDO-CLASSES
1. :hover (mouse-over)
2. :active  (for links and buttons, when the mouse is pressed on the element)
3. :focus (for inputs, when the focus is on the input)
4. :visited (only for links, already visited)
#### PSEUDO-ELEMENTS
1. :first-child
2. :last-child
3. li:nth-child(3) (selects the 3rd li in a list)
4. :nth-child(2) (selects the second element in every group of siblings)

### ADVANCED SELECTORS
**ADJACENT SIBLING COMBINATOR** `+` (it selects the element that directly follows the first element)

`input + label` (it selects the label that comes immediately after every input)

**GENERAL SIBLING COMBINATOR** `~` (it selects all the iterations of the second element that follow the first element and are children of the same parent )

`img ~ p` (it selects all the paragraphs that follow an image and are siblings of image)

**CHILD COMBINATOR** `>` (it selects all the iterations of the second element that are direct children of the first element)

`ul > li` (it selects all the li that are direct children of the ul)

**DESCENDANT COMBINATOR** (space) (it selects all the iterations of the second element that are descendants of the first element)

`ul div` (it selects all the div that are descendant of the ul)

**ATTRIBUTE SELECTOR** `[attribute]` or `[attribute=value]` (it selects elements based on the presence or value of an attribute)

```
input[value] // it selects all the inputs that have a value attribute
input[value=“chiara”] // it select the inputs that have “chiara” as a value
```

### COLORS
Check colour picker on google for preview of colour and rgb and hex code
#### COLOR CODES:
1. Color name `color: blue`
2. Hex code #6numbers or letters 0-9 a-f `color: #0000ff`
3. Rgba code(3 sets of numbers 0-255 and a number 0-1 for transparency with 0 fully transparent) `color: rgba(0, 0, 255, 0.5)`

#### BACKGROUND
1. `background-image: {url(“”)}` to add an image from a url as a background
2. `background-size: {height width}`
3. `background-size: cover` is used to stretch the image and let it cover the whole part
4. `background-repeat: no-repeat` (to avoid the message being repeated)

#### GRADIENTS (they show transitions between 2 or more colours, generally used for backgrounds). They can be linear or radial
1. linear-gradient(to direction, color1, color2) or linear-gradient( angledeg, color1, color2) background: linear-gradient(to top right, blue, steelblue, aliceblue) background: linear-gradient(30deg, blue, steelblue, aliceblue)
2. radial-gradient(shape, color1, color2, ….). ellipse is the default shape, circle is the other option

To specify the proportions of each colour we use percentage. 
radial-gradient(circle, color1 30%, color2 40%). The proportions need to be in ascending order

#### TYPES OF UNITS
1. ABSOLUTE: px, cm, mm
2. RELATIVE: % (relatively to the parent component), em(relative to the current font size of the element), vh (view height of the screen, 1vh=1% of the screen height), vw(view width of the screen, 1vw=1% of the screen width) 

#### TEXT MANIPULATION
1. **text-decoration**: underline/none(very useful for links)/line-through/overline/underline overline/...
2. **text-transform**: `capitalize`, `uppercase`, `lowercase`
3. **text-align**: `left`, `right`, `center`, `justify`
4. **font-size**
5. **font-weight**: generally a number between 100 and 900 (it defines how bold an element is)
6. **font-style**: `italic`/`oblique`/`normal`
7. **Font-family:** 
3 most used family groups are: serif(generally for printouts), sans-serif(for websites), monospace(where every letter take the same space)
Specific family names include Times New Roman, Georgia(serif), Arial, Calibri, Helvetica(sans-serif), Courier New(monospace)
Font-family can take more font names so if the browser doesn’t support the first, it tries the next one; separate each one with a comma and if the font name has white space, use “” (“Times New Roman”). Start with the font you want and end with a generic family.
Font-family: Arial, Calibri, sans-serif;
To get external fonts search google fonts (https://fonts.google.com) and select the font and weight we want, copy the link in the html doc before the css doc and then inside the css file use the name of the font selected.

#### THE BOX MODEL
It is used when talking about layout. It is a box that wraps every HTML element and consists: content, padding, borders and margins
1. border: (size color style) style can be `solid`, `dotted`, `dashed`, `double`
We can style each border separately: border-bottom, border-top, border-right, border-left
border-radius is used to have rounded borders
For padding and margin 
shorthand with 4 values are top, right, bottom, left, 
shorthand with 2 values are top and bottom, left and right
shorthand with 1 value applies it to the 4 sides
margin: auto is used to centre an element horizontally in its container
Margin can be a negative value

### FLOAT AND DISPLAY
**Float** is used to make an element float to the right or left or not at all. `float: right`

**Display** is used to change the display behaviour of an element:
```
// displays an element as an inline element(like a <span/>)
display: inline;
// displays an element as a block element(like a <div/>)
display: block;
// displays an element as an inline-block container, so on the same line but with some spacing
display: inline-block;
// makes the element disappear
display: none;
```

### FLEXBOX
Defines the layout of the children components and it’s formed of a flex container and flex items that are children of the flex container. It’s very useful as it is responsive

**In the container:**

1. `display: inline-flex` is a variant of display-flex . The difference is that it acts as inline, so it only takes the space it needs and allows other tags to be on the same line 
2. `display: flex`

`flex-direction` defines the direction of the items, `row` is the default (in fila), `column` (in colonna), `row-reverse`, `column-reverse` to reverse items

`flex-wrap` is used to wrap or no wrap items if there is no space left, the possible values are: `nowrap` (default, is used not to wrap items, so items will be squeezed to fit), `wrap` (is used to wrap items and send them to a new line if necessary).

`justify-content` defines the position of the items on the main direction. The options are: `flex-start` (default), `flex-end`, `centre`, `space-around`, `space-between`, `space-evenly`

`align-items` defines the position of the items on the secondary direction. Options:
`stretch` (default), `flex-start`, `flex-end`, `centre`

To centre items both horizontally and vertically use:
```
justify-content: center;
align-items: center;
```

In the items:
`order`: a number from 1 upwards, it is used to change the normal ordering of the elements
```
#element1 {order: 3}
#element2 {order: 1}
#element3 {order: 2}
```
#element2 will be displayed first, then element3, then element1

`flex-grow: {number}` defines how much excess space of the container the item should take, default value `0` (the itme will take no extra space

If we set each item to `flex-grow: 1`, each item will take the same amount of excess space

If we set an item to flex-grow: 3 or sth else, the item will take 3 times more excess space than the other items

`flex-shrink: {number}` defines how an item should shrink if we go below the minimum width. Default value is `1` so each item will shrink in the same way. 
If we set flex-shrink: `0` to an item, that item will not shrink
If we set flex-shrink: `4` to an item, that item will shrink 4 times more than the other items

`flex-basis` defines the minimum width of the element. The code `flex-basis: 100px` the item minimum width will be 100px

`flex: {grow} | {shrink} | {basis}` it’s a shorthand to write flex-grow, flex-shrink and flex-basis

The second and third params are optional, so if not set they will be flex-shrink:1, flex-basis: 0%

`flex: 1 1 100px` (it has flex-grow:1, flex-shrink:1 and flex-basis:100px)
`flex:5` (it has flex-grow:5, flex-shrink:1 and flex-basis:0%)

`align-self: flex-start/flex-end/center` is used to align the selected item in the container. It only works vertically and overwrites align-items in the flex container

### GRID
Like flexbox grid is used to define the layout of the children components inside a container, but while flexbox positions elements in one dimension: row or column, grid positions element in 2 dimensions, both columns and rows

#### In the container:
`display: grid`

`grid-template-columns: {number}` defines how many columns and how wide they should be. It accepts the width of each column separated by white space. Use auto to divide all the space equally

`grid-template-columns: 100px 50px 30px;` creates 3 columns the first one 300px wide, the second one 50px and the third one 30px

`grid-template-rows` defines how many rows and how tall they should be. It accepts the height of each row separated by white space. Use auto to divide all the space equally

`grid-template-rows: 50px 80px 30px;` creates 3 rows the first one 50px high, the second one 80px and the third one 30px

`justify-content` is used to align horizontally the whole grid inside a container. The grid’s total width needs to be less than the container’s width for the justify-content to have an effect

`justify-content: start | end | center | space-evenly | space-around | space-between`

`align-content` is used to align vertically the whole grid inside a container.The grid’s total height needs to be less than the container’s height for the align-content to have an effect
`align-content: start, end, center, space-evenly, space-around, space-between`

`column-gap` defines the size of the gap between columns
`column-gap: 100px;`

`row-gap` defines the size of the gap between rows
`row-gap: 50px;`

As a shorthand we can use `gap` and it defines the size of the gap between rows and columns.
It accepts 2 values: row-gap and column-gap or one value that applies to both
`gap: 50px 100px;` (defines 50px row-gap and 100px column-gap)
`gap: 65px;` (defines 65px row gap and 65px column-gap)

#### In the grid items:
`grid-row`: accepts 2 values separated by `/`. The first value is which row line the element starts and the second one is which line the element ends. `grid-row` accepts as a second element span to define how many rows the element should occupy

`grid-row:  1 / 3;` it starts at line 1 and ends at line 3

`grid-row: 1 / span 2;` it starts at line 1 and spans for 2 rows

`grid-column`: accepts 2 values separated by `/`. The first value is which column line the element starts and the second one is which line the element ends. Grid-column accepts as a second element span to define how many column the element should occupy

`grid-column:  1 / 3;` it starts at line 1 and ends at line 3

`grid-column: 1 / span 2;` it starts at line 1 and spans for 2 columns

`grid-area` is a shorthand for `grid-row` and `grid-column` and accepts 4 values:

`grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end`

`grid-area: 1 / 1 / 3 / spans 2;` means grid-row-start at line 1,  grid-column-start at line 1, grid-row-end at line 3 and grid-column-end spans for 2 columns

### TRANSITION
It is used to change property values smoothly, over a given duration
`transition` is a shorthand for:

`transition-property` (the CSS property to add an effect to)

`transition-duration`: (how long the transition should last in seconds (s) or milliseconds (ms)) 

`transition-timing-function`: (the speed curve of the transition effect) Values are `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`.

Optional:
`transition-delay`: a delay in seconds for the transition effect. Optional

`transition: width 2s ease 0.5s;`

### TRANSFORM
It is used to move, rotate, scale an element. 

`transform: translate(param for the x-axis, param for the y-axis);` moves an element from its position according to parameters given for the x-axis and the y-axis. Unlike margin, it grants better performance and can move an element on top of another one
`x-axis` is the horizontal axis and positive values move to the right and negative to the left
`y-axis` is the vertical axis and positive values move up and negative down

#. `transform: translate(50px 100px);` moves an element 50px to the right and 100px down
#. `transform: translate(-30px -50px);` moves an element 30px to the left and 50px up
#. `transform: scale(value)` scales the element as defined in the value passes
transform: scale(2.5) makes the element 2.5 times bigger 
Transform: rotate(deg) rotates the element by the the degree indicated 
Transform: rotate(45deg) rotates the element 45 degrees  to the right
Transform: rotate(-90deg) rotates the element 90 degrees to the left

ANIMATION
To create an animation
@keyframes animation-name-at-my-choice {
From {} starting point 
To {} ending point
}
It is used to define an animation that starts from the properties in the ‘from’ and end with the properties in the ‘to’

@keyframes animation-name-at-my-choice {
0% {} starting point 
50% {} half way
…%
100% {} ending point
}
It is used when we want to make more steps than just 2, so we use percentages

@keyframes red-to-black {
	from {background-colour: red}
	to {background-colour: black}
}
This will create an animation that changes the background colour from red to black

@keyframes red-to-black {
	0% {background-colour: red}
	35% {background-colour: green; padding: 1vw}
	63% {background-colour: blue; padding: 2vw }
	100% {background-colour: black; padding: 3vw}
}
This will create an animation that changes the background colour from red to green, blue and black and will change the padding accordingly

To use animation
In the element that we want to apply the animation we need to use the following animation properties
Animation-name: red-to-black      (the name that I used for the animation)
Animation-duration: 5s                 (how long the animation should last, by default it’s 0)
Animation-timing-function: linear (the speed curve of the animation) Values are ease/linear/ease-	in/ease-out/ease-in-out. 
Animation-delay: 2s                       (delay in the animation start if we want one)
Animation-iteration-count: 3          (it defines how many times we want the animation to iterate)
	Animation-iteration-count: infinite (the animation will keep iterating forever)
Animation-direction: normal (from start to finish) reverse (from finish to start)
	alternate (forward and then backward, from start to finish and then from finish to start)
	alternate-reverse (backward and then forward)
Shorthand for the 6 properties is
Animation: name  duration timing-function delay iteration-count direction 
Animation:  red-to-black 5s linear 0s 3 normal










POSITIONS:
Static is the default
Fixed: it gives access to top, bottom, left, right regarding the entire page.It doesn’t move if the page is scrolled
Absolute: it gives access to  top, bottom, left, right regarding its nearest ancestor component with position relative
Relative: like static, but it’s a reference for elements with position absolute
Z-index is a CSS property used on elements with position absolute or fixed. It’s a pure number and if two elements overlap, the one with the greater z-index will be shown on top.


Function scope 

Questions to the interviewer
Do you use agile environment?
Do you have any structured training process?
How do you implement clean code?
INTERVIEW QUESTIONS

	0.	What are components in React?Reusable building blocks that can have an internal logic
	0.	Declarative approach We define the desired target states and react will figure out the actual JS Dom instructions
	0.	How does React optimise DOM render? Though the virtual DOM: Following any changes, before re-rendering React creates a copy of the DOM and applies the changes to the copy, the virtual DOM. It then compares the DOM in the browser and the virtual DOM and updates in the browser only the elements that have been changed 

Clean code 
	0.	Indentation
	0.	Good name methods/variables
	0.	Short methods
	0.	Single responsibility
	0.	Modularity
	0.	Less indentation possible
	0.	DRY (Don't Repeat Yourself)
	0.	No hard coded values (use constants)
	0.	Pure functions when it's possible
	0.	Immutable data
	0.	No side effects
Possible questions:
	0.	Biggest challenge in your previous experiences?
	0.	Update functionality in Sapientiam Studio, when the code was not clean
	0.	Debug other people's code
	0.	The best target you archived
	0.	Weather forecast app
	0.	What have you learned in Leccellenza
	0.	Improved my html/css/js skills,
	0.	jQuery
	0.	What have you learned in Sapientiam
	0.	Unit tests
	0.	AJAX
	0.	Async code
	0.	Responsive web
	0.	Feature of a unit test
	0.	Must test unit sw (must test just one part of code and mock the dependencies)
	0.	Must cover edge cases
	0.	Must be independent from other unit tests
	0.	What is TDD (Test Driven Development)
	0.	Methodology to write code based on unit tests
	0.	Steps:
	0.	create unit test (that fail)
	0.	Write the code to let the tests pass
	0.	refactor the code
	0.	What did Leccellenza do?
	0.	Create sw for local small shops in Lecce (south of Italy)
	0.	What did Sapientiam Studio do?
	0.	Sw house for small companies
	0.	Esperienza particolare Leccellenza:
Spiaggia privata, app per i clienti (interfacciata con le API scritte da altri programmatori di Leccellenza). Ogni giorno il backend creava un codice per ogni ombrellone. Il cliente inseriva il codice nell'app che lo validava attraverso API. Una volta validato lo memorizzava nel local storage insieme alla data di scadenza, e poi lo inviava ad ogni richiesta per acquisto per il bar.
L'app non gestiva pagamenti (che venivano fatti con il pos o cash ai camerieri). Mostrava la lista di cosa era disponibile e permetteva di selezionarli per un'ordine.
L'app interrogava le API anche per sapere a che punto della coda era l'ordine.
