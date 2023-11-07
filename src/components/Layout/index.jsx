/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import Navigation from "../Navigation";
import JumboTron from "../../assets/image-jumbo.svg";
import { useDispatch, useSelector } from "react-redux";
import styles from "./layout.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserLoginInitAction } from "../../pages/Login/actions";

export default function Layout({ title, children }) {
  document.title = `${title} - The Journey` || "Default";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.userLoginReducer);
  const userLocalStorage = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (userLocalStorage) {
      dispatch(getUserLoginInitAction(userLocalStorage.id));
    }
  }, []);

  const navigateTo = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <div>
      <div>
        <Navigation isLoggedIn={isLoggedIn} navigate={navigateTo} />
      </div>
      {isLoggedIn ? null : (
        <div className={styles.layout__jumbotron}>
          <div className={styles.jumbotron__wrapper}>
            <h1>
              The Journey
              <br /> you ever dreamed of.
            </h1>
            <p>
              We made a tool so you can easily keep & share your travel memories. But there is a lot
              more
            </p>
          </div>
          <img src={JumboTron} alt="IMAGE JUMBO" className={styles.layout__img} />
        </div>
      )}
      <main className={styles.layout}>{children}</main>
    </div>
  );
}
