
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from "./components/Header";
import MyFooter from "./components/MyFooter";
import Gallery1 from "./components/Gallery1";
import Gallery2 from "./components/Gallery2";
import Gallery3 from "./components/Gallery3";
function App() {
  return (
    <div className=" bg-dark">
      <div>

     <Header />
      </div>
     
      <div className= 'my-5 container justify-content-between d-flex flex-wrap'>
        <div className='d-flex'>
        <div class="d-flex">
            <h2 class=" text-white">TV Shows</h2>
            <div class="btn-group" role="group">
              <div class="dropdown ms-4 mt-1">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  
                >
                  Genres
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item text-white" href="link">Comedy</a></li>
                  <li><a class="dropdown-item text-white" href="link">Drama</a></li>
                  <li><a class="dropdown-item text-white" href="link">Thriller</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='d-none d-md-flex' >
          <button className='border-0 mx-3 bg-transparent'>
          <svg className='m-3' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-grid" viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/>
        </svg>
          </button>
       <button  className='border-0 mx-3 bg-transparent'>
       <svg className='m-3' xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-grid-3x3" viewBox="0 0 16 16">
        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z"/>
        </svg>
       </button>
        
        </div>
        
      </div>
      <p className='text-start ms-5 d-none d-md-flex  fs-3  text-white'>Trending Now</p>
      <div className='mb-5 container d-flex flex-wrap'>
      <Gallery1 />
      </div>
      <p className='text-start ms-5  fs-3  text-white'>Watch it Again</p>
      <div className= 'mb-5 container d-flex flex-wrap'>
        <Gallery2 />
      </div>
      
      <p className='text-start ms-5  fs-3  text-white'>New Releases</p>
      <div className= 'mb-5 container d-flex flex-wrap'>
        <Gallery3 />
      </div>
      <MyFooter  />
    </div>
  );
}

export default App;
