import React,{useState} from 'react'


const Detail3 = ({data}) => {
   const [sum1,setsum1] = useState(0);
   const [sum2,setsum2] = useState(0);
   const [sum3,setsum3] = useState(0);
    data(`${Number(sum1)+Number(sum2)+Number(sum3)}`)
  return (
    <div style={{backgroundColor:"#b4b4b4",width:"100%",margin:"auto",border:"1px solid skyblue",paddingLeft:"10px",paddingRight:"10px"}}>
    <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"100%"}}>
      <label className='label'>Interest</label>
      <input style={{height:"25px"}}  type='number' bg='#fff' value={sum1 == 0 ? " " : sum1} onChange={(e) => setsum1(parseFloat(e.target.value))} />
    </div>

    <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"100%"}}>
      <label className='label'>Commission/Other Income</label>
      <input style={{height:"25px"}} type='number' bg='#fff' value={sum2 == 0 ? " " : sum2} onChange={(e) => setsum2(parseFloat(e.target.value))}/>
    </div>

    <div style={{display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",backgroundColor:"#b4b4b4",height:"50px",width:"100%"}}>
      <label className='label'>Winnings from Lottery, Crossword Puzzles, etc.</label>
      <input style={{height:"25px"}} type='number' bg='#fff'value={sum3 == 0 ? " " : sum3} onChange={(e) => setsum3(parseFloat(e.target.value))}/>
    </div>

    </div>
  )
}

export default Detail3