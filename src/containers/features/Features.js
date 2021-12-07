import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
	{
		title:'Imoroving and disrupts instantly ',
		text: 'As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure.'
	 },
	 {
		title:'Imoroving and disrupts instantly ',
		text: 'As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure.'
	 },
	 {
		title:'Imoroving and disrupts instantly ',
		text: 'As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure.'
	 },
	 {
		title:'Imoroving and disrupts instantly ',
		text: 'As a user, on the dashboard I should be able to see a section that predicts future cashflow for the business. I should be able to predict future revenue and costs structure.'
	 },
]

const Features = () => {
	return (
		<div className="gpt3__features section__padding" id='features'>
			<div className="gpt3__features-heading">
				<h1 className="gradient__text">
					The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
				</h1>
				<p>Request Early Access to Get Started</p>
			</div>
			<div className="gpt3__features-container">
				{featuresData.map((item, index) => 
					<Feature title={item.title} text={item.text} key={index}/>
					)}
			</div>
		</div>
	)
}

export default Features