import { useState } from 'react';
import css from './CompleteButton.module.css';

const CompleteButton = ({ lessonId }) => {
  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });

  const isCompleted = completedLessons.includes(lessonId);

  const toggleCompleted = () => {
    let updatedLessons;

    if (isCompleted) {
      
      updatedLessons = completedLessons.filter(id => id !== lessonId);
    } else {
     
      updatedLessons = [...completedLessons, lessonId];
    }

    setCompletedLessons(updatedLessons);
    localStorage.setItem('completedLessons', JSON.stringify(updatedLessons));
  };

  return (
    <button
      onClick={toggleCompleted}
      className={`${css.completeBtn} ${isCompleted ? css.completed : ''}`}
    >
      {isCompleted ? (
        <>
          ✔ Completed <span className={css.undoText}>(click to undo)</span>
        </>
      ) : (
        'Mark as completed'
      )}
    </button>
  );
};

export default CompleteButton;
