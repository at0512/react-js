import Navbar from "./layouts/navbar" 
import Footer from './layouts/footer'
import Content from './components/contents'

const App = () => {
  return (
    <div className="app"> 
    <Navbar /> 
    <Content /> 
    <Footer />
    </div> 

  );
}

export default App;
