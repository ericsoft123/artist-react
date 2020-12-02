import React ,{useEffect,useState} from 'react';


import {search_artist,config} from '../api';
import Displayartist from './Displayartist';
import Searchartist from './Searchartist';



const Homescreen=()=>{
    const [search,setsearch] = useState(null);
    const [display_search,setdisplay_search]=useState([]);
    const [showdetail, setshowdetail] = useState(false);
    const[showartist,setshowartist]=useState(true);
   

    
    useEffect(() => {

        mysearch();//on loading
     
    },[])
    async function mysearch(){
       
      const getcriteria= config();
      const searchCriteria=getcriteria.artist;
      const search_param=search;
      const searchArtist=await search_artist(searchCriteria,search_param);
      //console.log(searchArtist.data.data);
      setdisplay_search(searchArtist.data.data);

    }
    
  return (
    <>
 <div className="container">
 <Searchartist onHideDetailArtist={setshowdetail} OnDisplayArtist={setshowartist} onDisplaySearch={display_search} OnSetSearch={setsearch} mysearchfun={mysearch}/>
    <Displayartist data={display_search} onshowDetailArtist={showdetail} onSetDetailArtist={setshowdetail} OnDisplayDefaultArtist={showartist} onHideDisplayArtist={setshowartist}/>
   
    
 </div>

    </>
  );
}
export default  Homescreen;
