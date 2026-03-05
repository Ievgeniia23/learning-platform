import { Link } from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <h1>Mini JS learning</h1>
        
        <nav>
          <Link to="/" className={css.link}>Home</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header