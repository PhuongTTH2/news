import React from 'react';
const Page = () => {

  return (
    <>
    <div id="main">
      {/* start of header */}
      <div className="no-gutters">
        <header>
          <div className="container no-padding-lr">
            <div className="holder">
              <div className="logoHolder width307">
                <a href="/" className="logo">
                  <img alt="alt" src="img/logo.png" />
                </a>
                <a href="/" className="showOnMobile text-white fs--20">
                  N<span className="colorYellow2">L</span>
                </a>
              </div>
              <div className="hideOnMobile">
                {/* navigation menu */}
                <div className="mainMenu width650">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="personal_profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="/">Directory</a>
                    </li>
                    <li>
                      <a href="/">+ Create</a>
                    </li>
                    <li>
                      <a
                        href="/"
                        data-toggle="modal"
                        data-target="#signUp1st"
                        data-dismiss="modal"
                      >
                        Join / Signin
                      </a>
                    </li>
                    <li>
                      <a href="/">Message</a>
                    </li>
                  </ul>
                </div>
                {/* end of navigation menu */}
                {/* social nav */}
                <div className="width150 text-right">
                  <ul className="list-unstyled">
                    <li>
                      <a href="/">
                        <img alt="alt"
                          className="iconasset"
                          src="img/icons/youtube_96px.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img alt="alt"
                          className="iconasset"
                          src="img/icons/instagram_96px.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img alt="alt"
                          className="iconasset"
                          src="img/icons/pinterest_96px.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img alt="alt"
                          className="iconasset"
                          src="img/icons/twitter_squared_96px.png"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img alt="alt"
                          className="iconasset"
                          src="img/icons/facebook_f_96px.png"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                {/* end of social nav */}
              </div>
              {/* mobile menu icon */}
              <div className="mobeMenuIconWrapper width128">
                <a id="rside-btn" href="/">
                  <img alt="alt" src="img/mmemu_icon.png" />
                </a>
              </div>
              {/* end of mobile menu icon */}
              <div className="clearfix" />
            </div>
          </div>
          <div className="clearfix" />
        </header>
      </div>
      {/* end of header */}
      {/*- mobile search bar */}
      <div className="showOnMobile mobileSearchBar">
        <div className="container no-padding-lr">
          <div className="input-container searchWrapper">
            <input className="input-field" type="text" placeholder="Search" />
            <button className="submitBtn" type="submit">
              <img alt="alt"
                className="iconasset"
                src="img/icons/search_reverse_96px.png"
              />
            </button>
          </div>
          <div className="width15">
            <a id="lside-btn" href="/">
              <img alt="alt" src="img/mmemu_dark_icon.png" />
            </a>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      {/* end of mobile search bar */}
      {/* start of content */}
      <div id="twoColumnLayout" className="content">
        <div className="container no-padding-lr">
          {/* start of left side rail */}
          <div id="sidebarleft" className="div306 leftSideBar">
            <div className="sidebar-x">
              <a id="lside-btn-x" href="/">
                x
              </a>
            </div>
            <div className="sibar-inner-wrapper">
              {/* start of card */}
              <div className="card cardWrapper slt-book">
                <div className="card-header">Select or create a book:</div>
                <div className="card-body">
                  <div className="cardContent">
                    <ul className="list-unstyled">
                      <li>
                        <a href="/">
                          <span className="colorLightGreen fw--700">
                            Book 1: The Origin and Evolution of Life
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="/">Book 2: Cosmology of the Universe</a>
                      </li>
                      <li>
                        <a href="/">Book 3: Bending Time</a>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center mt--5">
                    <a
                      href="/"
                      className="btn btn-small btn-round bg--defaultBlue text-white"
                    >
                      + Create Book
                    </a>
                  </div>
                </div>
              </div>
              {/* end of card */}
              {/* start of card */}
              <div className="card mt--5 tbl-contents">
                <div className="card-header">Table of Contents</div>
                <div className="card-body">
                  <div className="cardContent">
                    <a href="/" className="d-block mb--5 colorLightBlue">
                      + Add Chapter
                    </a>
                    {/* start of table */}
                    <div className="wrapThisTable">
                      <table className="table table-borderless mb--8">
                        <thead>
                          <tr>
                            <th className="colorLightGray">Chapter 1:</th>
                            <th className="colorGray">
                              The Beginning{" "}
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>{" "}
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="colorLightGray text-center">1.1</td>
                            <td>Genesis of the Universe</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">1.2</td>
                            <td>Genesis of Humanity</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">1.3</td>
                            <td>Genesis of the Earth</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <a href="/">
                                <span className="colorLightBlue">
                                  + Add Topic
                                </span>
                              </a>
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* end of table */}
                  </div>
                  <div className="cardContent">
                    <a href="/" className="d-block mb--5 colorLightBlue">
                      + Add Chapter
                    </a>
                    {/* start of table */}
                    <div className="wrapThisTable">
                      <table className="table table-borderless mb--8">
                        <thead>
                          <tr>
                            <th className="colorLightGray">Chapter 2:</th>
                            <th className="colorGray">
                              The Middle{" "}
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="colorLightGray text-center">2.1</td>
                            <td>
                              <div className="chapterProgress">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    style={{ width: 92 }}
                                  ></div>
                                  <div className="progress-text">
                                    Genesis of Mid{" "}
                                    <span className="colorLightGreen">
                                      Universe
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">2.2</td>
                            <td>Genesis of Mid Humanity</td>
                            <td>
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">2.3</td>
                            <td>Genesis of the Mid Earth</td>
                            <td>
                              <a href="/">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <a href="/">
                                <span className="colorLightBlue">
                                  + Add Topic
                                </span>
                              </a>
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* end of table */}
                  </div>
                  <div className="cardContent">
                    <a href="/" className="d-block mb--5 colorLightBlue">
                      + Add Chapter
                    </a>
                    {/* start of table */}
                    <div className="wrapThisTable">
                      <table className="table table-borderless mb--8">
                        <thead>
                          <tr>
                            <th className="colorLightGray">Chapter 3:</th>
                            <th className="colorGray">
                              The End{" "}
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>{" "}
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="colorLightGray text-center">3.1</td>
                            <td>Genesis of the Universe</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">3.2</td>
                            <td>Genesis of Humanity</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">3.3</td>
                            <td>Genesis of the Earth</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <a href="/">
                                <span className="colorLightBlue">
                                  + Add Topic
                                </span>
                              </a>
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* end of table */}
                  </div>
                  <div className="cardContent">
                    <a href="/" className="d-block mb--5 colorLightBlue">
                      + Add Chapter
                    </a>
                    {/* start of table */}
                    <div className="wrapThisTable">
                      <table className="table table-borderless mb--8">
                        <thead>
                          <tr>
                            <th className="colorLightGray">Chapter 4:</th>
                            <th className="colorGray">
                              The End{" "}
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>{" "}
                            </th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="colorLightGray text-center">4.1</td>
                            <td>Genesis of the Universe</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">4.2</td>
                            <td>Genesis of Humanity</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="colorLightGray text-center">4.3</td>
                            <td>Genesis of the Earth</td>
                            <td>
                              <a href="/" className="pl--10">
                                <i className="fa fa-chevron-down" />
                              </a>{" "}
                              <a href="/">
                                <i className="fa fa-chevron-up" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td />
                            <td>
                              <a href="/">
                                <span className="colorLightBlue">
                                  + Add Topic
                                </span>
                              </a>
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* end of table */}
                  </div>
                  <div className="cardContent">
                    <a href="/" className="d-block mb--8 colorLightBlue">
                      + Add Chapter
                    </a>
                  </div>
                </div>
              </div>
              {/* end of card */}
              <div className="clearfix" />
            </div>{" "}
            {/* .sibar-inner-wrapper */}
          </div>
          {/* end of left side rail */}
          {/* start of feeds */}
          <div className="width820">
            {/* start of writting */}
            <div className="card pb--50">
              <div className="card-header">
                <a href="/" className="printBook text-white hideOnSmallView">
                  <img alt="alt" src="img/print_icon.png" />
                  &nbsp;&nbsp; Print Book
                </a>
                <a href="/" className="dlPDF text-white ml--30 hideOnSmallView">
                  <img alt="alt" src="img/download_pdf.png" />
                  &nbsp;&nbsp; Download Book as PDF
                </a>
                <div className="text-right showOnSmallView">
                  <a
                    href="/"
                    className="dlPDF text-white ml--30 showOnSmallView"
                    title="Download Book as PDF"
                  >
                    <img alt="alt" src="img/download_pdf.png" />
                  </a>
                  <a
                    href="/"
                    className="printBook text-white showOnSmallView"
                    title="Print Book"
                  >
                    <img alt="alt" src="img/print_icon.png" />
                  </a>
                </div>
                <div className="clearfix" />
              </div>
              <div className="card-body">
                <div className="cardContent">
                  <div className="headerHolder float-left">
                    <h2>The Origin and Evolution of Life</h2>
                    <p className="author">
                      (by{" "}
                      <a href="/" className="colorLightBlue">
                        Jack Handey)
                      </a>
                    </p>
                  </div>
                  <button className="btn btn-round bg--defaultBlue text-white float-right editBookBtn">
                    <img alt="alt" src="img/edit_book_pencil.png" /> Edit this book
                  </button>
                  <div className="clearfix" />
                </div>
                {/* start of card content */}
                <div className="innerCardWrapper">
                  <div className="card">
                    <div className="card-body">
                      <div className="container no-padding-lr">
                        <div className="row">
                          <div className="col-lg-8 col-md-8">
                            <h2>Chapter 2: The Middle</h2>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="btnHollder float-right">
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/print_dark_icon.png" />
                              </a>
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/download_dark_icon.png" />
                              </a>
                              <a
                                href="/"
                                className="btn btn-delete btn-round-transparent"
                                data-toggle="modal"
                                data-target="#deletePopUp"
                              >
                                <img alt="alt" src="img/delete_red_icon.png" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-block lightGrayBg">
                      <a href="/" className="colorLightBlue d-block text-center">
                        + Add Profile Links
                      </a>
                    </div>
                  </div>
                </div>
                {/* end of card content */}
                {/* start of card content */}
                <div className="innerCardWrapper mt--10">
                  <div className="card">
                    <div className="card-body">
                      <div className="container no-padding-lr">
                        <div className="row">
                          <div className="col-lg-8 col-md-8">
                            <h2 className="colorGray opacity--50 font-italic fs--20 lh--normal">
                              2.1 Genesis of the Mid Universe
                            </h2>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="btnHollder float-right">
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/print_dark_icon.png" />
                              </a>
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/download_dark_icon.png" />
                              </a>
                              <a
                                href="/"
                                className="btn btn-delete btn-round-transparent"
                                data-toggle="modal"
                                data-target="#deletePopUp"
                              >
                                <img alt="alt" src="img/delete_red_icon.png" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="toolbarsWrapper d-block">
                      <a href="/" className="colorLightBlue d-block text-center">
                        + Add Profile Links
                      </a>
                    </div>
                    <div className="editContentWrapper card-body active">
                      <textare id="editorTools_1">
                        Mi proin sed libero enim sed faucibus turpis in eu. Sit
                        amet commodo nulla facilisi nullam. Tincidunt praesent
                        semper feugiat nibh sed. Dignissim diam quis enim lobortis
                        scelerisque fermentum. Volutpat lacus laoreet non
                        curabitur gravida arcu ac tortor. Feugiat nibh sed
                        pulvinar proin gravida hendrerit. Metus dictum at tempor
                        commodo ullamcorper a lacus. Mi proin sed libero enim sed
                        faucibus turpis. Tempus urna et pharetra pharetra massa
                        massa ultricies mi quis.
                        <br />
                        <a
                          href="/"
                          style={{ textDecoration: "none" }}
                          className="colorLightBlue fs--11 no-text-decoration"
                        >
                          see more...
                        </a>
                      </textare>
                    </div>
                    {/* start of comments */}
                    <div className="topic-comments">
                      <p className="fs--12">Comments (1)</p>
                      <div className="author">
                        <img alt="alt"
                          className="avatarIcon"
                          src="img/avatar/sophists.png"
                        />
                        <p className="fs--12">
                          <a href="/">Jenna Smith </a>
                          <br />
                          <small className="fs--11">
                            "Hi. I'm looking forward to connecting with some of
                            you."
                          </small>
                        </p>
                        <div className="clearfix" />
                      </div>
                    </div>
                    {/* end of comments */}
                    <div className="d-block text-center">
                      <a href="/" className="colorLightBlue d-block">
                        + Add Topic
                      </a>
                    </div>
                  </div>
                </div>
                {/* end of card content */}
                {/* start of card content */}
                <div className="innerCardWrapper mt--10">
                  <div className="card">
                    <div className="card-body">
                      <div className="container no-padding-lr">
                        <div className="row">
                          <div className="col-lg-8 col-md-8">
                            <h2 className="colorGray font-italic fs--20 lh--normal">
                              2.2 Genesis of the Mid Humanity
                            </h2>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="btnHollder float-right">
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/print_dark_icon.png" />
                              </a>
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/download_dark_icon.png" />
                              </a>
                              <a
                                href="/"
                                className="btn btn-delete btn-round-transparent"
                                data-toggle="modal"
                                data-target="#deletePopUp"
                              >
                                <img alt="alt" src="img/delete_red_icon.png" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="toolbarsWrapper">
                      <a href="/" className="colorLightBlue d-block text-center">
                        + Add Profile Links
                      </a>
                    </div>
                    <div className="editContentWrapper card-body">
                      <textare id="editorTools_2">
                        Ridiculus mus mauris vitae ultricies leo integer malesuada
                        nunc. Amet risus nullam eget felis eget nunc lobortis
                        mattis aliquam. Amet purus gravida quis blandit turpis
                        cursus in hac. Porttitor rhoncus dolor purus non enim. Id
                        cursus metus aliquam eleifend. Pharetra massa massa
                        ultricies mi quis hendrerit dolor magna eget. Risus nec
                        feugiat in fermentum posuere urna nec. Diam sollicitudin
                        tempor id eu nisl nunc. Sagittis purus sit amet volutpat
                        consequat mauris nunc.
                        <br />
                        <a
                          href="/"
                          style={{ textDecoration: "none" }}
                          className="colorLightBlue fs--11"
                        >
                          see more...
                        </a>
                      </textare>
                    </div>
                    {/* start of comments */}
                    <div className="topic-comments">
                      <p className="fs--12">Comments (1)</p>
                      <div className="author">
                        <img alt="alt"
                          className="avatarIcon"
                          src="img/avatar/sophists.png"
                        />
                        <p className="fs--12">
                          <a href="/">Jenna Smith </a>
                          <br />
                          <small className="fs--11">
                            "Hi. I'm looking forward to connecting with some of
                            you."
                          </small>
                        </p>
                        <div className="clearfix" />
                      </div>
                    </div>
                    {/* end of comments */}
                    <div className="d-block text-center">
                      <a href="/" className="colorLightBlue d-block">
                        + Add Topic
                      </a>
                    </div>
                  </div>
                </div>
                {/* end of card content */}
                {/* start of card content */}
                <div className="innerCardWrapper mt--10">
                  <div className="card">
                    <div className="card-body">
                      <div className="container no-padding-lr">
                        <div className="row">
                          <div className="col-lg-8 col-md-8">
                            <h2 className="colorGray font-italic fs--20 lh--normal">
                              2.3 Genesis of the Mid Earth
                            </h2>
                          </div>
                          <div className="col-lg-4 col-md-4">
                            <div className="btnHollder float-right">
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/print_dark_icon.png" />
                              </a>
                              <a href="/" className="btn btn-round-transparent">
                                <img alt="alt" src="img/download_dark_icon.png" />
                              </a>
                              <a
                                href="/"
                                className="btn btn-delete btn-round-transparent"
                                data-toggle="modal"
                                data-target="#deletePopUp"
                              >
                                <img alt="alt" src="img/delete_red_icon.png" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="toolbarsWrapper">
                      <a href="/" className="colorLightBlue d-block text-center">
                        + Add Profile Links
                      </a>
                    </div>
                    <div className="editContentWrapper card-body">
                      <textare id="editorTools_3">
                        Ac felis donec et odio pellentesque diam volutpat. Eu
                        volutpat odio facilisis mauris sit amet massa. Volutpat
                        odio facilisis mauris sit amet massa vitae. Nunc sed velit
                        dignissim sodales ut eu sem integer. Gravida in fermentum
                        et sollicitudin ac. At in tellus integer feugiat
                        scelerisque varius morbi enim. Dictumst quisque sagittis
                        purus sit amet volutpat consequat mauris nunc. Risus at
                        ultrices mi tempus imperdiet nulla. Cras pulvinar mattis
                        nunc sed blandit libero volutpat sed cras.
                        <br />
                        <a
                          href="/"
                          style={{ textDecoration: "none" }}
                          className="colorLightBlue fs--11"
                        >
                          see more...
                        </a>
                      </textare>
                    </div>
                    {/* start of comments */}
                    <div className="topic-comments">
                      <p className="fs--12">Comments (1)</p>
                      <div className="author">
                        <img alt="alt"
                          className="avatarIcon"
                          src="img/avatar/sophists.png"
                        />
                        <p className="fs--12">
                          <a href="/">Jenna Smith </a>
                          <br />
                          <small className="fs--11">
                            "Hi. I'm looking forward to connecting with some of
                            you."
                          </small>
                        </p>
                        <div className="clearfix" />
                      </div>
                    </div>
                    {/* end of comments */}
                    <div className="d-block text-center">
                      <a href="/" className="colorLightBlue d-block">
                        + Add Topic
                      </a>
                    </div>
                  </div>
                </div>
                {/* end of card content */}
              </div>
              <div className="text-center">
                <button className="btn btn-round bg--defaultBlue text-white">
                  + Add Chapter
                </button>
              </div>
            </div>
          </div>
          {/* end of writtings */}
        </div>
        {/* end of feeds */}
        {/* start of right rails */}
        <div id="sidebarright" className="div306 rightSideBar showOnMobile">
          <div className="sidebar-x">
            <a id="rside-btn-x" href="/">
              x
            </a>
          </div>
          <div className="sibar-inner-wrapper">
            {/* navigation menu */}
            <div className="mainMenu width650">
              <ul className="list-unstyled">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Profile</a>
                </li>
                <li>
                  <a href="/">Directory</a>
                </li>
                <li>
                  <a href="/">+ Create</a>
                </li>
                <li>
                  <a href="/" data-target="#signUp1st" data-dismiss="modal">
                    Join / Signin
                  </a>
                </li>
                <li>
                  <a href="/">Message</a>
                </li>
              </ul>
            </div>
            {/* end of navigation menu */}
            {/* social nav */}
            <div className="width150 text-right">
              <ul className="list-unstyled">
                <li>
                  <a href="/">
                    <img alt="alt" className="iconasset" src="img/icons/youtube_96px.png" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/instagram_96px.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/pinterest_96px.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/twitter_squared_96px.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/facebook_f_96px.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
            {/* end of social nav */}
          </div>
        </div>
        {/* end of right rails */}
        <div className="clearfix" />
      </div>{" "}
      {/* .sibar-inner-wrapper */}
    </div>{" "}
    {/* .container.no-padding-lr */}
    <div className="clearfix" />
    {/* .content */}
    {/* end of content */}
    {/* Delete Modal */}
    <div
      className="modal fade"
      id="deletePopUp"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="deletePopUp"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content text-center">
          <div className="modal-body">
            <div className="contentModal">
              <p className="fs--20 colorGray">
                Are you sure you want to <br />
                delete this Chapter?
              </p>
            </div>
            <div className="btnHolder">
              <button
                type="button"
                className="btn btn-round bg--gray text-white"
                data-dismiss="modal"
              >
                No, get me back
              </button>
              <button
                type="button"
                className="btn btn-round bg--darkRed text-white"
              >
                Yes, delete this
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* forgot Account */}
    <div
      className="modal fade Acct"
      id="forgotAcct"
      tabIndex={-1}
      data-focus-on="input:first"
    >
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <a href="/" className="logo">
              <img alt="alt" src="img/logo.png" />
            </a>
          </div>
          <div className="modal-body">
            <p className="fs--20 fw--700">Recover your username</p>
            <p>
              Don't worry! You may have forgotten your username, but we can help
              you out. Enter your email address below and we'll email you your
              username.
            </p>
            <p>
              <input
                placeholder="EMAIL"
                oninput="this.className = ''"
                name="email"
              />
            </p>
            <button type="button" className="btn btn-default fs--12">
              EMAIL ME
            </button>
            <p>
              If you are having trouble accessing your account, follow{" "}
              <a href="/" className="bright-blue">
                this link
              </a>
              .
            </p>
            <div className="login-signup-links">
              <a
                href="#loginAcct"
                className="bright-blue fw--700 firstLink"
                data-toggle="modal"
                data-target="#loginAcct"
                data-dismiss="modal"
              >
                LOG IN
              </a>
              <a
                href="/"
                className="bright-blue fw--700"
                data-toggle="modal"
                data-target="#signUp1st"
                data-dismiss="modal"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Login Account */}
    <div
      className="modal fade Acct"
      id="loginAcct"
      tabIndex={-1}
      data-focus-on="input:first"
    >
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <a href="/" className="logo">
              <img alt="alt" src="img/logo.png" />
            </a>
          </div>
          <div className="modal-body">
            <p>
              <input
                placeholder="USERNAME"
                oninput="this.className = ''"
                name="username"
              />
            </p>
            <p>
              <input
                placeholder="PASSWORD"
                oninput="this.className = ''"
                name="password"
              />
            </p>
            <button type="button" className="btn btn-default fs--12">
              SIGN IN
            </button>
            <div className="login-signup-links">
              <a
                href="/"
                className="bright-blue firstLink"
                data-toggle="modal"
                data-target="#forgotAcct"
                data-dismiss="modal"
              >
                Forgot username
              </a>
              <a
                href="#rstPassword"
                className="bright-blue"
                data-toggle="modal"
                data-target="#forgotAcct"
                data-dismiss="modal"
              >
                Forgot password
              </a>
            </div>
            <p>
              New to Newligion?{" "}
              <a
                href="/"
                className="bright-blue"
                data-toggle="modal"
                data-target="#signUp1st"
                data-dismiss="modal"
              >
                Sign Up
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* reset Password */}
    <div
      className="modal fade Acct"
      id="rstPassword"
      tabIndex={-1}
      data-focus-on="input:first"
    >
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <a href="/" className="logo">
              <img alt="alt" src="img/logo.png" />
            </a>
          </div>
          <div className="modal-body">
            <p className="fs--20 fw--700">Reset your password</p>
            <p>
              Don't worry! You may have forgotten your password, but we can help
              you out. Enter your username below and we'll email you a link to
              reset your password.
            </p>
            <p>
              <input
                placeholder="USERNAME"
                oninput="this.className = ''"
                name="username"
              />
            </p>
            <p>
              <input
                placeholder="PASSWORD"
                oninput="this.className = ''"
                name="password"
              />
            </p>
            <button type="button" className="btn btn-default fs--12">
              EMAIL ME
            </button>
            <a href="/" className="bright-blue fw--700 frgtUsrname">
              FORGOT USERNAME
            </a>
            <p>
              If you are having trouble accessing your account, follow{" "}
              <a href="/" className="bright-blue">
                this link
              </a>
              .
            </p>
            <div className="login-signup-links">
              <a
                href="/"
                className="bright-blue fw--700 firstLink"
                data-toggle="modal"
                data-target="#loginAcct"
                data-dismiss="modal"
              >
                LOG IN
              </a>
              <a
                href="/"
                className="bright-blue fw--700"
                data-toggle="modal"
                data-target="#signUp1st"
                data-dismiss="modal"
              >
                SIGN UP
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* sign up */}
    <div
      className="modal fade Acct signup"
      id="signUp1st"
      tabIndex={-1}
      data-focus-on="input:first"
    >
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal">
            ×
          </button>
          <div className="signup-header">
            <a href="/" className="logo">
              <img alt="alt" src="img/logo.png" />
            </a>
          </div>
          <div className="signup-body">
            <div className="form">
              <p>
                <input
                  placeholder="EMAIL"
                  oninput="this.className = ''"
                  name="email"
                />
              </p>
              <a
                href="/"
                className="bright-blue fw--700 btn btn-default fs--12"
                data-toggle="modal"
                data-target="#signUp2nd"
                data-dismiss="modal"
              >
                NEXT
              </a>
              <p>
                Already a Newligion?{" "}
                <a
                  href="#loginAcct"
                  className="fw--700"
                  data-toggle="modal"
                  data-target="#loginAcct"
                  data-dismiss="modal"
                >
                  LOG IN
                </a>
              </p>
              <p>
                By continuing, you agree to our <a href="/">User Agreement</a> and{" "}
                <a href="/">Privacy Policy</a>
              </p>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
    </div>
    <div
      className="modal fade Acct signup"
      id="signUp2nd"
      tabIndex={-1}
      data-focus-on="input:first"
    >
      <div className="modal-dialog">
        {/* Modal content*/}
        <div className="modal-content">
          <div className="modal-header">
            <a href="/" className="logo">
              <img alt="alt" src="img/logo.png" />
            </a>
          </div>
          <div className="modal-body">
            <p>
              <input
                placeholder="CHOOSE A USERNAME"
                oninput="this.className = ''"
                name="email"
              />
            </p>
            <p>
              <input
                placeholder="PASSWORD"
                oninput="this.className = ''"
                name="phone"
              />
            </p>
            <img alt="alt" src="img/captcha.jpg" />
          </div>
          <div className="modal-footer">
            <a
              href="/"
              className="bright-blue backLink"
              data-toggle="modal"
              data-target="#signUp1st"
              data-dismiss="modal"
            >
              Back
            </a>
            <a
              href="/"
              className="bright-blue fw--700 btn btn-default fs--12 signupLink"
            >
              SIGN UP
            </a>
            <div className="clearfix" />
          </div>
        </div>
      </div>
    </div>
    {/* sart of footer */}
    <footer>
      {/* start of upper footer */}
      <div className="no-gutters upperFooter">
        <div className="container no-padding-lr">
          <div className="row">
            <div className="col-lg-6 col-md-12 footerLeft">
              <ul className="list-unstyled footerNavigation">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="personal_profile.html">Profile</a>
                </li>
                <li>
                  <a href="/">Directory</a>
                </li>
                <li>
                  <a href="/">Create</a>
                </li>
                <li>
                  <a
                    href="/"
                    data-toggle="modal"
                    data-target="#signUp1st"
                    data-dismiss="modal"
                  >
                    Join / Signin
                  </a>
                </li>
                <li>
                  <a href="/">Message</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 text-right footerRight">
              <ul className="list-unstyled">
                <li>Newligion © 2019</li>
                <li>
                  <a href="/">· Terms </a>
                </li>
                <li>
                  <a href="/">&nbsp;· Privacy </a>
                </li>
                <li>
                  <a href="/">&nbsp;· Program Policies</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end of upper footer */}
      {/* start of lower footer */}
      <div className="no-gutters lowerFooter">
        <div className="container no-padding-lr">
          <div className="row">
            <div className="col-lg-6 col-md-12 footerlogoWrapper">
              <a href="/">
                <img alt="alt" src="img/f-logo.png" />
              </a>
            </div>
            <div className="col-lg-6 col-md-12 text-right socialNavigation">
              <ul className="list-unstyled">
                <li>
                  <a href="/">
                    <img alt="alt" className="iconasset" src="img/icons/youtube_96px.png" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/instagram_96px.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/pinterest_96px.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/twitter_squared_96px.png"
                    />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <img alt="alt"
                      className="iconasset"
                      src="img/icons/facebook_f_96px.png"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end of lower footer */}
    </footer>
    {/* end of footer */}
  </>

  );
};

export default Page;
