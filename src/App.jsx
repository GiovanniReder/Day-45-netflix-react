
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import Gallery3 from "./components/Gallery3";
function App() {
  return (
    <div className="App bg-dark">
      <div>

     <Header />
      </div>
      
      <div className= 'my-5 container d-flex flex-wrap'>
        <Gallery1 />
      </div>
      <div className= 'my-5 container d-flex flex-wrap'>
        <Gallery2 />
      </div>
      <div className= 'my-5 container d-flex flex-wrap'>
        <Gallery3 />
      </div>
      <MyFooter  />
    </div>
  );
}

export default App;
