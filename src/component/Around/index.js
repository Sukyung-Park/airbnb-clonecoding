import styles from "./index.module.css";

const Around = () => {
  return (
    <div className={styles.around}>
      <div className={styles.around_text}>에어비앤비 체험 둘러보기</div>

      <div className={styles.around_joy1}>
        <div className={styles.joy_text1}>
          여행 중 만나는
          <br />
          이색적인 즐길 거리
        </div>
        <img className={styles.joy_img} src="img/joy1.jpg" alt="체험" />
        <button className={styles.around_btn1}>체험</button>
      </div>

      <div className={styles.around_joy2}>
        <div className={styles.joy_text2}>
          집에서 만나는
          <br /> 다양한 즐길 거리
        </div>
        <img className={styles.joy_img} src="img/joy2.jpg" alt="온라인체험" />
        <button className={styles.around_btn2}>온라인 체험</button>
      </div>
    </div>
  );
};
export default Around;
