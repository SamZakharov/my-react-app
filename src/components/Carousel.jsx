import React from "react";
import cn from 'classnames';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0
        };
    }

    nextSlide = () => {
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === this.props.images.length - 1 ? 0 : prevState.activeIndex + 1
        }));
    };

    prevSlide = () => {
        this.setState((prevState) => ({
            activeIndex: prevState.activeIndex === 0 ? this.props.images.length - 1 : prevState.activeIndex - 1
        }));
    };

    isActive = (activeIndex, index) => {
        return cn(
            'carousel-item',
            index === activeIndex ? 'active' : ''
        );
    }

    render() {
        const { images } = this.props;
        const { activeIndex } = this.state;

        return (
            <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    {images.map((image, i) => (
                        <div key={i} className={this.isActive(activeIndex, i)}>

                            <img src= { image } className="d-block w-100" alt={`Slide ${i + 1}`} />

                        </div>
                    ))}
                </div>

                <button className="carousel-control-prev" onClick={this.prevSlide} type="button">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" onClick={this.nextSlide} type="button">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
        );
    }
}

export default Slider;
