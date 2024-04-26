import { Component } from "react";

class BatmanGallery extends Component {
  state = {
film:[]
  }
  async  componentDidMount(){
    await fetch("http://www.omdbapi.com/?apikey=99ea514a&s=banana")
   .then(response => response.json()).then(json => {this.setState({film:json.Search}); console.log(json)}).catch(error=>new Error(error.message))
   
   
}


render() {
        console.log(this.state.film);
           
          return (

            <>

             
                
             {this.state.film.filter((element,index)=> index<6).map((film,index) => 

                <div  className= 'my-2 col-6 col-md-4 col-xl-2 gap-5 '>
                    <img  id="imgGallery"  key={index} style={{ maxHeight: "300px"}} src={film.Poster} alt="" />
                </div>
             
             
            )}
           
        
             
            </>
           
        )
    }
  
    };

export default BatmanGallery;