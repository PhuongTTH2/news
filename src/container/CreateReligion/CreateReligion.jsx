import React from "react";
import PleaseRead from "./PleaseRead";
import BasicProfile from "./BasicProfile";
import Congratulations from "./Congratulations";
const CreateReligion =() =>{

  const [step, setStep] = React.useState(1)
  const handleStep = (e) => {
    setStep(e)
  }
    return (
      // {
        step === 1 ?(
          <PleaseRead handleStep={handleStep}/>
        ):(
          step === 2 ? (
            <BasicProfile handleStep={handleStep}/>
          ):(
            <Congratulations/>
          )
        )
    );
}
export default CreateReligion