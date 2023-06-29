import React, { useState } from "react";

const Detail1 = ({ data }) => {
  const [rentrec, setRentrec] = useState(0);
  const [netan, setNetan] = useState(0);
  const [muni, setMuni] = useState(0);
  const [unrlrent, setUnrlrent] = useState(0);
  const [netval, setNetval] = useState(0);
  const [hloan, setHloan] = useState(0);
  const [letout, setLetout] = useState(0);
  

  // let calculation=rentrec-(unrlrent+muni)
  //  setNetan(calculation)

  data(
    Number(rentrec) -
      Number(unrlrent) -
      Number(muni) -
      (Number(rentrec) - Number(unrlrent) - Number(muni)) * Number(0.3) -
      Number(hloan)+Number(letout)
  );
  return (
    <div
      style={{
        backgroundColor: "#b4b4b4",
        width: "100%",
        margin: "auto",
        border: "1px solid skyblue",
        paddingLeft:"10px",
        paddingRight:"10px"
      }}
    >
     

      <h3>b. Income from Let-out Property </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          width: "100%",
        }}
      >
        <label>1. Annual Letable Value/Rent Received or Receivable </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={rentrec}
          onChange={(e) => setRentrec(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          width: "100%",
        }}
      >
        <label>2. Less: Municipal Taxes Paid During the Year </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={muni}
          onChange={(e) => setMuni(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          width: "100%",
        }}
      >
        <label>3. Less:Unrealized Rent </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={unrlrent}
          onChange={(e) => setUnrlrent(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          width: "100%",
        }}
      >
        <label>Net Annual Value (1-(2+3)) </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={Number(rentrec) - Number(unrlrent) - Number(muni)}
          onChange={(e) => setNetan(e.target.value)}
        />
      </div>

      <h3>Less: Deductions from Net Annual Value </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          width: "100%",
        }}
      >
        <label>i. Standard Deduction @ 30% of Net Annual Value </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={
            (Number(rentrec) - Number(unrlrent) - Number(muni)) * Number(0.3)
          }
          onChange={(e) => setNetval(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          width: "100%",
        }}
      >
        <label>ii. Interest on Housing Loan </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={hloan}
          onChange={(e) => setHloan(e.target.value)}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          // paddingLeft: "10px",
          // paddingRight: "10px",
          
          width: "100%",
        }}
      >
        <label>Income from Let-out House Property </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={
            Number(rentrec) -
            Number(unrlrent) -
            Number(muni) -
            (Number(rentrec) - Number(unrlrent) - Number(muni)) * Number(0.3) -
            Number(hloan)
          }
          onChange={(e) => setLetout(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Detail1;
