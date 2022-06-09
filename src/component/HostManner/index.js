import React from "react";
import styles from "./index.module.css";
import { BsPlayCircle } from "react-icons/bs";

function Hosting({ hosting }) {
  return (
    <div className={styles.hosting__cardbox}>
      <img src={hosting.img} />
      <div className={styles.hosting__text}>{hosting.text}</div>
      <button className={styles.hosting__btn}>
        <BsPlayCircle size="45" />
      </button>
    </div>
  );
}
const HostManner = () => {
  const boxes = [
    {
      id: 1,
      img: "img/hostway1.jpg",
      text: "숙소 설명을\n작성하는 법",
    },
    {
      id: 2,
      img: "img/hostway2.jpg",
      text: "숙소 사진을\n멋지게 촬영하는 법",
    },
    {
      id: 3,
      img: "img/hostway3.jpg",
      text: "숙소 이름\n잘 짓는 법",
    },
    {
      id: 4,
      img: "img/hostway4.jpg",
      text: "숙소 요금\n책정 방법",
    },
  ];
  return (
    <div className={styles.hosting__bg}>
      <div className={styles.hosting__box}>
        {boxes.map((hosting) => {
          return <Hosting key={hosting.id} hosting={hosting} />;
        })}
      </div>
    </div>
  );
};

export default HostManner;
