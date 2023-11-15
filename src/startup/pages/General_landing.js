import './App1.css';
import {Link} from 'react-router-dom';
import imag1 from './images/b1.png'
import f1 from './images/f1.png'
import Footer from '../components/footer'
function gen() {
  return (
  
    <div className='container'>
    
          <div className='row'>
              <div className='c1'> 
                  <h1 className='title'>Create Or Join Your
                       Family with Family App</h1> 
                <p className='paragraph'>
                Connect, bond, and create unforgettable memories with the Family App.
                Experience the power of togetherness like never before, as this app
                  brings families closer and enhances the way you share, communicate, and organize your precious moments.
                </p>
                <div className='buttons'>
              <button className='start'><Link to="/Login" className="text-decoration-none">  Get started</Link></button>  
              <button className='more'><Link to="/Signup" className="text-decoration-none"> Lean more</Link></button>  
             
                </div>
          </div>
         
        <div className='c2'>
            <img alt='' src={imag1} className='bg' />
          
          </div>
      </div>

{/* Row 2____________________________________________________ */}
      <div className='row features'>
          <div className='pic'> 
          
          <img alt='' src={f1} className='f1x'/>
          </div>
          
          <div className='text'>
            <h1 className='title'>Keep  your memories</h1>
            <p className='ps'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum
              </p> 
            </div>
        </div>



        {/* Row 2____________________________________________________ */}
      <div className='row features'>
          <div className='pic'> 
          
          <img alt='' src={f1} className='f1x'/>
          </div>
          
          <div className='text'>
            <h1 className='title'>Keep  your memories</h1>
            <p className='ps'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum
              </p> 
            </div>
        </div>

  {/* Row 2____________________________________________________ */}
  <div className='row features'>
          <div className='pic'> 
          
          <img alt='' src={f1} className='f1x'/>
          </div>
          
          <div className='text'>
            <h1 className='title'>Keep  your memories</h1>
            <p className='ps'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsumlorem ipsum
              </p> 
            </div>
        </div>



  {/* Row 2____________________________________________________ */}
 
 <Footer/>

{/* container */}
      </div>


  );
}

export default gen;
