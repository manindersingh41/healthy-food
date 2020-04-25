import React from 'react'
import './App.css'
import './grid.css'
import './queries.css';

class SectionSix extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='Section-testimonials'>
        <div class='row'>
         <h2>Our customers can't live without us</h2>
        </div>
        <div class='row'>
          <div class='col span-1-of-3'>
           <blockquote>Healthyfoods is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
              <cite><img src='/customer-1.jpg'/>Alberto Duncan</cite>
           </blockquote>
          </div>
          <div class='col span-1-of-3'>
           <blockquote>Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Healthyfoods. Me and my family are so in love!
              <cite><img src='/customer-2.jpg'/>Joana Silva</cite>
           </blockquote>
          </div>
          <div class='col span-1-of-3'>
           <blockquote>I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
              <cite><img src='/customer-3.jpg'/>Milton Chapman</cite>
           </blockquote>
          </div>

        </div>
      </div>

    )
  }
}
export default SectionSix



// Section 5: Customer testimonials
// Title: Our customers can't live without us
//
// Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
// (Alberto Duncan)
//
// Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
// (Joana Silva)
//
// I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
// (Milton Chapman)
