/* eslint-disable react/prop-types */
import styles from "./cardPost.module.scss";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function CardPost({ data, navigate, bookmarks, setBookmark, onDeleteBookmark }) {
  const isBookmarked = bookmarks?.some((bookmark) => bookmark?.id === data?.id);

  const handleBookmarkClick = () => {
    setBookmark(data);
  };

  const handleDeleteBookmark = () => {
    onDeleteBookmark(data?.id);
  };

  return (
    <div className={styles.cardPost}>
      <div className={styles.cardPost__icBookmark}>
        {!isBookmarked ? (
          <BookmarkBorderIcon onClick={handleBookmarkClick} />
        ) : (
          <BookmarkIcon onClick={handleDeleteBookmark} />
        )}
      </div>
      <img src={data.imageUrl} alt={data.title} />
      <div className={styles.cardPost__desc} onClick={() => navigate(data.id)}>
        <div className={styles.cardPost__descWrapper}>
          <h1>{data.title}</h1>
          <p>{data.date}</p>
        </div>
        <p>{data.shortDescription}</p>
      </div>
    </div>
  );
}
