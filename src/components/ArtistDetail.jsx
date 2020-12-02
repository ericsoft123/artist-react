import React from 'react';

export default function ArtistDetail({ArtistInfo,data_albums,data_toptrack}) {//tp display in full details
  return (
    <>
     <div className="container">
   
<div className="row">
    <div className="col-md-3 ">
<div className="card mytop_img shadow-lg">
        
        <img src={ArtistInfo.artist_picture} className="card-img-top "  alt="artist picture"/>
        <div className="card-body ">
            <h5 className="card-title">{ArtistInfo.artist_name}</h5>
            <p className="card-text">{ArtistInfo.artist_nbfans}K Fans</p>
            
          </div>
    </div>
    </div>
    <div className="col-md-9 pt-3  shadow-lg">
    <ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center active"><i className="fas fa-music"><span>  Top Track</span></i><span className="badge badge-primary badge-pill"><i className="fas fa-clock watch_size"></i></span></li>
    {
            data_toptrack && data_toptrack.map((trackdata,index)=>{
               return(
                    

                    
                <li className="list-group-item d-flex justify-content-between align-items-center"   key={trackdata.id} >
                      <span className="text-danger font-sz"> {index+1}. {trackdata.title}</span> 
                    <span className="text-muted"> {trackdata.duration}</span>
          </li>
               )
           })
          }
        </ul>
        </div>
        </div>
   

    <h3><i className="fas fa-compact-disc text-danger pt-2"></i> Albums</h3>
<div className="row ">
    {
            data_albums && data_albums.map((album)=>{
               return(
                    

                    
          <div className="col-md-4 pb-2 "  key={album.id} >
          <div className="card shadow-lg" >
          <img src={album.cover_medium} className="card-img-top" alt="album Medium Image"/>
          <div className="card-body">
            <h5 className="card-title"><i className="fas fa-compact-disc text-danger"></i> {album.title}</h5>
            <p className="card-text"><i className="far fa-calendar-alt text-success"></i>   {album.release_date}</p>
            
          </div>
        </div>
          </div>
               )
           })
          }
        </div>
</div>


    </>
  );
}
