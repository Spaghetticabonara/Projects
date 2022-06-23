// import logo from './logo.svg';
import './App.css';
import './appStyles.css'
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import CounterTwo from './components/CounterTwo';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value="Peach">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
