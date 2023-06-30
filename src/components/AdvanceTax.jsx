import React, { useState } from 'react'
import Detail1 from './Detail1'
import Detail2 from './Detail2'
import Detail3 from './Detail3'
import Detail4 from './Detail4'
import Detail1a from './Detail1a'

const AdvanceTax = () => {
   
  const [payer,setPayer]=useState("")
  const [opt,setOpt]=useState("")
  const [gender,setGender]=useState("")
  const [resi,setResi]=useState("")
  const [income,setIncome]=useState(0)
  const [profit,setProfit]=useState(0)
  const [aginc,setAginc]=useState(0)
  const [nettax,setNettax]=useState(0)
  const [inctax,setInctax]=useState(0)
  const [edu,setEdu]=useState(0)
  const [tottax,setTottax]=useState(0)
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
  const [opt2,setOpt2]=useState("")
  const [ihl,setIhl]=useState(0)
  const [s1,setS1]=useState(0)
  const [s2,setS2]=useState(0)
  const [s3,setS3]=useState(0)
  const [s4,setS4]=useState(0)
  const [s5,setS5]=useState(0)
  const [visible,setVisible]=useState(false)



  
  const handleSignup=(e)=>{
    e.preventDefault()
    
    setReadOnly((prevReadOnly) => !prevReadOnly);
    
   
   console.log(s1,s2,s3,s4,s5)
    
  let total=Number(income)+Number(profit)+Number(houseval)+Number(other)-Number(deduction)
    
     
   
     let s=0
     
    if(Number(aginc)>5000){

      if(Number(aginc)<=50000){
        s=s+(Number(aginc)/10)
      }
      
      if(Number(aginc)>50000 && Number(aginc)<=100000){
        s=s+5000+((Number(aginc)-50000)/20)
      }
      
      if(Number(aginc)>100000 && Number(aginc)<=350000){
        s=s+7500+(Number(aginc)-100000)/10
      }
      
      if(Number(aginc)>350000 && Number(aginc)<=400000){
        s=s+7500+(350000-100000)/10+((Number(aginc)-350000)/20)
      }

      if(Number(aginc)>400000){
        s=s+7500+(350000-100000)/10+((400000-350000)/20)+(Number(aginc)-400000)/10
      }
    }

   
    

    let realtax=0

    
    if(total>700000 && (opt==="Yes" || opt==="")){

    //  total=total
    
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
     
    realtax=realtax+Number(s)
   
    setNettax(total)

    setInctax(((total > 700000) && (Math.ceil(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10)))))
    setEdu(Math.ceil(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))))
    setTottax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))+(0.04*realtax)))
   
   setAsdtax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))+(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10)))-tds-relief))
     setTaxLiability(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))+(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10)))))
  }


  
  if(total>500000 && opt==="No"){
     //let s=-ihl+houseval
    total=total-ihl
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
   
    realtax=realtax+Number(s)
    setNettax(total)
   
    setInctax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))))
    setEdu(Math.ceil(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))))
    setTottax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))+(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10)))))
   
     setAsdtax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))+(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10)))-tds-relief))
     setTaxLiability(Math.floor((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))+(0.04*(realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10)))))

     if(gender==="Senior Citizen"){
      setInctax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500))
      setEdu(Math.ceil(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500)))
      setTottax(Math.ceil(((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500)+(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500))))
     
     setAsdtax(Math.ceil(((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500)+(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500))-tds-relief))
       setTaxLiability(Math.floor(((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500)+(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-2500))))
     }

     if(gender==="Super Senior Citizen"){
      setInctax(Math.ceil((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500))
      setEdu(Math.ceil(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500)))
      setTottax(Math.ceil(((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500)+(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500))))
     
     setAsdtax(Math.ceil(((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500)+(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500))-tds-relief))
       setTaxLiability(Math.floor(((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500)+(0.04*((realtax+ Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))-12500))))
     }

     if(resi==="Non-Resident" || resi==="Not Ordinary Resident"){
      setInctax(Math.ceil(realtax))
      setEdu(Math.ceil(0.04*realtax))
      setTottax(Math.ceil(realtax+(0.04*realtax)))
     
       setAsdtax(Math.ceil(realtax+(0.04*realtax)-tds-relief))
       setTaxLiability(Math.floor(realtax+(0.04*realtax)))
     }
  }  
  }


  const handleHuf=(e)=>{
    e.preventDefault()
    
    let total=Number(nettax)
    if(visible===false){
      setVisible(true)
    }

    let realtax=0

    if(total>300000 && (opt==="Yes" || opt==="")){

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
  
      setAsdtax(Math.ceil(realtax+(0.04*realtax))-relief-tds)
      setEdu(Math.ceil(0.04*realtax))
      setInctax(Math.ceil(realtax))
      setTaxLiability(Math.ceil(realtax+(0.04*realtax))-relief-tds)
      
    }

    if(total>500000 && opt==="No"){
      //let s=-ihl+houseval
     total=total-ihl
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
    
     setAsdtax(Math.ceil(realtax+(0.04*realtax))-relief-tds)
     setEdu(Math.ceil(0.04*realtax))
     setInctax(Math.ceil(realtax))
     setTaxLiability(Math.ceil(realtax+(0.04*realtax))-relief-tds)
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

      
    let realtax=0

    if(total<=10000){
       realtax=realtax+(Number(total)*0.10)
    }

    if(total>10000 && total<=20000){
      realtax=realtax+1000+(Number(total-10000)*0.20)
    }

    if(total>20000){
      realtax=realtax+3000+(Number(total-20000)*0.30)
    }

    if(opt2==="Yes" && opt==="Yes"){
      alert("Either section 115BAD or section 115BAE can be selected")
    }
    
    if(opt2==="Yes" && opt!=="Yes"){
      realtax=realtax+3000 
      realtax=realtax/2
     
      setInctax(realtax)
      setSur((realtax*0.10))
      setEdu((realtax+(realtax*0.10))*0.04)
      setAsdtax(realtax+((realtax+(realtax*0.10))*0.04)+(realtax*0.10)-relief-tds)
      setTaxLiability(realtax+((realtax+(realtax*0.10))*0.04)+(realtax*0.10))
    }else{
      setInctax(realtax)
      // setSur((total*0.22*0.10))
      setSur(0)
      setEdu(realtax*0.04)
      setAsdtax(realtax+(realtax*0.04)-relief-tds)
      setTaxLiability(realtax+(realtax*0.04))
    }

    
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
    setOpt2("")
    setS1(0)
    setS2(0)
    setS3(0)
    setS4(0)
    setS5(0)
    setIhl(0)

    {detail1===true && setDetail1(false)}
    {detail2===true && setDetail2(false)}
    {detail3===true && setDetail3(false)}
    {detail4===true && setDetail4(false)}
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
    <div style={{width:"100%",margin:"auto",border:"1px solid skyblue"}}>
      <div style={{width:"90%",margin:"auto"}}>
      <h2 style={{backgroundColor:"#3B9AC6",color:"white"}}>Advance Tax Calculator for Financial Year 2023-24 </h2>
      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Tax Payer  </label>
           <select style={{height:"25px"}}  value={selectedOption} onChange={handleSelection} >
            <option value=''>select</option>
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
            <option value="">select</option>
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

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%",marginTop:"10px"}}>
           <label>Income From House Property </label>
           <div style={{display:"flex",gap:"5px"}}>
           <button style={{color:"white",backgroundColor:"black"}} onClick = {handleVisibility}>{detail1 === false ? "Show Details" : "Hide Detail"}</button>
           <input style={{height:"25px"}} type='number' placeholder='' value={Number(houseval)-ihl} readOnly />
           </div>
           </div>

          {opt==="No" && detail1===true && <Detail1a   data={setIhl} />}

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

           {detail2===true && <Detail2  data={setCapital} s1={setS1} s2={setS2} s3={setS3} s4={setS4} s5={setS5} />}

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income From Other Sources </label>
           <div style={{display:"flex",gap:"5px"}}>
           <button style={{color:"white",backgroundColor:"black"}} onClick = {handleVisibility3}>{detail3 === false ? "Show Details" : "Hide Detail"}</button>
           <input style={{height:"25px"}} type='number' placeholder='' value={Number(other)} readOnly />
           </div>
           </div>

          {detail3===true && <Detail3  data={setOther} />}

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Profits and Gains of Business or Profession  </label>
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
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={Number(income)+Number(profit)+Number(houseval)+Number(capital)+Number(other)-Number(deduction)-ihl} onChange={(e)=>setNettax(e.target.value)} readOnly={readOnly}  />
           </div>


           <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"start",marginLeft:"0px"}}>
     <div style={{width:"100%",display:"flex",marginTop:"10px",backgroundColor:"#E9E9E9"}}>
     <label style={{width:"200px"}} className='label' >Income Liable to Tax at Normal Rate ---</label>
     <input style={{marginLeft:"20px",width:"50px",height:"25px"}} value={Number(income)+Number(profit)+Number(houseval)+Number(other)-Number(deduction)-ihl} />
     <input style={{marginLeft:"20px",width:"150px",height:"25px"}} value={inctax !==0? (inctax-( Number(s2*0.15)+(s5 > 100000?((Number(s5)-100000)*0.10):0)+Number(s3*0.20)+Number(s4*0.10))):0}  />
     </div> 
    

    <div style={{width:"100%",display:"flex",marginTop:"10px"}}>
     <label  style={{width:"200px"}} >Short Term Capital Gains (Covered u/s 111A) 15%</label>
     <input style={{marginLeft:"20px",width:"50px",height:"25px"}} type='number' value={Number(s2)} />
     <input style={{marginLeft:"20px",width:"150px",height:"25px"}}  type='number' value={Number(s2*0.15)} />
     </div> 
    

    <div style={{width:"100%",display:"flex",marginTop:"10px",backgroundColor:"#E9E9E9"}}>
     <label style={{width:"200px"}} >Long Term Capital Gains (Covered u/s 112A) 10%</label>
     <input  style={{marginLeft:"20px",width:"50px",height:"25px"}} type='number' value={Number(s5)} />
     <input  style={{marginLeft:"20px",width:"150px",height:"25px"}} type='number' value={s5 > 100000?((Number(s5)-100000)*0.10):0}  />
     </div> 
    

   <div style={{width:"100%",display:"flex",marginTop:"10px"}}>
     <label style={{width:"200px"}} >Long Term Capital Gains (Charged to tax @ 20%) 20%</label>
     <input style={{marginLeft:"20px",width:"50px",height:"25px"}} type='number' value={Number(s3)} />
     <input style={{marginLeft:"20px",width:"150px",height:"25px"}} type='number' value={Number(s3*0.20)} />
     </div>
   

    <div style={{width:"100%",display:"flex",marginTop:"10px",backgroundColor:"#E9E9E9"}}>
     <label style={{width:"200px"}}>Long Term Capital Gains (Charged to tax @ 10%) 10%</label>
     <input style={{marginLeft:"20px",width:"50px",height:"25px"}}  type='number' value={Number(s4)} />
     <input style={{marginLeft:"20px",width:"150px",height:"25px"}}  type='number' value={Number(s4*0.10)}  />
     </div> 
    

   <div style={{width:"100%",display:"flex",marginTop:"10px"}}>
     <label style={{width:"200px"}} >Winnings from Lottery, Crossword Puzzles, etc 30%</label>
     <input style={{marginLeft:"20px",width:"50px",height:"25px"}}  />
     <input style={{marginLeft:"20px",width:"150px",height:"25px"}}   />
     </div>
    
     </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Income Tax after relief u/s 87A</label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={((((opt===""||opt==="Yes")&&(income>700000))===true ? inctax:0)||(((opt==="No")&&(income>500000))===true ? inctax:0))} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Health and Education Cess </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={((((opt===""||opt==="Yes")&&(income>700000))===true ? edu:0)||(((opt==="No")&&(income>500000))===true ? edu:0))} readOnly={readOnly}  />
           </div>

           <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
           <label>Total Tax Liability </label>
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={((((opt===""||opt==="Yes")&&(income>700000))===true ? tottax:0)||(((opt==="No")&&(income>500000))===true ? tottax:0))} readOnly={readOnly} />
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
           <input style={{height:"25px",backgroundColor:"#E9E9E9"}} type='number' placeholder='' value={((((opt===""||opt==="Yes")&&(income>700000))===true ? asdtax:0)||(((opt==="No")&&(income>500000))===true ? asdtax:0))}  readOnly={readOnly} />
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
     <label>Co-operative society opted and qualify for section 115BAD</label>
     <select style={{height:"25px"}} value={opt} onChange={(e)=>setOpt(e.target.value)} >
      <option>select</option>
      <option value="Yes">Yes</option>
      <option value="No">No</option>
     </select>
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
     <label>Co-operative society opted and qualify for section 115BAE</label>
     <select style={{height:"25px"}} value={opt2} onChange={(e)=>setOpt2(e.target.value)} >
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

