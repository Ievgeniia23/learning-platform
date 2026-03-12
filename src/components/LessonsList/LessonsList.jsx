import { lessons } from '../../data/lessons.js';
import { useState, useEffect } from 'react';
import LessonItem from '../LessonItem/LessonItem';
import css from './LessonsList.module.css';

const LessonsList = () => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setCompletedLessons(
        JSON.parse(localStorage.getItem('completedLessons')) || []
      );
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className={css.list}>
      <h1>JavaScript Lessons</h1>

      <p className={css.totalProgress}>
        You have completed {completedLessons.length} of {lessons.length} lessons
      </p>




      

      {lessons.map((lesson, index) => (
        <LessonItem
          key={lesson.id}
          lesson={lesson}
          index={index}
          isCompleted={completedLessons.includes(lesson.id)}
        />
      ))}
    </div>
  );
};

export default LessonsList;
