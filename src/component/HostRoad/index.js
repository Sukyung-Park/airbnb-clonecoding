import styles from "./index.module.css";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HostRoad = () => {
  return (
    <div className={styles.hostroad}>
      <div className={styles.hostbox}>
        <div className={styles.host__text1}>
          호스팅에 관해 궁금하신 점이 있나요?
        </div>
        <div className={styles.host__text2}>
          무엇이 궁금하세요? 미정&nbsp;
          <img src="img/mijung.JPG" width={"60px"} /> 님이 한국의 슈퍼호스트로서
          호스팅에 관한 모든 것을 알려주는 길잡이가 되어드릴 것입니다.
        </div>

        <Link to="./Page/Host">
          <Button onclick="/HostPage" className={styles.btn}>
            슈퍼호스트에게 물어보세요
          </Button>
        </Link>
      </div>
    </div>
  );
};
// const HostMain = styled.div`
//   width: 1500px;
//   height: 747.04px;
//   position: relative;
// `;
// const HostBox = styled.div``;
// const HostRoad_1 = styled.div`
// font-size: 32px;
// color: #5F002A;
// line-height: 36px;
// font-weight: 600;
// text-align: left;
// position: absolute;
// top: 30%;
// left: 31%;
// transform: translate(-50%,-50%)
// width: 1300px;
// `;
// const HostRoad_2 = styled.div`
//   width: 1500px;
//   font-size: 64px;
//   color: #5f002a;
//   line-height: 72px;
//   font-weight: 600;
//   text-align: left;
//   position: absolute;
//   top: 50%;
//   left: 80%;
//   transform: translate(-50%, -50%);
// `;
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
export default HostRoad;
