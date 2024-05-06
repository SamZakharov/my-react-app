import Carousel from "./components/Carousel.jsx";
import img1 from '../src/images/img1.jpg';
import img2 from '../src/images/img2.jpg';
import img3 from '../src/images/img3.jpg';
function App () {
const images = [img1, img2, img3];
    return(
        <Carousel images = {images}/>
    )
}

export default App;
