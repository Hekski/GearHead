import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";

import { requestById } from "../../store/utils/thunk";
import posts from "../../store/reducers/posts";

const PostsComponent = () => {
  const postDetail = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  let param = useParams();

  console.log(postDetail);
  useEffect(() => {
    dispatch(requestById(param.id));
  }, []);

  return (
    <>
      {posts.requestById ? (
        <div className="container text-light">
          <h1 className="display-2">{postDetail.postById.title}</h1>
          <img src={postDetail.postById.image} />
          <h4 className="mt-3">{postDetail.postById.excerpt}</h4>
          <div
            className="mt-3"
            dangerouslySetInnerHTML={{
              __html: postDetail.postById.content,
            }}
          ></div>
        </div>
      ) : null}
    </>
  );
};

export default PostsComponent;
