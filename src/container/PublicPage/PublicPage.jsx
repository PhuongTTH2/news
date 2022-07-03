import React from 'react';
// import { Button,Modal} from 'react-bootstrap'
import Footer from '../../components/Footer'
const PublicPage = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
      <div id="main">
          {/* start of header */}
          <div className="no-gutters">
              <header>
                  <div className="container no-padding-lr">
                      <div className="holder">
                          <div className="logoHolder width154">
                              <a href="/" className="logo">
                                   <img alt="alt" src="img/logo.png"/>
                              </a>
                              <a href="/" className="showOnMobile text-white fs--20">
                               N<span className="colorYellow2">L</span>
                              </a>
                          </div>
                          <div className="width145 hideOnMobile">
                              <ul className="menuIcon ">
                                  <li>
                                      <a href="/">
                                           <img alt="alt" 
                                              className="iconasset mt--5"
                                              src="img/icons/folder_96px.png"
                                              
                                          />
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                           <img alt="alt"
                                              className="iconasset mt--5"
                                              src="img/icons/create_96px.png"
                                          />
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                           <img alt="alt"
                                              className="iconasset mt--5"
                                              src="img/icons/speech_96px.png"
                                          />
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          <div className="width145 showOnMobile">
                              <ul className="menuIcon">
                                  {/* show on mobile */}
                                  <li>
                                      <a href="/">
                                           <img alt="alt" className="mt--5" src="img/line-folder.png"/>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                           <img alt="alt" className="mt--5" src="img/line-pencil.png"/>
                                      </a>
                                  </li>
                                  <li>
                                      <a href="/">
                                           <img alt="alt" className="mt--5" src="img/line-chat.png"/>
                                      </a>
                                  </li>
                                  {/* end of show on mobile */}
                              </ul>
                          </div>
                          <div className="width310">
                              <div className="row no-gutters">
                                  <div className="input-container searchWrapper">
                                      <input
                                          className="input-field"
                                          type="text"
                                          placeholder="Search"
                                      />
                                      <button className="submitBtn" type="submit">
                                           <img alt="alt"
                                              className="iconasset"
                                              src="img/icons/search_reverse_96px.png"
                                          />
                                      </button>
                                  </div>
                                  <ul className="suggested-links">
                                      <li>
                                          <a href="">NRM Directory</a>
                                      </li>
                                      <li>
                                          <a href="">About Newligion</a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="width147">
                              <div className="float-right userWrapper">
                                  <p className="user">
                                      <span className="backgroundLightGreen text-white">RM</span>{" "}
                                      <a href="/">
                                          Rex Mulholland <i className="fas fa-caret-down"/>
                                      </a>
                                  </p>
                              </div>
                          </div>
                          <div className="width271_right">
                              <div className="qouteWrapper">
                                  <p className="mb--5 fw--300">
                                      Quote of the Day{" "}
                                      <a
                                          href="/"
                                          className="fs--10 fw--500 float-right submitQuote text-white"
                                      >
                                          Submit Quote
                                      </a>
                                  </p>
                                  <p className="mb--5 fw--500 colorGray">
                                      "Those who do not create, will eventually destroy."
                                  </p>
                                  <a href="/" className="no-text-decoration fw--600 float-right">
                                      <span className="colorLightBlue">Jordan H</span>{" "}
                                      <span className="fw--300"> of Jordanism</span>
                                  </a>
                                  <div className="clearfix"/>
                              </div>
                          </div>
                          {/* mobile menu icon */}
                          <div className="mobeMenuIconWrapper width128">
                              <a id="rside-btn" href="/">
                                   <img alt="alt" src="img/mmemu_icon.png"/>
                              </a>
                          </div>
                          {/* end of mobile menu icon */}
                          <div className="clearfix"/>
                      </div>
                  </div>
                  <div className="clearfix"/>
              </header>
          </div>
          {/* end of header */}
          {/*- mobile search bar */}
          <div className="showOnMobile mobileSearchBar">
              <div className="container no-padding-lr">
                  <div className="input-container searchWrapper">
                      <input className="input-field" type="text" placeholder="Search"/>
                      <button className="submitBtn" type="submit">
                           <img alt="alt" className="iconasset" src="img/icons/search_reverse_96px.png"/>
                      </button>
                  </div>
                  <div className="width15">
                      <a id="lside-btn" href="/">
                           <img alt="alt" src="img/mmemu_dark_icon.png"/>
                      </a>
                  </div>
                  <div className="clearfix"/>
              </div>
          </div>
          {/* end of mobile search bar */}
          {/* start of content */}
          <div className="content">
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
                          <div className="card featuredNRM">
                              <div className="card-header">Today's Featured NRM</div>
                              <div className="card-body">
                                  <div className="author">
                                       <img alt="alt" className="avatarIcon" src="img/avatar/jordanism.png"/>
                                      <p>
                                          <a href="/" className="bright-blue">
                                              Jordanism
                                          </a>
                                          <br/>{" "}
                                          <span className="fs--12">
                    Find the real you.
                    <br/> <span className="pr--5">3,567 Affiliates</span> 5
                    months old
                  </span>
                                      </p>
                                      <div className="clearfix"/>
                                  </div>
                                  <p className="fs--12">
                                      Jordanism subscribes to the idea that people through life hidden
                                      from their true selves and that life is a consistent struggle to
                                      realize one's true and enduring nature...
                                  </p>
                              </div>
                          </div>
                          {/* end of card */}
                          {/* start of card */}
                          <div className="card mt--5 ujoined">
                              <div className="card-header">You Joined</div>
                              <div className="card-body">
                                  {/* start of group */}
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt" className="avatarIcon" src="img/avatar/sophists.png"/>
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  The Sophists Union{" "}
                                              </a>
                                              <br/>
                                              <span className="fs--11">God is you</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">3</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt" className="avatarIcon" src="img/avatar/passbarn.png"/>
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Passbarn Study Union{" "}
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life is precious</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">17</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/passbarn_study.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Passbarn Study Union
                                              </a>
                                              <br/>
                                              <span className="fs--11">We improve you</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">7</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/sophistry_collective.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Sophistry Collective
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life is precious</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">5</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                              </div>
                          </div>
                          {/* end of card */}
                          {/* start of card */}
                          <div className="card mt--5 ujoined">
                              <div className="card-header">You're Touring</div>
                              <div className="card-body">
                                  {/* start of group */}
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt" className="avatarIcon" src="img/avatar/sophists.png"/>
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  The Sophists Union{" "}
                                              </a>
                                              <br/>
                                              <span className="fs--11">God is you</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">3</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt" className="avatarIcon" src="img/avatar/passbarn.png"/>
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Passbarn Study Union{" "}
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life is precious</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">17</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/passbarn_study.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Passbarn Study Union
                                              </a>
                                              <br/>
                                              <span className="fs--11">We improve you</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">7</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/sophistry_collective.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Sophistry Collective
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life is precious</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">5</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt" className="avatarIcon" src="img/avatar/sophists.png"/>
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  The Sophists Union{" "}
                                              </a>
                                              <br/>
                                              <span className="fs--11">God is you</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">3</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt" className="avatarIcon" src="img/avatar/passbarn.png"/>
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Passbarn Study Union{" "}
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life is precious</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">17</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/passbarn_study.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Passbarn Study Union
                                              </a>
                                              <br/>
                                              <span className="fs--11">We improve you</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">7</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                                  {/* start of group */}
                                  <div className="author mt--5">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/sophistry_collective.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Sophistry Collective
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life is precious</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <span className="counter fs--12">5</span>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of group */}
                              </div>
                          </div>
                          {/* end of card */}
                          {/* start of card */}
                          <div className="card mt--5 impt-weight">
                              <div className="card-header">Importance Weights</div>
                              <div className="card-body">
                                  <p className="fs--11">
                                      Overall, how important are each of the following aspects of the
                                      religion(s) you affiliate with?
                                      <br/>
                                      <span className="colorLightBlue font-italic">
                  (1 = not important at all, 10 = very important)
                </span>
                                  </p>
                              </div>
                              {/* start of rate bar */}
                              <div className="rateBarWrapper bg--lightBlue">
                                  <h3 className="title">Religious Philosophy</h3>
                                  <p className="fs--11">
                                      What the religion believes and how it views the world
                                  </p>
                                  <div className="rateBar">
                                      <div className="progHolder">
                                          <div className="div240 float-left">
                                              <div className="progress">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: 120}}
                                                  ></div>
                                                  <div className="slider-val">
                                                      <span>5</span>
                                                  </div>
                                              </div>
                                              <div className="lbl">
                                                  <span className="left">1</span>
                                                  <span className="cnter">5</span>
                                                  <span className="right">10</span>
                                              </div>
                                          </div>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                              </div>
                              {/* end of rate bar */}
                              {/* start of rate bar */}
                              <div className="rateBarWrapper1">
                                  <h3 className="title">Religious Practice</h3>
                                  <p className="fs--11">
                                      How the religion is actually physically and mentally practiced
                                  </p>
                                  <div className="rateBar">
                                      <div className="progHolder">
                                          <div className="div240 float-left">
                                              <div className="progress">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: 192}}
                                                  ></div>
                                              </div>
                                              <div className="slider-val">
                                                  <span>8</span>
                                              </div>
                                              <div className="lbl">
                                                  <span className="left">1</span>
                                                  <span className="cnter">5</span>
                                                  <span className="right">10</span>
                                              </div>
                                          </div>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                              </div>
                              {/* end of rate bar */}
                              {/* start of rate bar */}
                              <div className="rateBarWrapper bg--lightBlue">
                                  <h3 className="title">Personal Orientation</h3>
                                  <p className="fs--11">
                                      Benefits the religion provides to its members
                                  </p>
                                  <div className="rateBar">
                                      <div className="progHolder">
                                          <div className="div240 float-left">
                                              <div className="progress">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: 120}}
                                                  ></div>
                                              </div>
                                              <div className="slider-val">
                                                  <span>5</span>
                                              </div>
                                              <div className="lbl">
                                                  <span className="left">1</span>
                                                  <span className="cnter">5</span>
                                                  <span className="right">10</span>
                                              </div>
                                          </div>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                              </div>
                              {/* end of rate bar */}
                              {/* start of rate bar */}
                              <div className="rateBarWrapper1">
                                  <h3 className="title">Conduct</h3>
                                  <p className="fs--11">
                                      How to behave and defining what is right vs. wrong
                                  </p>
                                  <div className="rateBar">
                                      <div className="progHolder">
                                          <div className="div240 float-left">
                                              <div className="progress">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: 120}}
                                                  ></div>
                                              </div>
                                              <div className="slider-val">
                                                  <span>5</span>
                                              </div>
                                              <div className="lbl">
                                                  <span className="left">1</span>
                                                  <span className="cnter">5</span>
                                                  <span className="right">10</span>
                                              </div>
                                          </div>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                              </div>
                              {/* end of rate bar */}
                              <div className="rateBarWrapper bg--lightBlue">
                                  <h3 className="title">Relationship to Society</h3>
                                  <p className="fs--11">How the religion relates to society</p>
                                  <div className="rateBar">
                                      <div className="progHolder">
                                          <div className="div240 float-left">
                                              <div className="progress">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: 216}}
                                                  ></div>
                                              </div>
                                              <div className="slider-val">
                                                  <span>9</span>
                                              </div>
                                              <div className="lbl">
                                                  <span className="left">1</span>
                                                  <span className="cnter">5</span>
                                                  <span className="right">10</span>
                                              </div>
                                          </div>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                              </div>
                              {/* end of rate bar */}
                              {/* start of rate bar */}
                              <div className="rateBarWrapper1">
                                  <h3 className="title">Organizational Orientation</h3>
                                  <p className="fs--11">
                                      The religion’s membership composition and how members and
                                      leaders relate to each other
                                  </p>
                                  <div className="rateBar">
                                      <div className="progHolder">
                                          <div className="div240 float-left">
                                              <div className="progress">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: 120}}
                                                  ></div>
                                              </div>
                                              <div className="slider-val">
                                                  <span>5</span>
                                              </div>
                                              <div className="lbl">
                                                  <span className="left">1</span>
                                                  <span className="cnter">5</span>
                                                  <span className="right">10</span>
                                              </div>
                                          </div>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                              </div>
                              {/* end of rate bar */}
                          </div>
                          {/* end of card */}
                          <div className="clearfix"/>
                      </div>
                      {" "}
                      {/* .sibar-inner-wrapper */}
                  </div>
                  {/* end of left side rail */}
                  {/* start of feeds */}
                  <div className="div503">
                      {/* start of feeds */}
                      <div className="feedsWrapper">
                          <div className="feedsContent">
                              <div className="recentNRMsearch">
                                  <p className="colorDarkRed">
                                      Recently Searched NRMs:{" "}
                                      <a className="colorDarkRed" href="/">
                                          Redondulus
                                      </a>
                                      ,{" "}
                                      <a className="colorDarkRed" href="/">
                                          Jordanism
                                      </a>
                                      ,{" "}
                                      <a className="colorDarkRed" href="/">
                                          Keyman Faith
                                      </a>
                                  </p>
                              </div>
                              <div className="author">
                                   <img alt="alt" className="avatarIcon" src="img/avatar/jordanism.png"/>
                                  <p>
                                      <a href="/">The Sophists Union</a> -{" "}
                                      <span className="fw--300">God Is You!</span>
                                  </p>
                                  <div className="clearfix"/>
                              </div>
                              <div className="lineSeparator"/>
                              <div className="feedsPost">
                                  <div className="textTitle">
                                      <p>
                                          <a href="/">Tom Jones</a>{" "}
                                          <span className="fw--300">
                    (12/15): Here is my weekly video sermon. <br/>
                    This week's topic is "Human Frailty".
                  </span>
                                      </p>
                                  </div>
                                  <div className="timeStamp">
                                      <span className="fs--12 opacity--50">4 mins ago</span>
                                  </div>
                                  <div className="clearfix"/>
                                  <div className="videoWrapper">
                                      <a href="/">
                                           <img alt="alt" src="img/videosample.jpg"/>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="shareReportComment">
                              <div className="sharable">
                                  <ul className="list-unstyled">
                                      <li>
                                          <a
                                              href="/"
                                              className="no-text-decoration text--black"
                                              title="comment"
                                          >
                                               <img alt="alt"
                                                  className="iconasset opacity--50"
                                                  src="img/icons/comments_96px.png"
                                              />{" "}
                                              <span className="hideOn320"> 13 comments</span>
                                          </a>
                                      </li>
                                      <li>
                                          <a
                                              href="/"
                                              className="no-text-decoration text--black"
                                              title="share"
                                          >
                                               <img alt="alt"
                                                  className="iconasset opacity--50"
                                                  src="img/icons/share_96px.png"
                                              />{" "}
                                              <span className="hideOn320">Share</span>
                                          </a>
                                      </li>
                                      <li>
                                          <a
                                              href="/"
                                              className="no-text-decoration text--black"
                                              title="report"
                                          >
                                               <img alt="alt"
                                                  className="iconasset opacity--50"
                                                  src="img/icons/flagpole_96px.png"
                                              />{" "}
                                              <span className="hideOn320">Report</span>
                                          </a>
                                      </li>
                                  </ul>
                                  <div className="clearfix"/>
                              </div>
                          </div>
                      </div>
                      {/* end of feed */}
                      {/* start of feed */}
                      <div className="feedsWrapper mt--5">
                          <div className="feedsContent pb--20">
                              <div className="author">
                                   <img alt="alt" className="avatarIcon" src="img/avatar/passbarn.png"/>
                                  <p>
                                      <a href="/">Passbarn Study Union</a> -{" "}
                                      <span className="fw--300">Life is precious - </span>
                                      <span className="colorLightGreen">Poll</span>
                                  </p>
                                  <div className="clearfix"/>
                              </div>
                              <div className="lineSeparator"/>
                              <div className="feedsPost">
                                  <div className="textTitle">
                                      <p>
                  <span className="fw--300">
                    Should we change our stance of divinity?
                  </span>
                                      </p>
                                  </div>
                                  <div className="timeStamp">
                                      <span className="fs--12 opacity--50">9 mins ago</span>
                                  </div>
                                  <div className="clearfix"/>
                                  {/* start of poll */}
                                  <div className="pollContentWrapper">
                                      <form>
                                          {/* select poll */}
                                          <div className="progHolder">
                                              <div className="div25 float-left">
                                                  <input
                                                      className="mt--8"
                                                      type="radio"
                                                      name="pollDivinity"
                                                  />
                                              </div>
                                              <div className="div335 float-left">
                                                  <div className="progress pollBarBlue">
                                                      <div
                                                          className="progress-bar "
                                                          style={{width: 223}}
                                                      ></div>
                                                      <span className="colorDarkBlue">
                          Libero enim sed faucibus turpis.
                        </span>
                                                  </div>
                                              </div>
                                              <div className="div53 float-right text-right">
                                                  <p className="colorLightGreen fs--11 mb--0 mt--5">
                                                      18 votes
                                                  </p>
                                              </div>
                                              <div className="clearfix"/>
                                          </div>
                                          {/* end of select poll */}
                                          {/* select poll */}
                                          <div className="progHolder mt--8">
                                              <div className="div25 float-left">
                                                  <input
                                                      className="mt--8"
                                                      type="radio"
                                                      name="pollDivinity"
                                                  />
                                              </div>
                                              <div className="div335 float-left">
                                                  <div className="progress pollBarBlue">
                                                      <div
                                                          className="progress-bar "
                                                          style={{width: 109}}
                                                      ></div>
                                                      <span className="colorDarkBlue">
                          In hac habitasse platea dictumst vestibulum.
                        </span>
                                                  </div>
                                              </div>
                                              <div className="div53 float-right text-right">
                                                  <p className="colorLightGreen fs--11 mb--0 mt--5">
                                                      7 votes
                                                  </p>
                                              </div>
                                              <div className="clearfix"/>
                                          </div>
                                          {/* end of select poll */}
                                          <div className="progHolder mt--8">
                                              <div className="div25 float-left">
                                                  <input
                                                      className="mt--8"
                                                      type="radio"
                                                      name="pollDivinity"
                                                  />
                                              </div>
                                              <div className="div335 float-left">
                                                  <div className="progress pollBarBlue">
                                                      <div
                                                          className="progress-bar "
                                                          style={{width: 0}}
                                                      ></div>
                                                      <span className="colorDarkBlue">
                          Tempus egestas sed sed risus pretium
                        </span>
                                                  </div>
                                              </div>
                                              <div className="div53 float-right text-right">
                                                  <p className="colorLightGreen fs--11 mb--0 mt--5">
                                                      0 votes
                                                  </p>
                                              </div>
                                              <div className="clearfix"/>
                                          </div>
                                          {/* end of select poll */}
                                          {/* end of select poll */}
                                          <div className="progHolder mt--8">
                                              <div className="div25 float-left">
                                                  <input
                                                      className="mt--8"
                                                      type="radio"
                                                      name="pollDivinity"
                                                  />
                                              </div>
                                              <div className="div335 float-left">
                                                  <div className="progress pollBarBlue">
                                                      <div
                                                          className="progress-bar "
                                                          style={{width: 34}}
                                                      ></div>
                                                      <span className="colorDarkBlue">
                          In hac habitasse platea dictumst vestibulum.
                        </span>
                                                  </div>
                                              </div>
                                              <div className="div53 float-right text-right">
                                                  <p className="colorLightGreen fs--11 mb--0 mt--5">
                                                      1 votes
                                                  </p>
                                              </div>
                                              <div className="clearfix"/>
                                          </div>
                                          {/* end of select poll */}
                                      </form>
                                  </div>
                                  {/* end of poll */}
                              </div>
                          </div>
                          {/* start of share comments and nestest */}
                          <div className="shareReportComment">
                              <div className="sharable">
                                  <ul className="list-unstyled">
                                      <li>
                                          <a
                                              href="/"
                                              className="no-text-decoration colorDarkBlue"
                                              title="comment"
                                          >
                                               <img alt="alt"
                                                  className="iconasset opacity--50"
                                                  src="img/icons/comments_96px.png"
                                              />{" "}
                                              <span className="hideOn320"> 3 comments</span>
                                          </a>
                                      </li>
                                      <li>
                                          <a
                                              href="/"
                                              className="no-text-decoration text--black"
                                              title="share"
                                          >
                                               <img alt="alt"
                                                  className="iconasset opacity--50"
                                                  src="img/icons/share_96px.png"
                                              />{" "}
                                              <span className="hideOn320">Share</span>
                                          </a>
                                      </li>
                                      <li>
                                          <a
                                              href="/"
                                              className="no-text-decoration text--black"
                                              title="report"
                                          >
                                               <img alt="alt"
                                                  className="iconasset opacity--50"
                                                  src="img/icons/flagpole_96px.png"
                                              />{" "}
                                              <span className="hideOn320">Report</span>
                                          </a>
                                      </li>
                                  </ul>
                                  <div className="clearfix"/>
                              </div>
                              {/* start of nested comments */}
                              <div className="nestedComments">
                                  {/* start of comment */}
                                  <div className="author">
                                      <div className="imageAvatar">
                                          <a href="/">
                                              <span className="profileImage">JS</span>
                                          </a>
                                      </div>
                                      <p>
                                          <a href="/">Jenna Smith</a>{" "}
                                          <span className="fw--300">
                    Aliquet bibendum enim facilisis gravida neque. Quis varius
                    quam quisque id diam.
                  </span>
                                      </p>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="clearfix"/>
                                  {/* end of comment */}
                                  {/* start of comment reply */}
                                  <div className="commentReplayWrapper">
                                      <div className="author">
                                          <div className="imageAvatar">
                                              <a href="/">
                                                  <span className="profileImage blue">TJ</span>
                                              </a>
                                          </div>
                                          <p>
                                              <a href="/">Tom Jones</a>{" "}
                                              <span className="fw--300">
                      {" "}
                                                  Erat velit scelerisque in dictum non consectetur.
                    </span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                                  {/* end of comment reply */}
                                  {/* start of comment reply */}
                                  <div className="commentReplayWrapper">
                                      <div className="author">
                                          <div className="imageAvatar">
                                              <a href="/">
                                                  <span className="profileImage orange">Mg</span>
                                              </a>
                                          </div>
                                          <p>
                                              <a href="/">Melissa Gertrude</a> Porttitor eget dolor morbi
                                              non.
                                              <span className="fw--300"/>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                  </div>
                                  {/* end of comment reply */}
                                  <div className="commentReplayWrapper">
                                      <div className="author">
                                          <div className="input-container replyWrapper">
                                              <div className="imageAvatar">
                                                  <a href="/">
                                                      <span className="profileImage orange">Mg</span>
                                                  </a>
                                              </div>
                                              <input
                                                  className="input-field mt--5"
                                                  type="text"
                                                  placeholder="Reply to Melissa Gertrude"
                                              />
                                              <button className="submitBtn" type="submit">
                                                   <img alt="alt"
                                                      className="iconasset"
                                                      src="img/icons/telegram_app_96px.png"
                                                  />
                                              </button>
                                          </div>
                                      </div>
                                  </div>
                                  {/* end of comment reply */}
                              </div>
                              {/* end of nested comments */}
                          </div>
                          {/* end of share comments */}
                          {/* start of event */}
                          <div className="eventWrapper mt--5">
                              {/* start event content */}
                              <div className="feedsContent pb--20">
                                  <div className="author">
                                       <img alt="alt"
                                          className="avatarIcon"
                                          src="img/avatar/passbarn_study.png"
                                      />
                                      <p>
                                          <a href="/">Staprinclock Church</a> -{" "}
                                          <span className="fw--300">We improve you - </span>
                                          <span className="colorLightGreen">Event</span>
                                      </p>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="lineSeparator"/>
                                  <div className="feedsPost">
                                      <div className="textTitle">
                                          <p>
                                              <a href="/">Hoshi Union Fall Picnic</a>{" "}
                                              <span className="fw--300">
                      Come picnic with us under the trees. <br/>
                      Enjoy a ribs and chicken bbq.
                    </span>
                                          </p>
                                      </div>
                                      <div className="timeStamp">
                                          <span className="fs--12 opacity--50">10 mins ago</span>
                                      </div>
                                      <div className="clearfix"/>
                                      <div className="eventDetails">
                                          <span className="fw--300">Event Date: </span>
                                          <a href="/">
                    <span className="colorLightGreen">
                      May 19, 2019 Saturday • 2pm
                    </span>
                                          </a>
                                          <div className="responseButtons">
                                              <a className="btn btn-round bg--defaultBlue text-white">
                                                  RSPV
                                              </a>
                                              <a className="btn btn-round bgLightGray colorGray">Maybe</a>
                                              <a className="btn btn-round bgLightGray colorGray">
                                                  Can't go
                                              </a>
                                              <a className="btn btn-round bgLightGray colorGray float-right">
                                                  Invite
                                              </a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              {/* end event content */}
                              {/* start share report */}
                              <div className="shareReportComment">
                                  <div className="sharable">
                                      <ul className="list-unstyled">
                                          <li>
                                              <a
                                                  href="/"
                                                  className="no-text-decoration text--black"
                                                  title="comment"
                                              >
                                                   <img alt="alt"
                                                      className="iconasset opacity--50"
                                                      src="img/icons/comments_96px.png"
                                                  />{" "}
                                                  <span className="hideOn320"> 13 comments</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="/"
                                                  className="no-text-decoration text--black"
                                                  title="share"
                                              >
                                                   <img alt="alt"
                                                      className="iconasset opacity--50"
                                                      src="img/icons/share_96px.png"
                                                  />{" "}
                                                  <span className="hideOn320">Share</span>
                                              </a>
                                          </li>
                                          <li>
                                              <a
                                                  href="/"
                                                  className="no-text-decoration text--black"
                                                  title="report"
                                              >
                                                   <img alt="alt"
                                                      className="iconasset opacity--50"
                                                      src="img/icons/flagpole_96px.png"
                                                  />{" "}
                                                  <span className="hideOn320">Report</span>
                                              </a>
                                          </li>
                                      </ul>
                                      <div className="clearfix"/>
                                  </div>
                              </div>
                              {/* end of share report */}
                          </div>
                          {/* end of event */}
                      </div>
                  </div>
                  {/* end of feeds */}
                  {/* start of right rails */}
                  <div id="sidebarright" className="div306 rightSideBar">
                      <div className="sidebar-x">
                          <a id="rside-btn-x" href="/">
                              x
                          </a>
                      </div>
                      <div className="sibar-inner-wrapper">
                          {/* start of card */}
                          <div className="card no-bottom-border">
                              <div className="card-header">Best NRM Matches</div>
                              <div className="card-body">
                                  <p className="fs--12">NRMs trending on our site today:</p>
                                  {/* start of progress bars */}
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/the_benabar.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  The Benabar
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life Is A Treasure!</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress redBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "87%"}}
                                                  ></div>
                                                  <span className="outside">87%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">4</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/croze_church.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Croze Church
                                              </a>
                                              <br/>
                                              <span className="fs--11">Discover Yourself</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress moderateRedBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "70%"}}
                                                  ></div>
                                                  <span className="outside">70%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">16</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/hoshi_union.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Hoshi Union
                                              </a>
                                              <br/>
                                              <span className="fs--11">Achievement Matters</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress orangeBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "53%"}}
                                                  ></div>
                                                  <span className="outside">53%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">7</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/caravane_church.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Caravane Church
                                              </a>
                                              <br/>
                                              <span className="fs--11">Relaxation First</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress blueBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "33%"}}
                                                  ></div>
                                                  <span className="outside">33%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">5</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of progress bars */}
                                  <a
                                      href="/"
                                      className="bright-blue text-center fw--300 fs--11"
                                      style={{display: "block"}}
                                  >
                                      see more . . .
                                  </a>
                              </div>
                          </div>
                          {/* end of card */}
                          {/* start of card */}
                          <div className="card mt--5 no-bottom-border trend-nrm">
                              <div className="card-header">Trending NRMs</div>
                              <div className="card-body">
                                  <p className="fs--12">NRMs trending on our site today:</p>
                                  {/* start of progress bars */}
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/the_benabar.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Talisman Group
                                              </a>
                                              <br/>
                                              <span className="fs--11">Life Is A Treasure!</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress redBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "87%"}}
                                                  ></div>
                                                  <span className="outside">87%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">4</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/croze_church.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Picard Faith
                                              </a>
                                              <br/>
                                              <span className="fs--11">Discover Yourself</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress moderateRedBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "70%"}}
                                                  ></div>
                                                  <span className="outside">70%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">16</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/hoshi_union.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Keyman Faith
                                              </a>
                                              <br/>
                                              <span className="fs--11">Achievement Matters</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress orangeBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "53%"}}
                                                  ></div>
                                                  <span className="outside">53%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">7</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="author">
                                      <div className="leftAuthor">
                                           <img alt="alt"
                                              className="avatarIcon"
                                              src="img/avatar/caravane_church.png"
                                          />
                                          <p className="fs--12">
                                              <a href="/" className="bright-blue">
                                                  Redondulus Faith
                                              </a>
                                              <br/>
                                              <span className="fs--11">Relaxation First</span>
                                          </p>
                                          <div className="clearfix"/>
                                      </div>
                                      <div className="rightAuthor">
                                          <div className="progHolder">
                                              <div className="progress blueBar">
                                                  <div
                                                      className="progress-bar"
                                                      style={{width: "33%"}}
                                                  ></div>
                                                  <span className="outside">33%</span>
                                              </div>
                                              <p className="fs--10 mt--8 mb--0">
                                                  <a href="/">5</a>{" "}
                                                  <span className="fw--300">new members</span>
                                              </p>
                                          </div>
                                      </div>
                                      <div className="clearfix"/>
                                  </div>
                                  {/* end of progress bars */}
                                  <a
                                      href="/"
                                      className="bright-blue text-center fw--300 fs--11"
                                      style={{display: "block"}}
                                  >
                                      see more . . .
                                  </a>
                              </div>
                          </div>
                          {/* end of card */}
                          {/* start of card */}
                          <div className="card mt--5 no-bottom-border reg-desires">
                              <div className="card-header">
                                  Religious Goals &amp; Desires
                                  <br/>
                                  <span className="fw--300 fs--12">Last Update: June 1, 2020</span>
                              </div>
                              <div className="card-body">
                                  <p className="fs--11">
                                      Complete this part of the survey, move to another section or
                                      link to the full survey. The more items you complete, the better
                                      your NRM matches will be.
                                  </p>
                                  <p className="fs--12 fw--400">
                                      <a href="/" className="colorDarkBlue">
                                          Pre-Determinism vs. Self-Determinism
                                      </a>
                                  </p>
                                  <p>
                                      <span className="colorDarkBlue">I believe:</span>{" "}
                                      <a
                                          href="/"
                                          className="font-italic float-right colorGray fw--300"
                                      >
                                          (check all that apply)
                                      </a>
                                  </p>
                                  <div className="clearfix"/>
                                  {/* start of checkboxes bars */}
                                  <div className="checkboxListWrapper">
                                      <form>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  Our will controls the fate of the universe.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  God has a plan for all life, the planet and the universe.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  We control our own happiness.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  People who commit wrongdoings will be punished.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  Good things happen to good people.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  Bad things happen to bad people.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  Misery is unavoidable for all human beings.
                                              </label>
                                          </div>
                                          <div className="form-group">
                                              <label>
                                                  <input type="checkbox"/>
                                                  We have free will (the ability to think and do as one
                                                  pleases).
                                              </label>
                                          </div>
                                      </form>
                                  </div>
                                  {/* end of checkboxes bars */}
                                  <div>
                                      <a href="/" className="float-left colorDarkRed fw--400 clear">
                                          <i className="fa fa-arrow-up"/>
                                          clear all
                                      </a>
                                      <div className="clearfix"/>
                                  </div>
                                  <div className="navigationLink">
                                      <a
                                          href="/"
                                          className="float-left btn btn-round bg--defaultBlue text-white"
                                      >
                                          &lt; State of World
                                      </a>
                                      <a
                                          href="/"
                                          className="float-right btn btn-round bg--defaultBlue text-white"
                                      >
                                          Wordly Boundaries &gt;
                                      </a>
                                      <div className="clearfix"/>
                                  </div>
                                  <center>
                                      <a
                                          href="/"
                                          className="btn btn-round bg--defaultBlue text-center fw--300 text-white full-surv"
                                      >
                                          Full Survey
                                      </a>
                                  </center>
                              </div>
                          </div>
                          {/* end of card */}
                      </div>
                      {/* end of right rails */}
                      <div className="clearfix"/>
                  </div>
                  {" "}
                  {/* .sibar-inner-wrapper */}
              </div>
              {" "}
              {/* .container.no-padding-lr */}
              <div className="clearfix"/>
          </div>
          {" "}
          {/* .content */}
       
       
       
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
                               <img alt="alt" src="img/logo.png"/>
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
                                  onInput="this.className = ''"
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
                               <img alt="alt" src="img/logo.png"/>
                          </a>
                      </div>
                      <div className="modal-body">
                          <p>
                              <input
                                  placeholder="USERNAME"
                                  onInput="this.className = ''"
                                  name="username"
                              />
                          </p>
                          <p>
                              <input
                                  placeholder="PASSWORD"
                                  onInput="this.className = ''"
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
                               <img alt="alt" src="img/logo.png"/>
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
                                  onInput="this.className = ''"
                                  name="username"
                              />
                          </p>
                          <p>
                              <input
                                  placeholder="PASSWORD"
                                  onInput="this.className = ''"
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
                                  data-bs-toggle="modal"
                                  data-bs-target="#loginAcct"
                                //   data-dismiss="modal"
                              >
                                  LOG IN
                              </a>
                              <a
                                //   href="/"
                                  className="bright-blue fw--700"
                                  data-bs-toggle="modal"
                                  data-bs-target="#signUp1st"
                                //   data-dismiss="modal"
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
                               <img alt="alt" src="img/logo.png"/>
                          </a>
                      </div>
                      <div className="signup-body">
                          <div className="form">
                              <p>
                                  <input
                                      placeholder="EMAIL"
                                      onInput="this.className = ''"
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
                                  By continuing, you agree to our <a href="/user-agreement">User Agreement</a> and{" "}
                                  <a href="/privacy">Privacy Policy</a>
                              </p>
                          </div>
                      </div>
                      <div className="clearfix"/>
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
                               <img alt="alt" src="img/logo.png"/>
                          </a>
                      </div>
                      <div className="modal-body">
                          <p>
                              <input
                                  placeholder="CHOOSE A USERNAME"
                                  onInput="this.className = ''"
                                  name="email"
                              />
                          </p>
                          <p>
                              <input
                                  placeholder="PASSWORD"
                                  onInput="this.className = ''"
                                  name="phone"
                              />
                          </p>
                           <img alt="alt" src="img/captcha.jpg"/>
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
                          <div className="clearfix"/>
                      </div>
                  </div>
              </div>
          </div>
          {/* end of content */}
          {/* sart of footer */}
          <Footer/>
          {/* end of footer */}
      </div>


  );
};

export default PublicPage;
