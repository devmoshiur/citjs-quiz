import React from 'react'

function QuestionMeta() {
    return (
        <div className="row">
            <div className="col s12 m8">
                <div className="input-field">
                    <label htmlFor="questionHeadLine">Question Headline</label>
                        <input type="text" name="questionHeadLine" id="questionHeadLine"/>
                </div>                                  
            </div>
            <div className="col s12 m4">
                <div className="input-field">
                    <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject"/>
                </div>
            </div>
        </div>
    )
}

export default QuestionMeta
