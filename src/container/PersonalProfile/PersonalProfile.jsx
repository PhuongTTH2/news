import React, { useEffect, useState, useRef } from "react";
import "./PersonalProfile.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { isUserSelector } from "selectors/authSelector";
import { useSelector } from "react-redux";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import axiosClientsFormData from "api/rest/axiosClientsFormData";
import apiPuts from "api/rest/apiPuts";
import { forOwn } from "lodash";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useAppDispatch } from "app/hooks";
import { updateAccount } from "slices";
import { authHeaderAndAccount } from "api/rest/header";
import { COUNTRY } from "constants/index";
import axios from "axios";

import { STORAGE_KEY } from "constants/index";

const PersonalProfile = () => {
  const users = useSelector(isUserSelector);
  const dispatch = useAppDispatch();
  const [fullDate, setFullDate] = useState(new Date());
  const minDate = new Date(fullDate.getFullYear(), fullDate.getMonth(), 1);
  const maxDate = new Date(fullDate.getFullYear(), fullDate.getMonth() + 1, 0);
  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const schema = yup.object().shape({});
  const defaultValues = {
    first_name: "",
    last_name: "",
    profile_picture_url: "",
    phone: "",
    street_address_1: "",
    street_address_2: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    birth_day: "",
    religious_affiliations: ["", ""],
    about: "",
    audience_type: "",
  };

  const form = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const [arrayReligiousAffiliations, setArrayReligiousAffiliations] = useState(
    []
  );
  const [uploadFile, setUploadFile] = useState(null);
  useEffect(() => {
    (async () => {
      if (users?.users) {
        let scopeUser = users?.users;
        forOwn(scopeUser, (value, key) => form.setValue(key, value));
        if (form.getValues("religious_affiliations")) {
          setArrayReligiousAffiliations(
            Array.isArray(form.getValues("religious_affiliations"))
              ? form.getValues("religious_affiliations")
              : JSON.parse(form.getValues("religious_affiliations"))
          );
        }
        if (form.getValues("birth_day")) {
          setFullDate(new Date(form.getValues("birth_day")));
        }
        if (form.getValues("profile_picture_url")) {
          fetch(form.getValues("profile_picture_url"))
            .then((response) => response.blob())
            .then((imageBlob) => {
              const imageObjectURL = URL.createObjectURL(imageBlob);
              setUploadFile(imageObjectURL);
            });
        }
      }
    })();
  }, [users?.users]);
  const ref = useRef();
  const handleClick = () => {
    ref.current.click();
  };

  const handleUploadFileLocal = (event) => {
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setUploadFile(objectUrl);
    event.target.value = null;
  };
  const removePhoto = () => {
    setUploadFile(null);
  };

  const handleReligiousAffiliations = (e, index) => {
    let newReligiousAffiliations = [...arrayReligiousAffiliations];
    newReligiousAffiliations[index] = e.target.value;
    setArrayReligiousAffiliations(newReligiousAffiliations);
  };

  const renderDayContents = (day, date) => {
    if (date < minDate || date > maxDate) {
      return <span></span>;
    }
    return <span>{date.getDate()}</span>;
  };
  const datepickerRef = useRef(null);
  const handleClickDatePicker = () => {
    setIsOpenDatePicker(!isOpenDatePicker);
    const datepickerElement = datepickerRef.current;

    datepickerElement.setFocus(true);
  };
  const handleChangeDatePicker = (date) => {
    setIsOpenDatePicker(!isOpenDatePicker);
    setFullDate(date);
  };

  const handleProfile = async (inputs) => {

    // const data = await axiosClients.put(apiPuts.updateAccount,{data: {
    //   first_name: inputs.first_name,
    //   last_name: inputs.last_name,
    //   profile_picture: uploadFile,
    //   phone: inputs.phone,
    //   birth_day: moment(fullDate).format("MM/DD/YYYY"),
    //   about: inputs.about,
    //   street_address_1: inputs.street_address_1,
    //   street_address_2: inputs.street_address_2,
    //   city: inputs.city,
    //   state: inputs.state,
    //   zip_code: inputs.zip_code,
    //   country: inputs.country,
    //   audience_type: inputs.audience_type,
    //   religious_affiliations: JSON.stringify(arrayReligiousAffiliations),
    // }},{ headers: authHeaderAndAccount() } );

    const res = await axiosClientsFormData({
      method: "put",
      url: apiPuts.updateAccount,
      headers: authHeaderAndAccount(),

      data: {
        first_name: inputs.first_name,
        last_name: inputs.last_name,
        profile_picture: uploadFile,
        phone: inputs.phone,
        birth_day: moment(fullDate).format("MM/DD/YYYY"),
        about: inputs.about,
        street_address_1: inputs.street_address_1,
        street_address_2: inputs.street_address_2,
        city: inputs.city,
        state: inputs.state,
        zip_code: inputs.zip_code,
        country: inputs.country,
        audience_type: inputs.audience_type,
        religious_affiliations: JSON.stringify(arrayReligiousAffiliations),
      },
    });
    if (res.message === "ok") {
      await dispatch(updateAccount(res.updatedAccount));
    } else {
    }
  };

  const handleOption = (e) => {
    form.setValue("country", e.target.value);
  };

  return (
    <div id="main" className="singlePageTwoColumnLayout">
      {/* start of header */}
      <Header />
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
                          placeholder="First Name"
                          name="first_name"
                          {...form.register("first_name")}
                          onChange={(e) =>
                            form.setValue("first_name", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 no-padding-lr">
                      <div className="form-group pl--5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="last_name"
                          {...form.register("last_name")}
                          onChange={(e) =>
                            form.setValue("last_name", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding-lr">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Mobile Number"
                          name="phone"
                          {...form.register("phone")}
                          onChange={(e) =>
                            form.setValue("phone", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    {/* <div className="col-md-6 no-padding-lr">
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
                  </div> */}
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
                          placeholder="Street Address"
                          name="street_address_1"
                          {...form.register("street_address_1")}
                          onChange={(e) =>
                            form.setValue("street_address_1", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-12 no-padding-lr">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Street Address 2"
                          name="street_address_2"
                          {...form.register("street_address_2")}
                          onChange={(e) =>
                            form.setValue("street_address_2", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 no-padding-lr">
                      <div className="form-group pr--5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="City"
                          name="city"
                          {...form.register("city")}
                          onChange={(e) =>
                            form.setValue("city", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 no-padding-lr">
                      <div className="form-group pl--5">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Province"
                          name="state"
                          {...form.register("state")}
                          onChange={(e) =>
                            form.setValue("state", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 no-padding-lr">
                      <div className="form-group pr--5">
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Postal / Zip Code"
                          name="zip_code"
                          {...form.register("zip_code")}
                          onChange={(e) =>
                            form.setValue("zip_code", e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-md-6 no-padding-lr">
                      <div className="form-group pl--5">
                        <select
                          onChange={(e) => handleOption(e)}
                          id="country"
                          className="form-control"
                        >
                          {COUNTRY.map((option, index) => (
                            <option
                              key={index}
                              value={option.code}
                              selected={
                                form.getValues("country") === option.code
                                  ? true
                                  : false
                              }
                            >
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of info address */}
                {/* start of birthday */}
                <div>
                  <div className="headerHolder mb--12">
                    <h4>Birthday</h4>
                  </div>
                  <div className="myContainerDatePicker">
                    <div className="customDatePickerWidth">
                      <DatePicker
                        showMonthYearPicker
                        dateFormat="MMMM"
                        renderCustomHeader={({ date }) => <div></div>}
                        selected={fullDate}
                        onChange={(date) => handleChangeDatePicker(date)}
                      />
                    </div>
                    <div className="customDatePickerWidth">
                      {/* <div className="form-group pl--5"> */}
                      <DatePicker
                        dateFormat="dd"
                        renderCustomHeader={({ date }) => <div></div>}
                        selected={fullDate}
                        renderDayContents={renderDayContents}
                        onChange={(date) => handleChangeDatePicker(date)}
                      />
                      {/* </div> */}
                    </div>
                    <div className="customDatePickerWidth">
                      <DatePicker
                        selected={fullDate}
                        onChange={(date) => handleChangeDatePicker(date)}
                        showYearPicker
                        dateFormat="yyyy"
                      />
                    </div>
                    <div style={{ paddingTop: 12 }}>
                      <img
                        alt="alt"
                        className="iconasset"
                        src="img/icons/calendar_96px.png"
                        onClick={handleClickDatePicker}
                      />
                      <DatePicker
                        selected={fullDate}
                        className="datePickerHide"
                        onChange={(date) => handleChangeDatePicker(date)}
                        ref={datepickerRef}
                      />
                    </div>
                  </div>
                  {/* <DatePicker
                      selected={fullDate}
                      onChange={(date) => setFullDate(date)}
                    />
                  </div> */}
                </div>
                {/* end of birthday */}
                {/* start of info Religious Affiliations */}
                <div className="inputForm infoAddress">
                  <div className="headerHolder mb--12">
                    <h4>Religious Affiliations</h4>
                  </div>
                  <div className="row no-margin-lr">
                    {arrayReligiousAffiliations.map((value, index) => (
                      <div className="col-md-12 no-padding-lr">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            value={value}
                            onChange={(e) =>
                              handleReligiousAffiliations(e, index)
                            }
                          />
                        </div>
                      </div>
                    ))}
                    {/* <div className="col-md-12 no-padding-lr">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="religion"
                          placeholder="Roman Catholic"
                          {...form.register("religious_affiliations.0")}
                          onChange={(e) =>
                            form.setValue("religion", e.target.value)
                          }
                        />
                      </div>
                    </div> */}
                    {/* <div className="col-md-12 no-padding-lr">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="affiliate"
                          placeholder="New Affiliation"
                          {...form.register("affiliate")}
                          onChange={(e) =>
                            form.setValue("affiliate", e.target.value)
                          }
                        />
                      </div>
                    </div> */}
                    <div className="col-md-1 no-padding-lr iconAdd">
                      <div className="form-group pl--10">
                        {/* <button
                          className="btnAddon opacity--50 mt--5"
                          type="submit"
                        > */}
                        <img
                          alt="alt"
                          className="width35"
                          src="img/icons/add_96px.png"
                        />
                        {/* </button> */}
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
                        {/* <label htmlFor="contained-button-file"> */}
                        <input
                          // id="contained-button-file"
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          style={{ display: "none" }}
                          ref={ref}
                          alt="Upload"
                          onChange={(e) => handleUploadFileLocal(e)}
                        />
                        {uploadFile !== null ? (
                          <img
                            alt="uploadFile"
                            style={{ width: 171, height: 171 }}
                            src={uploadFile}
                            onClick={handleClick}
                          />
                        ) : (
                          <img
                            alt="alt"
                            src="img/noPhotoImage.jpg"
                            onClick={handleClick}
                          />
                        )}
                        {/* </label> */}
                      </div>
                    </div>
                    <p className="removePhoto float-left ">
                      <span
                        className="colorDarkRed pointerA"
                        onClick={removePhoto}
                      >
                        Remove Photo
                      </span>
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
                          name="about"
                          {...form.register("about")}
                          onChange={(e) =>
                            form.setValue("about", e.target.value)
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
                          <option
                            value="Public"
                            selected={
                              form.getValues("audience_type") === "Public"
                                ? true
                                : false
                            }
                            onChange={(e) =>
                              form.setValue("audience_type", e.target.value)
                            }
                          >
                            Public
                          </option>
                          <option
                            value="Private"
                            selected={
                              form.getValues("audience_type") === "Private"
                                ? true
                                : false
                            }
                            onChange={(e) =>
                              form.setValue("audience_type", e.target.value)
                            }
                          >
                            {" "}
                            Private{" "}
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12 no-padding-lr">
                      <div className="noteContent">
                        <p className="colorGray fs--16 fw--300">
                          Note: Making your profile public means that when you
                          join NRMs, we will ask whether you'd like your profile
                          to be public within the NRM. You can make your profile
                          public for some NRMs and not for others, public for
                          all NRMs you join or entirely private.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* end of audience */}
              </div>
              <div className="text-center" style={{ width: "100%" }}>
                <button
                  type="button"
                  className="btn btn-primary fs--12"
                  onClick={form.handleSubmit(handleProfile)}
                  disabled={form.formState.isSubmitting}
                >
                  SUBMIT
                </button>
              </div>
              {/* end of right column */}
              {/* start of full width */}
              <div className="inputForm survey">
                <div className="headerHolder mb--12">
                  <h2>Faith Matcher Survey</h2>
                </div>
                <div className="surveyContent">
                  <p className="fs--20 fw--300 colorGray">
                    Directions: Thank you for taking the time to complete our
                    Faith Matcher survey. Completing the survey allows us to
                    match you with the NRMs that are most consistent with your
                    Religious Goals and Desires as well as your belief system.
                  </p>
                  <p className="fs--20 fw--300 colorGray">
                    Please note that you do not have to complete this entire
                    survey at once. Just click "Save and Complete Later"
                    whenever you'd like and you can return to your partially
                    completed survey at any point.
                  </p>
                  <p className="fs--20 fw--300 colorGray">
                    You are also free to skip any questions that are not
                    required. Be sure to tell Neoligion whether you are skipping
                    the question temporarily or permanently.
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
                        <input type="radio" name="afterDeath" />
                        &nbsp; Yes
                      </label>
                      <label>
                        <input type="radio" name="afterDeath" />
                        &nbsp; No
                      </label>
                      <label>
                        <input type="radio" name="afterDeath" />
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
                        <input type="radio" name="GodExist" />
                        &nbsp; Yes
                      </label>
                      <label>
                        <input type="radio" name="GodExist" />
                        &nbsp; No
                      </label>
                      <label>
                        <input type="radio" name="GodExist" />
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
                        <input type="radio" name="ownDecisions" />
                        &nbsp; Yes
                      </label>
                      <label>
                        <input type="radio" name="ownDecisions" />
                        &nbsp; No
                      </label>
                      <label>
                        <input type="radio" name="ownDecisions" />
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
                        <input type="radio" name="socialNetwork" />
                        &nbsp; Not importante to me at all
                      </label>
                      <label>
                        <input type="radio" name="socialNetwork" />
                        &nbsp; Somewhat importante to me
                      </label>
                      <label>
                        <input type="radio" name="socialNetwork" />
                        &nbsp; Very importante to me
                      </label>
                      <label>
                        <input type="radio" name="socialNetwork" />
                        &nbsp; Extremely important to me
                      </label>
                    </div>
                  </div>
                  <div className="clearfix" />
                  {/* survey end */}
                  {/* survey start */}
                  <div className="col-md-6 no-padding-lr">
                    <p className="fs--16 fw--300 colorLightBlue mt--8">
                      Having a set of rules, prescribed behaviors and moral
                      codes
                    </p>
                  </div>
                  <div className="col-md-6 surveyAnswer mb--50">
                    <div className="form-inline">
                      <label>
                        <input type="radio" name="moralCodes" />
                        &nbsp; Not importante to me at all
                      </label>
                      <label>
                        <input type="radio" name="moralCodes" />
                        &nbsp; Somewhat importante to me
                      </label>
                      <label>
                        <input type="radio" name="moralCodes" />
                        &nbsp; Very importante to me
                      </label>
                      <label>
                        <input type="radio" name="moralCodes" />
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
                        <input type="radio" name="moralCodes" />
                        &nbsp; Not importante to me at all
                      </label>
                      <label>
                        <input type="radio" name="moralCodes" />
                        &nbsp; Somewhat importante to me
                      </label>
                      <label>
                        <input type="radio" name="moralCodes" />
                        &nbsp; Very importante to me
                      </label>
                      <label>
                        <input type="radio" name="moralCodes" />
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
                Don't worry! You may have forgotten your username, but we can
                help you out. Enter your email address below and we'll email you
                your username.
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
                  Forgot email
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
                Don't worry! You may have forgotten your password, but we can
                help you out. Enter your username below and we'll email you a
                link to reset your password.
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
                  By continuing, you agree to our{" "}
                  <a href="/user-agreement">User Agreement</a> and{" "}
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
      <Footer />
      {/* end of footer */}
    </div>
  );
};

export default PersonalProfile;
