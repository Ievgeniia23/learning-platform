import css from "./ProgressBar.module.css"

const PrigressBar = ({progress}) => {
  return (
      <div className={css.progressbar}>
          <div className={css.progress}
          style={{width: `${progress}%`}}
          
          ></div>


   </div>
   

  )
}

export default PrigressBar