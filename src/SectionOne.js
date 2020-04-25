import React from 'react'
import './App.css'
import './queries.css'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css"
// import {Button} from 'shards-react'



class SectionOne extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div>
        <header>
              <meta name='viewport' content='width=device-width, intial-scale=1.0'/>
              <nav>
                 <div class='row'>
                 <img src='/White-HF logo.png' alt='Healthyfoods logo' class='logo' />
                 <ul class='main-nav'>
                  <li><a href=''>Food delivery</a></li>
                  <li><a href=''>How it works</a></li>
                  <li><a href=''>Our cities</a></li>
                  <li><a href=''>Sign up</a></li>
                 </ul>
                 </div>
              </nav>
            <div class='hero-text-box'>
              <h1>Goodbye junk food.<br /> Hello super healthy meals.</h1>
              <a class='btn btn-full' href='#'>I'm hungry</a>
              <a class='btn btn-ghost' href='#'>Show me more!</a>
            </div>
        </header>
      </div>
    )
  }
}
export default SectionOne
