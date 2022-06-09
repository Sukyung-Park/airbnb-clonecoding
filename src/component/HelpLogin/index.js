import styles from "./index.module.css";
import styled from "styled-components";
import { FiGlobe, FiMenu } from "react-icons/fi";
import { IoPersonCircle } from "react-icons/io5";

function HelpLogin() {
  return (
    <div className={styles.helplogin}>
      <div className={styles.helptextbox}>
        <ul>
          <li>
            <h4>에어비엔비가 도와드립니다.</h4>
          </li>
          <li>예약, 계정 등과 관련해 도움을 받으려면 로그인하세요.</li>
        </ul>
        <button className={styles.btn}>로그인 또는 회원 가입</button>
      </div>
    </div>
  );
}

export default HelpLogin;
