import React, {Fragment, useState} from 'react';

const Form = ({setSearchLyric}) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    const [error, setError] = useState(false)

    const { artist, song } = search;

    const updateState = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const searchInformation = e => {
        e.preventDefault();
        if(artist.trim() === '' || song.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setSearchLyric(search);
        
    }

    return ( 
       <div className="bg-info">
            <div className="container">
                
                <div className="row">
                    { error ? <p className="alert alert-danger text-center p-2 ">All fields are required</p>: null}
                    <form 
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={searchInformation}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Lyrics Search Engine
                            </legend>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist Name"
                                            onChange={updateState}
                                            value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song"
                                            onChange={updateState}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit"
                                className="btn btn-primary float-right"
                                >Search</button>
                        </fieldset>
                    </form>
                </div>
            </div>
       </div>
     );
}
 
export default Form;