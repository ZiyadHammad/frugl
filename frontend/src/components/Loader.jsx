const Loader = () => {
  return (
    <>
      <div className="main_loading_container">
        <h1 className="loading_text" >Loading...</h1>
        <div className="loading_container">
          <div className="loading_spinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader