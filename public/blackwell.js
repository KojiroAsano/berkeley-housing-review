const Blackwell = () => {
  return (
    <>
      <div className="row">
        <div className="container p-5 col">
          <h1>Blackwell</h1>
          <img src="https://dailycal.org/wp-content/uploads/2021/09/residential_charlenewang_staff.jpg" />
          <h4>
            <b>Address:</b> 2401 Durant Ave, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b> UC Berkeley’s newest housing complex, with premium-style double rooms in a lively location just one block from the south side of campus. Close to shops, restaurants, the Recreational Sports Facility and Sproul Plaza.
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"blackwell"} />
        </div>
      </div>
    </>
  );
};
