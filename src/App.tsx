import React from 'react';
import './App.css';
import {Member} from './pages'
import SimpleCounter from "./pages/SimpleCounter";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Greeting from './components/Greeting'
import EventPractice from "./components/EventPractice";
import SigninTest from "./components/SigninTest";
import Signin from "./components/Signin";
import HideTest from "./components/HideTest";
import Counter from "./counter/CounterApp";
import Todos from "./todos/TodosApp"

const App = () => <div className="App">
      <Todos/>
    </div>

export default App;
