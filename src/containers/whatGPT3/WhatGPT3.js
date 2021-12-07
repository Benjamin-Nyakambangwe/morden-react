import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

const WhatGPT3 = () => {
	return (
		<div className="gpt3__whatgpt3 section__margin" id="wgpt3">
			<div className="gpt3__whatgpt3-feature">
				<Feature title="What is GPT-3" text="As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure."/>
			</div>
			<div className="gpt3__whatgpt3-heading">
				<h1 className="gradient__text">
					The possibilities are beyond your imagination
				</h1>
				<p>Explore The Library</p>
			</div>
			<div className="gpt3__whatgpt3-container">
				<Feature title="Chatbots" text="As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure."/>
				<Feature title="Knowledge" text="As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure."/>
				<Feature title="Education" text="As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure."/> 
			</div>
		</div>
	)
}

export default WhatGPT3