import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { Dialog, dividerClasses } from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

class AddAssignment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false, 
                    assignment:{
                        assignmentName: "",
                        dueDate: "",
                        courseId: 0 
        } };
      };
      
      handleClickOpen = () => {
        this.setState( {open:true} );
      };
  
      handleClose = () => {
        this.setState( {open:false} );
      };
  
    //   handleChange = (event) => {
    //     this.setState({assignment:{assignmentName: event.target.value,
    //                         dueDate: event.target.value,
    //                         courseId: event.target.value}});
    //   }

    handleAssignmentNameChange = (event) => {
        const assignment = this.state.assignment;
        const modifiedValue = event.target.value;
        
        assignment.assignmentName = modifiedValue;
        this.setState({assignment: assignment});
    }

    handleDueDateChange = (event) => {
        const assignment = this.state.assignment;
        const modifiedValue = event.target.value;
        
        assignment.dueDate = modifiedValue;
        this.setState({assignment: assignment});
    }

    handleCourseIdChange = (event) => {
        const assignment = this.state.assignment;
        const modifiedValue = event.target.value;
        
        assignment.courseId = modifiedValue;
        this.setState({assignment: assignment});
    }
  
    // Save course and close modal form
      handleAdd = () => {
        this.props.addAssignment(this.state.assignment);
        this.handleClose();
      }

      render() {

        return (
            <span>
                <Button id="addForm" onClick={this.handleClickOpen} variant="outlined" color="primary">Add Assignment</Button>

                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>Add Assignment</DialogTitle>
                    <DialogContent  style={{paddingTop: 20}} >
                        <TextField autoFocus fullWidth 
                                label="Assignment Name" 
                                name="assignmentName" 
                                onChange={this.handleAssignmentNameChange}  />
                        <TextField style={{marginTop: 7}} autoFocus fullWidth 
                                label="Due Date" 
                                name="dueDate" 
                                onChange={this.handleDueDateChange}   />
                        <TextField style={{marginTop: 7}} autoFocus fullWidth 
                                label="Course ID" 
                                name="courseId" 
                                onChange={this.handleCourseIdChange}  />
                    </DialogContent>
                    <DialogActions>
                        <Button id="cancel" color="secondary" onClick={this.handleClose}>Cancel</Button>
                        <Button id="submit" color="primary" onClick={this.handleAdd}>Add</Button>
                    </DialogActions>
                </Dialog> 
            </span>
            
        )
    }

    // render() {
    //     // const addForm = (e) => {
    //     //     alert("Adding new Assignment");
    //     // }

    //     return (
    //         <span>
    //             <Button onClick={this.handleClickOpen} variant="outlined" color="primary">Add Assignment</Button>

    //             <Dialog open={this.state.open} onClose={this.handleClose}>
    //                 <DialogTitle>Add Assignment</DialogTitle>
    //                 <DialogContent  style={{paddingTop: 20}} >
    //                     <TextField autoFocus fullWidth 
    //                             label="Assignment Name" 
    //                             name="assignmentName" 
    //                             onChange={this.handleAssignmentNameChange}  />
    //                     <TextField style={{marginTop: 7}} autoFocus fullWidth 
    //                             label="Due Date" 
    //                             name="dueDate" 
    //                             onChange={this.handleDueDateChange}   />
    //                     <TextField style={{marginTop: 7}} autoFocus fullWidth 
    //                             label="Course ID" 
    //                             name="courseId" 
    //                             onChange={this.handleCourseIdChange}  />
    //                 </DialogContent>
    //                 <DialogActions>
    //                     <Button color="secondary" onClick={this.handleClose}>Cancel</Button>
    //                     <Button color="primary" onClick={this.handleAdd}>Add</Button>
    //                 </DialogActions>
    //             </Dialog> 
    //         </span>
            
    //     )
    // }
}

// required property:  addCourse is a function to call to perform the Add action
AddAssignment.propTypes = {
    addAssignment : PropTypes.func.isRequired
  }

export default AddAssignment;