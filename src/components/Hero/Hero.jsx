import './Hero.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className="hero d-flex al-center">
        <div className="hero-text">
            <h1>Let Your Home Be Unique</h1>
            <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
            <Link to="/about"><Button style="secondary" arrow>Let's go</Button></Link>
        </div>
    </div>
  );
};

export default Hero;