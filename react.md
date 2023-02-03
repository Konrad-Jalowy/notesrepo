## React Notes

## Essentials
- **React** - JS library for building UIs
- **React characteristics:**
  - **Declarative**
  - **Component-based**
  - **Unidirectional data flow**
- **Component** - reusable piece of UI, nowadays you use functional components in React that return JSX
- **JSX** - JSXML, React markup language
- **Synthetic Event** - best analogy is to compare it to jQuery-selected object vs JS-query-selected object. Some kind of 
React wrapper on the events (I think...). Anyways, thats the type passed to event handler functions in React. They say those events
have more consistency over different browsers.
### Commands
```sh
npx create-react-app my-app
```
**create directory my-app inside current working directory and create react skeleton app there**
```sh
npx create-react-app .
```
**create react skeleton app in current working directory**
```sh
npm start
```
**start react app (runs react-scripts start)**
**react scripts - content of package.json**:
```json
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
**create typescript react project:**
```sh
npx create-react-app my-app --template typescript
```
**typescript react project in current directory:**
```sh
npx create-react-app . --template typescript
```


### Typescript
- **TS useState hook with numeric state**
```tsx 
const [number , setNumber] = useState<number>(0);
```


### JSX
- **Interpolation in JSX - single brackets {}**
```jsx
<p>Licznik: {number}</p>
```
- **JSX having multiple elements must always be encapsulated in single React Fragment <> </>**
```jsx
return (
    <>
    <p>Licznik: {number}</p>
    <button onClick={() => handleCounter('inc')}>Increment</button>
    <p></p>
    <button onClick={() => handleCounter('dec')}>Decrement</button>
    </>
  ); 
```
- **props** - JS object that is passed to a component. Contains key-value pairs passed as an attribute in JSX
```jsx 
<MyComponent msg="hello" num="123"/>
```

```jsx
function MyComponent(props){
  return (
    <>
  <p>{props.msg}</p>
  <p>{props.num}</p>
  </>
  )
}
```
- **Destructuring props** - good for code readability
```jsx 
function MyComponent({msg, num}){
  return (
    <>
  <p>{msg}</p>
  <p>{num}</p>
  </>
  )
}
```


