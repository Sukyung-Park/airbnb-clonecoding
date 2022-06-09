import styles from "./index.module.css";
import styled from "styled-components";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";

function HelpHeader() {
  return (
    <div className={styles.AirbnbMenu}>
      <nav className={styles.Main_navi}>
        <div className={styles.experience}>
          <img
            src="img/free-icon-airbnb-1724587.png"
            className={styles.Host_img1}
            alt="logo"
            // width="45px"
            // height="44px"
          />
          <p className={styles.experience__menu}>도움말 센터</p>
        </div>

        <div className={styles.host}>
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

const HostHead__Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;
export default HelpHeader;
