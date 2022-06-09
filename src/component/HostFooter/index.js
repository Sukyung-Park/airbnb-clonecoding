import styles from "./index.module.css";
import { Link } from "react-router-dom";
const HostFooter = () => {
  return (
    <div className={styles.Footer}>
      <ul className={styles.Footer_support}>
        <li>
          <h4>에어비앤비 지원</h4>
          <ul>
            <Link to="help">
              <li>도움말 센터</li>
            </Link>
            <li>안전 정보</li>
            <li>예약 취소 옵션</li>
            <li>에어비앤비의 코로나19 대응 방안</li>
            <li>장애인 지원</li>
            <li>이웃 민원 신고</li>
          </ul>
        </li>
        <li>
          <h4>커뮤니티</h4>
          <ul>
            <li>Aribnb.org: 재난 구호 숙소</li>
            <li>아프간 난민 지원</li>
            <li>차별 철폐를 위한 노력</li>
          </ul>
        </li>
        <li>
          <h4>호스팅</h4>
          <ul>
            <li>호스팅 시작하기</li>
            <li>에어커버:호스트를 위한 보호 프로그램</li>
            <li>호스팅 자료 둘러보기</li>
            <li>커뮤니티 포럼 방문하기</li>
            <li>책임감 있는 호스팅</li>
          </ul>
        </li>
        <li>
          <h4>소개</h4>
          <ul>
            <li>뉴스룸</li>
            <li>새로운 기능에 대해 알아보기</li>
            <li>에어비앤비 공동창업자의 메시지</li>
            <li>채용정보</li>
            <li>투자자 정보</li>
            <li>에어비앤비Luxe</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
export default HostFooter;
