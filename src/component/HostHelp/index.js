import styles from "./index.module.css";

function Host({ host }) {
  return (
    <div>
      <div className={styles.host__1}>{host.text1}</div>
      <div className={styles.host__2}>{host.text2}</div>
    </div>
  );
}

const HostHelp = () => {
  const hostess = [
    {
      id: 1,
      text1: "개인적인 조언과\n멘토링",
      text2:
        "필요할 때 언제든 궁금증을 해결하실 수 있도록 경험이 풍부한 슈퍼호스트와 연결해드립니다.",
    },
    {
      id: 2,
      text1: "숙소 등록에 대한\n직접적인 도움",
      text2:
        "슈퍼호스트가 숙소 등록을 도와주고 사진 촬영, 숙소 설명 작성 등과 관련해 조언해줄 것입니다.",
    },
    {
      id: 3,
      text1: "첫 번째 게스트를\n맞이하기 위한 준비",
      text2:
        "첫 번째 게스트를 맞이하고 훌륭한 후기를 받는 데 필요한 노하우를 전수받고 지원을 받으실 수 있습니다",
    },
  ];

  return (
    <div host__main>
      <div className={styles.host__box}>
        {hostess.map((host) => {
          return <Host key={host.id} host={host} />;
        })}
      </div>
    </div>
  );
};

// const Container = styled.div`
//   width: 1024px;
//   margin: 0 auto;
//   height: 235px;
//   display: flex;
// `;
// const ProductBox = styled.div`
//   padding-bottom: 60px;
// `;

export default HostHelp;
