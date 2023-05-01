const MartinezCommons = () => {
  return (
    <>
      <div className="row">
        <div className="container p-5 col">
          <h1>Martinez Commons</h1>
          <img src="https://caldrywall-media.s3.us-west-1.amazonaws.com/wp-content/uploads/2017/04/31160803/UC-Berkeley-Martinez-Commons-1.jpg" />
          <h4>
            <b>Address:</b> 2520 Channing Way, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b> most Annoying Place in the World!!
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"martinezcommons"} />
        </div>
      </div>
      <Footer />
    </>
  );
};
