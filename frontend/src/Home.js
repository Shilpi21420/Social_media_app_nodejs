import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [postlink, setPostLink] = useState("");
  const [postdes, setPostdes] = useState("");
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/", { postlink, postdes })
      .then((res) => {
        console.log(res);
        history("/post");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 bg-success justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={handleSubmit}>
            <h2>Create a Post</h2>
            <div className="mb-2">
              <label htmlFor="">Post Link : </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPostLink(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Post Description : </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setPostdes(e.target.value)}
              />
            </div>
            <button className="btn btn-success">Create Post</button>
            <hr></hr>
            <Link to='/post'>
            <button className="btn btn-primary ms-2">See the Previous Post</button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
