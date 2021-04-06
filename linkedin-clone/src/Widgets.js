import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("How to tame a not-so-nice colligue", "Top news - 792 readers")}
            {newsArticle("A hiring binge in IT is coming", "Top news - 12208 readers")}
            {newsArticle("Managing stress like Jack Dorsey", "Top news - 25942 readers")}
            {newsArticle("Here's who's hiring interns", "Top news - 9486 readers")}
        </div>
    );
}

export default Widgets;
