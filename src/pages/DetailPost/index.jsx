import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initGetPost } from "./actions";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

export default function DetailPostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const postDetail = useSelector((state) => state.detailPostReducer.post);

  useEffect(() => {
    dispatch(initGetPost(postId));
  }, [dispatch, postId]);

  return (
    <Layout title="Detail">
      <div>
        <div>
          <h1>{postDetail.title}</h1>
          <p>{postDetail.date}</p>
        </div>
        <div>
          <img src={postDetail.imageUrl} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postDetail.description }} />
      </div>
    </Layout>
  );
}
