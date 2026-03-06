import css from './Home.module.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.homeWrap}>
      <h1>Welcome to JS Mini Course</h1>
      <p>Learn JavaScript step by step!</p>

      <p>
        <Link to="/lessons">Go to lessons →</Link>
      </p>
    </div>
  );
};

export default Home;