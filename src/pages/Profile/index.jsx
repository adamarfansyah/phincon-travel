import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components";
import Person from "../../assets/zaynmalik.svg";
import styles from "./profile.module.scss";
import ListCardPost from "../../container/ListCardPosts";

export default function ProfilePage() {
  const { user, isLoggedIn } = useSelector((state) => state.userLoginReducer);
  const { posts, isLoading } = useSelector((state) => state.homeReducer);
  const { bookmarks } = useSelector((state) => state.bookmarksReducer);
  const filteredPosts = posts.filter((post) => post.userId === user.id);
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/new-journey");
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <h1>PLEASE LOGIN</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.profilePage}>
        <h1>Profile</h1>
        <div className={styles.profilePage__wrapper}>
          <img src={Person} alt="Person" />
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
        <div className={styles.profilePage__btns}>
          <button className={styles.profilePage__btn} onClick={() => navigateTo()}>
            Add New Post
          </button>
        </div>
      </div>
      <div className={styles.profilePage__posts}>
        {filteredPosts.length === 0 ? (
          <h1>Post Journey 0</h1>
        ) : (
          <ListCardPost payload={filteredPosts} isLoading={isLoading} bookmarks={bookmarks} />
        )}
      </div>
    </Layout>
  );
}
