import React from 'react';
import Footer from '../../components/Footer'
const Profile = () =>{
  // const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
  <div id="main" className="surveyTemplate">
    {/* start of header */}
    <div className="no-gutters">
      <header>
        <div className="container no-padding-lr">
          <div className="holder">
            <div className="logoHolder width154">
              <a href="/" className="logo">
                <img alt="alt" src="img/logo.png" />
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
                  <span className="backgroundLightGreen text-white">RM</span>{" "}
                  <a href="/">
                    Rex Mulholland <i className="fas fa-caret-down" />
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
                <p className="mb--5 fw--600 colorGray">
                  "Those who do not create, will eventually destroy."
                </p>
                <a
                  href="/"
                  className="no-text-decoration colorLightBlue fw--600 float-right"
                >
                  Jordan H <span className="fw--300"> of Jordanism</span>
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
    <div id="surveyLayout" className="content">
      <div className="container no-padding-lr">
        <div id="my-create-page">
          <div className="my-page-title">
            <h1>Basic Religious Profile Information</h1>
            <p>Please tell us about your religion:</p>
          </div>
          <div className="create-cont">
            <div className="create-label">
              <h3>
                NRM Name<span className="required">*</span>
              </h3>
            </div>
            <div className="create-inner">
              <input
                type="text"
                placeholder="Enter your religion’s name here   limit: 40 characters"
              />
              <div className="field-range">0/40 </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont */}
          <div className="create-cont geograph">
            <div className="create-label">
              <h3>Geographic Base</h3>
            </div>
            <div className="create-inner">
              <div className="inner-inputs">
                <p>Where are you based?</p>
                <select id="country" name="country" className="my-form">
                  <option value="" selected="selected">
                    Country
                  </option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Åland Islands">Åland Islands</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua and Barbuda">
                    Antigua and Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei Darussalam">Brunei Darussalam</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Congo, The Democratic Republic of The">
                    Congo, The Democratic Republic of The
                  </option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'ivoire">Cote D'ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands (Malvinas)">
                    Falkland Islands (Malvinas)
                  </option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey">Guernsey</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-bissau">Guinea-bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard Island and Mcdonald Islands">
                    Heard Island and Mcdonald Islands
                  </option>
                  <option value="Holy See (Vatican City State)">
                    Holy See (Vatican City State)
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran, Islamic Republic of">
                    Iran, Islamic Republic of
                  </option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, Democratic People's Republic of">
                    Korea, Democratic People's Republic of
                  </option>
                  <option value="Korea, Republic of">Korea, Republic of</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Lao People's Democratic Republic">
                    Lao People's Democratic Republic
                  </option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libyan Arab Jamahiriya">
                    Libyan Arab Jamahiriya
                  </option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macao">Macao</option>
                  <option value="Macedonia, The Former Yugoslav Republic of">
                    Macedonia, The Former Yugoslav Republic of
                  </option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia, Federated States of">
                    Micronesia, Federated States of
                  </option>
                  <option value="Moldova, Republic of">
                    Moldova, Republic of
                  </option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory, Occupied">
                    Palestinian Territory, Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn">Pitcairn</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russian Federation">Russian Federation</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts and Nevis">
                    Saint Kitts and Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent and The Grenadines">
                    Saint Vincent and The Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia and The South Sandwich Islands">
                    South Georgia and The South Sandwich Islands
                  </option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard and Jan Mayen">
                    Svalbard and Jan Mayen
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syrian Arab Republic">
                    Syrian Arab Republic
                  </option>
                  <option value="Taiwan, Province of China">
                    Taiwan, Province of China
                  </option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania, United Republic of">
                    Tanzania, United Republic of
                  </option>
                  <option value="Thailand">Thailand</option>
                  <option value="Timor-leste">Timor-leste</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">
                    Trinidad and Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks and Caicos Islands">
                    Turks and Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Viet Nam">Viet Nam</option>
                  <option value="Virgin Islands, British">
                    Virgin Islands, British
                  </option>
                  <option value="Virgin Islands, U.S.">
                    Virgin Islands, U.S.
                  </option>
                  <option value="Wallis and Futuna">Wallis and Futuna</option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
                <select id="state" name="state" className="my-form">
                  <option value="" selected="selected">
                    State/Province
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
                <select>
                  <option value="" selected="">
                    City/Town
                  </option>
                </select>
              </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont.geograph */}
          <div className="create-cont">
            <div className="create-label">
              <h3>
                Major Orientation/Worldview<span className="required">*</span>
              </h3>
            </div>
            <div className="create-inner">
              <textarea
                type="text"
                placeholder="Give a brief description of the major tenets, beliefs and emphases of your NRM and what distinguishes it from other religions"
                defaultValue={""}
              />
              <div className="field-range">0/250 </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont */}
          <div className="create-cont religion-cont">
            <div className="create-label">
              <h3>Religious Influences</h3>
            </div>
            <div className="create-inner">
              <div className="inner-inputs">
                <h4>
                  Which religions influence your NRM? (check all that apply -
                  limit of five)
                </h4>
                <fieldset id="group1">
                  <label className="radio-cont">
                    <input type="radio" defaultChecked="checked" name="radio" />
                    Agnosticism / Atheism / Secular / Non-religious
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Asian Traditional (Confucianism, Taoism, Shinto)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Buddhism
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Christianity (Catholicism, Protestantism, Eastern Orthodox,
                    etc.)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Dharmic / Indian (Hinduism, Jainism, Sikhism)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Indigenous (African, Native American, Australian, Yoruba,
                    etc.)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Iranian (Zoroastrianism, Baha’i)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Islam
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Judaism
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    New Age
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    New Religious Movements (Alien/UFO, Left Hand Path,
                    Political, Science Fiction, Syncretic)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Pagan / Neo-Pagan (i.e. Wicca, Techno-paganism, Shamanism)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Spiritualistic / Occult / African-based (i.e. Santeria,
                    Candomble, Voodoo)
                  </label>
                  <label className="radio-cont">
                    <input type="radio" name="radio" />
                    Other
                    <textarea
                      type="text"
                      name="other religion"
                      defaultValue={""}
                    />
                  </label>
                </fieldset>
              </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont.religion-cont */}
          <div className="create-cont">
            <div className="create-label">
              <h3>
                Mantra<span className="required">*</span>
              </h3>
            </div>
            <div className="create-inner">
              <textarea
                type="text"
                placeholder="Please summarize the essence of your religion in 60 characters or less"
                style={{ height: 41, resize: "none" }}
                defaultValue={""}
              />
              <div className="field-range">0/60 </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont */}
          <div className="create-cont">
            <div className="create-label">
              <h3>Major Events, Ceremonies and Holidays</h3>
            </div>
            <div className="create-inner">
              <div className="inner-inputs">
                <div className="major-events">
                  <input
                    type="text"
                    placeholder="Enter name of event, ceremony or holiday"
                  />
                  <div className="me-inner">
                    <div className="me-buttons">
                      <fieldset id="group2">
                        <p>Type: </p>
                        <label>
                          <input type="radio" name="radio2" /> Event
                        </label>
                        <label>
                          <input type="radio" name="radio2" /> Ceremony
                        </label>
                        <label>
                          <input type="radio" name="radio2" /> Holiday
                        </label>
                      </fieldset>
                    </div>
                    <div className="me-disc">
                      <label>Brief Description: </label>
                      <textarea type="text" defaultValue={""} />
                      <div className="field-range">0/100 </div>
                    </div>
                    <div className="me-caldr">
                      <label>
                        Start:
                        <input id="event-start" className="datepicker" />
                      </label>
                      <label>
                        End:
                        <input id="event-end" className="datepicker" />
                      </label>
                    </div>
                    <div className="me-check">
                      <p>
                        Check{" "}
                        <input
                          type="checkbox"
                          id="majorevent"
                          name="majorevent"
                          defaultValue="majorevent"
                        />{" "}
                        if event/ceremony ends same day as it starts.
                      </p>
                      <a href="/">Post</a>
                    </div>
                  </div>
                </div>
                <div className="addevents">
                  <a href="/">
                    <img alt="alt" src="img/icon-add.png" />
                  </a>
                  <p>Add New Event, Ceremony or Holiday</p>
                </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont */}
          <div className="create-cont">
            <div className="create-label">
              <h3>Founder Bio</h3>
            </div>
            <div className="create-inner">
              <div className="inner-inputs">
                <div className="bio-prof">
                  <a href="/">
                    <img alt="alt" src="img/icon-bio.png" /> Edit
                  </a>
                </div>
                <div className="bio-prof-mobile">
                  <a href="/">
                    <img alt="alt" src="img/icon-bio.png" />
                  </a>
                  <a href="/">edit</a>
                </div>
                <div className="bio-cont">
                  <textarea
                    type="text"
                    placeholder="Tell us about yourself and why you are creating this religion (limit:  250 words)"
                    defaultValue={""}
                  />
                  <p>
                    Or click <a href="/">here</a> to re-use your regular bio
                  </p>
                </div>
                <div className="clearfix" />
                <div className="field-range">0/250 </div>
              </div>
            </div>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont */}
          <div className="create-cont submit-create pt-40">
            <a href="/" style={{cursor:'pointer', color:'#FFF'}}>Submit</a>
            <div className="clearfix" />
          </div>{" "}
          {/* .create-cont */}
        </div>{" "}
        {/* #my-create-page */}
        <div className="clearfix" />
      </div>{" "}
      {/* .container.no-padding-lr */}
      <div className="clearfix" />
    </div>{" "}
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
                By continuing, you agree to our <a href="/user-agreement">User Agreement</a>{" "}
                and <a href="/privacy">Privacy Policy</a>
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
    {/* end of content */}
    {/* sart of footer */}
    <Footer/>
    {/* end of footer */}
  </div>
  );
};

export default Profile;
