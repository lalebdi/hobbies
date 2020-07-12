import React from 'react'

export default function Hobbies(props) {
    return (
        <div className="hobby">
            <div>
                <h2 className="name">{props.name}</h2>
                <img className="img" src={props.img} alt="hobby_img" />
            </div>
            <div>
                <p className="info">{props.description} </p>
            </div>
            
        </div>
    )
}
