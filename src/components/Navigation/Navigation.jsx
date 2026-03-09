import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = ({ prevLesson, nextLesson }) => {
  return (
    <div className={css.navigation}>
      {prevLesson && (
        <Link to={`/lesson/${prevLesson.id}`} className={css.navBtn}>
          ⬅ Previous
        </Link>
      )}

      {nextLesson && (
        <Link to={`/lesson/${nextLesson.id}`} className={css.navBtn}>
          Next ➡
        </Link>
      )}
    </div>
  );
};

export default Navigation;
