import React from 'react';

const Artist = ({infoArtist}) => {

    
    if(Object.keys(infoArtist).length === 0) return null;
    const {strArtistThumb, strGenre, strBiographyEN} = infoArtist;
    
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light">
                Artist Info
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Artist logo"/>
                <p className="card-text">Genre: {strGenre}</p>
                <p className="card-text">Biography: </p>
                <p className="card-text">{strBiographyEN}</p>
                 <p className="card-text">
                    <a href={`https://${infoArtist.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${infoArtist.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${infoArtist.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                 </p>
            </div>
        </div>
     );
}
 
export default Artist;