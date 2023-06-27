import React, { useState } from 'react'
import Detail1 from './Detail1'
import Detail2 from './Detail2'
import Detail3 from './Detail3'
import Detail4 from './Detail4'

const AdvanceTax = () => {
   
  const [payer,setPayer]=useState("")
  const [opt,setOpt]=useState("")
  const [gender,setGender]=useState("")
  const [resi,setResi]=useState("")
  const [income,setIncome]=useState()
  const [profit,setProfit]=useState(0)
  const [aginc,setAginc]=useState(0)
  const [nettax,setNettax]=useState()
  const [inctax,setInctax]=useState()
  const [edu,setEdu]=useState()
  const [tottax,setTottax]=useState()
  const [relief,setRelief]=useState(0)
  const [tds,setTds]=useState(0)
  const [asdtax,setAsdtax]=useState(0)
  const [readOnly, setReadOnly] = useState(true);
  const [selectedOption, setSelectedOption] = useState('');
  const [taxLiability,setTaxLiability]=useState(0)
  const [sur,setSur]=useState(0)
  const [houseval,setHouseval]=useState(0)
  const [detail1,setDetail1] = useState(false)
  const [detail2,setDetail2] = useState(false)
  const [detail3,setDetail3] = useState(false)
  const [detail4,setDetail4] = useState(false)
  const [capital,setCapital]=useState(0)
  const [other,setOther]=useState(0)
  const [deduction,setDeduction]=useState(0)

  const handleSignup=(e)=>{
    e.preventDefault()
    
    setReadOnly((prevReadOnly) => !prevReadOnly);

     console.log(Number(aginc))
    
    let total=Number(income)+Number(profit)+Number(houseval)+Number(capital)+Number(other)-Number(deduction)

    if(aginc>5000){
      if(aginc<=50000){
        total=total+Number(aginc)
      }else{
        total=total+50000+Number(aginc-50000)/2
      }
      
    }

    // if(aginc>50000){
    //   total=total+Number(aginc-50000)/2
    // }
    

    let realtax=0

    
    if(total>700000 && opt==="Yes"){
    
    if(total>300000){
      if(total<=600000){
        let p=(total-300000)
        realtax=realtax+(p*0.05)
      }else{
        let p=300000
        realtax=realtax+(p*0.05)
      }
      console.log(realtax)
     
    }

    if(total>600000){
      if(total<=900000){
        let p=total-600000
        realtax=realtax+(p*0.10)
        console.log(p)
      }else{
        let p=300000
        realtax=realtax+(p*0.10)
      }
      console.log(realtax)
    }

    if(total>900000){
       
      if(total<=1200000){
        let p=total-900000
        realtax=realtax+(p*0.15)
      }else{
        let p=300000
        realtax=realtax+(p*0.15)
      }
      console.log(realtax)
    }

    if(total>1200000){
      if(total<=1500000){
        let p=total-1200000
        realtax=realtax+(p*0.20)
      }else{
        let p=300000
        realtax=realtax+(p*0.20)
      }
      console.log(realtax)
    }

    if(total>1500000){
      let p=(total-1500000)
      realtax=realtax+(p*0.30)
      console.log(realtax)
    }

    setNettax(total)
    setInctax(realtax)
    setEdu(Math.floor(0.04*realtax))
    setTottax(Math.floor(realtax+(0.04*realtax)))
   
   setAsdtax(Math.floor(realtax+(0.04*realtax)-tds-relief))
     setTaxLiability(Math.floor(realtax+(0.04*realtax)))
  }


  
  if(total>500000 && opt==="No"){
    
    if(total>250000){
      if(total<=500000){
        let p=(total-250000)
        realtax=realtax+(p*0.05)
      }else{
        let p=250000
        realtax=realtax+(p*0.05)
      }
      console.log(realtax)
     
    }

    if(total>500000){
      if(total<=1000000){
        let p=total-500000
        realtax=realtax+(p*0.20)
        console.log(p)
      }else{
        let p=500000
        realtax=realtax+(p*0.20)
      }
      console.log(realtax)
    }

  

    if(total>1000000){
      let p=(total-1000000)
      realtax=realtax+(p*0.30)
      console.log(realtax)
    }

    setNettax(total)
    setInctax(Math.floor(realtax))
    setEdu(Math.floor(0.04*realtax))
    setTottax(Math.floor(realtax+(0.04*realtax)))
   
     setAsdtax(Math.floor(realtax+(0.04*realtax)-tds-relief))
     setTaxLiability(Math.floor(realtax+(0.04*realtax)))

     if(gender==="Senior Citizen"){
      setInctax(Math.floor(realtax-2500))
      setEdu(Math.floor(0.04*(realtax-2500)))
      setTottax(Math.floor((realtax-2500)+(0.04*(realtax-2500))))
     
     setAsdtax(Math.floor((realtax-2500)+(0.04*(realtax-2500))-tds-relief))
       setTaxLiability(Math.floor((realtax-2500)+(0.04*(realtax-2500))))
     }

     if(gender==="Super Senior Citizen"){
      setInctax(Math.floor(realtax-12500))
      setEdu(Math.floor(0.04*(realtax-12500)))
      setTottax(Math.floor((realtax-12500)+(0.04*(realtax-12500))))
     
     setAsdtax(Math.floor((realtax-12500)+(0.04*(realtax-12500))-tds-relief))
       setTaxLiability(Math.floor((realtax-12500)+(0.04*(realtax-12500))))
     }

     if(resi==="Non-Resident" || resi==="Not Ordinary Resident"){
      setInctax(Math.floor(realtax))
      setEdu(Math.floor(0.04*realtax))
      setTottax(Math.floor(realtax+(0.04*realtax)))
     
       setAsdtax(Math.floor(realtax+(0.04*realtax)-tds-relief))
       setTaxLiability(Math.floor(realtax+(0.04*realtax)))
     }
  }
  
   
   
  }


  const handleHuf=(e)=>{
    e.preventDefault()
    
    let total=Number(nettax)
   

    let realtax=0

    if(total>300000){

      if(total>300000){
        if(total<=600000){
          let p=(total-300000)
          realtax=realtax+(p*0.05)
        }else{
          let p=300000
          realtax=realtax+(p*0.05)
        }
        console.log(realtax)      
      }

      if(total>600000){
        if(total<=900000){
          let p=(total-600000)
          realtax=realtax+(p*0.10)
        }else{
          let p=300000
          realtax=realtax+(p*0.10)
        }
        console.log(realtax)      
      }

      if(total>900000){
        
        if(total<=1200000){
          let p=(total-900000)
          realtax=realtax+(p*0.20)
        }else{
          let p=300000
          realtax=realtax+(p*0.20)
        }
        console.log(realtax)   
      }

      if(total>1500000){
        let p=(total-1500000)
        realtax=realtax+(p*0.30)
        console.log(realtax)
      }
  
      setAsdtax(realtax+(0.04*realtax)-relief-tds)
      setEdu(0.04*realtax)
      setInctax(realtax)
      setTaxLiability(realtax+(0.04*realtax))
     
     
    }


  }


  const handleDom=(e)=>{
    e.preventDefault()
    let total=Number(nettax)

    

    setInctax(total*0.30)
      
    setEdu(total*0.30*0.04)
    setAsdtax((total*0.30)+(total*0.30*0.04)-relief-tds)
    setTaxLiability((total*0.30)+(total*0.30*0.04))
  }
 
  const handleForeign=(e)=>{
    e.preventDefault()
    let total=Number(nettax)

    

    setInctax(total*0.40)
      
    setEdu(total*0.40*0.04)
    setAsdtax((total*0.40)+(total*0.40*0.04)-relief-tds)
    setTaxLiability((total*0.40)+(total*0.40*0.04))
  }


  const handleCop=(e)=>{
    e.preventDefault()
    let total=Number(nettax)

    

    setInctax(total*0.22)
    setSur((total*0.22*0.10))
    setEdu((total*0.22*0.04)+(total*0.22*0.10*0.04))
    setAsdtax((total*0.22)+(total*0.22*0.04)+(total*0.22*0.10)+(total*0.22*0.10*0.04)-relief-tds)
    setTaxLiability((total*0.22)+(total*0.22*0.04)+(total*0.22*0.10)+(total*0.22*0.10*0.04))
  }

  const handleReset=(e)=>{
    e.preventDefault()

    setPayer("")
    setOpt("")
    setGender("")
    setResi("")
    setIncome(0)
    setProfit(0)
    setAginc(0)
    setNettax(0)
    setInctax(0)
    setEdu(0)
    setTottax(0)
    setRelief(0)
    setTds(0)
    setAsdtax(0)
    setReadOnly(true)
    setTaxLiability(0)
    setSur(0)
    setHouseval(0)
    setCapital(0)
    setOther(0)
    setDeduction(0)

    {detail1==true && setDetail1(false)}
    {detail2==true && setDetail2(false)}
    {detail3==true && setDetail3(false)}
    {detail4==true && setDetail4(false)}
  }

  const handleSelection = (event) => {
    setSelectedOption(event.target.value);


   

    if(event.target.value==="HUF" || event.target.value==="AOPs/BOI"){
      
      handleHuf(event)
    }
     if(event.target.value==="Domestic Company" ||event.target.value==="Firms" ||event.target.value==="LLP"){
      
      handleDom(event)
    }
     if(event.target.value==="Co-operative Society"){
      
      handleCop(event)
    }
     if(event.target.value==="Individual"){
     
      handleSignup(event)
    }

    if(event.target.value==="Foreign Company"){
     
      handleForeign(event)
    }
  };


  const handleVisibility=(e)=>{
    e.preventDefault()
    setDetail1(!detail1)
  }

  const handleVisibility2=(e)=>{
    e.preventDefault()
    setDetail2(!detail2)
  }

  const handleVisibility3=(e)=>{
    e.preventDefault()
    setDetail3(!detail3)
  }

  const handleVisibility4=(e)=>{
    e.preventDefault()
    setDetail4(!detail4)
  }
  
  return (
    <div style={{width:"70%",margin:"auto",border:"1px solid skyblue"}}>
      <div style={{width:"90%",margin:"auto"}}>
      <h2 style={{backgroundColor:"#3B9AC6",color:"white"}}>Advance Tax Calculator for Financial Year 2023-24 </h2>
      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Tax Payer  </label>
           <select style={{height:"25px"}}  value={selectedOption} onChange={handleSelection} >
            <option >select</option>
            <option value="Individual">Individual</option>
            <option value="HUF">HUF</option>
            <option value="AOPs/BOI">AOPs/BOI</option>
            <option value="Domestic Company">Domestic Company</option>
            <option value="Foreign Company">Foreign Company</option>
            <option value="Firms">Firms</option>
            <option value="LLP">LLP</option>
            <option value="Co-operative Society">Co-operative Society</option>
           </select>
           </div>
      </div>


      {(selectedOption === '' && <div style={{width:"90%",margin:"auto"}}>

      <form style={{display:"flex",flexDirection:'column',alignItems:"center",gap:"10px",width:"100%"}}>
           

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Whether opting for taxation under Section 115BAC? </label>
           <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
            <option>select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
           </select>
           </div>

          <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
          <label>Male / Female / Senior Citizen </label>
           <select style={{height:"25px"}} value={gender} onChange={(e)=>setGender(e.target.value)} >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Senior Citizen">Senior Citizen</option>
            <option value="Super Senior Citizen">Super Senior Citizen</option>
           </select>
          </div>


           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Residential Status</label>
           <select style={{height:"25px"}} value={resi} onChange={(e)=>setResi(e.target.value)} >
            <option>select</option>
            <option value="Resident">Resident</option>
            <option value="Non-Resident">Non-Resident</option>
            <option value="Not Ordinary Resident">Not Ordinary Resident</option>
           </select>
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income from salary (Income from Salary before Exemptions/Deductions)</label>
           <input style={{height:"25px"}} type='number' placeholder='' value={income} onChange={(e)=>setIncome(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Profits and Gains of Business or Profession (enter profit only) </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={profit} onChange={(e)=>setProfit(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Agricultural Income </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={aginc} onChange={(e)=>setAginc(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Net Taxable Income </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income Tax </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Secondary and higher education cess</label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Total Tax Liability </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={tottax} readOnly={readOnly} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Relief </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Assessed Tax</label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
           </div>


           <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px"}}>

       <button onClick={handleSignup} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

       <button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
       </div>

        </form>

    </div>)}


    {(selectedOption === 'Individual' && <div style={{width:"90%",margin:"auto"}}>
       

        <form style={{display:"flex",flexDirection:'column',alignItems:"center",gap:"10px",width:"100%"}}>
           

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Whether opting for taxation under Section 115BAC? </label>
           <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
            <option>select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
           </select>
           </div>

          <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
          <label>Male / Female / Senior Citizen </label>
           <select style={{height:"25px"}} value={gender} onChange={(e)=>setGender(e.target.value)} >
            <option>select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Senior Citizen">Senior Citizen</option>
            <option value="Super Senior Citizen">Super Senior Citizen</option>
           </select>
          </div>


           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Residential Status</label>
           <select style={{height:"25px"}} value={resi} onChange={(e)=>setResi(e.target.value)} >
            <option>select</option>
            <option value="Resident">Resident</option>
            <option value="Non-Resident">Non-Resident</option>
            <option value="Not Ordinary Resident">Not Ordinary Resident</option>
           </select>
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income from salary (Income from Salary before Exemptions/Deductions)</label>
           <input style={{height:"25px"}} type='number' placeholder='' value={income} onChange={(e)=>setIncome(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income From House Property </label>
           <div style={{display:"flex",gap:"5px"}}>
           <button style={{color:"white",backgroundColor:"black"}} onClick = {handleVisibility}>{detail1 === false ? "Show Details" : "Hide Detail"}</button>
           <input style={{height:"25px"}} type='number' placeholder='' value={Number(houseval)} readOnly />
           </div>
           </div>

          {detail1===true  && 
            <Detail1  data={setHouseval} />
           }


           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Capital Gains  </label>
           <div style={{display:"flex",gap:"5px"}}>
           <button style={{color:"white",backgroundColor:"black"}} onClick = {handleVisibility2}>{detail2 === false ? "Show Details" : "Hide Detail"}</button>
           <input style={{height:"25px"}} type='number' placeholder='' value={Number(capital)} readOnly />
           </div>
           </div>

           {detail2===true && <Detail2  data={setCapital} />}

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income From Other Sources </label>
           <div style={{display:"flex",gap:"5px"}}>
           <button style={{color:"white",backgroundColor:"black"}} onClick = {handleVisibility3}>{detail3 === false ? "Show Details" : "Hide Detail"}</button>
           <input style={{height:"25px"}} type='number' placeholder='' value={Number(other)} readOnly />
           </div>
           </div>

          {detail3===true && <Detail3  data={setOther} />}

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Profits and Gains of Business or Profession (enter profit only) </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={profit} onChange={(e)=>setProfit(e.target.value)} />
           </div>

          

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Agricultural Income </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={aginc} onChange={(e)=>setAginc(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Deductions </label>
           <div style={{display:"flex",gap:"5px"}}>
           <button style={{color:"white",backgroundColor:"black"}} onClick = {handleVisibility4}>{detail4 === false ? "Show Details" : "Hide Detail"}</button>
           <input style={{height:"25px"}} type='number' placeholder='' value={Number(deduction)} readOnly />
           </div>
           </div>

          {detail4===true && <Detail4   data={setDeduction} />}

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Net Taxable Income </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income Tax after relief u/s 87A</label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Health and Education Cess </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Total Tax Liability </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={tottax} readOnly={readOnly} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Relief other than relief u/s 87A</label>
           <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Assessed Tax</label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
           </div>


           <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px"}}>

       <button onClick={handleSignup} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

       <button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
       </div>

        </form>
    </div>)}

    {(selectedOption === 'HUF' &&<div style={{width:"90%",margin:"auto"}}>

      <form>

      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Whether opting for taxation under Section 115BAC? </label>
           <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
            <option>select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
           </select>
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Net Taxable Income </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} onChange={(e)=>setNettax(e.target.value)}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income Tax </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Surcharge </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Health and Education Cess </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Total Tax Liability </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Relief </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
           <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Assessed Tax</label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
           </div>

           <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

       <button onClick={handleHuf} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

       <button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
       </div>
      </form>

    </div>)}


    {(selectedOption === 'AOPs/BOI' &&<div style={{width:"90%",margin:"auto"}}>

<form>

<div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Whether opting for taxation under Section 115BAC? </label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Net Taxable Income </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax}  onChange={(e)=>setNettax(e.target.value)}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Income Tax </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Surcharge </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Health and Education Cess </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Total Tax Liability </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Relief </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Assessed Tax</label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
     </div>

     <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

       <button onClick={handleHuf} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

       <button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
       </div>
</form>

</div>)}


{(selectedOption === 'Domestic Company' &&<div style={{width:"90%",margin:"auto"}}>

<form>

<div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Whether opting for taxation under Section 115BAC? </label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Net Taxable Income </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} onChange={(e)=>setNettax(e.target.value)}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Income Tax </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Surcharge </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Health and Education Cess </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Total Tax Liability </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Relief </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Assessed Tax</label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
     </div>

     <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

<button onClick={handleDom} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

<button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
</div>
</form>

</div>)}



{(selectedOption === 'Foreign Company' &&<div style={{width:"90%",margin:"auto"}}>

<form>

<div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Whether opting for taxation under Section 115BAC? </label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Net Taxable Income </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} onChange={(e)=>setNettax(e.target.value)}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Income Tax </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Surcharge </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Health and Education Cess </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Total Tax Liability </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Relief </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Assessed Tax</label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
     </div>

     <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

<button onClick={handleForeign} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

<button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
</div>
</form>

</div>)}


{(selectedOption === 'Firms' &&<div style={{width:"90%",margin:"auto"}}>

<form>

<div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Whether opting for taxation under Section 115BAC? </label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Net Taxable Income </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} onChange={(e)=>setNettax(e.target.value)}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Income Tax </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Surcharge </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder=''  readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Health and Education Cess </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Total Tax Liability </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Relief </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Assessed Tax</label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
     </div>

     <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

<button onClick={handleDom} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

<button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
</div>
</form>

</div>)}


{(selectedOption === 'LLP' &&<div style={{width:"90%",margin:"auto"}}>

<form>

<div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Whether opting for taxation under Section 115BAC? </label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Net Taxable Income </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} onChange={(e)=>setNettax(e.target.value)}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Income Tax </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={inctax} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Surcharge </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Health and Education Cess </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Total Tax Liability </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Relief </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Assessed Tax</label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
     </div>

     <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

<button onClick={handleDom} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

<button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
</div>
</form>

</div>)}


{(selectedOption === 'Co-operative Society' &&<div style={{width:"90%",margin:"auto"}}>

<form>

<div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Whether opting for taxation under Section 115BAC? </label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Net Taxable Income </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={nettax} onChange={(e)=>setNettax(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Income Tax </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder=''  value={inctax} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Surcharge </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={sur} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Health and Education Cess </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={edu} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Total Tax Liability </label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={taxLiability} readOnly={readOnly}  />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Relief </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={relief}  onChange={(e)=>setRelief(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>TDS/TCS/MAT (AMT) Credit Utilized  </label>
     <input style={{height:"25px"}} type='number' placeholder='' value={tds} onChange={(e)=>setTds(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Assessed Tax</label>
     <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={asdtax}  readOnly={readOnly} />
     </div>

     <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>

<button onClick={handleCop} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

<button style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} onClick={handleReset} >Reset</button>
</div>
</form>

</div>)}


<div style={{width:"90%",margin:"auto",marginTop:"60px",marginBottom:"150px"}}>

  <h2>Advance Tax liability</h2>
<table style={{width:"100%",margin:"auto",marginTop:"20px"}}>
      <thead>
        <tr>
          <th>Description</th>
          <th>Period</th>
          <th>Advance Tax liability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Advance tax payable upto June 15, 2023 (Cumulative)</td>
          <td>upto June 15, 2023</td>
          <td>₹{Number(taxLiability) * 0.15}</td>
        </tr>
        <tr>
          <td>Advance tax payable upto September 15, 2023 (Cumulative)</td>
          <td>upto September 15, 2023 (Cumulative)</td>
          <td>₹{(Number(taxLiability) * 0.30)+(Number(taxLiability) * 0.15)}</td>
        </tr>
        <tr>
          <td>Advance tax payable upto December 15, 2023 (Cumulative)</td>
          <td>upto December 15, 2023 (Cumulative)</td>
          <td>₹{(Number(taxLiability) * 0.30)+(Number(taxLiability) * 0.15)+(Number(taxLiability) * 0.30)}</td>
        </tr>
        <tr>
          <td>Advance tax payable upto March 15, 2024 (Cumulative)</td>
          <td>upto March 15, 2024 (Cumulative)</td>
          <td>₹{(Number(taxLiability) * 0.30)+(Number(taxLiability) * 0.15)+(Number(taxLiability) * 0.30)+(Number(taxLiability) * 0.25)}</td>
        </tr>
        <tr>
          <td>Advance tax payable upto March 31, 2024 (Cumulative)</td>
          <td>upto March 31, 2024 (Cumulative)</td>
          <td>₹0</td>
        </tr>
      </tbody>
    </table>
</div>

<div style={{width:"90%",margin:"auto",marginTop:"60px",marginBottom:"150px"}}>

  <h2>Advance Tax Installments</h2>
<table style={{width:"100%",margin:"auto",marginTop:"20px"}}>
      <thead>
        <tr>
          <th>Installment</th>
          <th>Period</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First Installment</td>
          <td>April 1, 2023, to June 15, 2023</td>
          <td>₹{Number(taxLiability) * 0.15}</td>
        </tr>
        <tr>
          <td>Second Installment</td>
          <td>June 16, 2023, to September 15, 2023</td>
          <td>₹{Number(taxLiability) * 0.30}</td>
        </tr>
        <tr>
          <td>Third Installment</td>
          <td>September 16, 2023, to December 15, 2023</td>
          <td>₹{Number(taxLiability) * 0.30}</td>
        </tr>
        <tr>
          <td>Fourth Installment</td>
          <td>December 16, 2023, to March 15, 2024</td>
          <td>₹{Number(taxLiability) * 0.25}</td>
        </tr>
        <tr>
          <td>Last Installment</td>
          <td>March 16, 2024, to March 31, 2024</td>
          <td>₹0</td>
        </tr>
      </tbody>
    </table>
</div>
    </div>
  )
}

export default AdvanceTax