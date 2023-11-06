/* eslint-disable react/prop-types */
import styles from "./cardPost.module.scss";

export default function CardPost({ data }) {
  return (
    <div className={styles.cardPost}>
      <img src={data.imageUrl} alt={data.title} />
      <div className={styles.cardPost__desc}>
        <div className={styles.cardPost__descWrapper}>
          <h1>{data.title}</h1>
          <p>{data.date}</p>
        </div>
        <p>{data.shortDescription}</p>
      </div>
    </div>
  );
}
