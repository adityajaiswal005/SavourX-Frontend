import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Success from "./pages/success";

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>    
    </Router>
  )
}

export default App
