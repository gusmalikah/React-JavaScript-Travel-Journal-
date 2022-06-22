import React from "react"
import "../Styles/places.css"

function Places(props) {
    return (
    <div className="card">
    <div className="card-data">
    <div className="container">
    <h2 className="card-location">{props.item.location}</h2>
    <img className="card-logo" alt="" src={`../Images/location.png`}/>
    </div>
    <h1 className="card-title">{props.item.title}</h1>
    <a className="card-link" href="https://goo.gl/maps/UUpvXTcFWdFeVjRNA" target="_blank" rel="noreferrer">View on Google Maps</a>
    <div className="card-date">
    <p className="card-startdate">{props.item.startDate} - </p>
    <p className="card-enddate">{props.item.endDate}</p>
    </div>
    <p className="card-description">{props.item.description}</p>
    </div>
    
    <div className="card-image">
    <img className="card-img" alt="" src={`../Images/${props.item.img}`}/>
    </div>
    </div>
    )
}
export default Places
