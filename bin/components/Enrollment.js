import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import {DataGrid} from '@mui/x-data-grid';
import {SERVER_URL} from '../constants.js'
import AddAssignment from './AddAssignment.js';

// NOTE:  for OAuth security, http request must have
//   credentials: 'include' 
//

class Enrollment extends React.Component {
    render() {
        return (
            <div>
                <h1>Page still under construction</h1>
                <h3>The story for this page will be worked on Week 4</h3>
            </div>
        )
    }
}  

export default Enrollment;