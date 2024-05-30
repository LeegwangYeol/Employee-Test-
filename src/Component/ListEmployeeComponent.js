import React,{useEffect, useState} from 'react'
import { listEmployees } from '../Service/EmployeeService';

const ListEmployeeComponent = () => {
  
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        listEmployees().then((response) =>{
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })

    }, [] )
  
    return (
    <div className='container'>
        <h2 className='text-center'>list of employees</h2>
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