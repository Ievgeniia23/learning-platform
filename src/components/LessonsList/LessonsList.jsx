import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons.js';

import css from './LessonsList.module.css';

const LessonsList = () => {
  return (
    <div className={css.list}>
      <h1>JavaScript Lessons</h1>

      {lessons.map((lesson, index) => (
        <Link key={lesson.id} to={`/lesson/${lesson.id}`} className={css.card}>
          <h3>
            {index + 1}. {lesson.title}
          </h3>
          <h6>{lesson.description}</h6>
          <span className={css.openButton}>Open lesson</span>
        </Link>
      ))}
    </div>
  );
};

export default LessonsList;
