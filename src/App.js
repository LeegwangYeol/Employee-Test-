import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import HeadComponent from './Component/HeadComponet';
import FootComponent from './Component/FooterComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <HeadComponent/>
          <Routes>
            {/* //http://localhost:3000 */}
            <Route path='/' element = {<ListEmployeeComponent/>}></Route>
            {/* //http://localhost:3000/employees */}
            <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          </Routes>
        <FootComponent></FootComponent>
        </BrowserRouter>
    </div>
  );
}

export default App;
