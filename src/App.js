import Header from "./components/Header";
import './App.css'
import Sidebar from "./components/Sidebar";
import { Routes, Route} from 'react-router-dom'
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValue } from './components/StateProvider'

function App() {
  const [{ user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ?(
        <Login />
      ):(
        <>
        <Header />
        <div className="app__body">
            <Sidebar />
            <Routes>
                <Route path='/rooms/:roomId' element={<Chat />}/>
            </Routes>
        </div>
        </>
      )}
        
    </div>
  );
}

export default App;
