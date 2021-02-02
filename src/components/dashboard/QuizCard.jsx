import React from 'react'
import { Link } from 'react-router-dom'


function QuizCard() {
    return (
        <div className="card grey lighten-5 z-depth-2">
            <div className="card-content">
                <span className="card-title black-text">Quiz topic name here</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, repellat corporis. Aspernatur eveniet blanditiis non nostrum possimus ratione rem quae! Perspiciatis temporibus nihil, provident in ab quia nobis iste consequuntur!</p>
                <div className="card-action">
                    <div className="row">
                        <div className="col s4 ">
                            <Link to="/controlroom" className="waves-effect waves-light btn red">Take</Link>
                        </div>
                        <div className="col s8">
                            <span className="badge">Question ({20})</span>
                            <span className="badge">{'Networking'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizCard
