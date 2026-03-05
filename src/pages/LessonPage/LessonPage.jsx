import { useParams } from 'react-router-dom';

import { lessons } from '../../data/lessons.js';

import css from './LessonPage.module.css';

const LessonPage = () => {
  const { id } = useParams();
  const lesson = lessons.find(l => l.id === id);

  if (!lesson) return <div>Lesson not found</div>;
  return (
    <div>
      <h1>{lesson.title}</h1>
      {lesson.content.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <p>Task: {lesson.task}</p>
    </div>
  );
};

export default LessonPage;
