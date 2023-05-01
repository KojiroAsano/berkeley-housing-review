const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const ReviewSection = (props) => {
  const housing = props.housing;
  const [data, setData] = React.useState([]);
  const [name, setName] = React.useState("");
  const [comment, setComment] = React.useState("");

  React.useEffect(() => {
    // fetch all accounts from API

    fetch(`/comment/${housing}/all`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData([...data]);
      });
  }, []);
  const postComment = () => {
    const newComment = {
      housing: housing,
      name: name,
      comment: comment,
    };
    setData([...data, newComment]);
    fetch(`/comment/post/${housing}/${name}/${comment}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          console.log("JSON:", data);
        } catch (err) {
          console.log("err:", err);
        }
      });

    setName("");
    setComment("");
  };

  return (
    <>
      <div className="container border rounded mb-3" id="review-form">
        <h1>Post a comment!!</h1>
        <div className="my-1 mx-auto">
          Name
          <br />
          <input
            type="input"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <br />
        </div>

        <div className="my-1 mx-auto">
          Comment
          <br />
          <textarea
            rows="3"
            type="input"
            className="form-control"
            id="comment"
            placeholder="Enter comment"
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
          />
          <br />
        </div>
        <div className="m-2">
          <button
            type="submit"
            className="btn btn-primary offset-9 col-3 "
            onClick={postComment}
          >
            Post
          </button>
        </div>
      </div>
      {/* actual review section  */}
      <div className="comment-section my-2">
        {data.map((comment) => {
          return (
            <div
              key={comment.comment}
              // className="border border-5 my-2 p-3 rounded"
              className=" card my-2"
              style={{ background: "#fafafa", borderStyle: "solid" }}
            >
              <h3 className="card-header">
                <b>Name: </b>
                {comment.name}
              </h3>
              <p className="card-body">
                <b>Comment: </b>
                {comment.comment}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
