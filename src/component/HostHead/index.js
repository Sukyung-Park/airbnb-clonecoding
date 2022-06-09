import styles from "./index.module.css";

import styled from "styled-components";
function HostHead() {
  return (
    <div className={styles.HostHead}>
      <HostHead_DG>
        <HostHead__Logo>
          <img
            src="img/free-icon-airbnb-1724587.png"
            className={styles.Host_img1}
            alt="logo"
            width="45px"
            height="44px"
          />
        </HostHead__Logo>
      </HostHead_DG>
    </div>
  );
}
const HostHead_DG = styled.div`
  width: 100%;
  position: relative;
  height: 112px;
`;
const HostHead__Logo = styled.div`
  position: absolute;
  top: 40px;
  left: 40px;
`;
export default HostHead;
