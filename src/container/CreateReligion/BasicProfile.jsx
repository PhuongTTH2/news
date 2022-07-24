import { useEffect, useState, useRef } from "react";
import Footer from "../../components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "../../components/Header";
import axiosNoAuth from "api/rest/axiosNoAuth";
import apiGets from "api/rest/apiGets";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Country, State, City } from "country-state-city";
import { isEmpty } from "lodash";

import { authHeaderAndAccount } from "api/rest/header";
import apiPosts from "api/rest/apiPosts";
import axiosClientsFormData from "api/rest/axiosClientsFormData";
const BasicProfile = ({ handleStep }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [errorValidate, setErrorValidate] = useState("");

  const [listCountry, setListCountry] = useState([]);
  const [listState, setListState] = useState([]);
  const [listCity, setListCity] = useState([]);
  const [uploadFile, setUploadFile] = useState(null);
  const [religionInfluences, setReligionInfluences] = useState([]);
  const [openTextareaOther, setOpenTextareaOther] = useState(false);
  const [arrayCheck, setArrayCheck] = useState([])
  const schema = yup.object().shape({
    name: yup.string().required("Name is required").max(40).label("Name"),
    major_orientation: yup
      .string()
      .required("Major Orientation is required")
      .max(250)
      .label("Major Orientation"),
    mantra: yup.string().required("Mantra is required").max(60).label("Mantra"),
    founder_bio: yup.string().max(250).label("Founder Bio"),
  });
  const defaultValues = {
    name: "",
    country: "",
    state: "",
    city: "",
    major_orientation: "",
    influences: [],
    otherReligion:"",
    mantra: "",
    founder_picture: "",
    founder_bio: "",
  };
  const form = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (form.formState.errors) {
      setErrorValidate(form.formState.errors);
    }
  }, [form.formState.errors]);

  useEffect(() => {
    (async () => {
      setListCountry([Country.getCountryByCode("US")]);
      form.setValue("country", Country.getCountryByCode("US").isoCode);
      setListState(State.getStatesOfCountry("US"));
      const getReligionInfluences = await axiosNoAuth.get(
        apiGets.getReligionInfluences
      );
      let addOther = [...getReligionInfluences.influences,"Other"]
      const getCheck = []
      addOther.forEach((value, i)=>{
        if(i ===0){
          getCheck.push(true)
        }else{
          getCheck.push(false)
        }
      })
      setArrayCheck(getCheck)
      setReligionInfluences(addOther);
    })();
  }, []);

  const handleState = (e) => {
    let nameState = State.getStateByCodeAndCountry(
      e.target.value,
      form.getValues("country")
    );
    if (nameState) {
      form.setValue("state", nameState.name);
    }
    let currentCity = City.getCitiesOfState(
      form.getValues("country"),
      e.target.value
    );
    form.setValue("city", "")
    setListCity(currentCity);
  };
  const handleCity = (e) => {
    form.setValue("city", e.target.value);
  };
  
  const ref = useRef();
  const handleClick = () => {
    ref.current.click();
  };
  const onChangeReligionInfluences = (event, index) => {
      const newArrayCheck = [...arrayCheck]
      newArrayCheck[index] = !arrayCheck[index]
      const limit = newArrayCheck.filter(i => i === true).length
      if(limit > 5) return
      if (newArrayCheck[newArrayCheck.length - 1]) {
        setOpenTextareaOther(true);
      } else {
        setOpenTextareaOther(false);
        form.setValue("otherReligion", "");
      }
      setArrayCheck(newArrayCheck)
  };

  const handleUploadFileLocal = (event) => {
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setUploadFile(objectUrl);
    form.setValue("founder_picture", event.target.files[0])
    event.target.value = null;
  };
  const onSubmit = async (inputs) => {
    let arrayReligionInfluencesSave = []
    for(let i = 0; i < religionInfluences.length - 1; i++) {
      if(arrayCheck[i]){
        arrayReligionInfluencesSave.push(religionInfluences[i])
      }
    }
    if(arrayCheck[arrayCheck.length - 1]){
      arrayReligionInfluencesSave.push(inputs.otherReligion)
    }
    var bodyFormData = new FormData();
    bodyFormData.append('name', inputs.name);
    bodyFormData.append('city', inputs.city);
    bodyFormData.append('state', inputs.state);
    bodyFormData.append('country', inputs.country);
    bodyFormData.append('major_orientation', inputs.major_orientation);
    bodyFormData.append('mantra', inputs.mantra);
    if(inputs.founder_picture){
      bodyFormData.append('founder_picture', inputs.founder_picture);
    }
    bodyFormData.append('founder_bio', inputs.founder_bio);
    bodyFormData.append('influences', JSON.stringify(arrayReligionInfluencesSave));
    const res = await axiosClientsFormData({
      method: "post",
      url: apiPosts.postReligionInfluences,
      headers: authHeaderAndAccount(),
      data: bodyFormData,
    });
    if (res.message === "ok") {
      handleStep(3)
    } else {
    }

  };

  return (
    <div className="bg--white">
      <div id="main" className="surveyTemplate">
        {/* start of header */}
        <Header />
        {/* end of header */}
        {/*- mobile search bar */}
        <div className="showOnMobile mobileSearchBar">
          <div className="container no-padding-lr">
            <div className="input-container searchWrapper">
              <input className="input-field" type="text" placeholder="Search" />
              <button className="submitBtn" type="submit">
                <img
                  alt="alt"
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
                    style={{
                      border: isEmpty(errorValidate?.name)
                        ? ""
                        : "solid 1px #ff0000",
                    }}
                    type="text"
                    placeholder="Enter your religion’s name here   limit: 40 characters"
                    name="name"
                    onChange={(e) => form.setValue("name", e.target.value)}
                  />
                  {errorValidate.name && (
                    <span className="error-login">
                      {errorValidate.name.message}
                    </span>
                  )}
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
                      {/* <option value="" selected="selected">
                        Country
                      </option> */}
                      {listCountry.map((option, index) => (
                        <option key={index} value={option.isoCode}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <select
                      name="state"
                      className="my-form"
                      onChange={(e) => handleState(e)}
                    >
                      <option {...form.register("state")} selected="selected">
                        State/Province
                      </option>
                      {listState.map((option, index) => (
                        <option key={index} value={option.isoCode}>
                          {option.name}
                        </option>
                      ))}
                    </select>
                    <select {...form.register("city")} onChange={(e) => handleCity(e)}>
                      <option value="" >
                        City/Town
                      </option>
                      {listCity.map((option, index) => (
                        <option value={option.name} >
                          {option.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="clearfix" />
              </div>{" "}
              {/* .create-cont.geograph */}
              <div className="create-cont">
                <div className="create-label">
                  <h3>
                    Major Orientation/Worldview
                    <span className="required">*</span>
                  </h3>
                </div>
                <div className="create-inner">
                  <textarea
                    type="text"
                    placeholder="Give a brief description of the major tenets, beliefs and emphases of your NRM and what distinguishes it from other religions"
                    defaultValue={""}
                    style={{
                      border: isEmpty(errorValidate?.major_orientation)
                        ? ""
                        : "solid 1px #ff0000",
                    }}
                    name="major_orientation"
                    onChange={(e) =>
                      form.setValue("major_orientation", e.target.value)
                    }
                  />
                  {errorValidate.major_orientation && (
                    <span className="error-login">
                      {errorValidate.major_orientation.message}
                    </span>
                  )}
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
                      Which religions influence your NRM? (check all that apply
                      - limit of five)
                    </h4>
                    <fieldset id="group1">
                      {religionInfluences.map((value, index) => (
                        <label className="radio-cont">
                          <input
                            type="radio"
                            value={value}
                            // defaultChecked={i === 0 ? true : false}
                            checked={arrayCheck[index]}
                            name={index}
                            style={{ marginRight: 5 }}
                            onClick={(e)=> onChangeReligionInfluences(e, index)}
                          />
                          {value}                        
                        </label>
                      ))}
                      {openTextareaOther ? (
                        <label className="radio-cont">
                          <textarea
                            type="text"
                            name="otherReligion"
                            defaultValue={""}
                            {...form.register("otherReligion")}
                            onChange={(e) =>
                              form.setValue("otherReligion", e.target.value)
                            }
                          />

                        </label>
                        ) : (
                          ""
                        )}
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
                    defaultValue={""}
                    style={{
                      height: 41,
                      resize: "none",
                      border: isEmpty(errorValidate?.mantra)
                        ? ""
                        : "solid 1px #ff0000",
                    }}
                    name="mantra"
                    onChange={(e) => form.setValue("mantra", e.target.value)}
                  />
                  {errorValidate.mantra && (
                    <span className="error-login">
                      {errorValidate.mantra.message}
                    </span>
                  )}
                  <div className="field-range">0/60 </div>
                </div>
                <div className="clearfix" />
              </div>{" "}
              {/* .create-cont */}
              {/* <div className="create-cont">
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
                        <div className="me-caldr" style={{display: "flex"}}>
                          <label style={{display: "flex" , alignItems: "center"}}>
                            Start: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                          </label>
                          <label style={{ marginLeft:2, display: "flex", alignItems: "center"}}>
                            End:<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
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
              </div>{" "} */}
              {/* .create-cont */}
              <div className="create-cont">
                <div className="create-label">
                  <h3>Founder Bio</h3>
                </div>
                <div className="create-inner">
                  <div className="inner-inputs">
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      style={{ display: "none" }}
                      ref={ref}
                      alt="Upload"
                      onChange={(e) => handleUploadFileLocal(e)}
                    />
                    <div className="bio-prof">
                      <img
                        alt="alt"
                        style={{ width: 41, height: 41 }}
                        src={
                          uploadFile !== null ? uploadFile : "img/icon-bio.png"
                        }
                        onClick={handleClick}
                      />{" "}
                      Edit
                    </div>
                    <div className="bio-prof-mobile">
                      <img
                        alt="alt"
                        style={{ width: 41, height: 41 }}
                        src={
                          uploadFile !== null ? uploadFile : "img/icon-bio.png"
                        }
                        onClick={handleClick}
                      />
                      <div href="/">Edit</div>
                    </div>
                    <div className="bio-cont">
                      <textarea
                        type="text"
                        placeholder="Tell us about yourself and why you are creating this religion (limit:  250 words)"
                        defaultValue={""}
                        style={{
                          border: isEmpty(errorValidate?.founder_bio)
                            ? ""
                            : "solid 1px #ff0000",
                        }}
                        name="founder_bio"
                        onChange={(e) =>
                          form.setValue("founder_bio", e.target.value)
                        }
                      />
                      {errorValidate.founder_bio && (
                        <span className="error-login">
                          {errorValidate.founder_bio.message}
                        </span>
                      )}
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
                <button
                  type="button"
                  onClick={form.handleSubmit(onSubmit)}
                  className="btn btn-primary fs--12"
                  disabled={form.formState.isSubmitting}
                >
                  Submit
                </button>
                {/* <a onClick={()=>{ handleStep(3)}} style={{cursor:'pointer', color:'#FFF'}} >Submit</a> */}
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
        {/* sart of footer */}
        <Footer />
        {/* end of footer */}
      </div>
    </div>
  );
};

export default BasicProfile;
