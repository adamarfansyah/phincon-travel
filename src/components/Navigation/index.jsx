import IconNavigation from "../../assets/ic-navigation.svg";
import styles from "./navigation.module.scss";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <img src={IconNavigation} alt="LOGO" />
      <div className={styles.navigation__buttons}>
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}
