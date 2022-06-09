import styles from "./index.module.css";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function HostReady() {
  return (
    <div className={styles.hostready}>
      <div className={styles.host__box}>
        <img className={styles.host__img1} src="img/ready1.jpg" />
        <div className={styles.host_text}>
          호스팅을 시작하실 준비가 되면, Cb
          <br />
          님이 도와드릴 것입니다.
        </div>
      </div>
      {/* {* <button className={styles.question_btn}>슈퍼호스트에게 물어보세요</button> */}
      <Link to="/Host" className={styles.HostLink}>
        <Button onClick className={styles.btn}>
          슈퍼호스트에게 물어보세요
        </Button>
      </Link>
    </div>
  );
}

const Button = styled.button`
  width: 283.84px;
  height: 56px;
  background-color: #5f002a;
  color: #ffffff;
  position: absolute;
  top: 0%;
  left: 10%;
  transform: translate(-50%, -50%);
  font-size: 16px;
`;

export default HostReady;
