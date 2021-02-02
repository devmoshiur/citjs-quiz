import React, { Component } from 'react'
import QuizCard from './QuizCard'

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m2"></div>
                        <div className="col s12 m8">
                            <QuizCard />
                            <QuizCard />
                            <QuizCard />
                            <QuizCard />
                        </div>
                    <div className="col s12 m2"></div>
                </div>
            </div>
        )
    }
}

export default Dashboard;