import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="app__container">
      <h1 className="app__title">Welcome!</h1>
      <h2 className="app__subtitle">Find your favourite movie here</h2>
      <Link to="/movies" className="btn btn_primary">
        Movies
      </Link>
    </div>
  );
}

export default App;
