/* eslint-disable react/prop-types */
import Navigation from "../Navigation";
import JumboTron from "../../assets/image-jumbo.svg";
import styles from "./layout.module.scss";
import { useState, useEffect } from "react";

export default function Layout({ title, children }) {
  document.title = `${title} - The Journey` || "Default";
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <div>
      <div className={isSticky ? styles.sticky : ""}>
        <Navigation />
      </div>
      {/* <div className={styles.layout__jumbotron}>
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
      </div> */}
      <main className={styles.layout}>{children}</main>
    </div>
  );
}
