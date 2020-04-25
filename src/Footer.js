import React from 'react'
import './App.css'
import './grid.css'
import './queries.css';
import LogoFacebook from 'react-ionicons/lib/LogoFacebook'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'
import LogoGoogleplus from 'react-ionicons/lib/LogoGoogleplus'
import LogoInstagram from 'react-ionicons/lib/LogoInstagram'

class Footer extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='Section-Footer'>
        <div class='row'>
          <div class='col span-1-of-2'>
            <ul class='footer-nav'>
              <li><a href='#'>About us</a></li>
              <li><a href='#'>Blog</a></li>
              <li><a href='#'>Press</a></li>
              <li><a href='#'>iOS App</a></li>
              <li><a href='#'>Android App</a></li>
            </ul>
         </div>
         <div class='col span-1-of-2'>
           <ul class='social-links'>
             <li><LogoFacebook color='#e67e22' fontSize='30px'/></li>
             <li><LogoTwitter color='#e67e22' fontSize='30px'/></li>
             <li><LogoGoogleplus color='#e67e22' fontSize='30px'/></li>
             <li><LogoInstagram color='#e67e22' fontSize='30px'/></li>
           </ul>
        </div>
        </div>
        <div class='row'>
            <p class='foot'>Copyright &copy; 2020 by Healthyfoods. All rights reserved</p>
        </div>
      </div>

    )
  }
}
export default Footer
