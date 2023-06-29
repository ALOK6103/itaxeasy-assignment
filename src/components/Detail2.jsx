import React,{useState} from 'react'


const Detail2= ({data,s1,s2,s3,s4,s5}) => {
    const [sum1,setsum1] = useState(0)
    const [sum2,setsum2] = useState(0)
    const [sum3,setsum3] = useState(0)
    const [sum4,setsum4] = useState(0)
    const [sum5,setsum5] = useState(0);
    data(`${sum1+sum2+sum3+sum4+sum5}`)
      s1(sum1)
      s2(sum2)
      s3(sum3)
      s4(sum4)
      s5(sum5)
  return (
    <div  style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#b4b4b4",width:"100%",margin:"auto",border:"1px solid skyblue",}}>

     <div >
       <div style={{height:"30px"}}>
            <h3 >Short Term Capital GainS (Other than covered under section 111A)</h3>
            </div>
        <div style={{display:"flex",marginLeft:"20px"}} >
            <Sum sum ={setsum1} />
            <div style={{display:"flex",marginLeft:"20px",flexDirection:"column"}}>
            <p>Total</p>
            <input style={{height:"25px",marginTop:"30px"}} type='number'  value={sum1}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"30px"}}>
        <div style={{height:"30px"}}>
            <h3 >Short Term Capital GainS (Covered under section 111A)</h3>
        </div>
        <div style={{display:"flex",marginLeft:"20px"}}>
        <Sum sum ={setsum2} />
            <div style={{display:"flex",marginLeft:"20px",flexDirection:"column"}}>
            <p>Total</p>
            <input style={{height:"25px",marginTop:"30px"}} type='number' value={sum2}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"30px"}}>
        <div style={{height:"30px"}}>
            <h3 >Long Term Capital Gains (Charged to tax @ 20%)</h3>
        </div>
        <div style={{display:"flex",marginLeft:"20px"}}>
        <Sum sum ={setsum3} />
            <div style={{display:"flex",marginLeft:"20px",flexDirection:"column"}}>
            <p >Total</p>
            <input style={{height:"25px",marginTop:"30px"}} type='number'  value={sum3}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"30px"}} >
        <div style={{height:"30px"}}>
            <h3 >Long Term Capital Gains (Charged to tax @ 10%)</h3>
        </div>
        <div style={{display:"flex",marginLeft:"20px"}}>
        <Sum sum ={setsum4} />
            <div style={{display:"flex",marginLeft:"20px",flexDirection:"column"}} >
            <p >Total</p>
            <input style={{height:"25px",marginTop:"30px"}} type='number'  value={sum4}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"30px"}}>
        <div style={{height:"30px"}}>
            <h3 >Long Term Capital GainS (Covered under section 112A)</h3>
        </div>
        <div style={{display:"flex",marginLeft:"20px"}}>
        <Sum sum ={setsum5} />
            <div style={{display:"flex",marginLeft:"20px",flexDirection:"column"}} >
            <p >Total</p>
            <input style={{height:"25px",marginTop:"30px"}} type='number'  value={sum5}/>
            </div>
        </div>
     </div>

     </div>
  )
}



const Sum = ({sum}) => {
    const [value1,setValue1] = useState(0)
    const [value2,setValue2] = useState(0)
    const [value3,setValue3] = useState(0)
    const [value4,setValue4] = useState(0)
    const [value5,setValue5] = useState(0)
     sum(Number(value1)+Number(value2)+Number(value3)+Number(value4)+Number(value5))
    return(
        <div style={{display:"flex",gap:"20px",marginBottom:"90px",backgroundColor:"#b4b4b4"}} >
        <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"22%"}}>
            
            <p style={{backgroundColor:"#b4b4b4"}}>From 01/04/2023 to <br></br> 15/06/2023</p>
            <input style={{height:"25px",padding:"5px"}} type='number'  value={value1 ==0 ? " ":value1} onChange={(e) =>setValue1(e.target.value)} />
            </div >
            <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"22%"}}>
            <p style={{backgroundColor:"#b4b4b4"}}>From 16/06/2023 to <br></br> 15/09/2023</p>
            <input style={{height:"25px",padding:"5px"}} type='number'  value={value2 ==0 ? " ":value2} onChange={(e) =>setValue2(e.target.value)}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"22%"}}>
            <p style={{backgroundColor:"#b4b4b4"}}>From 16/09/2023 to<br></br> 15/12/2023</p>
            <input style={{height:"25px",padding:"5px"}} type='number'  value={value3==0 ? " ":value3} onChange={(e) =>setValue3(e.target.value)} />
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"22%"}}>
            <p style={{backgroundColor:"#b4b4b4"}}>From 16/12/2023 to <br></br> 15/03/2024</p>
            <input  style={{height:"25px",padding:"5px"}} type='number'  value={value4==0 ? " ":value4} onChange={(e) =>setValue4(e.target.value)} />
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"22%"}}>
            <p style={{backgroundColor:"#b4b4b4"}}>From 16/03/2024 to<br></br> 31/03/2024</p>
            <input style={{height:"25px",padding:"5px"}} type='number' value={value5==0 ? " ":value5} onChange={(e) =>setValue5(e.target.value)}/>
            </div>
        </div>
    )
}

export default Detail2