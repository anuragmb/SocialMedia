import './App.css';
import Header from "./components/Header";
import LeftContainer1 from './components/leftContainer1';
import LeftContainer2 from './components/LeftContainer2';
import MiddleContainer from './components/MiddleContainer';
import RightContainer from './components/RightContainer';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Chat from './components/Chat';
import CreatePost from './components/CreatePost';
import Stories from './components/Stories';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Stories/>
        <div className="main__division">
          <div className="left">
            <Routes>
              <Route exact path="/profile" element={<LeftContainer1/>} />
            </Routes>
            <br/>
            
            <Routes>
              <Route exact path="/jobNews" element={<LeftContainer2/>} />
            </Routes>
          </div>

          <div className="middle">
            <MiddleContainer/>
          </div>
          <div className="right">
            <Routes>
              <Route exact path="/notifications" element={<RightContainer/>} />
            </Routes>
            <br/>
            <Routes>
              <Route exact path="/chat" element={<Chat/>} />
            </Routes>
            <br/>
            <Routes>
              <Route exact path="/createPost" element={<CreatePost/>} />
            </Routes>
          </div>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
