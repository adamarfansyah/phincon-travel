/* eslint-disable react/prop-types */
import CardPost from "../../components/CardPost";
import styles from "./listCardPosts.module.scss";

export default function ListCardPost({ payload, isLoading, isError }) {
  const cardList = payload?.map((item) => <CardPost key={item.id} data={item} />);
  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );

  return <div className={styles.listCardPost}>{cardList}</div>;
}
