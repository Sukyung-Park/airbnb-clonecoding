import styles from "./index.module.css";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";

function AirbnbMenu() {
  return (
    <div className={styles.AirbnbMenu}>
      <nav className={styles.Main_navi}>
        <div className={styles.logostyle}>
          <img
            src="img/kidbnb.png"
            class="img1"
            alt="logo"
            width="112px"
            height="34px"
          />
        </div>

        <div className={styles.experience}>
          <p className={styles.experience__menu}>숙소</p>
          <p className={styles.experience__menu}>체험</p>
          <p className={styles.experience__menu}>온라인 체험</p>
        </div>

        <div className={styles.host}>
          <h className={styles.hostdream}>호스트 되기</h>
          <button className={styles.hostglobal}>
            <FiGlobe />
          </button>
          <button className={styles.hostmenu}>
            <FiMenu className={styles.menu} />
            <IoPersonCircle
              className={styles.accountCircle}
              size="28"
              color="gray"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}

export default AirbnbMenu;
