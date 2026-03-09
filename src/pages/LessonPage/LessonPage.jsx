import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import { lessons } from '../../data/lessons';
import css from './LessonPage.module.css';

const LessonPage = () => {
  const { id } = useParams();

  const currentIndex = lessons.findIndex(lesson => lesson.id === id);
  const lesson = lessons[currentIndex];

  const totalLessons = lessons.length;
  const progress = ((currentIndex + 1) / totalLessons) * 100;

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });

  const isCompleted = completedLessons.includes(id);

  const markCompleted = () => {
    if (isCompleted) return;

    const updatedLessons = [...completedLessons, id];

    setCompletedLessons(updatedLessons);
    localStorage.setItem('completedLessons', JSON.stringify(updatedLessons));
  };

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className={css.lesson}>
      <Link to="/lessons" className={css.navBtn}>
        ⬅ Back to lessons
      </Link>

      <h1>{lesson.title}</h1>

      <p>
        Lesson {currentIndex + 1} of {totalLessons}
      </p>

      <ProgressBar progress={progress} />

      {lesson.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
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
            ⬅ Previous
          </Link>
        )}

        {nextLesson && (
          <Link to={`/lesson/${nextLesson.id}`} className={css.navBtn}>
            Next ➡
          </Link>
        )}
      </div>
    </div>
  );
};

export default LessonPage;
