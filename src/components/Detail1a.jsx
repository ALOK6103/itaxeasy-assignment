import React, { useState } from 'react'

const Detail1a = ({data}) => {
    const [interest, setInterest] = useState(0);

    data( Number(interest))
  return (
    <div  style={{
      backgroundColor: "#b4b4b4",
      width: "100%",
      margin: "auto",
      border: "1px solid skyblue",
      paddingLeft: "10px",
       paddingRight: "10px",
    }}>
         <h3>a. Income from Self-occupied Property </h3>
      <h3>Interest Paid/Payable on Housing Loan </h3>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#b4b4b4",
          height: "50px",
          
          width: "100%",
        }}
      >
        <label>1. Annual Letable Value/Rent Received or Receivable </label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
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
          
          width: "100%",
        }}
      >
        <label>Income from self-occupied house property</label>
        <input
          style={{ height: "25px" }}
          type="number"
          placeholder=""
          value={-interest}
          
        />
        
      </div>
    </div>
  )
}

export default Detail1a