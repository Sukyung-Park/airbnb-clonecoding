import styles from "./index.module.css";

const MainIdea = () => {
  return (
    <div className={styles.idea}>
      <div className={styles.idea_text}>설레는 다음 여행을 위한 아이디어</div>
      <div className={styles.idea_menu}>
        <ul>
          <li className={styles.idea_list}>
            <img src="img/seoul.jpg" width={380} />
            <div className={styles.idea_box1}>
              <div className={styles.idea_text1}>서울</div>
              <div className={styles.idea_text2}>2km 거리</div>
            </div>
          </li>
          <li className={styles.idea_list}>
            <img src="img/incheon.jpg" width={380} />
            <div className={styles.idea_box2}>
              <div className={styles.idea_text1}>인천</div>
              <div className={styles.idea_text2}>29km 거리</div>
            </div>
          </li>
          <li className={styles.idea_list}>
            <img src="img/daegu.jpg" width={380} />
            <div className={styles.idea_box3}>
              <div className={styles.idea_text1}>대구</div>
              <div className={styles.idea_text2}>237km 거리</div>
            </div>
          </li>
          <li className={styles.idea_list}>
            <img src="img/daejeon.jpg" width={380} />
            <div className={styles.idea_box4}>
              <div className={styles.idea_text1}>대전</div>
              <div className={styles.idea_text2}>140km 거리</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MainIdea;
