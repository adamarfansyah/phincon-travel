import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetAllPosts, searchPost } from "./actions";
import { Layout, Input } from "../../components";
import ListCardPost from "../../container/ListCardPosts";
import styles from "./home.module.scss";
import { filteredBookmarkAction, getBookmarksAction } from "../Bookmark/actions";

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, value, filteredPost, isLoading } = useSelector((state) => state.homeReducer);
  const { user } = useSelector((state) => state.userLoginReducer);
  const { bookmarks, filteredBookmarks } = useSelector((state) => state.bookmarksReducer);

  console.log(user);
  useEffect(() => {
    dispatch(initGetAllPosts());
    dispatch(getBookmarksAction());
    dispatch(filteredBookmarkAction(user.id));
  }, []);

  console.log(filteredBookmarks);
  return (
    <Layout title="Home Page">
      <div className={styles.homePage}>
        <div className={styles.homePage__wrapper}>
          <h1>Journey</h1>
          <Input
            placeholder={"Find Journey"}
            onChange={(e) => dispatch(searchPost(e.target.value))}
            label="Search"
          />
        </div>
      </div>
      {value === "" ? (
        <ListCardPost payload={posts} isLoading={isLoading} bookmarks={bookmarks} />
      ) : (
        <ListCardPost payload={filteredPost} isLoading={isLoading} bookmarks={bookmarks} />
      )}
    </Layout>
  );
};

export default HomePage;
