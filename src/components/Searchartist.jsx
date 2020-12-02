import React from 'react'

export default function Searchartist({onHideDetailArtist,OnDisplayArtist,onDisplaySearch,OnSetSearch,mysearchfun}) {
    async function SearchArtist(ev){
        const query = ev.target.value;
        console.log(query);
        await mysearchfun(OnSetSearch(query));
        onHideDetailArtist(false);
        OnDisplayArtist(true);
    }
    return (

        <>
    <div className="form-group pt-3 ps_relative">
    <input type="text" className="form-control" placeholder="Search Artist" onChange={SearchArtist}/>
    <i className="fas fa-search search-icon"/>
    </div>
    </>
    )
}
