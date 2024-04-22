import profilePic from "./assets/PictureOfMe.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Ian</h2>
            <p className="card-text">I am a software developer who enjoys video games and tabletop RPGs</p>
        </div>
    )
}

export default Card