import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import axios from 'axios'
import Song from './components/Song';
import Artist from './components/Artist';


function App() {

    
    const [searchLyric, setSearchLyric] = useState([])
    const [lyric, setLyric] = useState('')
    const [infoArtist, setInfoArtist] = useState({})
    
    
    useEffect(() => {
        if(Object.keys(searchLyric).length===0) return;
        const searchLyricsApi = async () => {
            const { artist, song } = searchLyric;
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`
            const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

            const [lyricA, info ] = await Promise.all([
                axios(url),
                axios(url2)
            ])

            setLyric(lyricA.data.lyrics);
            setInfoArtist(info.data.artists[0]);
        }
        searchLyricsApi();
    }, [searchLyric, infoArtist])


    return (
        <Fragment>
            <Form
                setSearchLyric={setSearchLyric}
            />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <Artist 
                            infoArtist={infoArtist}
                        />
                    </div>
                    <div className="col-md-6">
                        <Song
                            lyric={lyric}
                            />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
