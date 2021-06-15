import "./App.css";
import Register from "./components/Register/Register";
import Showdata from "./components/ShowData/ShowData";
import Mobx from "./components/MobX/Mobx";
import { useState, useEffect } from "react";
import UserStore from "./components/MobX/UserStore";
import Redux from "./components/Redux/Redux";
import { Provider } from "react-redux";
import store from "./store";

// import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const userStore = new UserStore();
  const [editItem, setEditItem] = useState(null);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const onEdit = (item) => {
    setEditItem(item);
    console.log(item);
  };

  const getUserData = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/find", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setList(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Register editItem={editItem} clear={() => setEditItem(null)} />
            {loading ? (
              <p>Loading .....:)</p>
            ) : (
              <Showdata list={list} onEdit={onEdit} />
            )}
          </Route>
          <Route path="/mobx">
            <Mobx store={userStore} />
          </Route>
          <Route path="/redux">
            <Provider store={store}>
              <Redux />
            </Provider>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
