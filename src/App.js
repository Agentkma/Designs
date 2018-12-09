import React, { Component } from "react";
import "./App.css";

import AlbumeArtOne from "./AlbumArtOne";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">Designs</header>
                <hr />
                <AlbumeArtOne />
            </div>
        );
    }
}

export default App;
