
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
function App() {
  let todos=[
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
  ]
  return (
    <>
    <Header title="VPA" searchBar={false}/>
     <Todos todos={todos}/>
     <Footer/>
    </>
  );
}

export default App;
