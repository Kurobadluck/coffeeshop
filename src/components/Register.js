import React, {Component} from 'react';

import {Link} from 'react-router-dom';
class register extends Component {
 render(){
   return(
      
      <div className="container">
        
        
        <div className="row">
            <div className="col-md-12">
                <h4>Đăng Ký</h4>
                
                <form action="">
                    <div className="form-group">
                      
                      <input  className="iptext" type="text" for="form-control" name="username" id="username"  placeholder="  Tên Đăng Nhập" size="70" color="red"/>
                    </div>
                    <div className="form-group">
                      
                      <input className="iptext" type="text" for="form-control" name="password" id="password" placeholder="  Mật Khẩu" size="70"/>
                    </div>
                    <div className="form-group">
                      
                      <input className="iptext" type="text" for="form-control" name="setpassword" id="setpassword" placeholder="  Xác Nhận Mật Khẩu" size="70"/>
                    </div>
                
                    
                
                    <div className="form-group">
                      <div className="col-sm-10 col-sm-offset-2">
                        <button type="submit" className="btn btn-primary"><Link to='/login'>Đăng Ký</Link></button>
                        <button type="submit" className="btn btn-primary"><Link to='/login'>Trở Về</Link></button>
                      </div>
                    </div>
                </form>
                
            </div>
        </div>
        
        
      </div>
      
   
   );
 }
}

export default register;