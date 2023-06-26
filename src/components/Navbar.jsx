import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>


    <div style={{display:"flex",justifyContent:"space-between",marginTop:"20px",marginLeft:"40px",marginRight:"40px",marginBottom:"20px"}}>
      <div style={{color:"GrayText",display:"flex"}}>
        <img style={{width:"150px"}} src='https://upload.wikimedia.org/wikipedia/commons/1/13/Logo_of_Income_Tax_Department_India.png'  alt="logo"  />
        <div >
        <h1 >Income Tax Department</h1>
        <p>Goverment of India</p>
        </div>
      </div>
      <div style={{color:"GrayText",display:"flex",alignItems:"center",justifyContent:"center"}}>
        <input type='text' style={{height:"20px",width:"250px",paddingLeft:"10px"}} placeholder='Search..' />
        <button style={{height:"25px"}}>search</button>
      </div>
    </div>

    <div style={{display:"flex", gap:"10px",margin:"auto",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
        <div style={{width:"200px",backgroundColor:"skyblue",height:"50px",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
            <Link style={{textDecoration:"none",color:"black"}} to="/">HOUSE RENT ALLOWANCE </Link>

        </div>

        <div style={{width:"200px",backgroundColor:"orange",height:"50px",display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center",}}>
            <Link style={{textDecoration:"none",color:"white"}} to="/atc">Advance Tax Calculator</Link>
            
        </div>
    </div>
    </div>
  )
}

export default Navbar