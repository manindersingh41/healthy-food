import React from  'react'
import './App.css'
import './grid.css'
import './queries.css';
import IosPerson from 'react-ionicons/lib/IosPerson'
import IosStar from 'react-ionicons/lib/IosStar'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

class SectionFive extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='Section-Cities'>
      <div class='row'>
          <h2 id='h2-2ele'>We're currently in these cities</h2>
        </div>
            <div class='row'>
              <div class='col span-1-of-4 box'>
                <img src='/Lisbon-3.jpg' alt='Lisbon'/>
                <h3>LISBON</h3>
                <div class='City-Feature'>
                   <IosPerson class='icon-small' color='#e67e22' fontSize='20px' />
                   1600+ happy eaters
                </div>
                <div class='City-Feature'>
                   <IosStar class='icon-small' color='#e67e22' fontSize='20px' />
                   50+ top chefs
                </div>
                <div class='City-Feature'>
                   <LogoTwitter class='icon-small' color='#e67e22' fontSize='20px' />
                   <a href='#' >@Healthyfoods_lx</a>
                </div>
              </div>


              <div class='col span-1-of-4 box'>
                <img src='/san-francisco.jpg' alt='san-francisco'/>
                <h3>SAN FRANSCISCO</h3>
                <div class='City-Feature'>
                   <IosPerson class='icon-small' color='#e67e22' fontSize='20px' />
                   3700+ happy eaters
                </div>
                <div class='City-Feature'>
                   <IosStar class='icon-small' color='#e67e22' fontSize='20px' />
                   160+ top chefs
                </div>
                <div class='City-Feature'>
                   <LogoTwitter class='icon-small' color='#e67e22' fontSize='20px' />
                   <a href='#' >@Healthyfoods_sf</a>
                </div>
              </div>

              <div class='col span-1-of-4 box'>
                <img src='/berlin.jpg' alt='Lisbon'/>
                <h3>BERLIN</h3>
                <div class='City-Feature'>
                   <IosPerson class='icon-small' color='#e67e22' fontSize='20px' />
                   2300+ happy eaters
                </div>
                <div class='City-Feature'>
                   <IosStar class='icon-small' color='#e67e22' fontSize='20px' />
                   110+ top chefs
                </div>
                <div class='City-Feature'>
                   <LogoTwitter class='icon-small' color='#e67e22' fontSize='20px' />
                   <a href='#' >@Healthyfoods_berlin</a>
                </div>
              </div>


              <div class='col span-1-of-4 box'>
                <img src='/london.jpg' alt='london'/>
                <h3>LONDON</h3>
                <div class='City-Feature'>
                   <IosPerson class='icon-small' color='#e67e22' fontSize='20px' />
                   1200+ happy eaters
                </div>
                <div class='City-Feature'>
                   <IosStar class='icon-small' color='#e67e22' fontSize='20px' />
                   50+ top chefs
                </div>
                <div class='City-Feature'>
                   <LogoTwitter class='icon-small' color='#e67e22' fontSize='20px' />
                   <a href='#'>@Healthyfoods_london</a>
                </div>
              </div>
            </div>
           </div>

    )
  }
}
export default SectionFive
