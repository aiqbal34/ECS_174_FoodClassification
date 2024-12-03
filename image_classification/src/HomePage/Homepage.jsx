import './Homepage.css'
import React, { useState } from 'react';
import BaklavaImage from '../assets/baklava.jpg'
import RedVelvetCakeImage from '../assets/redvelvet.jpg'
import BreakfastBurritoImage from '../assets/breakfastburrito.webp'

const Homepage = () => {

    const [selectedModel, setSelectedModel] = useState(null);

    const modelOutputs = {
        "MobileNetV2": [BaklavaImage, RedVelvetCakeImage, BreakfastBurritoImage],
        "ResNet50": [BaklavaImage, RedVelvetCakeImage, BreakfastBurritoImage],
        "PHD ResNet50": [RedVelvetCakeImage, BaklavaImage, BreakfastBurritoImage],
        "PHD Model": [BaklavaImage, BreakfastBurritoImage, RedVelvetCakeImage],
    };

    return (
    <div className="HomePage">
        <header className="Header">
            <h1 className='Title'>
                ECS 174 Project
            </h1>
        </header>

        <div className='descriptionDiv'>
            <p className='descriptionTitle'>
                Description:
            </p>
            <p className='descriptionContent'>
                Compare and contrast model performance between the two approaches using various metrics.
            </p>   
        </div>

        <div>

        </div>

        <div className='Content'>
            <div className='testImages'>
                <h2>Test Images</h2>
                <img src={BaklavaImage} className="baklavaImage"></img>
                <img src={RedVelvetCakeImage} className='redVelvetImage'></img>
                <img src={BreakfastBurritoImage} className='breakfastBurritoImage'></img>
            </div>

            <div className='modelButtons'>
                    {Object.keys(modelOutputs).map((label) => (
                        <button
                            key={label}
                            onClick={() => setSelectedModel(label)}
                            className={`model-button ${selectedModel === label ? 'active' : ''}`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className='outputImages'>
                    <h2>Output</h2>
                    {selectedModel ? (
                        modelOutputs[selectedModel].map((imageSrc, index) => (
                            <img key={index} src={imageSrc} alt={`Output ${index + 1}`} className='outputImage' />
                        ))
                    ) : (
                        <p>Please select a model to view outputs.</p>
                    )}
                </div>
        </div>


    </div>
    );
}

export default Homepage