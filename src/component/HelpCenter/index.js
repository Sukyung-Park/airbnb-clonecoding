import styles from "./index.module.css";
import styled from "styled-components";

function HelpCenter() {
  return (
    <div className={styles.helpcenter}>
      <div className={styles.help__main}>
        <div className={styles.help__text}>도움말 센터 더 둘러보기</div>
      </div>
      <div className={styles.help__box}>
        <div className={styles.help__box1}>
          <img
            className={styles.help__img}
            height="280px"
            width="388px"
            src="img/center1.png"
          />
          <div className={styles.help__textbox}>
            <div className={styles.help__text1}>에어비앤비 커뮤니티 정책</div>
            <div className={styles.help__text2}>
              신뢰를 구축하기 위한 에어비앤비 정책을 알아보세요
            </div>
          </div>
        </div>
        <div className={styles.help__box2}>
          <img
            className={styles.help__img}
            height="280px"
            width="388px"
            src="img/center2.png"
          />
          <div className={styles.help__textbox}>
            <div className={styles.help__text1}>
              안전을 위한 팁과 가이드라인
            </div>
            <div className={styles.help__text2}>
              안전한 여행을 위한 자료입니다.
            </div>
          </div>
        </div>
        <div className={styles.needbox}>
          <div className={styles.needbox__text1}>도움이 필요하신가요?</div>
          <div className={styles.needbox__text2}>
            <p> 몇 가지 질문을 드린 후 담당 팀으로</p>
            <p>연결해드리겠습니다.</p>
          </div>
          <button className={styles.btn}>문의하기</button>
          <div className={styles.needbox__text3}>
            <p>에어비앤비에 피드백을 보내실 수도</p> <p>있습니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
