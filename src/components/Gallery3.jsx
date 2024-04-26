import { Component } from "react";

class BatmanGallery extends Component {
  state = {
film:[]
  }
  async  componentDidMount(){
    await fetch("http://www.omdbapi.com/?apikey=99ea514a&s=vendetta")
   .then(response => response.json()).then(json => {this.setState({film:json.Search}); console.log(json)}).catch(error=>new Error(error.message))
   
   
}


render() {
        console.log(this.state.film);
           
          return (

            <>

             
                
             {this.state.film.filter((element,index)=> index<6).map((film,index) => 

                <div  className= ' col-12 col-md-4 col-xl-2 gap-5 '>
                    <img  id="imgGallery"  key={index} style={{maxWidth:"300px" , maxHeight: "200px", objectFit:"cover"}} src={film.Poster} alt="" />
                </div>
             
             
            )}
           
        
             
            </>
           
        )
    }
  
    };

export default BatmanGallery;