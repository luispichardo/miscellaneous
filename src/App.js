import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import CardPage from "./pages/cardpage/cardpage.component";
import TodoListPage from "./pages/todo-list/todo-list.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/card" component={CardPage} />
        <Route path="/todolist" component={TodoListPage} />
      </Switch>
    </div>
  );
}

export default App;
