import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Question() {
  return (
    <div className={styles.question}>
      <div className={styles.question_text}>
        호스팅에 관해
        <br />
        궁금하신 점이
        <br />
        있나요?
      </div>
      <img
        className={styles.question_img}
        // z-index="-1"
        // min-width="1350px"
        // width="100%"
        src="img/question.jpg"
        alt="question"
      />
      <Link to="/Host" className={styles.HostLink}>
        <button onClick className={styles.question_btn}>
          슈퍼호스트에게 물어보세요
        </button>
      </Link>
    </div>
  );

  /*
      <Link to="/HostPage" className={styles.HostLink}>
        <button onClick className={styles.question_btn}>
          슈퍼호스트에게 물어보세요
        </button>
      </Link>
  */
}
// const Button = styled.button`
//   background-color: #ffffff;
// `;
export default Question;
