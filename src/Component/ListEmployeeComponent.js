import React,{useEffect, useState} from 'react'
import { listEmployees } from '../Service/EmployeeService';
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
  
    const [employees, setEmployees] = useState([]);

    const Navigator =  useNavigate();

    useEffect(() => {
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [] )
  
    function addNewEmployee(){
        Navigator('/add-employee');
    }
    
    return (
    <div className='container'>
        <h2 className='text-center'>list of employees</h2>
        <div class="d-grid gap-2 d-md-block">
            <button class="btn btn-primary" type="button" onClick={addNewEmployee}>Add New Employee</button>
        </div>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>employee id</th>
                    <th>employee firstname</th>
                    <th>employee lastname</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employe =>
                        <tr key={employe.id}>
                             <th>{employe.id}</th>
                                <th>{employe.firstName}</th>
                                <th>{employe.lastName}</th>
                            <td>{employe.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent