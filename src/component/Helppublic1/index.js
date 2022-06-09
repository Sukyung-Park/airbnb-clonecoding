import styles from "./index.module.css";

function Publicbox({ publicbox }) {
  return (
    <div className={styles.public__tool}>
      <div className={styles.public__card}>
        <div className={styles.public__text1}>{publicbox.text1}</div>
        <div className={styles.public__text2}>{publicbox.text2}</div>
      </div>
    </div>
  );
}

const HelpPublic1 = () => {
  const publics = [
    {
      id: 1,
      text1: "숙소 예약 취소하기",
      text2:
        "여행 계획이 변경되어 예약을 취소하셔야\n하나요? 걱정하지 마세요. 여행 페이지에서...",
    },
    {
      id: 2,
      text1: "체험 예약 날짜 또는 시간 변경하기",
      text2:
        "체험을 예약했지만, 일정이 바뀌어 예약한 날짜나\n시간에 참여하실 수 없나요? 그래도...",
    },
    {
      id: 3,
      text1: "호스트가 예약을 취소하는 경우",
      text2:
        "드물지만 호스트가 에약을 취소해야 하는 경우가\n있습니다. 예약 취소 시 게스트의...",
    },
  ];

  return (
    <div className={styles.public__main}>
      <div className={styles.public__start}>인기 도움말</div>
      <div className={styles.public__box}>
        {publics.map((publicbox) => {
          return <Publicbox key={publicbox.id} publicbox={publicbox} />;
        })}
      </div>
    </div>
  );
};

export default HelpPublic1;