{(taxLiability> 0) &&<div>
<div style={{ width: "90%", margin: "auto", marginTop: "60px", marginBottom: "150px", textAlign: "left" }}>
  <h2>Advance Tax liability</h2>
  <table style={{ width: "100%", margin: "auto", marginTop: "20px", borderCollapse: "collapse" }}>
    <thead>
      <tr style={{ border: "1px solid black" }}>
        <th style={{ border: "1px solid black", padding: "5px" }}>Description</th>
        <th style={{ border: "1px solid black", padding: "5px" }}>Period</th>
        <th style={{ border: "1px solid black", padding: "5px" }}>Advance Tax liability</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Advance tax payable upto June 15, 2023 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>upto June 15, 2023</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil(Number(taxLiability) * 0.15)}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Advance tax payable upto September 15, 2023 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>upto September 15, 2023 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil((Number(taxLiability) * 0.30) + (Number(taxLiability) * 0.15))}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Advance tax payable upto December 15, 2023 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>upto December 15, 2023 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil((Number(taxLiability) * 0.30) + (Number(taxLiability) * 0.15) + (Number(taxLiability) * 0.30))}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Advance tax payable upto March 15, 2024 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>upto March 15, 2024 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil((Number(taxLiability) * 0.30) + (Number(taxLiability) * 0.15) + (Number(taxLiability) * 0.30) + (Number(taxLiability) * 0.25))}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Advance tax payable upto March 31, 2024 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>upto March 31, 2024 (Cumulative)</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹0</td>
      </tr>
    </tbody>
  </table>
