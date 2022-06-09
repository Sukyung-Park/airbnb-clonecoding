import styles from "./index.module.css";

import styled from "styled-components";

const HostInfo = () => {
  return (
    <div>
      <div className={styles.HostInfo}>
        슈퍼호스트가 모든 과정을 도와드립니다
      </div>
      <img className={styles.host__img1} src="img/host1.jpg" />
      <img className={styles.host__img2} src="img/host2.jpg" />
      <img className={styles.host__img3} src="img/host3.jpg" />
    </div>
  );
};
// const Hostpto = styled.div`
//   width: 100%;
//   position: relative;
// `;
export default HostInfo;
