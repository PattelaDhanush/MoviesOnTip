import React, { useState, useEffect} from 'react'
import MovieService from '../services/MovieService';

export default function FavouriteMovie() {

    const [favouriteMovies, setFavouriteMovies] = useState([])
    useEffect(()=>{
        getAllInfoMoviesFavourite()
    },[]);

    const getAllInfoMoviesFavourite= async ()=>{
        await MovieService.getFavoutriteInfo()
        .then( response=>{ 
            setFavouriteMovies(response.data);
        }).catch(error=>{
            window.alert(error);
        })
    }

    const removeFromFavourite= async (data)=>{
        await MovieService.removeMovie(data.id).then(response =>{
            if(response.data){
                window.alert("Deleted from Favourites");
            }
            else{
                window.alert("Error in Removing");
            }           
        })

    }
return (
<>
    <div class="card">
    <h5 class="card-header">Favourite Movies</h5>
        <div class="card-body">
            <h5 class="card-title">List of movies added to favourite</h5>
            <div class="card-text">
                <div class="card-deck" style={{overflow: "true"}}>
                {
                    favouriteMovies.map((data) => (
                    
                        <div class="card">
                            <img class="card-img-top" src={data.source} height={"350px"} alt="Card image cap"/>
                            <div class="card-body">
                                <h5 class="card-title">{data.title}</h5>
                                <p class="card-text">{data.description}.</p>
                                <p class="card-text"><small class="text-muted">{data.language}</small></p>
                            </div>
                            <button type="button" class="btn btn-danger" onClick={()=>{removeFromFavourite(data)}}>Remove from Favourite</button>
                        </div>
                    )  )
                }
                </div>
            </div>
        </div>
    </div>
</>
    );
}
