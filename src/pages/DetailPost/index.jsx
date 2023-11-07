import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetPost } from "./actions";
import { useParams } from "react-router-dom";
import { Layout } from "../../components";
import styles from "./detailPost.module.scss";
import { getAllProfilesInitAction } from "../Profile/actions";

export default function DetailPostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.detailPostReducer);
  const { profiles } = useSelector((state) => state.profilesReducer);

  const filteredProfiles = profiles.filter((user) => user.id === post.userId);

  useEffect(() => {
    dispatch(initGetPost(postId));
    dispatch(getAllProfilesInitAction());
  }, [postId]);

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <Layout title="Detail">
      <div className={styles.detailPost}>
        <div className={styles.detailPost__wrapper}>
          <div>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
          </div>
          <div>
            <label>{filteredProfiles[0]?.username}</label>
          </div>
        </div>
        <div>
          <img src={post.imageUrl} className={styles.detailPost__image} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </Layout>
  );
}
