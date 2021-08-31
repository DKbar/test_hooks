/* import { useState } from 'react'; */
import Lists from './Lists';
import './App.css';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import UseEffect from './UseEffect';
import UseRef from './UseRef'
import UseRefTimer from './UseRefTimer';
import UseMemo from './UseMemo/UseMemo';
import UseCallbackCount from './UseCallbackCount/UseCallbackCount';
import UseCallback from './UseCallback/UseCallback';



const App = () => {
 
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <Lists />
        <Route path = {'/UseEffect'} render={()=> <UseEffect />}></Route>
        <Route path = {'/UseRef'} render={()=> <UseRef />}></Route>
        <Route path = {'/UseRefTimer'} render={()=> <UseRefTimer />}></Route>
        <Route path = {'/UseMemo'} render={()=> <UseMemo />}></Route>
        <Route path = {'/UseCallback'} render={()=> <UseCallback />}></Route>
        <Route path = {'/UseCallbackCount'} render={()=> <UseCallbackCount />}></Route>
      </div>
    </HashRouter>
  )
}

export default App;

/* const [visibleList, setVisibleList] = useState(true)
       {visibleList && <List />}
        <button onClick={() => setVisibleList(visible => !visible)}>Visible/Unvisible</button> */