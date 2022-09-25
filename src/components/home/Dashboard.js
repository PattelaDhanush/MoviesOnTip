import React, { useState, useEffect} from 'react'
import MovieService from '../services/MovieService';

export default function Dashboard() {

    useEffect(()=>{
        getAllInfoMoviesTheater()
        getAllInfoMoviesTopIndia()
        getAllInfoMoviesComingSoon()
        getAllInfoMoviesTopRated()

    },[]);

    const [theaterMovies, setTheaterMovies] = React.useState([]);

    const getAllInfoMoviesTheater=()=>{
        MovieService.getMoviesTheaterInfo()
        .then( response=>{ 
            setTheaterMovies(response.data);
        }).catch(error=>{
            window.alert(error);
        })
    }

    const [topIndianMovies, setTopIndianMovies] = React.useState([]);

    const getAllInfoMoviesTopIndia=()=>{
        MovieService.getMoviesTopIndia()
        .then( response=>{ 
            setTopIndianMovies(response.data);
        }).catch(error=>{
            window.alert(error);
        })
    }

    const [topRated, setTopRated] = React.useState([]);

    const getAllInfoMoviesTopRated=()=>{
        MovieService.getMoviesTopRated()
        .then( response=>{ 
            setTopRated(response.data);
        }).catch(error=>{
            window.alert(error);
        })
    }

    const [comingSoon, setComingSoon] = React.useState([]);

    const getAllInfoMoviesComingSoon=async ()=>{
       await MovieService.getMoviesComingSoon()
        .then( response=>{ 
            setComingSoon(response.data);
        }).catch(error=>{
            window.alert(error);
        })
    }

    const addToFavourite=async (dataToBeSaved)=>{
        await MovieService.addToFavourite(dataToBeSaved).then(response =>{
            if(response.data){
                window.alert("Add to Favourites");
            }
            else{
                window.alert("Error in adding");
            }           
        })
    }
return (
<>
<div class="card">
  <h5 class="card-header">Movies In Theater</h5>
    <div class="card-body">
        <h5 class="card-title">List of movies which are currently in Theater</h5>
        <div class="card-text">
            <div class="card-deck">
            {
                theaterMovies.map((data) => (
                <div class="card" key={data.id}>
                    <img class="card-img-top" src={data.source} height={"350px"} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.description}.</p>
                        <p class="card-text"><small class="text-muted">{data.language}</small></p>
                    </div>
                    <button type="button" class="btn btn-success" onClick={()=>{addToFavourite(data)}}>Add to Favourite</button>
                </div>
                )  )
            }
            </div>
        </div>
    </div>
</div>
<div class="card">
  <h5 class="card-header">Top Movies in India</h5>
    <div class="card-body">
        <h5 class="card-title">List of movies which are currently Top in India</h5>
        <div class="card-text">
            <div class="card-deck">
            {
                topIndianMovies.map((data) => (
                <div class="card" key={data.id}>
                    <img class="card-img-top" src={data.source} height={"350px"} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.description}.</p>
                        <p class="card-text"><small class="text-muted">{data.language}</small></p>
                    </div>
                    <button type="button" class="btn btn-success" onClick={()=>{addToFavourite(data)}}>Add to Favourite</button>
                </div>
                )  )
            }
            </div>
        </div>
    </div>
</div>
<div class="card">
  <h5 class="card-header">Top Rated Movies</h5>
    <div class="card-body">
        <h5 class="card-title">List of movies which are currently Top Rated</h5>
        <div class="card-text">
            <div class="card-deck">
            {
                topRated.map((data) => (
                <div class="card" key={data.id}>
                    <img class="card-img-top" src={data.source} height={"350px"} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.description}.</p>
                        <p class="card-text"><small class="text-muted">{data.language}</small></p>
                    </div>
                    <button type="button" class="btn btn-success" onClick={()=>{addToFavourite(data)}}>Add to Favourite</button>
                </div>
                )  )
            }
            </div>
        </div>
    </div>
</div>
<div class="card">
  <h5 class="card-header">Coming Soon Movies</h5>
    <div class="card-body">
        <h5 class="card-title">List of movies which are coming soon</h5>
        <div class="card-text">
            <div class="card-deck">
            {
                comingSoon.map((data) => (
                <div class="card" key={data.id}>
                    <img class="card-img-top" src={data.source} height={"350px"} alt="Card image cap"/>
                    <div class="card-body">
                        <h5 class="card-title">{data.title}</h5>
                        <p class="card-text">{data.description}.</p>
                        <p class="card-text"><small class="text-muted">{data.language}</small></p>
                    </div>
                    <button type="button" class="btn btn-success" onClick={()=>{addToFavourite(data)}}>Add to Favourite</button>
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
