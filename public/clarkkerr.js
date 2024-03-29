const ClarkKerr = () => {
  return (
    <>
      <div className="row">
        <div className="container p-5 col">
          <h1>Clark Kerr</h1>
          <img src="https://dailycal.org/wp-content/uploads/2023/01/skeleton_Meghnath-Day_staff.jpg" />
          <h4>
            <b>Address:</b> 2601 Warring St, Berkeley, CA 94720
          </h4>
          <p>
            <b>Description:</b> A mini-neighborhood with Spanish mission-style architecture, tree-lined courtyards and access to nature and hiking trails.
          </p>
        </div>

        <div className="container p-5 col">
          <ReviewSection housing={"unit1"} />
        </div>
      </div>
    </>
  );
};
