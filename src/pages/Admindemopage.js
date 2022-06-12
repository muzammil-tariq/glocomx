import React, { Component , Fragment } from "react";
import Adminsidebar from '../components/Adminsidebar';
import AdminTopnav from '../components/AdminTopnav';
import Adminfooter from '../components/Adminfooter';

class Adminproductadd extends Component {
    render() {
        return (
            <Fragment> 
                <div id="wrapper">   
                    <Adminsidebar />

                    
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <AdminTopnav />

                            <div className="container px-3 py-4">
                                <div className="row">
                                    
                                </div>
                            </div>
                            
                        <Adminfooter />

                        </div>
                    </div>

                </div>
            </Fragment> 
        );
    }
}

export default Adminproductadd;