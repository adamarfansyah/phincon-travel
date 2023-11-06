/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import CardPost from "../../components/CardPost";
import styles from "./listCardPosts.module.scss";
import { useNavigate } from "react-router-dom";
import { createBookmarkAction, deleteBookmarkAction } from "../../pages/Bookmark/actions";

export default function ListCardPost({ payload, isLoading, bookmarks }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  const setBookmark = (data) => {
    dispatch(createBookmarkAction(data));
  };

  const deleteBookmark = (id) => {
    dispatch(deleteBookmarkAction(id));
  };

  const cardList = payload?.map((item) => (
    <CardPost
      key={item.id}
      data={item}
      navigate={navigateToDetail}
      bookmarks={bookmarks}
      setBookmark={setBookmark}
      onDeleteBookmark={deleteBookmark}
    />
  ));

  if (isLoading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return <div className={styles.listCardPost}>{cardList}</div>;
}
