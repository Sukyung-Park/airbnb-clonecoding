import styles from "./index.module.css";

function MainSearchStart() {
  return (
    <div className={styles.search_start}>
      <div className={styles.search_input}>
        <div>
          <div>
            <div color="#222222" font-size="12px">
              위치
            </div>
            <input type="text" placeholder="어디로 여행가세요?" />
          </div>
        </div>

        <div className={styles.search_start_date}>
          <div>
            <div color="#222222" font-size="12px">
              체크인
            </div>
            <input type="datetime" placeholder="날짜 추가" readonly />
          </div>
        </div>

        <div className={styles.search_end_date}>
          <div>
            <div color="#222222" font-size="12px">
              체크아웃
            </div>
            <input type="datetime" placeholder="날짜 추가" readOnly />
          </div>
        </div>

        <div>
          <div>
            <div>인원</div>
            <input type="datetime" placeholder="게스트 추가" />
          </div>
        </div>
        <div>
          <button className={styles.search_button}>
            <img
              calssName={styles.magnifying_glass}
              src="img/button-white.png"
              display="flex"
              vertical-align="center"
              width={"23.1px"}
              height={"24px"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainSearchStart;
