const Foothill = () => {
  return (
    <>
      <div className="row">
        <div className="container p-5 col">
          <h1>Foothill</h1>
          <img src="https://i0.wp.com/mpadesign.com/wp-content/uploads/2017/02/UCfoothill_color-corrected.jpg?fit=1483%2C982&ssl=1" />
          <h4>
            <b>Address:</b> 2700 Hearst Ave, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b> Nestled in the Berkeley hills on the northeast side of campus, especially convenient to STEM buildings including the College of Engineering.
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"foothill"} />
        </div>
      </div>
    </>
  );
};
