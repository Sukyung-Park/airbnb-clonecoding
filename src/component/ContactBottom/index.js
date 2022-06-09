import styles from "./index.module.css";

const Bottom = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.bottom__box}>
        <div className={styles.bottom__text1}>&lt; 이전 페이지</div>
        <div className={styles.bottom__text2}>다음 페이지 &gt;</div>
      </div>

      <div>
        {" "}
        전체 요금을 보려면 날짜를 입력하세요. 추가요금이 적용되고 세금이 추가될
        수 있습니다.
      </div>
    </div>
  );
};

export default Bottom;
