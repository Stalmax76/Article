import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'normalize.css';
import './index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element);
root.render(<App />);
