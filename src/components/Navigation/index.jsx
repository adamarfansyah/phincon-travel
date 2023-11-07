/* eslint-disable react/prop-types */
import IconNavigation from "../../assets/ic-navigation.svg";
import styles from "./navigation.module.scss";
import Person from "../../assets/zaynmalik.svg";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useState } from "react";

const settings = [
  {
    id: 1,
    title: "Profile",
    href: "/profile",
  },
  {
    id: 2,
    title: "New Journey",
    href: "/new-journey",
  },
  {
    id: 3,
    title: "Bookmark",
    href: "/bookmark",
  },
  {
    id: 4,
    title: "Log out",
    href: "/logout",
  },
];

export default function Navigation({ isLoggedIn, navigate }) {
  const [anchorElUser, setAnchorElUser] = useState(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(!anchorElUser);
  };

  const DropDown = () => {
    return settings.map((setting) => (
      <MenuItem key={setting.id} onClick={handleCloseUserMenu}>
        <Typography textAlign="center" onClick={() => navigate(setting.href)}>
          {setting.title}
        </Typography>
      </MenuItem>
    ));
  };

  if (isLoggedIn) {
    return (
      <div className={styles.navigationLoggedIn}>
        <img src={IconNavigation} alt="LOGO" />
        <div className={styles.navigation__hasLoggedIn}>
          <img
            src={Person}
            alt="login"
            className={styles.navigation__image}
            onClick={() => handleCloseUserMenu()}
          />
          {anchorElUser && (
            <div className={styles.dropdown}>
              <DropDown />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.navigation}>
      <img src={IconNavigation} alt="LOGO" />
      <div className={styles.navigation__buttons}>
        <button className={styles.navigation__button} onClick={() => navigate("/login")}>
          Login
        </button>
        <button className={styles.navigation__button} onClick={() => navigate("/register")}>
          Register
        </button>
      </div>
    </div>
  );
}
