
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const addTodo=(title,desc)=>{
    let sno=todos.length+1;
const myTodo={
sno:sno,
title:title,
desc:desc
}
setTodos([...todos,myTodo]);
console.log(myTodo);
  }
  const onDelete=(todo)=>{
    console.log("I am on delete",todo);
    setTodos(todos.filter((e)=>{return e!==todo;}))
  }
  const [todos,setTodos]=useState(
  [
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market"
    },
    {
      sno:2,
      title:"Go to the mall",
      desc:"You need to go to the mall"
    },
    {
      sno:3,
      title:"Go to the mandir",
      desc:"You need to go to the mandir"
    },
  ]);
  return (
    <>
    <Router> <Header title="My Todos List" searchBar={false}/>

    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
          <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
          </Route>
        </Switch>
    


     <Footer/></Router>
   
    </>
  );
}

export default App;
