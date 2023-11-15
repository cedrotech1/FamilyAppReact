import './login.css';
// import {Link} from 'react-router-dom';
import f1 from './images/lg.png'
function gen() {
    return (
    
      <div className='container'>
        
{/* Row 2____________________________________________________ */}
      <div className='row features'>
          <div className='picx'> 
          
          <img alt='' src={f1} className='f1'/>
          </div>
          
          <div className='textx'>
            
          <form  action="" >
                      <div className="row">
                            <div className="col-md-12 bana"> </div>
                           
                        </div>
                
                <br/>
               
                        <div className="form-group">
                        <span>username</span>  <br/>
                          <input type="text" className="form-control"   placeholder="ENTER YOUR USERNAME"/>
                        </div>
                        <br/>
                        <div className="form-group">
                        <span>password</span> <br/>
                          <input type="password" className="form-control"  placeholder="ENTER YOUR PASSWORD"/>
                        </div>
                    
                
                
                <div className="row">
                 
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"> 
                   <input type="submit" className="btn btn-info col-md-12 col-sm-12 col-sx-12 morex" value="LOGIN"/>
                   {/* <input type="button" onClick={logout} className="btn btn-info col-md-12 col-sm-12 col-sx-12" value="logout"/> */}
                   </div><br></br>
                  
                
                </div>
                <br/>
          
               
                </form>
            
            </div>
        </div>



  
      </div>
    );
  }
  
  export default gen;
  