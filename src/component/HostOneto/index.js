import styles from "./index.module.css";

import styled from "styled-components";

function HostOneto() {
  return (
    <div className="oneto">
      <div className={styles.oneto__left}>
        <div className={styles.oneto__text1}>
          <div>슈퍼호스트에게 물어보세요</div>
        </div>
        <div className={styles.oneto__text2}>
          <div>
            에어비앤비 최고의 호스트로부터 <br />
            무료 일대일 맞춤 지원을 받으세요
          </div>
        </div>
      </div>
      <div className={styles.oneto__right}>
        <div clssName={styles.oneto__inner}>
          <video loop autoPlay muted>
            <source
              src="https://a0.muscache.com/v/c1/77/c1776f77-b7d6-568b-94f7-4ebb82c47fc9/c1776f77b7d6568b94f74ebb82c47fc9_4000k_1.mp4 "
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

// const OnetoLine = styled.div`
//   position: relative;
//   display: flex;
//   background-color: #5f002a;
// `;

// const OnetoRight = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
// `;
// const Inner = styled.div`
//   position: absolute;
//   background-color: #5f002a;
//   width: 190%;
// `;
// const OnetoText = styled.div`
//   font-size: 48px;
//   z-index: 1;
// `;
// const OnotoText_1 = styled.div`
//   margin-top: 240px;
//   margin-left: 500px;
//   font-size: 22px;
//   color: #fff;
// `;
// const OnotoText_2 = styled.div`
//   font-size: 48px;
//   margin-left: 300px;
//   z-index: 1;
//   color: #fff;
// `;
export default HostOneto;
