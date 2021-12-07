import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
	return (
		<div className="gpt3__possibility section__padding" id="possibilities">
			<div className="gpt3__possibility-image">
				<img src={possibilityImage} alt="possibility"/>
			</div>
			<div className="gpt3__possibility-content">
				<h4>Request Earlt Access to Get Started</h4>
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure.</p>
				<h4>Request Earlt Access to Get Started</h4>
			</div>
		</div>
	)
}

export default Possibility