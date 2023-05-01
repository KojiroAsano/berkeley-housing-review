function Main() {
  return (
    <HashRouter>
      <div>
        <NavBar />
        {/* for future use */}
        {/* <UserContext.Provider> */}
        <Route path="/" exact component={Home} />
        <Route path="/Unit1/" component={Unit1} />
        <Route path="/Unit2/" component={Unit2} />
        <Route path="/Unit3/" component={Unit3} />
        <Route path="/Foothill/" component={Foothill} />
        <Route path="/Clarkkerr/" component={ClarkKerr} />
        <Route path="/MartinzCommons/" component={MartinezCommons} />
        <Route path="/Blackwell/" component={Blackwell} />
        {/* </UserContext.Provider> */}
      </div>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
