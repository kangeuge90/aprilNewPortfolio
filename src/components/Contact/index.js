// 4-22-2022 CONTACT FORM OMMITTED.  emailjs not used ~1:12:00

import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Contact = () => {
  return (
    <>
      <div className="container contactPage">
        <div className="textZone">
          <h1>
            <AnimatedLetters
              letterClass={'textAnimate'}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am open to freelance opportunities! I am also open to work as a
            software engineer or fullstack web developer. Feel free to contact
            me for any inquiries or offers.
          </p>
          <div className="contactForm">
            <form>
              <ul>
                <li className="halfWidthContactForm">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="halfWidthContactForm">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                {/* next list items are entire width of contact form */}
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="messsage"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type='submit' className='flatButton' value='SEND' />
                </li>

              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="ball-scale" />
    </>
  )
}

export default Contact
