import styles from "./index.module.css";

function ContactHead() {
  return (
    <div className={styles.ContactHead}>
      <nav className={styles.Contact__navi}>
        <div className="Contact__logostyle">
          <img
            src="img/contactlogo.png"
            class="img1"
            alt="logo"
            width="118px"
            height="64px"
          />
        </div>

        <div className="Contact__host">
          <p className="Contact__host__text" font-weight="600">
            호스트 되기
          </p>
        </div>
      </nav>
    </div>
  );
}

export default ContactHead;
