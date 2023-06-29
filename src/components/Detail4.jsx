import React, { useState } from 'react'

const Detail4 = ({data}) => {
    const [sum1,setsum1] = useState(0);
    const [sum2,setsum2] = useState(0);
   
     data(`${Number(sum1)+Number(sum2)}`)
   return (
     <div style={{backgroundColor:"#b4b4b4",width:"100%",margin:"auto",border:"1px solid skyblue"}}>
     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
       <label >Employer's contribution toward NPS (u/s 80CCD) </label>
       <input style={{height:"25px"}} type='number'  value={sum1 == 0 ? " " : sum1} onChange={(e) => setsum1(e.target.value)} />
     </div>
 
     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
       <label >Contribution to Agnipath Scheme (u/s 80CCH) </label>
       <input style={{height:"25px"}} type='number' value={sum2 == 0 ? " " : sum2} onChange={(e) => setsum2(e.target.value)}/>
     </div>
     </div>
   )
}

export default Detail4