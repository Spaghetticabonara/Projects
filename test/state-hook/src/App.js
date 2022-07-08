import './App.css';
import React from 'react';
import ClassCounter from './components/ClassCounter';
import ClassCounterOne from './components/ClassCounterOne';
import ComponentC from './components/ComponentC';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouse from './components/HookMouse';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <ClassCounterOne /> */}
      <UserContext.Provider value={'Peach'}>
        <ChannelContext.Provider value={'Hello world'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;
