import React from 'react'
import './App.css'
import './grid.css'
import './queries.css';

class SectionFour extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='Section-Steps'>

        <div class='row'>
            <h2 id='h2ele'>How it works &mdash; Simple as 1,2,3</h2>
            </div>

      <div class='row'>
        <div class='col span-1-of-2 steps-box'>
            <img src='/X-HF logo.png' alt='Healthyfoods app on Iphone X' class='app-screen'/>
        </div>


        <div id='box-steps' class='col span-1-of-2 steps-box'>

          <div class='works-step'>
            <div>1</div>
            <p>Choose the subscription plan that best fits your needs and sign up today.</p>
          </div>

          <div class='works-step'>
            <div>2</div>
            <p>Order your delicious meal using our mobile app or website, Or you can even call us!</p>
          </div>

          <div class='works-step'>
            <div>3</div>
            <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
        </div>
        <a href='#' class='btn-app'><img src='/download-app-android.png' alt='Play Store Button'/></a>

        </div>
        </div>

      </div>

    )
  }
}
export default SectionFour
