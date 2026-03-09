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
      // снимаем отметку
      updatedLessons = completedLessons.filter(id => id !== lessonId);
    } else {
      // добавляем отметку
      updatedLessons = [...completedLessons, lessonId];
    }

    setCompletedLessons(updatedLessons);
    localStorage.setItem('completedLessons', JSON.stringify(updatedLessons));
  };

  return (
    <button onClick={toggleCompleted} className={css.completeBtn}>
      {isCompleted ? '✔ Completed (click to undo)' : 'Mark as completed'}
    </button>
  );
};

export default CompleteButton;
