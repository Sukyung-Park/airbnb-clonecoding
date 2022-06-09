import styles from "./index.module.css";

function Guide({ guide }) {
  return (
    <div className={styles.guide__tool}>
      <div className={styles.guide__card}>
        <img className={styles.guide__img} src={guide.img} />
        <div className={styles.guide__text}>{guide.text}</div>
      </div>
    </div>
  );
}

const HelpGuide = () => {
  const guides = [
    {
      id: 1,
      img: "img/guide1.jpg",
      text: "에어비앤비 이용 시작하기",
    },
    {
      id: 2,
      img: "img/guide2.jpg",
      text: "계정 엑세스",
    },
    {
      id: 3,
      img: "img/guide3.jpg",
      text: "예약 관련 도움받기",
    },
    {
      id: 4,
      img: "img/guide4.jpg",
      text: "호스팅 관련 도움받기",
    },
  ];

  return (
    <div className={styles.guide__main}>
      <div className={styles.guide__start}>시작 가이드</div>
      <div className={styles.guide__box}>
        {guides.map((guide) => {
          return <Guide key={guide.id} guide={guide} />;
        })}
      </div>
    </div>
  );
};

export default HelpGuide;
