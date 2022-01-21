import {connect} from 'react-redux';

import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeView = (props)=>{
    return(

        <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">                            
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/addValue">Add Value</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link" to="/subValue">Sub Value</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div class="Container text-center">
                <h2 class="bg-dark text-light p-4 mt-5 mb-5">Home Screen</h2>
                <h3 class="">Current Value: {props.Result}</h3>
            </div>

            
        </div>
        
    )
}

const mapStateToProps = (state)=>{
    return{
        Result:state.SR.state.Result
    }
}

export default connect(mapStateToProps)(HomeView);