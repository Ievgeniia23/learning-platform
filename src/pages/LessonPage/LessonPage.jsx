import { useParams, Link } from 'react-router-dom';

import { lessons } from '../../data/lessons.js';

import css from './LessonPage.module.css';

const LessonPage = () => {
  const { id } = useParams();

  const lesson = lessons.find((lesson) => lesson.id === id);
  const currentIndex = lessons.findIndex((lesson) => lesson.id === id);
  const totalLessons = lessons.length;

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  if (!lesson) return <div>Lesson not found</div>;

  return (
    <div className={css.lesson}>
      <h1>{lesson.title}</h1>
<Link to="/lessons"> ⬅️ Back to lessons</Link>

      <p>
        Lesson {currentIndex + 1} of {totalLessons}
      </p>

      {lesson.content.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
      <p className={css.task}>
        <strong>Task:</strong> {lesson.task}
      </p>

      <div className={css.navigation}>
        {prevLesson && <Link to={`/lesson/${prevLesson.id}`}>Previous</Link>}

        {nextLesson && <Link to={`/lesson/${nextLesson.id}`}>Next</Link>}
      </div>
    </div>
  );
};

export default LessonPage;
