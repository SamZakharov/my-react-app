import 'bootstrap/dist/css/bootstrap.min.css';
import {createRoot} from 'react-dom/client';
import PostCatalog from './components/PostCatalog';
import './styles/style.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<PostCatalog/>);
