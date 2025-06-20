import './homepage.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="left">
            <h1>Drei Ai</h1>
            <h2>I am drei your ai helper, What can i help you?</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo quia necessitatibus aspernatur eiusadas sdasd
            </h3>
            <button>Get Started</button>
        </div>
        <div className="right"></div>
    </div>
  )
}

export default Homepage