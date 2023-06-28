import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


function Admin() {
    const [data, setData] = useState(0);

    useEffect(() => {
        axios.get(" http://localhost:4000/product")
            .then((res) => {
                setData(res.data)
            })
    }, [])
    return (
        <>
            <center>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Age</th>
                            <th>Actin</th>
                        </tr>
                    </thead>

                    {data && data.map((item) => {
                        return (
                            <>
                                <tbody>
                                    <tr>
                                        <td>{item.fname}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.age}</td>
                                        
                                        <ReactWhatsapp  number={item.mobile} message="Hello World!!!" >Send Message</ReactWhatsapp>
                                    </tr>
                                </tbody>
                            </>

                        )
                    })

                    }
                </table>
            </center>
        </>
    )
}
export default Admin;
