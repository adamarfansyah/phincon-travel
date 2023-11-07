import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredBookmarkAction, getBookmarksAction } from "./actions";
import { Layout } from "../../components";
import { useNavigate } from "react-router-dom";
import ListCardPost from "../../container/ListCardPosts";
import styles from "./bookmark.module.scss";

export default function BookmarkPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bookmarks, isLoading } = useSelector((state) => state.bookmarksReducer);
  const { user, isLoggedIn } = useSelector((state) => state.userLoginReducer);

  useEffect(() => {
    dispatch(filteredBookmarkAction(user.id));
    dispatch(getBookmarksAction());
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <Layout title={"Bookmarks"}>
      <div className={styles.bookmarkPage}>
        <h1>Bookmarks</h1>
        <ListCardPost payload={bookmarks} isLoading={isLoading} bookmarks={bookmarks} />
      </div>
    </Layout>
  );
}
