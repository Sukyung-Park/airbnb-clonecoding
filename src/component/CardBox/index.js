import styles from "./index.module.css";
import React, { useEffect, useState } from "react";

function Card({ card }) {
  return (
    <div className={styles.card__tool}>
      <div className={styles.card__card}>
        <img className={styles.card__img} src={card.img} />
        <div className={styles.card__box1}>
          <div className={styles.card__place}>{card.place}</div>
          <div className={styles.card__price}>{card.price}</div>
        </div>

        <div className={styles.card__box2}>
          <div className={styles.card__distance}>{card.distance}</div>
          <div className={styles.card__date}>{card.date}</div>
        </div>
      </div>
    </div>
  );
}

const CardBox = () => {
  const cards = [
    {
      id: 1,
      img: "img/img1.jpg",
      place: "Kabupaten Gian...",
      price: "₩594,701 / 박",
      distance: "5,264km 거리",
      date: "5월 22일~27일",
    },
    {
      id: 2,
      img: "img/img2.jpg",
      place: "Jari, 히마찰프라데시...",
      price: "₩208,365 / 박",
      distance: "4,533km 거리",
      date: "6월 3일~8일",
    },
    {
      id: 3,
      img: "img/img3.jpg",
      place: "우붓, 발리",
      price: "₩100,398 / 박",
      distance: "5,265km 거리",
      date: "7월 11일~16일",
    },
    {
      id: 4,
      img: "img/img4.jpg",
      place: "뉴델리, 델리",
      price: "₩538,110 / 박",
      distance: "4,699km 거리",
      date: "5월 3일~8일",
    },
    {
      id: 5,
      img: "img/img5.jpg",
      place: "우붓, 발리",
      price: "₩176,758 / 박",
      distance: "5,266km 거리",
      date: "5월 31일~6월5일",
    },
    {
      id: 6,
      img: "img/img6.jpg",
      place: "Mudigere, 카르나타카 주",
      price: "₩82,191 / 박",
      distance: "5,754km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 7,
      img: "img/img7.jpg",
      place: "푸저우, Fujian",
      price: "₩73,101 / 박",
      distance: "1,513km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 8,
      img: "img/img8.jpg",
      place: "Hikkaduwa, 남부 지방",
      price: "₩114,540 / 박",
      distance: "5,878km 거리",
      date: "5월 9일~14일",
    },
    {
      id: 9,
      img: "img/img9.jpg",
      place: "코사무이(KO Samui), ...",
      price: "₩332,569 / 박",
      distance: "4,127km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 10,
      img: "img/img10.jpg",
      place: "Nashik, 마하라슈트라 주",
      price: "₩92,963 / 박",
      distance: "5,467km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 11,
      img: "img/img11.jpg",
      place: "Bunutan, Abang",
      price: "25,890 / 박₩",
      distance: "5,240km 거리",
      date: "5월 8일~13일",
    },
    {
      id: 12,
      img: "img/img12.jpg",
      place: "Lishui, Zhejiang",
      price: "₩123,074 / 박",
      distance: "1,246km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 13,
      img: "img/img13.jpg",
      place: "구좌읍, 제주시, 제주도",
      price: "₩300,377 / 박",
      distance: "451km 거리",
      date: "5월 8일~13일",
    },
    {
      id: 14,
      img: "img/img14.jpg",
      place: "Krong Siem Reap,...",
      price: "₩161,485 / 박",
      distance: "3,539km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 15,
      img: "img/img15.jpg",
      place: "Mysuru, 카르나타카 주",
      price: "₩53,424 / 박",
      distance: "5,710km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 16,
      img: "img/img16.jpg",
      place: "Hangyeong-myeon, C...",
      price: "₩81,564 / 박",
      distance: "478km 거리",
      date: "6월 6일 11일",
    },
    {
      id: 17,
      img: "img/img17.jpg",
      place: "안덕면, 서귀포시, 제주도",
      price: "₩87,820 / 박",
      distance: "485km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 18,
      img: "img/img18.jpg",
      place: "Bhopal, Madhya Pradesh",
      price: "₩645,757 / 박",
      distance: "4,962km 거리",
      date: "5월 1일~6일",
    },
    {
      id: 19,
      img: "img/img19.jpg",
      place: "冬山鄉",
      price: "₩ / 박",
      distance: "1,522km 거리",
      date: "5월 2일~7일",
    },
    {
      id: 20,
      img: "img/img20.jpg",
      place: "Ya'an,쓰촨성",
      price: "₩807,670 / 박",
      distance: "2,337km 거리",
      date: "5월 4일~9일",
    },
  ];

  return (
    <div>
      <div className={styles.card__box}>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
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

export default CardBox;
