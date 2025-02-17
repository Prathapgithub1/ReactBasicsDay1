# React in HTML Example

This project demonstrates how to integrate React into a basic HTML file using a CDN.

## Description
The HTML file includes:
- A `div` with `id="root"`, which serves as the mounting point for React.
- React and ReactDOM libraries included via CDN.
- JavaScript code that creates and renders a React element dynamically.

## Code Breakdown

### HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React</title>
    <link rel="stylesheet" href="./css.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>
```
- The `root` div is where React will render its components.
- The page includes a CSS file (`css.css`) for styling (not provided in the code snippet).

### Including React via CDN
```html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```
- These scripts load React and ReactDOM, allowing us to use React without a build system like Webpack.

### JavaScript Code Explanation
```javascript
let h1Element = React.createElement('h1', { id: "heading" }, 'Welcome to React');
console.log(h1Element);
```
- `React.createElement('h1', { id: "heading" }, 'Welcome to React')` creates a virtual DOM element `<h1>` with the text "Welcome to React" and an `id` of "heading".
- `console.log(h1Element);` logs the React element to the console.

```javascript
let renderElement = ReactDOM.createRoot(document.getElementById('root'));
renderElement.render(h1Element);
```
- `ReactDOM.createRoot(document.getElementById('root'))` initializes a React root for the `div` with `id="root"`.
- `.render(h1Element);` renders the `<h1>` element inside the `root` div.

## Summary
- This example uses React without a build system.
- React is loaded via CDN.
- A simple React element is created and rendered into the HTML page.

## Next Steps
To expand this project:
- Use JSX instead of `React.createElement`.
- Implement a functional React component.
- Move the script to an external file for better code organization.

### Example JSX Version
To use JSX, include Babel and update the script:
```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel">
    function App() {
        return <h1>Welcome to React</h1>;
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
</script>
```


