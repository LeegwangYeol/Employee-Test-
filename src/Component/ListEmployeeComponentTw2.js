import React from 'react'

const ListEmployeeComponent = () => {
  
    const dummyData = [
            {
                "id": 4,
                "firstName": "tester2",
                "lastName": "Lee",
                "email": "Miso"

            },

            {
                "id": 5,
                "firstName": "tester4",
                "lastName": "Lee",
                "email": "Miso"

            },
            {
                "id": 6,
                "firstName": "tester5",
                "lastName": "Lee",
                "email": "Miso"

            }
    ]
  
    return (
    <div>
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
                    dummyData.map(employee =>
                        <tr key={employee.id}>
                             <th>{employee.id}</th>
                                <th>{employee.firstName}</th>
                                <th>{employee.lastName}</th>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent