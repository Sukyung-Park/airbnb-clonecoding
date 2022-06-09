import styles from "./index.module.css";
import styled from "styled-components";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";

function HelpAirbnb() {
  return (
    <div className={styles.helpairbnb}>
      <div className={styles.help__box}>
        <button className={styles.btn1}>게스트</button>
        <button className={styles.btn2}>호스트</button>
        <button className={styles.btn3}>체험 호스트</button>
        <button className={styles.btn4}>출장 관리자</button>
      </div>
    </div>
  );
}

export default HelpAirbnb;
