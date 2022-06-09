import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";

const MainLetGo = () => {
  return (
    <div className={styles.letgo}>
      <img src="img/tent.jpg" className={styles.tent_img} alt="tent" />
      <div className={styles.letgo_text}>
        호기심을 자극하는 숙소로 떠나보세요
      </div>
      <Link to="contact">
        <button className={styles.letgo_search}>유연한 검색</button>
      </Link>
    </div>
  );
};
export default MainLetGo;
