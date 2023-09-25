import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Post() {
  const [details, setDetails] = useState([]);
  const [comments, setComment] = useState("");
  const [commdet, setCommdet] = useState([]);
  const [status,setStatus] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/comment")
      .then((res) => {
        setCommdet(res.data);
      })
      .catch((err) => console.log(err));
  }, [commdet]);
  const handleComment = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/comment", { comments })
      .then((res) => {
        console.log(res);
        history("/post");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="d-flex justify-content-center m-3">POST</h2>
      <Link to="/" className="btn btn-primary">
        Create Post
      </Link>
      <div className="d-flex  bg-success justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          {details && details.length > 0 ? (
            details.map((data, i) => (
              <div key={i}>
                <img
                  src={data.postlink}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "250px", objectFit: "fill" }}
                />
                <div>{data.description}</div>

                <form onSubmit={handleComment}>
                  <h2>Comment</h2>
                  <div className="mb-2">
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                  &nbsp;
                  <button className="btn btn-success">submit</button>
                  <div className="w-50 bg-white rounded p-3">
                    {commdet && commdet.length > 0
                      ? commdet.map((d, i) => <p key={i}>{d.comments}</p>)
                      : ""}
                  </div>
                  <hr></hr>
                </form>
              </div>
            ))
          ) : (
            <p>No data Present</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Post;
