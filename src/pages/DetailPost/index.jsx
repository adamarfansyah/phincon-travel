import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetPost } from "./actions";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import styles from "./detailPost.module.scss";

export default function DetailPostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, isLoading } = useSelector((state) => state.detailPostReducer);

  useEffect(() => {
    dispatch(initGetPost(postId));
  }, [postId]);

  if (isLoading) return <h1>LOADING...</h1>;

  return (
    <Layout title="Detail">
      <div className={styles.detailPost}>
        <div className={styles.detailPost__wrapper}>
          <h1>{post.title}</h1>
          <p>{post.date}</p>
        </div>
        <div>
          <img src={post.imageUrl} className={styles.detailPost__image} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      </div>
    </Layout>
  );
}
