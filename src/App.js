
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'antd/dist/antd.css';
import ListItem from "Page/ListItem"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path={"/"} component={(props) => <ListItem  {...props}/>} />
        </Switch>
      </Router>

    </div>
  );
}

export default App
