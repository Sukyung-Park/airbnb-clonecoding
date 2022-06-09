import styles from "./index.module.css";
import styled from "styled-components";

function HostStart() {
  return (
    <div className={styles.hoststart}>
      <div className={styles.text__box}>
        <div className={styles.host__text1}>호스팅을 시작하는 다양한 방법</div>
        <div className={styles.host__text2}>
          어느 단계부터 시작하시든, 각 단계마다 도움이 되는 팁, 동영상, 가이드를
          제공해드립니다.
        </div>
      </div>
      <div className={styles.btn__box}>
        <button className={styles.host__btn1}>
          호스팅에 대해 자세히 알아보기
        </button>
        <button className={styles.host__btn2}>숙소 등록 시작하기</button>
      </div>
    </div>
  );
}

export default HostStart;
