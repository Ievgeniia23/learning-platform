import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons.js';

import css from './Home.module.css';

const Home = () => {
  const preview = lessons.slice(0, 3);

  return (
    <div className={css.homeWrap}>
      <h1>Welcome to JS Mini Course</h1>
      <p>Learn JavaScript step by step!</p>

      <h2>Preview Lessons</h2>
      <div className={css.preview}>
        {preview.map(lesson => (
          <div key={lesson.id} className={css.card}>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
          </div>
        ))}
      </div>

      <p>
        <Link to="/lessons" className={css.button}>
          Go to lessons →
        </Link>
      </p>
    </div>
  );
};

export default Home;
