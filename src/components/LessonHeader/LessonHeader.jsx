import { Link } from 'react-router-dom';
import css from './LessonHeader.module.css';

const LessonHeader = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>

      <Link to="/lessons" className={css.navBtn}>
        ⬅️ Back to lessons
      </Link>
    </>
  );
};

export default LessonHeader;
