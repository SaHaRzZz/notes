import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {setIsConnected, setIsLoading} from '../redux/';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSync, faSignal} from '@fortawesome/free-solid-svg-icons';

import loadingSvg from '../imgs/loading.svg';

const startOnline = (setIsLoading, setIsConnected) => {
    setIsLoading(true);
    //axios call
}

function Online(props) {
    useEffect(() => startOnline(props.setIsLoading, props.setIsConnected) ,[]);
    return (
        <div>
            {props.general.isLoading ? <img src={loadingSvg}/> : <FontAwesomeIcon icon={props.isOnline ? faSignal : faSync} size='2x'/> }
            <hr/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        general: state.general
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsConnected: val => dispatch(setIsConnected(val)),
        setIsLoading: val => dispatch(setIsLoading(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Online);