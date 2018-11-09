import React, { Component } from 'react';
import Gallery from './components/Gallery';

let urls = [
    "/public/images/cat1.jpg",
    "/public/images/cat2.jpg",
    "/public/images/cat3.jpg",
    "/public/images/cat4.jpg",
    "/public/images/cat5.jpg",
    "/public/images/cat6.jpg",
    "/public/images/cat7.jpg",
    "/public/images/cat8.jpg",
    "/public/images/cat9.jpg",
    "/public/images/cat10.jpg",
    "/public/images/cat11.jpg",
    "/public/images/cat12.jpg"
];

class App extends Component {
    render() {
        return (
            <div className="container">
                <Gallery imageUrls={urls} />
            </div>
        )
    }
}

export default App;