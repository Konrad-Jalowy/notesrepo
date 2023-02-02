## React Notes

## Essentials
- **React** - JS library for building UIs
- **React characteristics:**
  - **Declarative**
  - **Component-based**
  - **Unidirectional data flow**
- **Component** - reusable piece of UI, nowadays you use functional components in React that return JSX
- **JSX** - JSXML, React markup language
### Commands
- **npx create-react-app my-app** - create directory my-app inside current working directory and create react skeleton app there
- **npx create-react-app .** - create react skeleton app in current working directory
- **npm start** - start react app (runs react-scripts start)
- **react scripts - content of package.json**:
<pre>
    "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
</pre>
- **npx create-react-app my-app --template typescript** - create typescript react project
- **npx create-react-app . --template typescript** - typescript react project in current directory


### Typescript
- **TS useState hook with numeric state**
```html 
const [number , setNumber] = useState<number>(0);
```


### JSX
- **Interpolation in JSX - single brackets {}**
```html
<p>Licznik: {number}</p>
```
- **JSX having multiple elements must always be encapsulated in single React Fragment <> </>**
```html
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
```html 
<MyComponent msg="hello" num="123"/>
```

```html
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
```html 
function MyComponent({msg, num}){
  return (
    <>
  <p>{msg}</p>
  <p>{num}</p>
  </>
  )
}
```