</div>




<div style={{ width: "90%", margin: "auto", marginTop: "60px", marginBottom: "150px", textAlign: "left" }}>
  <h2>Advance Tax Installments</h2>
  <table style={{ width: "100%", margin: "auto", marginTop: "20px", borderCollapse: "collapse" }}>
    <thead>
      <tr style={{ border: "1px solid black" }}>
        <th style={{ border: "1px solid black", padding: "5px" }}>Installment</th>
        <th style={{ border: "1px solid black", padding: "5px" }}>Period</th>
        <th style={{ border: "1px solid black", padding: "5px" }}>Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>First Installment</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>April 1, 2023, to June 15, 2023</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil(Number(taxLiability) * 0.15)}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Second Installment</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>June 16, 2023, to September 15, 2023</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil(Number(taxLiability) * 0.30)}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Third Installment</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>September 16, 2023, to December 15, 2023</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil(Number(taxLiability) * 0.30)}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Fourth Installment</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>December 16, 2023, to March 15, 2024</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹{Math.ceil(Number(taxLiability) * 0.25)}</td>
      </tr>
      <tr style={{ border: "1px solid black" }}>
        <td style={{ border: "1px solid black", padding: "5px" }}>Last Installment</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>March 16, 2024, to March 31, 2024</td>
        <td style={{ border: "1px solid black", padding: "5px" }}>₹0</td>
      </tr>
    </tbody>
  </table>
</div>
</div>}
    </div>
  )
}

export default AdvanceTax