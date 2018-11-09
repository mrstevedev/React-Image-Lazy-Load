import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';
import LazyLoad from 'react-lazyload';
import { CSSTransition } from 'react-transition-group';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrls: this.props.imageUrls
        }
        console.log(this.state);
    }

    renderImage(imageUrl, id) {
        return (
            <div key={id} id={id}>
            <LazyLoad 
                throttle={100} 
                height={200} 
                offset={[-200, 0]}
                debounce={200}>
            <CSSTransition
                in={true}          
                appear={true}
                timeout={3000}
                classNames="fade"
                >
                <img 
                    src={imageUrl} 
                    onLoad={this.handleStateChange}
                    onError={this.handleStateChange}
                    />
            </CSSTransition>
              
            </LazyLoad>
            </div>
        );
      }

    render(){
        const { imageUrls } = this.props;
        return(
            <div className="gallery" ref={element => { this.galleryElement = element; }}>
                <div className="images">
                    {imageUrls.map((imageUrl, index) => this.renderImage(imageUrl, index))}
                </div>
            </div>
        );
    }
}

Gallery.propTypes = {
    imageUrls: PropTypes.array
};

export default Gallery;