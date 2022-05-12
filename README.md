# Getting Started with Create React App
Create react app by the following command
``` 
npx create-react-app random-quote-machine
```
CD into the App Folder.
```
cd random-quote-machine
```
Run npm start

Now your project is up and running. Let's start coding!

<img width="277" alt="rea" src="https://user-images.githubusercontent.com/91548582/168083240-fef6d264-6b18-433a-b9c2-2fe2ad67e217.PNG">

## Folder Structure

On the root level, we will keep the following files. 

- Index.JS
- App.JS
- App.CSS
- Index.CSS

## Index Component  

No Changes will need to be made to the Index.js file or Index.css file and we will use the default boilerplate code for the duration of the project. 

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

```
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

## App Component 

Get rid of everything inside your project and it should look like this.

```
import './App.css';
import React from 'react';


function App () {
return (
  <div className="App">
    Hello World!
    <div>
 );
}

export default App;
```

For this project we will import useState from react alongside creating an array of objects to store the 'quote' and 'author' field from the [Type.Fit/API](https://type.fit/api/quotes). Then we will build a function to generate a quote at random so that we have access to them. Note that we have three buttons. One for generating a quote and two for sharing the quote on Twitter and Tumblr. 

```
//Quotes Credit: https://type.fit/api/quotes

import './App.css';
import React,{useState} from 'react';

export default function App() {

  let initialState={
    quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
    author:"Thomas Edison"
    }
  const [quote, setquote] = useState(initialState);
  let quotes=[
    {
      quote:"Genius is one percent inspiration and ninety-nine percent perspiration.",
      author:"Thomas Edison"
    },
    {
      "quote": "You can observe a lot just by watching.",
      "author": "Yogi Berra"
    },
    {
      "quote": "A house divided against itself cannot stand.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "Difficulties increase the nearer we get to the goal.",
      "author": "Johann Wolfgang von Goethe"
    },
    {
      "quote": "Fate is in your hands and no one elses",
      "author": "Byron Pulsifer"
    },
    {
      "quote": "Be the chief but never the lord.",
      "author": "Lao Tzu"
    }
  ]
  let generateQuote=()=>{
    console.log(quotes.length);
    var random = Math.floor(Math.random() * (quotes.length - 0) ) + 0;
    console.log(random);
    setquote(quotes[random]);
  };

  return (
      <div className="container" onLoad={()=>{generateQuote()}}>
        {/* <h1>Random Quote Machine</h1> */}
        <div className="wrapper" id="quote-box">
        <h2 id="text">{quote.quote}</h2>
        <br />
        <div>
        <h3 id="author">{quote.author}</h3>
        </div>
        <div>
        <button id="twitter">
          <a id="tweet-quote" 
            target="_blank" rel="noreferrer"     
            href="http://twitter.com/intent/tweet">
           {<i class="fa fa-twitter"></i>}
          </a>
        </button>
        <button id="tumblr">
          <a href="https://www.tumblr.com" rel="noreferrer">
            <i class="fa fa-tumblr"></i>
          </a>
        </button>
        <button id="new-quote" onClick={generateQuote}>Next Quote</button>
        </div>
        </div>
        <div class="footer"><a href="https://github.com/hr21don/Random-Quotes-Machine-ReactJS">Fork me here</a></div>
      </div>
    )
}
```

## Styling the App

App.css will contain our styling code for our Random Quote Machine. 

```
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: rgb(41, 41, 41);
  font-family: Arial, Helvetica, sans-serif;
  background: black;
  overflow: hidden;
}
h1 {
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 6px rgb(0, 162, 255);
}

h3{
  padding: 20px;
}
.wrapper {
  width: 60%;
  height: auto;
  background:rgb(255, 255, 255);
  box-shadow: 20px 0px 20px rgb(0, 58, 92);
  padding: 20px;
  border-radius: 10px;
  text-wrap: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#text::before {
  content: "❝";
  padding: 10px;
  font-size: 60px;
  color: rgb(255, 81, 0);
}
#text {
  display: block;
  text-align: center;
  width: 100%;
  margin: auto;
  padding: 10px;
  font-family: 'Poppins', sans-serif;
}

#author {
  text-align: right;
  display: block;
  font-family: 'Poppins', sans-serif;
}
#author::before {
  content: "-";
}
button {
  outline: none;
  cursor: pointer;
  display: inline-block;
  margin: 2px;
  padding: 10px;
  font-size: 110%;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(to right, red, rgb(255, 81, 0));
  border-width: 0px;
  border-radius: 10px;
  transition: 0.8s ease;
  color: rgb(255, 255, 255);
  user-select: none;
}
button:hover { 
  color: rgb(0, 89, 255);
}
#tumblr,
#twitter {
  width: 50px;
  height: 50px;
  text-align: center;
}
#new-quote {
  float: right;
}
a {
  text-decoration: none;
  color: rgb(255, 255, 255);
}

.footer {
  width: 450px;
  text-align: center;
  display: block;
  margin: 30px auto 30px auto;
  font-size: 1.2em;
  font-weight: 600;
  color: rgb(255, 255, 255);
}

a :hover {
  font-weight: 500;
  text-decoration: none;
  color: rgb(0, 89, 255);
}

@media screen and (max-width: 480px) {
  .wrapper {
    width: 100vw;
    box-shadow: none;
  }
}
@media screen and (min-width: 480px) {
  .wrapper {
    width: 80vw;
    box-shadow: none;
  }
}
@media screen and (min-width: 900px) {
  .wrapper {
    width: 60vw;
    box-shadow: none;
  }
}

```

## Run The App

Open the terminal and type the following command.

```
npm start
```

Open http://localhost:3000/ in browser:

<img width="926" alt="post" src="https://user-images.githubusercontent.com/91548582/168082359-18de19a1-3430-4981-90e6-74f6a4ea5a69.PNG">


## Netlify Deployment

Open the terminal and type the following command.

```
npm run build
```
Deploy the build folder manually to [Netlify](https://www.netlify.com/).

<img width="706" alt="netlify" src="https://user-images.githubusercontent.com/91548582/168083406-3b7dd444-f27b-4b13-bc5b-99bc2cec518f.PNG">


Deployment Output:

<img width="929" alt="netlify" src="https://user-images.githubusercontent.com/91548582/168083938-affeaa44-8530-469a-b8f1-e2cc85c8355c.PNG">


Talk Soon! 
