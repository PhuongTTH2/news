import React, { useRef, useState, useEffect } from 'react';
import { first } from 'lodash'
import MainContent from 'components/Writing/MainContent';
import Footer from '../../components/Footer'
const Page = () => {
  const [books, setBooks] = useState([])
  const [activeBook, setActiveBook] = useState(null)
  const [activeChapter, setActiveChapter] = useState(null)
  const [activeTopic, setActiveTopic] = useState(null) // {type:"chapter",id}
  const displayType = {
    'create': 'create',
    'read': 'read',
    'update': 'update',
  }
  const [bookDisplayType, setBookDisplayType] = useState(displayType.read)
  // chỗ bấm vào tên topic hiển thị ra input code html ko ổn
  useEffect(async () => {
    const books = [
      {
        id: 1,
        name: "Book 1: The Origin and Evolution of Life",
        author: "Jack Handey",
        chapters: [
          {
            id: 1,
            name: "Chapter 1",
            title: "The Beginning 1",
            topics: [
              {
                id: 1,
                name: "1.1",
                title: "The Beginning 1.1",
                content: "Mi proin sed libero enim sed faucibus turpis in eu. Sit amet commodo nulla facilisi nullam. Tincidunt praesent semper feugiat nibh sed. Dignissim diam quis enim lobortis scelerisque fermentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Feugiat nibh sed pulvinar proin gravida hendrerit. Metus dictum at tempor commodo ullamcorper a lacus. Mi proin sed libero enim sed faucibus turpis. Tempus urna et pharetra pharetra massa massa ultricies mi quis.",
                comment: {
                  count: 10,
                  data: [
                    {
                      name: "Jenna Smith",
                      avatar: "img/avatar/sophists.png",
                      comment: "Hi. I'm looking forward to connecting with some of you.",
                    },
                    {
                      name: "Jenna Smith",
                      avatar: "img/avatar/sophists.png",
                      comment: "Hi. I'm looking forward to connecting with some of you.",
                    },
                  ],
                }
              },
              {
                id: 2,
                name: "1.2",
                title: "The Beginning 1.2",
                content: "Mi proin sed libero enim sed faucibus turpis in eu. Sit amet commodo nulla facilisi nullam. Tincidunt praesent semper feugiat nibh sed. Dignissim diam quis enim lobortis scelerisque fermentum. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. Feugiat nibh sed pulvinar proin gravida hendrerit. Metus dictum at tempor commodo ullamcorper a lacus. Mi proin sed libero enim sed faucibus turpis. Tempus urna et pharetra pharetra massa massa ultricies mi quis.",
                comment: {
                  count: 10,
                  data: [
                    {
                      name: "Jenna Smith 2",
                      avatar: "img/avatar/sophists.png",
                      comment: "Hi. I'm looking forward to connecting with some of you.",
                    },
                  ],
                }
              },
            ]
          },
          {
            id: 2,
            name: "Chapter 2",
            title: "The Beginning 2",
            topics: [
              {
                name: "2.1",
                title: "The Beginning 2.1",
              },
              {
                name: "2.2",
                title: "The Beginning 2.2",
              },
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Book 2: The Origin and Evolution of Life",
        author: "Jack Handey",
        chapters: [
          {
            name: "Chapter 1",
            title: "The Beginning",
            topics: [
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
            ]
          },
          {
            name: "Chapter 2",
            title: "The Beginning",
            topics: [
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Book 3: The Origin and Evolution of Life",
        author: "Jack Handey",
        chapters: [
          {
            name: "Chapter 1",
            title: "The Beginning",
            topics: [
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
            ]
          },
          {
            name: "Chapter 2",
            title: "The Beginning",
            topics: [
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
              {
                name: "Topic 1",
                title: "The Beginning 1",
              },
            ]
          }
        ]
      },
    ]
    await Promise.all([
      setBooks(books),
      setActiveBook(first(books)),
      setActiveChapter(first(first(books).chapters)),
      setActiveTopic(first(first(first(books).chapters).topics))
    ])
    
  }, [])
  const renderTopic = (topic) => {
    const isRenderactiveTopic = topic.id == activeTopic.id
    if (isRenderactiveTopic && topic) {
      return (
        <tr key={topic.id}>
          <td className="colorLightGray text-center">{topic?.name}</td>
          <td>
            <div className="chapterProgress">
              <div className="progress">
                <div className="progress-bar" style={{ width: "92px" }}>
                </div>
                <div className="progress-text">Genesis of Mid <span className="colorLightGreen">Universe</span></div>
              </div>
            </div>
          </td>
          <td>
            <a href="/" className="pl--10">
              <i className="fa fa-chevron-down" />
            </a>{" "}
            <a href="/">
              <i className="fa fa-chevron-down" />
            </a>
          </td>
        </tr>
      )
    } else {
      return (
        <tr key={topic.id}>
          <td className="colorLightGray text-center">{topic?.name}</td>
          <td>{topic?.title}</td>
          <td>
            <a href="/" className="pl--10">
              <i className="fa fa-chevron-down" />
            </a>{" "}
            <a href="/">
              <i className="fa fa-chevron-down" />
            </a>
          </td>
        </tr>
      )
    }
  }
  return (
    <>
      <div id="main">
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
                </div>
                <div className="mobeMenuIconWrapper width128">
                  <a id="rside-btn" href="/">
                    <img alt="alt" src="img/mmemu_icon.png" />
                  </a>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="clearfix" />
          </header>
        </div>
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
        <div id="twoColumnLayout" className="content">
          <div className="container no-padding-lr">
            <div id="sidebarleft" className="div306 leftSideBar">
              <div className="sidebar-x">
                <a id="lside-btn-x" href="/">
                  x
                </a>
              </div>
              <div className="sibar-inner-wrapper">
                <div className="card cardWrapper slt-book">
                  <div className="card-header">Select or create a book:</div>
                  <div className="card-body">
                    <div className="cardContent">
                      <ul className="list-unstyled">
                        {
                          books && books.map((book) => {
                            if (book.id === activeBook.id) {
                              return (
                                <li key={book.id}>
                                  <a href="/">
                                    <span className="colorLightGreen fw--700">
                                      {book?.name}
                                    </span>
                                  </a>
                                </li>
                              )
                            } else {
                              return (
                                <li>
                                  <a href="/">{book?.name}</a>
                                </li>
                              )
                            }

                          })
                        }
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
                <div className="card mt--5 tbl-contents">
                  <div className="card-header">Table of Contents</div>
                  <div className="card-body">
                    <a href="/" className="d-block mb--5 colorLightBlue">
                      + Add Chapter
                    </a>
                    {
                      activeBook?.chapters?.map((item, i) => {
                        const { topics } = item;
                        return (
                          <div className="cardContent" key={i}>
                            <div className="wrapThisTable">
                              <table className="table table-borderless mb--8">
                                <thead>
                                  <tr>
                                    <th className="colorLightGray" onClick={() => setActiveChapter(item)}>{item?.name}</th>
                                    <th className="colorGray" onClick={() => setActiveChapter(item)}>
                                      {item?.title}
                                      <a href="/" className="pl--10">
                                        <i className="fa fa-chevron-down" />
                                      </a>{" "}
                                      <a href="/">
                                        <i className="fa fa-chevron-up" />
                                      </a>{" "}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    topics?.map((topic, index) => {
                                      return renderTopic(topic)
                                    })
                                  }
                                </tbody>
                              </table>
                              <a href="/" className="d-block mb--5 colorLightBlue">
                                + Add Chapter
                              </a>
                            </div>
                          </div>
                        )
                      })
                    }

                  </div>
                </div>
                <div className="clearfix" />
              </div>{" "}
            </div>
            <MainContent activeBook={activeBook} activeChapter={activeChapter} />
          </div>
          <div id="sidebarright" className="div306 rightSideBar showOnMobile">
            <div className="sidebar-x">
              <a id="rside-btn-x" href="/">
                x
              </a>
            </div>
            <div className="sibar-inner-wrapper">
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
            </div>
          </div>
          <div className="clearfix" />
        </div>{" "}
      </div > {" "}
      <div className="clearfix" />
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
      <div
        className="modal fade Acct"
        id="forgotAcct"
        tabIndex={-1}
        data-focus-on="input:first"
      >
        <div className="modal-dialog">
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
      <div
        className="modal fade Acct"
        id="loginAcct"
        tabIndex={-1}
        data-focus-on="input:first"
      >
        <div className="modal-dialog">
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
      <div
        className="modal fade Acct"
        id="rstPassword"
        tabIndex={-1}
        data-focus-on="input:first"
      >
        <div className="modal-dialog">
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
      <div
        className="modal fade Acct signup"
        id="signUp1st"
        tabIndex={-1}
        data-focus-on="input:first"
      >
        <div className="modal-dialog">
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
     <Footer/>
    </>

  );
};

export default Page;
