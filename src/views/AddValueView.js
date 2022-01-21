import {connect} from 'react-redux';

import { Link } from "react-router-dom";

const AddValueView = (props)=>{
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
                <h2 class="bg-dark text-light p-4 mt-5 mb-5">Add Screen</h2>
                <h3 class="">Current Value: {props.Result}</h3>
                <button onClick={()=>props.reduxAdd(1)}>Aumentar</button>
            </div>

        
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        Result: state.SR.state.Result
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        reduxAdd:(value)=>{
            dispatch({
                type:'ADD',
                value:value
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddValueView);
