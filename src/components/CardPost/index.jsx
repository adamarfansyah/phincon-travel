/* eslint-disable react/prop-types */
import styles from "./cardPost.module.scss";

export default function CardPost({ data, navigate, bookmarks, setBookmark, onDeleteBookmark }) {
  const isBookmarked = bookmarks?.some((bookmark) => bookmark?.id === data?.id);

  console.log(data);
  const handleBookmarkClick = () => {
    setBookmark(data);
  };

  const handleDeleteBookmark = () => {
    onDeleteBookmark(data?.id);
  };

  return (
    <div className={styles.cardPost}>
      <img src={data.imageUrl} alt={data.title} />
      <div className={styles.cardPost__desc} onClick={() => navigate(data.id)}>
        <div className={styles.cardPost__descWrapper}>
          <h1>{data.title}</h1>
          <p>{data.date}</p>
        </div>
        <p>{data.shortDescription}</p>
      </div>
      {!isBookmarked ? (
        <button onClick={handleBookmarkClick}>Tambah Bookmark</button>
      ) : (
        <button onClick={handleDeleteBookmark}>Hapus Bookmark</button>
      )}
    </div>
  );
}
