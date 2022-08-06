import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Moment from "react-moment";
import { Spinner } from "react-bootstrap";

import { requestById } from "../../store/utils/thunk";

const PostsComponent = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  let params = useParams();

  console.log(posts);
  useEffect(() => {
    dispatch(requestById(params.id));
  }, []);

  return (
    <>
      {posts.postById ? (
        <div className="container d-flex flex-column text-light">
          <h1 className="display-3">{posts.postById.title}</h1>
          <small className="author text-muted">
            Created by: <span>{posts.postById.author} - </span>
            <Moment format="DD MMMM">{posts.postById.createdAt}</Moment>
          </small>
            <img src={posts.postById.image} className="mb-1" />
          <div className="row">
          </div>
          <h3>{posts.postById.excerpt}</h3>
          <div className="mt-3 content">
            <div
              dangerouslySetInnerHTML={{
                __html: posts.postById.content,
              }}
            ></div>
          </div>
        </div>
      ) : null}

      {posts.loading ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : null}
    </>
  );
};

export default PostsComponent;
