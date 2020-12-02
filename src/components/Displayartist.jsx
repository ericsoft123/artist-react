import React,{useState} from 'react';
import {artist_topTrack_album,config} from '../api';
import ArtistDetail from './ArtistDetail';
const Displayartist=({data,onshowDetailArtist,onSetDetailArtist,OnDisplayDefaultArtist,onHideDisplayArtist})=>{
  
 const [ArtistInfo, setArtistInfo] = useState({artist_id:'',artist_name:'',artist_nbfans:'',artist_picture:''});
 const [albums,setalbums] = useState([]);
 const [toptrack,settoptrack] = useState([]);
 
    async function ViewDetail(id,name,nb_fan,picture){

      console.log(id);
      const getcriteria= config();
      const searchCriteria_toptrack=getcriteria.toptrack;
      const searchCriteria_albums=getcriteria.albums;
    
      const searchToptrack=await artist_topTrack_album(searchCriteria_toptrack,id);
      console.log(searchToptrack);
    
      const searchAlbums=await artist_topTrack_album(searchCriteria_albums,id);
     // console.log(searchAlbums);
      setalbums(searchAlbums.data.data);
      settoptrack(searchToptrack.data.data);
     setArtistInfo({
       artist_id:id,
       artist_name:name,
       artist_nbfans:nb_fan,
       artist_picture:picture,
     });
      onSetDetailArtist(true);//show details
      onHideDisplayArtist(false);//hide artist
    }
    return (
      <>
       {onshowDetailArtist?<ArtistDetail ArtistInfo={ArtistInfo} data_albums={albums} data_toptrack={toptrack}/>:null}
       
      {OnDisplayDefaultArtist?
        <div className="row">
    {
            data && data.map((d)=>{
               return(
                    

                    
          <div className="col-md-4 pb-2 disp"  key={d.id} onClick={()=>ViewDetail(`${d.id}`,`${d.name}`,`${d.nb_fan}`,`${d.picture_medium}`)}>
          <div className="card shadow-lg" >
          <img src={d.picture_medium} className="card-img-top"/>
          <div className="card-body">
            <h5 className="card-title">{d.name}</h5>
            <p className="card-text">{d.nb_fan}K Fans</p>
            
          </div>
        </div>
          </div>
               )
           })
          }
        </div>
        :null}
       
        </>
      );
}

export default Displayartist;
