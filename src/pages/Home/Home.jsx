import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons.js';
import { useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';

import css from './Home.module.css';

const Home = () => {
  const preview = lessons.slice(0, 3);

  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });

  const [viewedLessons, setViewedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('viewedLessons')) || [];
  });

  
  useEffect(() => {
    const handleStorageChange = () => {
      setCompletedLessons(
        JSON.parse(localStorage.getItem('completedLessons')) || []
      );
      setViewedLessons(JSON.parse(localStorage.getItem('viewedLessons')) || []);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);



  
  

  const visitedProgress = (viewedLessons.length / lessons.length) * 100;
  const completedProgress = (completedLessons.length / lessons.length) * 100;

const lastViewedLesson =
  lessons.find(l => l.id === viewedLessons[viewedLessons.length - 1]) ||
  lessons[0];

const lastViewedLessonId = lastViewedLesson.id;
const lastViewedLessonTitle = lastViewedLesson.title;

  return (
    <div className={css.homeWrap}>
      <h1>Welcome to JS Mini Course</h1>
      <p>Learn JavaScript step by step!</p>

     
      {/* {viewedLessons.length > 0 && (
        <div className={css.continueCard}>
          <Link
            to={`/lessons/${lastViewedLessonId}`}
            className={css.continueLink}
          >
            Continue learning → {lastViewedLessonTitle}
          </Link>
        </div>
      )} */}

    
      <div className={css.progressSection}>
        <h2>Your progress</h2>

        <div className={css.progressGrid}>
          <div className={css.progressCard}>
            <div className={css.progressLabel}>Lessons viewed</div>
            <div className={css.progressValue}>
              {Math.round(visitedProgress)}%
            </div>
            <p className={css.progressInfo}>
              {viewedLessons.length} / {lessons.length} lessons
            </p>
            <ProgressBar progress={visitedProgress} />
          </div>

          <div className={css.progressCard}>
            <div className={css.progressLabel}>Lessons completed</div>
            <div className={css.progressValue}>
              {Math.round(completedProgress)}%
            </div>
            <p className={css.progressInfo}>
              {completedLessons.length} / {lessons.length} lessons
            </p>
            <ProgressBar progress={completedProgress} />
          </div>
        </div>
      </div>

      {/* Preview lessons */}
      <h2>Preview Lessons</h2>
      <div className={css.preview}>
        {preview.map(lesson => (
          <div key={lesson.id} className={css.card}>
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
          </div>
        ))}
      </div>

      <p>
        <Link to="/lessons" className={css.button}>
          Go to lessons →
        </Link>
      </p>
    </div>
  );
};

export default Home;
