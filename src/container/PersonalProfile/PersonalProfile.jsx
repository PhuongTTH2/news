import React from 'react';
import Footer from '../../components/Footer'
const PersonalProfile = () => {
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div id="main" className="singlePageTwoColumnLayout">
    {/* start of header */}
    <div className="no-gutters">
      <header>
        <div className="container no-padding-lr">
          <div className="holder">
            <div className="row">
              <div className="col-lg-6 col-md-2 col-sm-2 logoWrapper ">
                <div className="logoHolder width154">
                  <a href="/" className="logo">
                    <img alt="alt" src="img/logo.png" />
                  </a>
                  <a href="/" className="showOnMobile text-white fs--20">
                    N<span className="colorYellow2">L</span>
                  </a>
                </div>
              </div>
              {/* start of login */}
              <div className="col-lg-6 col-md-10 col-sm-10 loginWrapper hideOnMobile">
                <form className="form-inline">
                  <div className="form-group mr--10">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group mr--10">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-round backgroundLightOrange"
                  >
                    Login
                  </button>
                  <p className="forgotAccount">
                    <a
                      href="/"
                      data-toggle="modal"
                      data-target="#forgotAcct"
                      data-dismiss="modal"
                    >
                      Forgot Account?
                    </a>
                  </p>
                </form>
              </div>
              {/* end of login */}
              {/* mobile menu icon */}
              <div className="mobeMenuIconWrapper width128">
                <a id="rside-btn" href="/">
                  <img alt="alt" src="img/mmemu_icon.png" />
                </a>
              </div>
              {/* end of mobile menu icon */}
            </div>
            <div className="clearfix" />
          </div>
        </div>
      </header>
    </div>
    {/* end of header */}
    {/* start of content */}
    <div className="content subPages">
      <div className="container no-padding-lr">
        <div className="headerHolder">
          <h2>Create Personal Profile</h2>
        </div>
        <form className="form defaultInput">
          <div className="row mb--40">
            {/* start of left column */}
            <div className="col-md-6 createProfileLeftColumn">
              {/* start of basic info */}
              <div className="inputForm basicInfo">
                <div className="headerHolder mb--12">
                  <h4>Please tell us a little about yourself</h4>
                </div>
                <div className="row no-margin-lr">
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pr--5">
                      <input
                        type="text"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pl--5">
                      <input
                        type="text"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding-lr">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="emaiMobile"
                        placeholder="Email Address or Mobile Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pr--5">
                      <input
                        type="password"
                        className="form-control"
                        id="pass1"
                        placeholder="New Password"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pl--5">
                      <input
                        type="password"
                        className="form-control"
                        id="pass2"
                        placeholder="Retype Password"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* end of basic info */}
              {/* start of info address */}
              <div className="inputForm infoAddress">
                <div className="headerHolder mb--12">
                  <h4>Address</h4>
                </div>
                <div className="row no-margin-lr">
                  <div className="col-md-12 no-padding-lr">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="address1"
                        placeholder="Street Address"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding-lr">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Street Address Line 2"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pr--5">
                      <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pl--5">
                      <input
                        type="text"
                        className="form-control"
                        id="province"
                        placeholder="Province"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pr--5">
                      <input
                        type="password"
                        className="form-control"
                        id="postalZip"
                        placeholder="Postal / Zip Code"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 no-padding-lr">
                    <div className="form-group pl--5">
                      <select id="state" className="form-control">
                        <option value="United States" selected="">
                          United States
                        </option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of info address */}
              {/* start of birthday */}
              <div className="inputForm infoBday">
                <div className="headerHolder mb--12">
                  <h4>Birthday</h4>
                </div>
                <div className="row no-margin-lr">
                  <div className="col-md-3 no-padding-lr">
                    <div className="form-group pr--5">
                      <select id="b_month" className="form-control">
                        <option value="January" selected="">
                          January
                        </option>
                        <option value="February">February</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 no-padding-lr">
                    <div className="form-group pl--5">
                      <select id="b_day" className="form-control">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3} selected="">
                          3
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 no-padding-lr yearSelect">
                    <div className="form-group pl--10">
                      <select id="b_year" className="form-control">
                        <option value={1991}>1991</option>
                        <option value={1992}>1992</option>
                        <option value={1993}>1993</option>
                        <option value={1994}>1994</option>
                        <option value={1995} selected="">
                          1995
                        </option>
                        <option value={1996}>1996</option>
                        <option value={1997}>1997</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 no-padding-lr iconCalendar">
                    <div className="form-group pl--10">
                      <button className="btnAddon mt--10" type="submit">
                        <img alt="alt"
                          className="iconasset"
                          src="img/icons/calendar_96px.png"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of birthday */}
              {/* start of info Religious Affiliations */}
              <div className="inputForm infoAddress">
                <div className="headerHolder mb--12">
                  <h4>Religious Affiliations</h4>
                </div>
                <div className="row no-margin-lr">
                  <div className="col-md-12 no-padding-lr">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="religion"
                        placeholder="Roman Catholic"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 no-padding-lr">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="affiliate"
                        placeholder="New Affiliation"
                      />
                    </div>
                  </div>
                  <div className="col-md-1 no-padding-lr iconAdd">
                    <div className="form-group pl--10">
                      <button
                        className="btnAddon opacity--50 mt--5"
                        type="submit"
                      >
                        <img alt="alt" className="width35" src="img/icons/add_96px.png" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of info address */}
            </div>
            {/* end of left column */}
            {/* start of right column */}
            <div className="col-md-6 createProfileRighttColumn">
              {/* start of profile photo  */}
              <div className="inputForm basicInfo">
                <div className="headerHolder mb--12">
                  <h4>Upload Your Photo</h4>
                </div>
                <div className="uploadPhotoWrapper">
                  <div className="imgHolder float-left">
                    <div className="thisPhoto">
                      <img alt="alt" src="img/noPhotoImage.jpg" />
                    </div>
                  </div>
                  <p className="removePhoto float-left">
                    <a className="colorDarkRed" href="/">
                      Remove Photo
                    </a>
                  </p>
                </div>
                <div className="clearfix" />
              </div>
              {/* end of profile photo */}
              {/* start of About */}
              <div className="inputForm basicInfo">
                <div className="headerHolder mb--12">
                  <h4>About</h4>
                </div>
                <div className="row no-margin-lr">
                  <div className="col-md-12 no-padding-lr">
                    <div className="form-group about">
                      <textarea
                        className="form-control"
                        defaultValue={
                          "Tell us a little bit about yourself. Possible topics - your interests and hobbies, your life philosophy, your goals, what you do for a living, etc., your favorite foods, etc."
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* end of About */}
              {/* start of audience */}
              <div className="inputForm infoBday">
                <div className="headerHolder mb--12">
                  <h4>Audience</h4>
                </div>
                <div className="row no-margin-lr">
                  <div className="col-md-3 no-padding-lr">
                    <div className="form-group pr--5">
                      <select id="privacy" className="form-control">
                        <option value="Public" selected="">
                          Public
                        </option>
                        <option value="Private">Private</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 no-padding-lr">
                    <div className="noteContent">
                      <p className="colorGray fs--16 fw--300">
                        Note: Making your profile public means that when you join
                        NRMs, we will ask whether you'd like your profile to be
                        public within the NRM. You can make your profile public
                        for some NRMs and not for others, public for all NRMs you
                        join or entirely private.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* end of audience */}
            </div>
            {/* end of right column */}
            {/* start of full width */}
            <div className="inputForm survey">
              <div className="headerHolder mb--12">
                <h2>Faith Matcher Survey</h2>
              </div>
              <div className="surveyContent">
                <p className="fs--20 fw--300 colorGray">
                  Directions: Thank you for taking the time to complete our Faith
                  Matcher survey. Completing the survey allows us to match you
                  with the NRMs that are most consistent with your Religious Goals
                  and Desires as well as your belief system.
                </p>
                <p className="fs--20 fw--300 colorGray">
                  Please note that you do not have to complete this entire survey
                  at once. Just click "Save and Complete Later" whenever you'd
                  like and you can return to your partially completed survey at
                  any point.
                </p>
                <p className="fs--20 fw--300 colorGray">
                  You are also free to skip any questions that are not required.
                  Be sure to tell Neoligion whether you are skipping the question
                  temporarily or permanently.
                </p>
              </div>
              <div className="mb--50" />
              {/* start of survey field */}
              <div className="row no-margin-lr">
                {/* survey start */}
                <div className="col-md-6 no-padding-lr mb--50">
                  <p className="fs--16 fw--300 colorLightBlue mt--8">
                    I believe in life after death.
                  </p>
                </div>
                <div className="col-md-6 surveyAnswer">
                  <div className="form-inline">
                    <label>
                      <input
                        type="radio"
                        name="afterDeath"
                        className="form-control"
                      />
                      &nbsp; Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="afterDeath"
                        className="form-control"
                      />
                      &nbsp; No
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="afterDeath"
                        className="form-control"
                      />
                      &nbsp; I don't know
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
                {/* survey end */}
                {/* survey start */}
                <div className="col-md-6 no-padding-lr mb--50">
                  <p className="fs--16 fw--300 colorLightBlue mt--8">
                    I believe that God exists.
                  </p>
                </div>
                <div className="col-md-6 surveyAnswer">
                  <div className="form-inline">
                    <label>
                      <input
                        type="radio"
                        name="GodExist"
                        className="form-control"
                      />
                      &nbsp; Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="GodExist"
                        className="form-control"
                      />
                      &nbsp; No
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="GodExist"
                        className="form-control"
                      />
                      &nbsp; I don't know
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
                {/* survey end */}
                {/* survey start */}
                <div className="col-md-6 no-padding-lr mb--50">
                  <p className="fs--16 fw--300 colorLightBlue mt--8">
                    I believe that human beings determine the course of their
                    lives by their own decisions and behaviors.
                  </p>
                </div>
                <div className="col-md-6 surveyAnswer">
                  <div className="form-inline">
                    <label>
                      <input
                        type="radio"
                        name="ownDecisions"
                        className="form-control"
                      />
                      &nbsp; Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="ownDecisions"
                        className="form-control"
                      />
                      &nbsp; No
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="ownDecisions"
                        className="form-control"
                      />
                      &nbsp; I don't know
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
                {/* survey end */}
                {/* survey 2 start */}
                <div className="col-md-6 no-padding-lr mb--50">
                  <p className="fs--20 fw--600 colorGray mt--8">
                    How important to you are each of the following in the
                    religious / faiths you join?
                  </p>
                </div>
                <div className="col-md-6 mb--50" />
                <div className="clearfix" />
                {/* end of survey2 */}
                {/* survey start */}
                <div className="col-md-6 no-padding-lr">
                  <p className="fs--16 fw--300 colorLightBlue mt--8">
                    Social Network and Connections
                  </p>
                </div>
                <div className="col-md-6 surveyAnswer mb--50">
                  <div className="form-inline">
                    <label>
                      <input
                        type="radio"
                        name="socialNetwork"
                        className="form-control"
                      />
                      &nbsp; Not importante to me at all
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="socialNetwork"
                        className="form-control"
                      />
                      &nbsp; Somewhat importante to me
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="socialNetwork"
                        className="form-control"
                      />
                      &nbsp; Very importante to me
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="socialNetwork"
                        className="form-control"
                      />
                      &nbsp; Extremely important to me
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
                {/* survey end */}
                {/* survey start */}
                <div className="col-md-6 no-padding-lr">
                  <p className="fs--16 fw--300 colorLightBlue mt--8">
                    Having a set of rules, prescribed behaviors and moral codes
                  </p>
                </div>
                <div className="col-md-6 surveyAnswer mb--50">
                  <div className="form-inline">
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Not importante to me at all
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Somewhat importante to me
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Very importante to me
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Extremely important to me
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
                {/* survey end */}
                {/* survey start */}
                <div className="col-md-6 no-padding-lr">
                  <p className="fs--16 fw--300 colorLightBlue mt--8">
                    Makes me feel special
                  </p>
                </div>
                <div className="col-md-6 surveyAnswer">
                  <div className="form-inline">
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Not importante to me at all
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Somewhat importante to me
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Very importante to me
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="moralCodes"
                        className="form-control"
                      />
                      &nbsp; Extremely important to me
                    </label>
                  </div>
                </div>
                <div className="clearfix" />
                {/* survey end */}
              </div>
              {/* end of survey field */}
            </div>
            {/* end of full width */}
          </div>
        </form>
        {/* start of right rails */}
        <div id="sidebarright" className="div306 rightSideBar showOnMobile">
          <div className="sidebar-x">
            <a id="rside-btn-x" href="/">
              x
            </a>
          </div>
          <div className="sibar-inner-wrapper">
            {/* start of login */}
            <div className="col-lg-6 col-md-10 col-sm-10 loginWrapper">
              <form className="form-inline">
                <div className="form-group mr--10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mr--10">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div className="d-block float-right text-right f--width padding--lr10">
                  <button
                    type="submit"
                    className="btn btn-round backgroundLightOrange"
                  >
                    Login
                  </button>
                </div>
                <p className="forgotAccount padding--lr10">
                  <a href="/">Forgot Account?</a>
                </p>
                <div className="clearfix" />
              </form>
            </div>
            {/* end of login */}
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
    {/* end of content */}
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
            <a
              href="/"
              className="bright-blue fw--700 frgtUsrname"
              data-toggle="modal"
              data-target="#forgotAcct"
              data-dismiss="modal"
            >
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
    <Footer/>
    {/* end of footer */}
  </div>
  
  );
};

export default PersonalProfile;
