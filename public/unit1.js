const Unit1 = () => {
  return (
    <>
      <div className="row ">
        <div className="container p-5 col">
          <h1>Unit 1</h1>

          <img src="https://life.berkeley.edu/wp-content/uploads/2022/04/BL_Res-Hall-2022-cover-scaled.jpg" />

          <h4>
            <b>Address:</b> 2650 Durant Ave, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b>A traditional residential hall experience in the urban heart of Berkeley, close to local cafes, restaurants, and shops. Conveniently located one block from the south side of campus.
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"unit1"} />
        </div>
      </div>
      <Footer />
    </>
  );
};
