function NavBar() {
  // const loggedIn = React.useC(current.loggedIn);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a
        id="home"
        className="navbar-brand"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Home"
        aria-current="page"
        href="#"
      >
        Berkeley <span id="gold">Housing</span> Review
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="unit1">
          <li
            id="unit1"
            className="nav-item "
          >
            <a
              className="nav-link"
              href="#/Unit1/"
            >
              Unit 1
            </a>
          </li>
        </ul>
        <ul className="unit2">
          <li id="unit2" className="nav-item">
            <a className="nav-link" href="#/Unit2/">
              Unit 2
            </a>
          </li>
        </ul>
        <ul className="unit3">
          <li id="unit3" className="nav-item">
            <a className="nav-link" href="#/Unit3/">
              Unit 3
            </a>
          </li>
        </ul>
        <ul className="clarkkerr">
          <li id="clarkkerr" className="nav-item">
            <a className="nav-link" href="#/Clarkkerr/">
              Clark Kerr
            </a>
          </li>
        </ul>
        <ul className="foothill">
          <li id="foothill" className="nav-item">
            <a className="nav-link" href="#/Foothill/">
              Foothill
            </a>
          </li>
        </ul>
        <ul className="martinzcommons">
          <li id="martinzcommons" className="nav-item">
            <a className="nav-link" href="#/MartinzCommons/">
              Martinez Commons
            </a>
          </li>
        </ul>

        <ul className="blackwell">
          <li id="blackwell" className="nav-item">
            <a className="nav-link" href="#/Blackwell/">
              Blackwell
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
