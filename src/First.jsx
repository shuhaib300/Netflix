import React from 'react'
import './index.css'
import './App.css'
import {Button, Dropdown, Form} from 'react-bootstrap'
import {FaGlobe, FaGreaterThan, FaPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function first() {
  return (
    <div className='main'>
      <div className="bg_image">
       <div className="fade_top">
      
      <div className='navbar'>
        <img className='logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo" />
                
    
      <Dropdown.Toggle className='lang' id="dropdown-basic">
      <FaGlobe className='globe'/>English
      </Dropdown.Toggle>
      <Dropdown.Menu className='langlist'>
        <Dropdown.Item className='langlist' href="#/english">English</Dropdown.Item>
        <Dropdown.Item className='langlist' href="#/hindi">Hindi</Dropdown.Item>
        <Dropdown.Item className='langlist' href="#/malayalam">Malayalam</Dropdown.Item>
      </Dropdown.Menu>
    
    <Button style={{backgroundColor:"#e50914", borderBlockColor:"#e50914", borderColor:"#e50914"}} className='btn'>Sign In</Button>
    </div>
    <div className="playbuttons">
    <Link to={`/movies`}><Button className='playbutton'>Play</Button></Link>
    </div>
    <div className="fade_bottom">
     <div className='content'>
          <h1 className='content1'>Unlimited movies, TV shows and more.</h1>
          
          <h5 className='content2'>Watch anywhere. Cancel anytime.</h5>
          
          <h6 className='content3'>Ready to watch? Enter your email to create or restart your membership.</h6>
        </div> 
    
        </div> 
        
        <div>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Email address"
              className="me-2"
              aria-label="Search"
            />
            <Button className='emailbutton' variant="outline-success">Get started</Button><FaGreaterThan className='greater'/>
          </Form>  
        </div>              
        </div>
        </div>

        <div className="line"></div>
        <div className="first">
          <h1 className='content4'>Enjoy on your TV.</h1>
          <h3 className='content5'>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players and more. </h3>
          <img className='img1' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Movie" />
        </div>
        <div className="line"></div>
        <div className="first">
          <img className='img2' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
          <h1 className='content6'>Download your shows to watch offline.</h1>
          <h3 className='content7'>Save your favourites easily and always have something to watch.</h3>
          
        </div>
        
        <div className="line"></div>
        <div className="first">
          <img className='img3' src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="" />
          <h1 className='content8'>Watch everywhere.</h1>
          <h3 className='content9'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h3>
          
        </div>

        <div className="line"></div>
        <div className="first">
          <img className='img4' src="https://occ-0-6155-3663.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" alt="" />
          <h1 className='content6'>Create profiles for children.</h1>
          <h3 className='content7'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
          
        </div>

        <div className="line"></div>
        <div className="faq">
          <h1 className='faqhead'>Frequently Asked Questions</h1>
          <div className='faqbox'>What is Netflix?</div><FaPlus className='plus'/>  
          <div className='faqbox'>How much does Netflix cost?</div><FaPlus className='plus'/> 
          <div className='faqbox'>Where can I watch?</div><FaPlus className='plus'/>  
          <div className='faqbox'>How do I cancel?</div><FaPlus className='plus'/>
          <div className='faqbox'>What can I watch on Netflix?</div><FaPlus className='plus'/>
          <div className='faqbox'>Is Netflix good for kids?</div><FaPlus className='plus'/>    
          <h6 className='content10'>Ready to watch? Enter your email to create or restart your membership.</h6>      
          <Form className="d-flex search2">
            <Form.Control 
              type="search"
              placeholder="Email address"
              className="me-2"
              aria-label="Search"
            />
            <Button className='emailbutton2' variant="outline-success">Get started</Button><FaGreaterThan className='greater'/>
          </Form>                
        </div>

        <div className="line"></div>

        <div className="footer">
          <h1 className='content11'>Questions? Call 000-800-919-1694</h1>
          <h3 className='content12'>FAQ</h3>
          <h3 className='content12'>Account</h3>
          <h3 className='content12'>Jobs</h3>
          <h3 className='content12'>Privacy</h3>
          <h3 className='content12'>Contact Us</h3>
          <h3 className='content12'>Only on Netflix</h3>
          <div className='ftrcntnt1'>
          <h3 className='content13'>Gift Card Terms</h3>
          <h3 className='content13'>Media Centre</h3>
          <h3 className='content13'>Ways to Watch</h3>
          <h3 className='content13'>Cookie Preferences</h3>
          <h3 className='content13'>Speed Test</h3>
          </div>
          <div className='ftrcntnt2'>
          <h3 className='content14'>Help Centre</h3>
          <h3 className='content14'>Investor Relations</h3>
          <h3 className='content14'>Terms of Use</h3>
          <h3 className='content14'>Corporate Information</h3>
          <h3 className='content14'>Legal Notices</h3>
          </div>
          <div className='ftrlang'>
          {/* <Dropdown className='lang'> */}
      <Dropdown.Toggle className='lang' id="dropdown-basic">
      <FaGlobe className='globe'/>English
      </Dropdown.Toggle>
      <Dropdown.Menu className='langlist'>
        <Dropdown.Item className='langlist' href="#/english">English</Dropdown.Item>
        <Dropdown.Item className='langlist' href="#/hindi">Hindi</Dropdown.Item>
        <Dropdown.Item className='langlist' href="#/malayalam">Malayalam</Dropdown.Item>
      </Dropdown.Menu>
    {/* </Dropdown>   */}
          </div>
          <div className='ftrcntnt3'>
          <h3 className='content15'>Netflix India</h3>
          </div>
          
        </div>

       

    </div>

  
  )
}

export default first