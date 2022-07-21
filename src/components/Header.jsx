import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { pathName } from "constants/index";
import { isUserSelector } from "selectors/authSelector";
import { useSelector } from "react-redux";

import { useAppDispatch } from "app/hooks";
import { logoutSuccess, logoutStart,removeAccount } from "slices";
import axiosClients from "api/rest/axiosClients";
import apiPosts from "api/rest/apiPosts";
import { STORAGE_KEY } from "constants/index";
import { isEmpty } from "lodash";
import { authHeaderAndAccount } from "api/rest/header";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(isUserSelector);
  const [currentUser, setCurrentUser] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user?.users) {
      setCurrentUser(user?.users);
    }
  }, [user?.users]);
  
  const handleLogout = async (e) => {
    dispatch(logoutStart());
    const data = await axiosClients.post(apiPosts.signOut, {}, {
      headers: authHeaderAndAccount(),
    });

    if (data.message === "ok") {
      dispatch(logoutSuccess());
      dispatch(removeAccount())
      localStorage.clear();
      navigate(pathName.HOME);
      window.location.reload();
    }
  };
  return (
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
              {!localStorage.getItem(STORAGE_KEY.IS_LOGIN) ? (
                <div style={{ width: 144 }}></div>
              ) : (
                <ul className="menuIcon ">
                  <li>
                    <a href="/">
                      <img
                        alt="alt"
                        className="iconasset mt--5"
                        src="img/icons/folder_96px.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        alt="alt"
                        className="iconasset mt--5"
                        src="img/icons/create_96px.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        alt="alt"
                        className="iconasset mt--5"
                        src="img/icons/speech_96px.png"
                      />
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <div className="width145 showOnMobile">
              {!localStorage.getItem(STORAGE_KEY.IS_LOGIN) ? (
                <div style={{ width: 144 }}></div>
              ) : (
                <ul className="menuIcon">
                  {/* show on mobile */}
                  <li>
                    <a href="/">
                      <img
                        alt="alt"
                        className="mt--5"
                        src="img/line-folder.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        alt="alt"
                        className="mt--5"
                        src="img/line-pencil.png"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img
                        alt="alt"
                        className="mt--5"
                        src="img/line-chat.png"
                      />
                    </a>
                  </li>
                  {/* end of show on mobile */}
                </ul>
              )}
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
                    <img
                      alt="alt"
                      className="iconasset"
                      src="img/icons/search_reverse_96px.png"
                    />
                  </button>
                </div>
                <ul className="suggested-links">
                  <li>
                    <a href="/create-religion">NRM Directory</a>
                  </li>
                  <li>
                    <a href="/about-us">About Newligion</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="width147">
              <div className="float-right userWrapper">
                <p className="user">
                  {!localStorage.getItem(STORAGE_KEY.IS_LOGIN) ? (
                    <>
                      <span style={{ minWidth: 70 }} > Hi, Guest </span>
                    </>
                  ) : (
                    <>
                      {isEmpty(user.users.first_name) ? (
                        <span onClick={() => handleLogout()} class="pointerA ">
                          Logout
                             </span>
                      ) : (
                        <>
                          <div>
                            <img
                            alt="File"
                            style={{ width: 31, height: 31, borderRadius: '50%' }}
                            src={currentUser?.profile_picture_url}
                          />
                          </div>
                          <div style={{ minWidth: 150 }}>
                            <span>
                            Hi, {currentUser?.first_name +
                                " " +
                                currentUser?.last_name}
                            </span>
                            <span onClick={() => handleLogout()} class="pointerA ">
                          Logout
                             </span>
                          </div>
                          {/* <i className="fas fa-caret-down" /> */}
                        </>
                      )}
                      {/* <div>
                        <span onClick={() => handleLogout()} class="pointerA ">
                          Logout
                        </span>
                      </div> */}
                    </>
                  )}
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
  );
};

export default Header;
