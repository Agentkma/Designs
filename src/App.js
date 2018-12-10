import React, { Component } from "react";
import "./App.css";

import AlbumArtOne from "./AlbumArtOne";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">Designs</header>
                <hr />
                <AlbumArtOne />
            </div>
        );
    }
}

export default App;
