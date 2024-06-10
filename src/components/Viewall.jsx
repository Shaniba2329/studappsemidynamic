import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data,changeData]=useState([
        {"name":"john","rollno":3,"admno":345,"college":"cet"},
        {"name":"jack","rollno":4,"admno":367,"college":"tkm"},
        {"name":"roy","rollno":6,"admno":845,"college":"fisat"},
        {"name":"mary","rollno":5,"admno":895,"college":"scms"},
    ]
)
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">rollno</th>
                                    <th scope="col">admno</th>
                                    <th scope="col">college</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(
                                    (value,index)=> {
                                        return <tr>
                                        <th scope="row">{value.name}</th>
                                        <td>{value.rollno}</td>
                                        <td>{value.admno}</td>
                                        <td>{value.college}</td>
                                    </tr>
                                    }
                                )}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall