import { Link } from 'react-router-dom';
import css from './LessonItem.module.css';

const LessonItem = ({ lesson, index, isCompleted }) => {
  return (
    <Link to={`/lesson/${lesson.id}`} className={css.card}>
      <div className={css.titleWrapp}>
        <h3>
          {index + 1}. {lesson.title}
          {isCompleted && ' ✔'}
        </h3>
      </div>
      
      <h6>{lesson.description}</h6>

      <span className={css.openButton}>Open lesson</span>
    </Link>
  );
};

export default LessonItem;
