import React from 'react'
import './Featurebox.scss'

const FeatureBox = ({image,title}) => {
    return (
        <div className="box">
            <div className="img-box">
                <img src={image} alt="" />
            </div>
            <div className="title">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default FeatureBox
