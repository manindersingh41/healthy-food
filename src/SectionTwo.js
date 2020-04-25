import React from 'react'
import './App.css'
import './grid.css';
import './queries.css';
import { render } from 'react-dom'
import IosInfiniteOutline from 'react-ionicons/lib/IosInfiniteOutline'
import IosStopwatchOutline from 'react-ionicons/lib/IosStopwatchOutline'
import IosNutritionOutline from 'react-ionicons/lib/IosNutritionOutline'
import IosCartOutline from 'react-ionicons/lib/IosCartOutline'


class SectionTwo extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){

    return(
      <div id='Section2' class='Section-features'>
         <div class='row'>

            <h2>Get food fast &mdash; not fast food</h2>
            <p class='long-copy'>Hello, we're Healthyfoods,
             your new premium food delivery service.
             we know you're always busy. No time for cooking.
             So let us take care of that, we're really good at it, we promise!
             </p>
          <div class='row'>
            <div class='col span-1-of-4 box'>
              <IosInfiniteOutline class='icon-big' color='#e67e22' fontSize='60px' rotate={true} />
               <h3>Up to 365 days/year</h3>
               <p>Never cook again! We really mean that.
                Our subscription plans include up to 365 days/year coverage.
               You can also choose to order more flexibly if that's your style</p>
            </div>
            <div class='col span-1-of-4 box'>
              <IosStopwatchOutline class='icon-big' color='#e67e22' fontSize='60px' shake={true}/>
               <h3>Ready in 20 minutes </h3>
               <p>You're only twenty minutes away from your delicious and super
                healthy meals delivere right to your home.
               we work with the best chefs in each town to ensure that you're 100% happy</p>
            </div>
            <div class='col span-1-of-4 box'>
            <IosNutritionOutline class='icon-big' color='#e67e22' fontSize='60px' beat={true}/>
               <h3>100% Organic</h3>
               <p>All our vegetables are fresh, organic and local.
               Animals are raised without added hormones or antibiotics.
              Good for your health, the environment, and it also tastes better!
               </p>
            </div>
            <div class='col span-1-of-4 box'>
            <IosCartOutline class='icon-big' color='#e67e22' fontSize='60px' onClick={() => console.log('Hi!')}/>
               <h3>Order anything</h3>
               <p>
                 We don't limit your creativity, which means you can order whatever you feel like.
                 You can also choosse from our menu containing over 100 delicious meals. It's up
                 to you!
               </p>
            </div>
          </div>
         </div>
      </div>
    )
  }
}
export default SectionTwo
