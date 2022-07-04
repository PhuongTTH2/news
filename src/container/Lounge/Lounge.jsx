import React, { useEffect } from 'react';
import Footer from '../../components/Footer'
import axiosClient from "api/rest/axiosClient";
import { useNavigate } from 'react-router'
import { pathName } from 'constants/index'
import { map } from 'lodash';
const Lounge = () => {
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  const navigate = useNavigate();
  const getUser = async (params) => {
    const newParams = { ...params }
    const response = await axiosClient.get('/api/users?page=1', {
        params: { ...newParams },
    });
    return response
  }

  useEffect(async () =>{

    const response = await axiosClient.get('/api/users?page=1');

      console.log(response)
  },[])

  const newMember = [
    {
      name : "Jenna Smith",
      img: "img/avatar/sophists.png",
      message:"Hi. I'm looking forward to connecting with some of you.",
      origin: "(Dallas, TX)"
    },
    {
      name : "Tom Jones",
      img: "img/avatar/passbarn.png",
      message:"You all seem weird but I like it!",
      origin: "(Berkeley, CA)"
    },
    {
      name : "Phyllis Applebee",
      img: "img/avatar/passbarn_study.png",
      message:"Hey y'all!",
      origin: "(Dallas, TX)"
    },
    {
      name : "Jianna Jameson",
      img: "img/avatar/sophistry_collective.png",
      message:"I'm not very religious. Hope that's ok.",
      origin: "(Dallas, TX)"
    }
  ]
  const messages = [
    {
      name : "Jonbob ",
      message:"Hey Jordan! ",
    },
    {
      name : "JennyV ",
      message:"Coffee sometime?  ",
    },
    {
      name : "TinaFab",
      message:"Like your bio ",
    },
    {
      name : "Jacko",
      message:"Hey Jordan! ",
    },
    {
      name : "Jonbob",
      message:"Hey Jordan! ",
    },
    {
      name : "Richard",
      message:"Coffee sometime? ",
    },
    {
      name : "DannyDanko",
      message:"Like your bio",
    },
    {
      name : "Barbie",
      message:"Hey Jordan!",
    },
    {
      name : "KennyJ",
      message:"Coffee sometime?",
    },
    {
      name : "ZackB",
      message:"Like your bio",
    },
    {
      name : "Tiegaya",
      message:" Coffee sometime?",
    },
    {
      name : "Juanne",
      message:"Like your bio",
    },
    {
      name : "JennaS",
      message:"Hey Jordan! ",
    },
    {
      name : "PhyllisA",
      message:"Coffee sometime?",
    },
    {
      name : "TomJ",
      message:"Like your bio",
    },
  ]

  const handleLogout = async (e) => {
    localStorage.removeItem("accessToken")
    navigate(pathName.HOME)
    window.location.reload()
   }

  return (
	<div id="main">
  {/* start of header */}
  <div className="no-gutters">
    <header>
      <div className="container no-padding-lr">
        <div className="holder">
          <div className="logoHolder width154">
            <a href="/" className="logo">
              <img alt="alt" src={"img/logo.png"} />

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
                  <img alt="alt" className="mt--5" src="img/line-folder.png" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img alt="alt" className="mt--5" src="img/line-pencil.png" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img alt="alt" className="mt--5" src="img/line-chat.png" />
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
                  <a href="/">NRM Directory</a>
                </li>
                <li>
                  <a href="/">About Newligion</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="width147">
            <div className="float-right userWrapper">
              <p className="user">
                <span className="backgroundLightGreen text-white">RM</span>{" "}
                <a href="/">
                  Rex Mulholland <i className="fas fa-caret-down" />
                </a>
                <button type="button" onClick= {() => handleLogout()} className="btn btn-default fs--12">
                 LOG OUT
              </button>
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
              <p className="mb--5 fw--600 colorGray">
                "Those who do not create, will eventually destroy."
              </p>
              <a href="/" className="no-text-decoration fw--600 float-right">
                <span className="colorLightBlue">Jordan H</span>{" "}
                <span className="fw--300"> of Jordanism</span>
              </a>
              <div className="clearfix" />
            </div>
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
          <img alt="alt" className="iconasset" src="img/icons/search_reverse_96px.png" />
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
          <div className="card quick-facts">
            <div className="card-header">Quick Facts</div>
            <div className="card-body">
              <div className="top">
                <div className="image">
                  <img alt="alt" className="avatarIcon" src="img/avatar/jordanism.png" />
                </div>
                <div className="content">
                  <p className="fs--12">
                    <a href="/">
                      <strong>Hoshi Union</strong>
                    </a>
                  </p>
                  <p className="fs--12">
                    <span className="blue">Your Status:</span> Level Member
                  </p>
                  <p className="fs--12" style={{ display: "inline-block" }}>
                    <span className="blue">Your Match:</span>{" "}
                  </p>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: "46%" }} />
                  </div>{" "}
                  46%
                  <p />
                </div>
                <div className="clearfix" />
              </div>
              <p className="fs--12">
                <span className="blue">
                  <strong>Membership:</strong>
                </span>{" "}
                1,345 affiliates in 43 U.S. States and 20 countries
              </p>
              <p className="fs--12">
                <span className="blue">
                  <strong>Age:</strong>
                </span>{" "}
                5 months
              </p>
              <p className="fs--12">
                <span className="blue">
                  <strong>Mantra:</strong>
                </span>{" "}
                You are god.
              </p>
              <p className="fs--12">
                <span className="blue">
                  <strong>Major Orientation/Worldview:</strong>
                </span>{" "}
                We believe in living life according to the principles of the
                Buddha, but with same modifications....
              </p>
            </div>
            <div className="card-footer">
              <a
                href="/"
                className="float-left btn btn-round bg--defaultBlue text-white"
              >
                Tour Hoshi Union
              </a>
              <a
                href="/"
                className="float-right btn btn-round bg--defaultBlue text-white"
              >
                Join Hoshi Union
              </a>
              <div className="clearfix" />
            </div>
          </div>
          {/* end of card */}
          {/* start of card */}
          <div className="card mt--5 education">
            <div className="card-header">Education</div>
            <div className="card-body">
              <p className="fs--12">View Hoshi Union's:</p>
              <p className="fs--12">
                <a href="/" className="bright-blue">
                  About our NRM
                </a>
              </p>
              <p className="fs--12">
                <a href="/" className="bright-blue">
                  Religious Profile
                </a>
              </p>
              <p className="fs--12">
                <a href="/" className="bright-blue">
                  Member Bios/Directory
                </a>
              </p>
              <p className="fs--12">
                <a href="writings.html" className="bright-blue">
                  Writings
                </a>
              </p>
              <ul className="writings-list">
                <li className="fs--12">
                  <a href="/" className="bright-blue">
                    <i className="fa fa-book" />
                    Book 1: The Beginning
                  </a>
                </li>
                <li className="fs--12">
                  <a href="/" className="bright-blue">
                    <i className="fa fa-book" />
                    Book 2: The Middle
                  </a>
                </li>
                <li className="fs--12">
                  <a href="/" className="bright-blue">
                    <i className="fa fa-book" />
                    Book 3: The End
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* end of card */}
          {/* start of card */}
          <div className="card mt--5 new-members">
            <div className="card-header">New Members</div>
            <div className="card-body">
              <p className="fs--12">
                <i>{newMember.length} new members this month</i>
              </p>
              {/* start of group */}
              {
                newMember && newMember.map((item) => {
                  return (
                  <div className="author mt--5">
                    <img alt="alt" className="avatarIcon" src={item.img} />
                    <p className="fs--12">
                      <a className="bright-blue" href="/">
                        {item.name} <span>{item.origin}</span>
                      </a>
                      <br />
                      <small className="fs--12">
                       {item.message}
                      </small>
                    </p>
                    <div className="clearfix" />
                  </div>
                  )
                })
              }
            </div>
          </div>
          {/* end of card */}
          <div className="clearfix" />
        </div>{" "}
        {/* .sibar-inner-wrapper */}
      </div>
      {/* end of left side rail */}
      {/* start of updates */}
      <div className="div503">
        {/* start of updates */}
        <div className="updatesWrapper">
          <div className="card-header">
            Updates
            <ul>
              <li className="fs--12 active">
                <a href="/">All</a>
              </li>
              <li className="fs--12">
                <a href="/">Announcements</a>
              </li>
              <li className="fs--12">
                <a href="/">Education</a>
              </li>
              <li className="fs--12">
                <a href="/">Polls</a>
              </li>
              <li className="fs--12">
                <a href="/">Events</a>
              </li>
            </ul>
          </div>
          <div className="updatesContent mb--5">
            <div className="row flexThis">
              <div className="col-md-5 makeRelative">
                <a
                  href="/"
                  className="colorDarkBlue"
                  data-toggle="modal"
                  data-target="#communicationPoll"
                >
                  <img alt="alt" src="img/icon-add.png" />
                  <div className="threeTextInfo">
                    <span className="fs--16 colorLightBlue">
                      <strong>Post a/an:</strong>
                    </span>
                    <br />
                    <span className="colorDarkBlue">
                      <strong>Communication</strong>
                    </span>
                    <br />
                    <small className="colorDarkBlue">
                      (Text, Image, Video or File)
                    </small>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="/"
                  className="colorDarkBlue"
                  data-toggle="modal"
                  data-target="#newEvent"
                >
                  <img alt="alt"
                    style={{ marginRight: 9 }}
                    src="img/icon-add.png"
                    width="20px"
                    height="20px"
                  />{" "}
                  <strong>An Events</strong>
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="/"
                  className="colorDarkBlue"
                  data-toggle="modal"
                  data-target="#newPoll"
                >
                  <img alt="alt"
                    style={{ marginRight: 9 }}
                    src="img/icon-add.png"
                    width="20px"
                    height="20px"
                  />{" "}
                  <strong>Polls</strong>
                </a>
              </div>
            </div>
          </div>
          <div className="updatesContent">
            <div className="textTitle">
              <p>
                <a href="/">
                  <strong>Tom Jones</strong>
                </a>{" "}
                <span className="fw--300">
                  (12/15): Here is my weekly video sermon. This week's topic is
                  "Human Frailty".
                </span>
              </p>
            </div>
            <div className="clearfix" />
            <div className="videoWrapper">
              <a href="/">
                <img alt="alt" src="img/videosample.jpg" />
              </a>
            </div>
            <div className="updatesList">
              <ul>
                <li className="fs--12">
                  <strong>Jimbob:</strong> This was really interesting!!
                </li>
                <li className="fs--12">
                  <strong>SallyRed:</strong> Yes. we humans are fraill!
                </li>
                <li className="fs--12">
                  <strong>TomGun:</strong> One of the best sermons ever!
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end of updates */}
        {/* start of poll */}
        <div className="updatesWrapper mt--5">
          <div className="updatesContent pb--20">
            <div className="textTitle">
              <p>
                <strong>Poll:</strong>{" "}
                <span className="fw--300">
                  Should we change our stance of divinity?
                </span>
              </p>
            </div>
            <div className="clearfix" />
            {/* start of select poll */}
            <div className="pollContentWrapper">
              <form>
                {/* select poll */}
                <div className="poll">
                  <input className="mt--8" type="radio" name="pollDivinity" />
                  <p className="fs--12">Yes</p>
                </div>
                <div className="poll">
                  <input className="mt--8" type="radio" name="pollDivinity" />
                  <p className="fs--12">No</p>
                </div>
                <div className="poll">
                  <input className="mt--8" type="radio" name="pollDivinity" />
                  <p className="fs--12">Not Sure</p>
                </div>
              </form>
            </div>
            {/* end of select poll */}
          </div>
        </div>
        {/* end of poll */}
        {/* start of event */}
        <div className="updatesWrapper mt--5">
          <div className="updatesContent pb--20">
            <div className="textTitle">
              <p className="fs--12">
                <strong>Event: Hoshi Union Fall Picnic</strong> <br />
                Come picnic with us under the tree. Enjoy a ribs and chicken
                bbq. <br />{" "}
                <strong>November 1, 3-5 PM / Timber Creek Park (map)</strong>
              </p>
            </div>
            <a
              href="/"
              className="btn btn-round bg--defaultBlue text-white rsvp-btn"
            >
              RSVP
            </a>
            <div className="clearfix" />
          </div>
        </div>
        {/* end of event */}
        {/* start of updates */}
        <div className="updatesWrapper mt--5">
          <div className="updatesContent">
            <div className="textTitle">
              <p>
                <a href="/">
                  <strong>Tom Jones</strong>
                </a>{" "}
                <span className="fw--300">
                  (12/15): Here is my weekly video sermon. This week's topic is
                  "Human Frailty".
                </span>
              </p>
            </div>
            <div className="clearfix" />
            <div className="videoWrapper">
              <a href="/">
                <img alt="alt" src="img/videosample.jpg" />
              </a>
            </div>
            <div className="updatesList">
              <ul>
                <li className="fs--12">
                  <strong>Jimbob:</strong> This was really interesting!!
                </li>
                <li className="fs--12">
                  <strong>SallyRed:</strong> Yes. we humans are fraill!
                </li>
                <li className="fs--12">
                  <strong>TomGun:</strong> One of the best sermons ever!
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* end of updates */}
      </div>
      {/* end of updates */}
      {/* start of right rails */}
      <div id="sidebarright" className="div306 rightSideBar">
        <div className="sidebar-x">
          <a id="rside-btn-x" href="/">
            x
          </a>
        </div>
        <div className="sibar-inner-wrapper">
          {/* start of card */}
          <div className="card no-bottom-border upcomning-events">
            <div className="card-header">Upcoming Events</div>
            <div className="card-body">
              <div className="event">
                <p className="fs--12">
                  <strong>
                    <span className="blue">Today</span>
                  </strong>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    Apple Picking
                  </a>
                </p>
              </div>
              <div className="event">
                <p className="fs--12">
                  <strong>
                    <span className="blue">This Week</span>
                  </strong>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    New Members Unite! - Nov 27
                  </a>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    Future of our Faith Meeting - Dec 1
                  </a>
                </p>
              </div>
              <div className="event">
                <p className="fs--12">
                  <strong>
                    <span className="blue">This Month</span>
                  </strong>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    Ice Creem Spirituality Social - Dec 15
                  </a>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    Communal Meal - Dec 20
                  </a>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    New Years Eve Service - Dec 31
                  </a>
                </p>
              </div>
              <div className="event">
                <p className="fs--12">
                  <strong>
                    <span className="blue">This Year</span>
                  </strong>
                  <br />
                  <a href="/" className="fs--12 bright-blue">
                    Solstice Celebration - April 21
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* end of card */}
          {/* start of card */}
          <div className="card mt--5 no-bottom-border messages">
            <div className="card-header">
              Messages{" "}
              <small style={{ color: "#ffffff", marginLeft: 5 }}>
                <strong>(Hoshi Union)</strong>
              </small>
            </div>
            <div className="card-body">
              <ul className="msgs">
                {
                  messages && messages.map((item) => {
                  return (
                    <li>
                      <a href="/" data-toggle="modal" data-target="#newMsg" className="fs--12" >
                        <span className="bright-blue">{item.name}</span>: {item.message}
                        <img alt="alt" src="img/msg-icon.jpg" />
                      </a>
                    </li>
                  )})
                }
              </ul>
              <form style={{ display: "none" }} className="msg-form">
                <button>See All Messages</button>
              </form>
            </div>
          </div>
          {/* end of card */}
          {/* start of card */}
          <div className="card mt--5 no-bottom-border member-directory">
            <div className="card-header">
              Board Members{" "}
              <small style={{ color: "#ffffff", marginLeft: 5 }}>
                <strong>(Hoshi Union)</strong>
              </small>
            </div>
            <div className="card-body">
              {/* start of member */}
              <div className="member mt--10">
                <img alt="alt" src="img/avatar/jordanism.png" />
                <p className="fs--12 auth-name">
                  <a href="/" className="bright-blue">
                    Jordan Holtzman <span className="loc">(Berkeley, CA)</span>
                  </a>
                  <br />
                  Founder
                </p>
                <div className="clearfix" />
                <p className="fs--12">
                  <span className="fw--700 blue">Board Service:</span> 2 years,
                  3 months
                  <br />
                  <span className="fw--700 blue">Affiliation:</span> 4 years, 7
                  months
                </p>
                <div className="intro">
                  <p className="fs--12">
                    <span className="fw--700 blue">Introduction:</span> Welcome
                    to Jordanism. I look forward to interacting with you soon.
                  </p>
                </div>
                <div className="intro">
                  <p className="fs--12">
                    <span className="fw--700 blue">Bio:</span> I was born in New
                    York and came to the West Coast almost two decades ago. I’m
                    really into gardening, food, and creative projects.
                  </p>
                </div>
                <p className="fs--10">
                  <a href="/" className="bright-blue">
                    see more . . .
                  </a>
                </p>
              </div>
              {/* end of member */}

              
              {/* start of member */}
              <div className="member mt--10">
                <img alt="alt" src="img/avatar/sophists.png" />
                <p className="fs--12 auth-name">
                  <a href="/" className="bright-blue">
                    Vince Truong <span className="loc">(St. Louis, MO)</span>
                  </a>
                  <br />
                  Vice President of Religious Affairs
                </p>
                <div className="clearfix" />
                <p className="fs--12">
                  <span className="fw--700 blue">Board Service:</span> 1 years,
                  2 months
                  <br />
                  <span className="fw--700  blue">Affiliation:</span> 3 years, 6
                  months
                </p>
                <div className="intro">
                  <p className="fs--12">
                    <span className="fw--700 blue">Introduction:</span> I hope
                    Jordanism does for you all the great things it has done for
                    me.
                  </p>
                </div>
                <div className="intro">
                  <p className="fs--12">
                    <span className="fw--700 blue">Bio:</span> I am a web
                    developer living in the St. Louis area.
                  </p>
                </div>
                <p className="fs--10">
                  <a href="/" className="bright-blue">
                    see more . . .
                  </a>
                </p>
              </div>
              {/* end of member */}
              {/* start of member */}
              <div className="member mt--10">
                <img alt="alt" src="img/avatar/jordanism.png" />
                <p className="fs--12 auth-name">
                  <a href="/" className="bright-blue">
                    Ed DeBevic <span className="loc" />
                  </a>
                  <br />
                  Secretary
                </p>
                <div className="clearfix" />
                <p className="fs--12">
                  <span className="fw--700 blue">Board Service:</span> 0 years,
                  8 months
                  <br />
                  <span className="fw--700 blue">Affiliation:</span> 1 years, 9
                  months
                </p>
                <div className="intro">
                  <p className="fs--12 blue">
                    <span className="fw--700">Introduction:</span> Hi, I’m the
                    guy that jots it all down!
                  </p>
                </div>
                <div className="intro">
                  <p className="fs--12 blue">
                    <span className="fw--700">Bio:</span> I enjoy water skiing
                    and traveling the world in my free time. You’ll hopefully
                    find that I have a great sense of humor.
                  </p>
                </div>
                <p className="fs--10">
                  <a href="/" className="bright-blue">
                    see more . . .
                  </a>
                </p>
              </div>
              {/* end of member */}
            </div>
            {/* end of card 
						<div class="bottomLabelBackground bottom-radius-lr-3px no-top-border-color" style="background-color: #ffffff;">
							<a href="/" class="bright-blue text-center fw--300 fs--12">Full Directory</a>
						</div> */}
          </div>
        </div>
        {/* end of right rails */}
        <div className="clearfix" />
      </div>{" "}
      {/* .sibar-inner-wrapper */}
    </div>{" "}
    {/* .container.no-padding-lr */}
    <div className="clearfix" />
  </div>{" "}
  {/* .content */}
  <div className="modal" id="newMsg" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        <div className="card-header">
          Messages{" "}
          <small style={{ color: "#ffffff" }} className="fw--700">
            (Hoshi Union)
          </small>
          <button
            style={{ color: "#395898" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <p className="text-center time-date">6/6/2020 1:45 PM</p>
          <div className="convo">
            <div className="received">
              <img alt="alt" src="img/avatar/passbarn_study.png" />
              <p className="fs--12px msg-content">Coffee sometimes?</p>
            </div>
            <div className="sent">
              <p className="fs--12px msg-content">When and where?</p>
            </div>
            <div className="received">
              <img alt="alt" src="img/avatar/passbarn_study.png" />
              <p className="fs--12px msg-content">Starbuck in Soho</p>
            </div>
          </div>
          <div className="send-msg">
            <input type="text" id="send-msg" placeholder="Message" />
            <a href="/">
              <img alt="alt" src="img/smiley-icon.jpg" />
            </a>
          </div>
        </div>
        <div className="clearfix" />
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
            //   oninput="this.className = ''"
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
            //   oninput="this.className = ''"
              name="username"
            />
          </p>
          <p>
            <input
              placeholder="PASSWORD"
            //   oninput="this.className = ''"
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
            //   oninput="this.className = ''"
              name="username"
            />
          </p>
          <p>
            <input
              placeholder="PASSWORD"
            //   oninput="this.className = ''"
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
                // oninput="this.className = ''"
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
            //   oninput="this.className = ''"
              name="email"
            />
          </p>
          <p>
            <input
              placeholder="PASSWORD"
            //   oninput="this.className = ''"
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
  {/* poll content */}
  <div className="modal" id="newPoll" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div id="pollWrapper" className="modal-content">
        <div className="card-header text-center">
          <span className="colorLightBlue fs--16">
            <strong>Poll</strong>
          </span>
          <button
            style={{ color: "#395898" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <p>Introduction</p>
          <div className="create-cont">
            <div className="create-inner">
              <textarea
            
                placeholder="Describe the main purpose of the poll in 300 characters or less."
                defaultValue={""}
              />
            </div>
            <div className="create-inner iconAfter">
              <input type="text" placeholder="Question *" />
            </div>
            <div className="create-inner iconAfter">
              <input type="text" placeholder="Answer Choice 1*" />
            </div>
            <div className="create-inner iconAfter">
              <input type="text" placeholder="Answer Choice 2*" />
            </div>
            <div className="create-inner addButton">
              <a href="/">
                <img alt="alt" src="img/icon-add.png" /> add another answer choice
              </a>
            </div>
            <div className="create-inner datePicker">
              Close Poll: <span className="on_placeholder">on</span>
              <input
                type="text"
                className="redPlaceholder"
                id="datetimepicker1"
                placeholder="mm/dd/yyyy 00:00 AM"
              />{" "}
              &nbsp; or &nbsp;{" "}
              <label className="manually_label">
                <input type="radio" /> Manually
              </label>
            </div>
            <div className="create-inner pb--20">
              <label>
                <input type="checkbox" /> Show results while poll is in process
              </label>
            </div>
            <div className="create-inner f--width"></div>
            <div className="create-inner usePermissions">
              Choose your viewing and commenting permissions for this poll:
              <label>
                <input type="checkbox" />
                &nbsp;&nbsp;Use same permissions as last Events posting.{" "}
              </label>
            </div>
            <div className="clearfix" />
            <table id="pollTable" className="table table-bordered">
              <thead>
                <tr>
                  <th className="noBorderTop noBorderLeft noBorderBottom"> </th>
                  <th colSpan={2}>
                    Initial Poll Posting Permissions <br />
                    (while poll is open)
                  </th>
                  <th colSpan={3}>
                    Summary Report Permissions <br />
                    (after poll closes)
                  </th>
                </tr>
                <tr>
                  <th className="noBorderTop noBorderLeft noBorderBottom"> </th>
                  <th colSpan={2}>Check which users can…</th>
                  <th colSpan={3}>Check which users can…</th>
                </tr>
                <tr>
                  <th className="noBorderTop noBorderLeft"> </th>
                  <th>participate in poll</th>
                  <th>view poll posting</th>
                  <th>view poll summary report</th>
                  <th>make comments</th>
                  <th>view comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Browsers</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Tourists</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L1</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L2</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L3</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>All Users</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>No Users</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="f--width text-center">
              <a
                href="/"
                className="btn bg--defaultBlue text-white padding--lr40"
              >
                <strong>POST</strong>
              </a>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/* poll content */}
  <div className="modal" id="newEvent" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div id="eventWrapper" className="modal-content">
        <div className="card-header text-center">
          <span className="colorLightBlue fs--16">
            <strong>Event</strong>
          </span>
          <button
            style={{ color: "#395898" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="create-cont">
            <div className="create-inner">
              <div className="row">
                <div className="col-md-3">
                  <label>
                    Name of Event <span className="colorRed"> *</span>
                  </label>
                </div>
                <div className="col-md-9">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="create-inner">
              <div className="row">
                <div className="col-md-3">
                  <label>
                    Brief Description <span className="colorRed"> *</span>
                  </label>
                </div>
                <div className="col-md-9">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="create-inner pt--20">
              <p className="fs--12">
                Date / Time / Location <span className="colorRed"> *</span>
              </p>
              <div className="timeDateAddressWrapper">
                <div className="row">
                  <div className="col-md-2">
                    <label>
                      First Day <span className="colorRed"> *</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      id="datetimepickerEvent"
                      className="redPlaceholder"
                      placeholder="mm/dd/yyyy 0:00 AM"
                    />
                  </div>
                  <div className="col-md-7 iconAfter">
                    <input
                      type="text"
                      placeholder="Street Address  City / State / Zip   or   Virtual Event Link *"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="create-inner pb--20">
              <div className="timeDateAddressWrapper1">
                <div className="row">
                  <div className="col-md-2">
                    <label>
                      Second Day <span className="colorRed"> *</span>
                    </label>
                  </div>
                  <div className="col-md-3">
                    <input
                      type="text"
                      id="datetimepickerEvent2"
                      className="redPlaceholder"
                      placeholder="mm/dd/yyyy 0:00 AM"
                    />
                  </div>
                  <div className="col-md-7 iconAfter">
                    <input
                      type="text"
                      placeholder="Street Address  City / State / Zip   or   Virtual Event Link *"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="create-inner addButton pb--20">
              <a href="/">
                <img alt="alt" src="img/icon-add.png" />
                <span className="text--gray">
                  {" "}
                  add another day/time/location
                </span>
              </a>
            </div>
            <div className="create-inner pb--20">
              <label>
                {" "}
                Allow RSVPs? &nbsp;&nbsp;
                <input type="radio" name="rsvpChoice" />
                &nbsp;Yes &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio" name="rsvpChoice" />
                &nbsp;No
              </label>
            </div>
            <div className="create-inner f--width"></div>
            <div className="create-inner usePermissions">
              Choose your viewing and commenting permissions for this poll:
              <label>
                {" "}
                <input type="checkbox" />
                &nbsp;&nbsp;Use same permissions as last Events posting.{" "}
              </label>
            </div>
            <table id="eventTable" className="table table-bordered">
              <thead>
                <tr>
                  <th className="noBorderTop noBorderBottom noBorderLeft"> </th>
                  <th colSpan={4}>
                    Initial Poll Posting Permissions <br />
                    (while poll is open)
                  </th>
                </tr>
                <tr>
                  <th className="noBorderTop noBorderLeft"> </th>
                  <th>participate in poll</th>
                  <th>view poll posting</th>
                  <th>make comments</th>
                  <th>view comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Browsers</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Tourists</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L1</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L2</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L3</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>All Users</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>No Users</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="f--width text-center">
              <a
                href="/"
                className="btn bg--defaultBlue text-white padding--lr40"
              >
                <strong>POST</strong>
              </a>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  <div className="modal" id="communicationPoll" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div id="comWrapper" className="modal-content">
        <div className="card-header text-center">
          <span className="colorLightBlue fs--16">
            <strong>Communication</strong>
          </span>
          <button
            style={{ color: "#395898" }}
            type="button"
            className="close"
            data-dismiss="modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="create-cont">
            <div className="create-inner">
              <textarea
                placeholder="Enter text here…"
                // col={6}
                defaultValue={""}
              />
            </div>
            <div className="create-inner addButton pb--20">
              <label className="custom-file-upload">
                <input type="file" />
                <img alt="alt" src="img/icon-add.png" /> Add Video/Images/file
              </label>
            </div>
            <div className="create-inner pb--20">
              <label>
                <input type="checkbox" /> &nbsp;&nbsp; Co-post image, video or
                file to Resource Archives
              </label>
            </div>
            <div className="create-inner f--width"></div>
            <div className="create-inner usePermissions">
              Choose your viewing and commenting permissions for this poll:{" "}
              <br />
              <label>
                {" "}
                <input type="checkbox" />
                &nbsp;&nbsp;Use same permissions as last Events posting.{" "}
              </label>
            </div>
            <table id="communicationTable" className="table table-bordered">
              <thead>
                <tr>
                  <th className="noBorderLeft noBorderTop noBorderBottom"> </th>
                  <th colSpan={3}>Check which users can…</th>
                </tr>
                <tr>
                  <th className="noBorderLeft noBorderTop"> </th>
                  <th>view postings</th>
                  <th>make comments</th>
                  <th>view comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Browsers</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Tourists</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L1</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L2</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Members - L3</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>All Users</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td>No Users</td>
                  <td>N/A</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="f--width text-center">
              <a
                href="/"
                className="btn bg--defaultBlue text-white padding--lr40"
              >
                <strong>POST</strong>
              </a>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  </div>
  {/* end of event */}
  {/* end of content */}
  {/* sart of footer */}
  <Footer/>
  {/* end of footer */}
</div>

  );
};

export default Lounge;
