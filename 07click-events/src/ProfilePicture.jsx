import PropTypes from 'prop-types'

function ProfilePicture(){
    const imageURL = './src/assets/Cav.jpeg'

    const handleClick = (e)=>{
        e.target.style.display = 'none'
    }

    return(
        <>
            <img onClick={(e)=>handleClick(e)} src={imageURL} alt="Cavalier King Charles Spaniel"></img>
        </>
    )
}

export default ProfilePicture