import { Link } from 'react-router-dom';
import { lessons } from '../../data/lessons.js';
import { useState, useEffect } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar.jsx"


import css from './Home.module.css';

const Home = () => {
  const preview = lessons.slice(0, 3);

  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem("completedLessons")) || [];
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setCompletedLessons(
        JSON.parse(localStorage.getItem("completedLessons")) || []
      );
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);


  const completedProgress = (completedLessons.length / lessons.length) * 100;

  const visitedLesson = Number(localStorage.getItem('lastVisitedLesson')) || 0;
  const visitedProgress = (visitedLesson / lessons.length) * 100;



  return (
    <div>
      <h1>Welcome to JS Mini Course</h1>
      <p>Learn JavaScript step by step!</p>

      <div className={css.progressSection}>
        <h2>Your progress</h2>

        <div className={css.progressGrid}>
          <div className={css.progressCard}>
            <div className={css.progressLabel}>Lessons viewed</div>

            <div className={css.progressValue}>
              {Math.round(visitedProgress)}%
            </div>

            <p>
              viewed {visitedLesson} of {lessons.length} lessons{' '}
            </p>

            <ProgressBar progress={visitedProgress} />
          </div>

          <div className={css.progressCard}>
            <div className={css.progressLabel}>Lessons completed</div>

            <div className={css.progressValue}>
              {Math.round(completedProgress)}%
            </div>
            <p> completed {completedLessons.length} of {lessons.length} lessons </p>

            <ProgressBar progress={completedProgress} />
          </div>
        </div>
      </div>

      <div className={css.homeWrap}>
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
    </div>
  );
};

export default Home;
