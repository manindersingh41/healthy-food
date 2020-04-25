import React from 'react'
import './App.css'
import './grid.css'
import './queries.css';
import IosCheckmark from 'react-ionicons/lib/IosCheckmark'
import IosClose from 'react-ionicons/lib/IosClose'



class SectionSeven extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='Section-Plans'>
         <div class='row'>
            <h2>Start eating healthy today</h2>
         </div>
         <div class='row'>
            <div class='col span-1-of-3'>
              <div class='plan-box'>
                <div>
                   <h3>Premium</h3>
                   <p class='plan-price'>399$ <span>/ month</span></p>
                   <p class='plan-price-meal'>That’s only 13.30$ per meal</p>
                   </div>
                   <div>
                   <ul>
                      <li><IosCheckmark color='#e67e22' size='60px' />1 meal every day</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Order 24/7</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Access to newest creations</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Free delivery</li>
                   </ul>
                </div>
                <div>
                    <a href="#" class='btn btn-full'>Sign up now</a>
                </div>
              </div>

            </div>
            <div class='col span-1-of-3'>
              <div class='plan-box'>
                <div>
                   <h3>Pro</h3>
                   <p class='plan-price'>149$ <span>/ month</span></p>
                   <p class='plan-price-meal'>That’s only 14.90$ per meal</p>
                   </div>
                   <div>
                   <ul>
                      <li><IosCheckmark color='#e67e22' size='60px' />1 meal every day</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Order 24/7</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Access to newest creations</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Free delivery</li>
                   </ul>
                </div>
                <div>
                    <a href="#" class='btn btn-ghost'>Sign up now</a>
                </div>
              </div>

            </div>
            <div class='col span-1-of-3'>
              <div class='plan-box'>
                <div>
                   <h3>Starter</h3>
                   <p class='plan-price'>19$ <span>/ meal</span></p>
                   <p class='plan-price-meal'>&nbsp;</p>
                   </div>
                   <div>
                   <ul>
                      <li><IosCheckmark color='#e67e22' size='60px' />1 meal</li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Order from 8 am to 12 pm</li>
                      <li><IosClose color='#e67e22' size='60px' /></li>
                      <li><IosCheckmark color='#e67e22' size='60px' />Free delivery</li>
                   </ul>
                </div>
                <div>
                    <a href="#" class='btn btn-ghost'>Sign up now</a>
                </div>
              </div>

            </div>
         </div>
      </div>

    )
  }
}
export default SectionSeven
//
// Plan 3: Starter
// 19$ per meal
// 1 meal
// Order from 8 am to 12 pm
//Free delivery
