import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { postsRequest } from "../../store/utils/thunks";
import Moment from "react-moment";

import { Button, Spinner } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const PostsHome = () => {
  const dispatch = useDispatch();
  const postsHome = useSelector((state) => state.posts);

  const loadPosts = () => {
    const page = postsHome.articles.page + 1;
    dispatch(postsRequest({ page, order: "desc", limit: "6" }));
  };

  useEffect(() => {
    if (postsHome.articles.items.length <= 0) {
      dispatch(postsRequest({ page: 1, order: "desc", limit: "6" }));
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {postsHome.articles
            ? postsHome.articles.items.map((item) => (
                <div className="col-sm-4" key={item.id}>
                  <div className="card mb-5 rounded-0 border-0 shadow-lg">
                    <div
                      className="bg-image hover-overlay ripple"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={`${item.image}?${item.id}`}
                        className="img-fluid"
                        alt="Some pic"
                      />
                      <a href="#!">
                        <div
                          className="mask"
                          // style={{background-color "rgba(251, 251, 251, 0.15)"}}
                        />
                      </a>
                    </div>
                    <div
                      className="card-body bg-dark"
                      //   style={{ background: "455A64" }}
                      //   style={{ padding: "1em 0 0 0" }}
                    >
                      <h5 className="card-title text-white ms-0 ">
                        {item.title}
                      </h5>
                      <p className="card-text text-muted">{item.excerpt}</p>
                      <div className="d-flex justify-content-between text-white">
                        <Moment format="DD MMMM">{item.createdAt}</Moment>
                        <LinkContainer to={`/article/${item.id}`}>
                          <Button
                            variant="light"
                            className="btn btn-sm bg-gradient"
                            style={{ background: "#6610f2" }}
                          >
                            Read More
                          </Button>
                        </LinkContainer>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
      {postsHome.loading ? (
        <div className="d-flex justify-content-center text-info">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : null}
      {!postsHome.articles.end && !postsHome.loading ? (
        <Button
          variant="outline-light"
          onClick={() => loadPosts()}
          className="mb-4"
        >
          Older News
        </Button>
      ) : null}
    </>
  );
};
export default PostsHome;
