
import "./App.css";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import homePage from "./pages/homePage/homePage";
import chatPage from "./pages/chatPage/chatPage";

function App() {
  return (
    <div className="App">
      <Route path='/' component={homePage} exact/>
      <Route path='/chats' component={chatPage}/>
      
    </div>
  );
}

export default App;
