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
            <b>Description:</b> most Annoying Place in the World!!
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"blackwell"} />
        </div>
      </div>
    </>
  );
};
