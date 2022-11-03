import React, {useEffect, useState} from "react";
import "./App.css"

function App() {
  const[joke, setJokes]  = useState([]);

  useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random`)
        .then((resp) =>resp.json())
        .then((data) => setJokes(data))

  }, []);

  return (
          <div className="Container">
          <p className="joke">Joke: {joke.value}</p>
          <a href="/" className="button">Get New Joke!</a>
          </div>
        );
      }
  

export default App;
