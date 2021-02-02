import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../images/analyze.svg'
import './HomeBanner.css'
function HomeBanner() {
    return (
        <div className="container">
            <div className="row banner">
                <div className="col s12 m6">
                    <h4 className="black-text">Compact IT Job Solution</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum asperiores numquam, eos modi, minima quasi voluptatibus officiis, nam accusantium quis unde. Laboriosam qui ipsum quos, in quia et officiis, veritatis accusantium commodi tempora necessitatibus!</p>
                    <Link to="/signup" className="waves-effect waves-light btn-large red">Create an Account</Link>
                </div>
                <div className="col s12 m6">
                    <img src={Banner} alt={'Banner Images'} className="responsive-img banner-image"/>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
