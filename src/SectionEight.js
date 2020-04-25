import React from 'react'
import './App.css'
import './grid.css'
import './queries.css';

class SectionEight extends React.Component{
  constructor(){
    super()
    this.state={

    }
  }
  render(){
    return(
      <div class='Section-Form'>
        <div class='row'>
          <h2>We're happy to hear from you</h2>
        </div>
        <div class='row'>
          <form method='post' action='#' class='contact-form'>
            <div class='row'>
              <div class='col span-1-of-3'>
                <label for='name'>Name</label>
              </div>
              <div class='col span-2-of-3'>
                <input type='text' name='name' id='name' placeholder='Your name' required />
              </div>
            </div>
            <div class='row'>
              <div class='col span-1-of-3'>
                <label for='email'>Email</label>
              </div>
              <div class='col span-2-of-3'>
                <input type='email' name='email' id='email' placeholder='Your email' required />
              </div>
            </div>
            <div class='row'>
              <div class='col span-1-of-3'>
                <label for='find-us'>How did you find us?</label>
              </div>
              <div class='col span-2-of-3'>
                <select name='find-us' id='find-us'>
                  <option value='friends' selected>Friends</option>
                  <option value='search' >Search Engine</option>
                  <option value='ad'>Advertisment</option>
                </select>
              </div>
            </div>
              <div class='row'>
                <div class='col span-1-of-3'>
                  <label for='news'>Newsletter</label>
                </div>
                <div class='col span-2-of-3'>
                  <input type='checkbox' name='news' id='news' checked /> Yes, please
                </div>
              </div>
              <div class='row'>
                <div class='col span-1-of-3'>
                  <label>Drop us a line</label>
                </div>
                <div class='col span-2-of-3'>
                  <textarea name='message' id='message' placeholder='Your message' ></textarea>
                </div>
              </div>
              <div class='row'>
                <div class='col span-1-of-3'>
                  <label>&nbsp;</label>
                </div>
                <div class='col span-2-of-3'>
                  <input type='submit' value='Send it!'/>
                </div>
              </div>
          </form>
        </div>
      </div>

    )
  }
}
export default SectionEight

// Section 7: Contact form
// Title: We're happy to hear from you
//
// Fields to include:
// Name
// Email
// How did you find us?
// Newsletter
// Drop us a line
//
// Section 8: Footer
// Title: None
//
// Navigation:
// 1. About us
// 2. Blog
// 3. Press
// 4. iOS App
// 5. Android App
//
// Also include links to facebook, twitter, google+ and Instagram accounts.
