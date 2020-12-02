import axios from 'axios';
const url="https://cors-anywhere.herokuapp.com/https://api.deezer.com";
//const url="https://yacdn.org/serve/https://api.deezer.com";



export const search_artist=async(searchCriteria,search_param)=>{//combine multiple search,this will make our system scalable
    try {
        const response= axios.get(`${url}/search/${searchCriteria}?q=${search_param}`);

      return response;
    } catch (error) {
        
    }
}

export const artist_topTrack_album=async(searchCriteria,id)=>{//combine search artist  top track and album search  to avoid duplication of code
  try {
      const response= axios.get(`${url}/artist/${id}/${searchCriteria}`);
      
    return response;
  } catch (error) {
      
  }
}




export const config=()=>{//this is search criteria that will make our system easy to scale without writing more code or duplication on code on search 

    const Searchcriteriajson = {
        "artist":'artist',
        "album":'album',
        "track":'track',
        "playlist":'playlist',
        "toptrack":'top',
        "albums":'albums',
    };
      return Searchcriteriajson;
   
}


