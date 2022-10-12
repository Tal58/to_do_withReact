import './App.css';
import Header from './components/header/Header';
import Combinator from './components/combinator/combinator';
import "../src/components/list/list.scss"
import "../src/components/header/header.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <Combinator />
    </div>
  );
}

export default App;
