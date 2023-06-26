import React, { useState } from 'react'

const HraCalculator = () => {

  const [basic,setBasic]=useState()
  const [da,setDa]=useState()
  const [com,setCom]=useState()
  const [hra,setHra]=useState(0)
  const [rent,setRent]=useState(0)
  const [metro,setMetro]=useState(false)
  // const [isSubmitted, setIsSubmitted] = useState(false);
  const [exem,setExem]=useState(0)
  const [tax,setTax]=useState(0)
  const [readOnly, setReadOnly] = useState(true);


  let obj=JSON.parse(localStorage.getItem("hra"))||{}

  const handleSignup=(e)=>{
    e.preventDefault()

    setReadOnly((prevReadOnly) => !prevReadOnly);
     console.log(basic,da,com,hra,rent)

    //  setIsSubmitted(false)
    if(basic>0 && hra>=0){

    
    let Total_Salary =Number(basic)+Number(da)+Number(com)

    
      let Hra=Number(Total_Salary)*(metro===true ? 0.5:0.4)

    let tot_percent=Number(Total_Salary)*0.10

    let new_hra=Number(rent)-Number(Total_Salary)*0.10

    let min=Math.min(Hra,tot_percent,new_hra)

    console.log(min)

   

    if(hra<=new_hra){
        let exmpt=hra
        let tax=0

        if((da+com+hra)<rent){
          exmpt=hra
          tax=0
          setExem(exmpt)
        setTax(tax)
        }
        // console.log(exmpt,tax)
        // localStorage.setItem("hra",JSON.stringify({exmpt:exmpt,tax:tax}))
        setExem(exmpt)
        setTax(tax)
    }else if(hra>new_hra){
        
        let tax=hra-new_hra

        let exmpt=hra-tax

        if(exmpt<0){
          tax=hra
          exmpt=0
          setExem(exmpt)
        setTax(tax)
        }

        // console.log(exmpt,tax)
        // localStorage.setItem("hra",JSON.stringify({exmpt:exmpt,tax:tax}))
        setExem(exmpt)
        setTax(tax)

    }

    // setIsSubmitted(true);
    // obj=JSON.parse(localStorage.getItem("hra"))||{}
  }else{

    alert("Filling Basic Salary and HRA Received is Mandetory")
  }
  
  }

 

  const handleReset=(e)=>{
    e.preventDefault()
    setBasic("")
    setCom("")
    setDa("")
    setHra(0)
   
    setRent(0)
    setExem(0)
    setTax(0)
    // setIsSubmitted(false)
    var checkbox = document.getElementById("checkb");
  
  // Uncheck the checkbox
    checkbox.checked = false;
  }

  obj=JSON.parse(localStorage.getItem("hra"))||{}
  return (
    <div style={{width:"70%",margin:"auto",border:"1px solid skyblue"}}>
      <div style={{backgroundColor:"#3B9AC6",color:"white"}}>
        <h2>HOUSE RENT ALLOWANCE </h2>
      </div>

      <form style={{display:"flex",flexDirection:"column",gap:"10px"}} >

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
     <label  > Basic salary </label>
     <input style={{height:"25px"}} type='number' value={basic}  onChange={(e)=>setBasic(e.target.value)} />
     </div>

     <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
     <label>DA forming part of salary</label>
       <input style={{height:"25px"}} type='number' value={da}  onChange={(e)=>setDa(e.target.value)} />
       </div>

      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"7px",paddingRight:"10px"}}>
       <label>Commission (as % of turnover achieved by the employee) </label>
       <input style={{height:"25px"}} type='number' value={com}  onChange={(e)=>setCom(e.target.value)} />
       </div>

       <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
       <label>HRA Received </label>
       <input style={{height:"25px"}} type='number' value={hra}  onChange={(e)=>setHra(e.target.value)} />
       </div>
         
         <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
       <label>Rent Paid </label>
       <input style={{height:"25px"}} type='number' value={rent}  onChange={(e)=>setRent(e.target.value)} />
       </div>
      
      <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
       <label>Tick if residing in metro city. </label>
       <input style={{width:"auto"}} type='checkbox' value={metro} onChange={(e)=>setMetro(!metro)} id='checkb' />
       </div>


      
       
       <div style={{display:"flex",gap:"15px",margin:"auto",marginTop:"20px"}}>

       <button onClick={handleSignup} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center",backgroundColor:"orange",color:"white"}} >Calculate</button>

       <button onClick={handleReset} style={{display:"flex",width:"80px",height:"30px",justifyContent:"center",alignItems:"center"}} >Reset</button>
       </div>

       <div  style={{marginTop:"60px",marginBottom:"100px"}}>
       <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
       <label>Exempted House Rent Allowance (₹) </label>
       <input style={{width:"auto",backgroundColor:"#E9E9E9"}} type='number' value={exem} onChange={(e)=>setExem(e.target.value)} readOnly={readOnly} />
       </div>

       <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",height:"50px",paddingLeft:"10px",paddingRight:"10px"}}>
       <label>Taxable House Rent Allowance (₹)  </label>
       <input style={{width:"auto",backgroundColor:"#E9E9E9"}} type='number' value={tax}  onChange={(e)=>setTax(e.target.value)} readOnly={readOnly} />
       </div>
       </div>
      </form>
    </div>
  )
}

export default HraCalculator