import Image1 from "../image1";




const LandC =()=>{
    
    return(
        <div className="nav">
            <div className="nav1">
        <div className="a1">Potential Maker</div>
        <div className="a2">Experts</div>
        <div className="a3">About us </div>
        <div className="a4">FAQ</div>
        <div className="a5" >Contact</div>
        <div className="a6" >Log In</div>
        <button className="but1"  >SignIn</button>
        </div>
        <div className="main1">
        <div className="text">
        <p>Learn anything </p>
        <p style={{position:"relative",bottom:"90px"}} >from home with </p>
        <p style={{position:"relative",bottom:"190px"}}>experts.</p>
        <p style={{fontSize: "25px", bottom: "246px",position: "relative",right: "-6px"}}>Connect with experienced mentors in various <br></br> fields and level up your skills!</p>
        <button className="but2">Sign Up For Free</button>
        </div>
        <div className="image1">
    <Image1/>
        </div></div>
        
        
        </div>
        
    )
}                            
export default LandC;