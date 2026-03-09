import { useParams, Link } from 'react-router-dom';

import ProgressBar from '../../components/ProgressBar/ProgressBar.jsx';
import CompleteButton from '../../components/CompleteButton/CompleteButton.jsx';
import Navigation from '../../components/Navigation/Navigation.jsx';

import { lessons } from '../../data/lessons.js';
import css from './LessonPage.module.css';

const LessonPage = () => {
  const { id } = useParams();

  const currentIndex = lessons.findIndex(lesson => lesson.id === id);
  const lesson = lessons[currentIndex];

  if (!lesson) return <div>Lesson not found</div>;

  const totalLessons = lessons.length;
  const progress = ((currentIndex + 1) / totalLessons) * 100;

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

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

      {/* Кнопка для отметки / снятия отметки пройденного урока */}
      <CompleteButton lessonId={id} />

      {/* Навигация по урокам */}
      <Navigation prevLesson={prevLesson} nextLesson={nextLesson} />
    </div>
  );
};

export default LessonPage;
