import React from 'react'
import './Feature.scss'
import image1 from '../Images/1.svg'
import image2 from '../Images/2.svg'
import image3 from '../Images/3.svg'
import image4 from '../Images/4.svg'
import FeatureBox from './FeatureBox'
const Feature = () => {
    return (
        <div className="feature-container">
            <h1>FEATURES</h1>
            <div className="wrapper">
                <FeatureBox image={image1} title="WeightLifting"/>
                <FeatureBox image={image2} title="WeightLifting"/>
                <FeatureBox image={image3} title="WeightLifting"/>
                <FeatureBox image={image4} title="WeightLifting"/>
            </div>
        </div>
    )
}

export default Feature
