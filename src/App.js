import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Favorites from "./Components/Favorites";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Album from "./Components/Album";
import "./index.css";

function App() {
  const state = () => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      return JSON.parse(savedFavorites);
    } else {
      return [];
    }
  };
  let [data, setData] = useState([]);
  let [favorites, setFavorites] = useState(state);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then((res) =>
      res.json().then((data) => setData(groupBy("albumId")(data)))
    );

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function groupBy(key) {
    return function group(arr) {
      return arr.reduce((acc, obj) => {
        const property = obj[key];
        acc[property] = acc[property] || [];
        acc[property].push(obj);
        return acc;
      }, []);
    };
  }
  function getFavorite(id, albumId) {
    let newFavorite = data[albumId].find((el) => el.id === id);
    setFavorites([...favorites, newFavorite]);
  }

  function removeFavorite(i, id) {
    let newFavorite = favorites.filter((el) => el.id !== id);
    setFavorites(newFavorite);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Gallery data={data} />
          </Route>
          <Route path="/gallery/:id">
            <Album getFavorite={getFavorite} />
          </Route>
          <Route path="/favorites">
            <Favorites favorites={favorites} removeFavorite={removeFavorite} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
