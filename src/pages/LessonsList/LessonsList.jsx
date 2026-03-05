import { Link } from 'react-router-dom';

import { lessons } from '../../data/lessons.js';

import css from './LessonsList.module.css';

const LessonsList = () => {
  return (
    <div>
      <h1>Lessons</h1>
      <ul>
        {lessons.map(lessons => (
          <li key={lessons.id}>
            <Link to={`/lesson/${lessons.id}`}>{lessons.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonsList;
