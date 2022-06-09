import styles from "./index.module.css";
// const headstyle = {
//   backgroundColor : '#000000',
//   width : '1038.4px',
//   height : '80px',
// }
// const headfont = {
//   color : '#ffffff',

// }

function SubHead() {
  return (
    <div className={styles.subbox}>
      <p className={styles.subbox__text}>
        에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
      </p>
    </div>
  );
}

export default SubHead;
