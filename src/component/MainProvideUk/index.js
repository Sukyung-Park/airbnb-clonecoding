import styles from "./index.module.css";

function MainProvideUk() {
  return (
    <div className={styles.provide}>
      <div className={styles.provide_inner}>
        <div className={styles.provide_text}>
          10만명에 달하는 우크라이나 피란민에게 임시숙소를 제공해주세요
        </div>
        <button className={styles.detail}>자세히 알아보기</button>
      </div>
    </div>
  );
}

export default MainProvideUk;
