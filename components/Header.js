import styles from "./Header.module.scss";
import Container from "../components/Col";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <p>Logo</p>
          <p>Nav</p>
        </Row>
      </Container>
    </header>
  );
};
export default Header;
