import styles from "./index.module.css";
import styled from "styled-components";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";

function HelpWith() {
  return (
    <div className={styles.helpwith}>
      <p className={styles.helptext}>무엇을 도와드릴까요?</p>
      <div className={styles.search__box}>
        <input
          type="text"
          placeholder="&nbsp; &nbsp; 이용 방법 및 기타 정보 검색"
          className={styles.helpbox}
        />
        <button className={styles.search_button}>
          <img
            calssName={styles.magnifying_glass}
            src="img/button-white.png"
            display="flex"
            vertical-align="center"
            width={"23.1px"}
            height={"18px"}
          />
        </button>
      </div>
    </div>
  );
}

export default HelpWith;
