import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons.js';
import { useState, useEffect } from "react";
import css from './LessonsList.module.css';

const LessonsList = () => {

  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem("completedLessons")) || [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setCompletedLessons(JSON.parse(localStorage.getItem("completedLessons")))
    }

window.addEventListener('storage', handleStorageChange);
return () => window.removeEventListener('storage', handleStorageChange);

  }, [])

  return (
    <div className={css.list}>
      <h1>JavaScript Lessons</h1>

      {lessons.map((lesson, index) => {
        const isCompleted = completedLessons.includes(lesson.id);
      
        return (
          <Link
            key={lesson.id}
            to={`/lesson/${lesson.id}`}
            className={css.card}
          >
            <div className={css.titleWrapp}>
              <h3>
                {index + 1}. {lesson.title}

                {isCompleted && <span className={css.check}>✓</span>}
                {/* {isCompleted && '✔'} */}
              </h3>
          

            </div>
            <h6>{lesson.description}</h6>
            <span className={css.openButton}>Open lesson</span>
          </Link>
        );
      }
      )}
      </div>);
}
export default LessonsList;
