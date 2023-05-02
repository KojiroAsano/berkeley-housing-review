const Unit2 = () => {
  return (
    <>
      <div className="row">
        <div className="container p-5 col">
          <h1>Unit 2</h1>
          <img src="https://live.staticflickr.com/6/10261785_a9502bcfa1_b.jpg" />
          <h4>
            <b>Address:</b> 2650 Haste St, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b> A traditional residential hall experience in the urban heart of Berkeley, close to local cafes, restaurants, and shops. Conveniently located three blocks from the south side of campus.
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"unit2"} />
        </div>
      </div>
      <Footer />
    </>
  );
};
