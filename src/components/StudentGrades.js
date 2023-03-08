import React  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '@mui/material/Grid';
import {DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie';
import {SERVER_URL} from '../constants.js';

// NOTE:  for OAuth security, http request must have
//   credentials: 'include' 
//

//  required properties -  assignment
//  
//  NOTE: because Gradebook is invoked via <Link> in Assignment.js components
//  properties are passed as attributes of props.location 
//
class StudentGrades extends React.Component {
  constructor(props) {
    super(props);
    console.log("Gradebook.cnstr "+ JSON.stringify(props.location));
    this.state = {  grades : [] };
  } 
  
   componentDidMount() {
    this.fetchAssignmentGrades();
  }

  fetchAssignmentGrades = () => {
    console.log("Gradebook.fetchGrades");
    const token = Cookies.get('XSRF-TOKEN');
    fetch(`${SERVER_URL}/studentgrades`, 
      {  
        method: 'GET', 
        headers: { 'X-XSRF-TOKEN': token },
        credentials: 'include'
      } )
    .then((response) => response.json()) 
    .then((responseData) => { 
      console.log(responseData);
      console.log(Array.isArray(responseData));
      if (Array.isArray(responseData)) { // Array.isArray(responseData.grades)
        //  add to each assignment an "id"  This is required by DataGrid  "id" is the row index in the data grid table 
        this.setState({ grades: responseData.map((grade, index) => ( { id: index, ...grade } )) });
      } else {
        toast.error("Fetch failed.", {
          position: toast.POSITION.BOTTOM_LEFT
        });
      }        
    })
    .catch(err => {
      toast.error("Fetch failed.", {
          position: toast.POSITION.BOTTOM_LEFT
        });
        console.error(err); 
    })
  }


  render() {
     const columns = [
      { field: 'assignmentName', headerName: 'Name', width: 250 },
      { field: 'courseName', headerName: 'Course', width: 250 },
      { field: 'grade', headerName: 'Grade', width: 150 }
      ];
      
      // const assignment = this.props.location.assignment;
    
      return(
          <div className="App">
            <br/>
            <div style={{width:'100%'}}>
              For DEBUG:  display state.
              {JSON.stringify(this.state.assignmentList)}
            </div>
            <br/>
            <div style={{ height: 400, width: '100%' }}>
              <DataGrid rows={this.state.grades} columns={columns} />
            </div>
            <ToastContainer autoClose={1500} />   
          </div>
          ); 
      };
}

export default StudentGrades;