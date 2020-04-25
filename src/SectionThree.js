import React from 'react'
import './App.css';
import './queries.css';

class SectionThree extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='section-meals'>
        <ul class='meals-showcase'>
            <li>
              <figure class='meal-photo'>
                <img src='/1.jpg' />
              </figure>
            </li>
            <li>
              <figure class='meal-photo'>
                <img src='/2.jpg' />
              </figure>
            </li>
            <li>
              <figure class='meal-photo'>
                <img src='/3.jpg' />
              </figure>
            </li>
            <li>
              <figure class='meal-photo'>
                <img src='/4.jpg' />
              </figure>
            </li>
        </ul>
        <ul class='meals-showcase'>
            <li>
              <figure class='meal-photo'>
                <img src='/5.jpg' />
              </figure>
            </li>
            <li>
              <figure class='meal-photo'>
                <img src='/6.jpg' />
              </figure>
            </li>
            <li>
              <figure class='meal-photo'>
                <img src='/7.jpg' />
              </figure>
            </li>
            <li>
              <figure class='meal-photo'>
                <img src='/8.jpg' />
              </figure>
            </li>
        </ul>
      </div>
    )
  }
}

export default SectionThree
