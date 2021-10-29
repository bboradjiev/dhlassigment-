import { useEffect } from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./reduxToolkit/slice";
import Favorites from "./Components/Favorites";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Album from "./Components/Album";
import "./index.css";

function App() {
  const { data } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

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
  const sortedData = groupBy("albumId")(data);

  return (
    <div className="App">
      <MemoryRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Gallery data={sortedData} />
          </Route>
          <Route path="/gallery/:id">
            <Album />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </MemoryRouter>
    </div>
  );
}

export default App;
