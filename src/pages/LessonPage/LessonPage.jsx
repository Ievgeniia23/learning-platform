import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

import { lessons } from '../../data/lessons.js';
import css from './LessonPage.module.css';

const LessonPage = () => {
  const { id } = useParams();

  // const lesson = lessons.find(lesson => lesson.id === id);
  const currentIndex = lessons.findIndex(lesson => lesson.id === id);
  const lesson = lessons[currentIndex];
  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });
  const isCompleted = completedLessons.includes(id);

  const totalLessons = lessons.length;

  const progress = ((currentIndex + 1) / totalLessons) * 100;

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  const markCompleted = () => {
    if (isCompleted) return;

    const updated = [...completedLessons, id];

    setCompletedLessons(updated);

    localStorage.setItem('completedLessons', JSON.stringify(updated));
  };

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className={css.lesson}>
      <h1>{lesson.title}</h1>
      <Link to="/lessons" className={css.navBtn}>
        {' '}
        ⬅️ Back to lessons
      </Link>
      <p>
        Lesson {currentIndex + 1} of {totalLessons}
      </p>
      <div className={css.progressBar}>
        <div className={css.progress} style={{ width: `${progress}%` }}></div>
      </div>
      {lesson.content.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <p className={css.task}>
        <strong>Task:</strong> {lesson.task}
      </p>

      <button
        onClick={markCompleted}
        disabled={isCompleted}
        className={css.completeBtn}
      >
        {isCompleted ? '✔ Completed' : 'Mark as completed'}
      </button>

      <div className={css.navigation}>
        {prevLesson && (
          <Link to={`/lesson/${prevLesson.id}`} className={css.navBtn}>
            ⬅️ Previous
          </Link>
        )}

        {nextLesson && (
          <Link to={`/lesson/${nextLesson.id}`} className={css.navBtn}>
            Next ➡️
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
