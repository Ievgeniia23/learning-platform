import { lessons } from '../../data/lessons.js';
import { useState, useEffect } from 'react';
import LessonItem from '../LessonItem/LessonItem';
import css from './LessonsList.module.css';

const LessonsList = () => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });

  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const handleStorageChange = () => {
      setCompletedLessons(
        JSON.parse(localStorage.getItem('completedLessons')) || []
      );
    };

    window.addEventListener('storage', handleStorageChange);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const filteredLessons = lessons.filter(lesson => {
    if (filter === 'completed') return completedLessons.includes(lesson.id);
    if (filter === 'notCompleted') return !completedLessons.includes(lesson.id);
    return true;
  });

  return (
    <div className={css.list}>
      <h1>JavaScript Lessons</h1>

      <p className={css.totalProgress}>
        You have completed {completedLessons.length} of {lessons.length} lessons
      </p>

      <div className={css.filters}>
        <button className={css.filterBtn} onClick={() => setFilter('all')}>All ({lessons.length}) </button>
        <button className={css.filterBtn} onClick={() => setFilter('completed')}>Completed ({completedLessons.length}) </button>
        <button className={css.filterBtn} onClick={() => setFilter('notCompleted')}>Not completed ({lessons.length - completedLessons.length}) </button>
      </div>

      {filteredLessons.map((lesson, index) => (
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
