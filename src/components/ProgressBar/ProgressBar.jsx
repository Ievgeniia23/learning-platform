import css from "./ProgressBar.module.css"

const ProgressBar = ({ progress }) => {
  return (
    <div className={css.progressBar}>
      <div className={css.progress}
        style={{ width: `${progress}%` }}
          
      ></div>


    </div>
   
  );
};

export default ProgressBar;