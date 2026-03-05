import { Link } from 'react-router-dom';

import { lessons } from '../../data/lessons.js';

import css from './LessonsList.module.css';

const LessonsList = () => {
  return (
    <div className={css.list}>
      <h1>JavaScript Lessons</h1>

      {lessons.map(lesson => (
        <Link key={lesson.id} to={`/lesson/${lessons.id}`} className={css.card}>
          <h3>{lessons.title}</h3>
          <p>Open lesson</p>
        </Link>
      ))}
    </div>
  );
};

export default LessonsList;
