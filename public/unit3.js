const Unit3 = () => {
  return (
    <>
      <div className="row">
        <div className="container p-5 col">
          <h1>Unit 3</h1>
          <img src="https://live.staticflickr.com/3157/2958762946_8ec3302684_b.jpg" />
          <h4>
            <b>Address:</b> 2400 Durant Ave, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b> most Annoying Place in the World!!
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"unit3"} />
        </div>
      </div>
      <Footer />
    </>
  );
};
