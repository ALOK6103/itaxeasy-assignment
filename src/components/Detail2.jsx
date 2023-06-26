import React,{useState} from 'react'


const Detail2= ({data}) => {
    const [sum1,setsum1] = useState(0)
    const [sum2,setsum2] = useState(0)
    const [sum3,setsum3] = useState(0)
    const [sum4,setsum4] = useState(0)
    const [sum5,setsum5] = useState(0);
    data(`${sum1+sum2+sum3+sum4+sum5}`)
  return (
    <div  style={{backgroundColor:"#E9E9E9",width:"100%",margin:"auto",border:"1px solid skyblue"}}>

     <div style={{marginTop:"20px"}}>
       <div>
            <h3 >Short Term Capital GainS (Other than covered under section 111A)</h3>
            </div>
        <div >
            <Sum sum ={setsum1} />
            <div >
            <label>Total</label>
            <input style={{height:"25px"}} type='number'  value={sum1}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"20px"}}>
        <div>
            <h3 >Short Term Capital GainS (Covered under section 111A)</h3>
        </div>
        <div >
        <Sum sum ={setsum2} />
            <div >
            <label>Total</label>
            <input style={{height:"25px"}} type='number' value={sum2}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"20px"}}>
        <div>
            <h3 >Long Term Capital Gains (Charged to tax @ 20%)</h3>
        </div>
        <div >
        <Sum sum ={setsum3} />
            <div >
            <label >Total</label>
            <input style={{height:"25px"}} type='number'  value={sum3}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"20px"}} >
        <div>
            <h3 >Long Term Capital Gains (Charged to tax @ 10%)</h3>
        </div>
        <div >
        <Sum sum ={setsum4} />
            <div >
            <label >Total</label>
            <input style={{height:"25px"}} type='number'  value={sum4}/>
            </div>
        </div>
     </div>

     <div style={{marginTop:"20px"}}>
        <div>
            <h3 >Long Term Capital GainS (Covered under section 112A)</h3>
        </div>
        <div >
        <Sum sum ={setsum5} />
            <div >
            <label >Total</label>
            <input style={{height:"25px"}} type='number'  value={sum5}/>
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
        <>
        <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
            <label>From 01/04/2023 to 15/06/2023</label>
            <input style={{height:"25px"}} type='number'  value={value1 ==0 ? " ":value1} onChange={(e) =>setValue1(e.target.value)} />
            </div >
            <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
            <label>From 16/06/2023 to 15/09/2023</label>
            <input style={{height:"25px"}} type='number'  value={value2 ==0 ? " ":value2} onChange={(e) =>setValue2(e.target.value)}/>
            </div>
            <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
            <label>From 16/09/2023 to 15/12/2023</label>
            <input style={{height:"25px"}} type='number'  value={value3==0 ? " ":value3} onChange={(e) =>setValue3(e.target.value)} />
            </div>
            <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
            <label>From 16/12/2023 to 15/03/2024</label>
            <input  style={{height:"25px"}} type='number'  value={value4==0 ? " ":value4} onChange={(e) =>setValue4(e.target.value)} />
            </div>
            <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#E9E9E9",height:"50px",paddingLeft:"10px",paddingRight:"10px",width:"100%"}}>
            <label>From 16/03/2024 to 31/03/2024</label>
            <input style={{height:"25px"}} type='number' value={value5==0 ? " ":value5} onChange={(e) =>setValue5(e.target.value)}/>
            </div>
        </>
    )
}

export default Detail2