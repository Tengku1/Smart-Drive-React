import React, { useEffect, useState } from 'react'
import categoryApi from '../../api/CarModelApi';

export default function CarModelLayout() {
    const [
        carModel, setCarModel
    ] = useState([]);

    // phase componentDidMount
    useEffect(() => {
        categoryApi.findRow().then(data => {
            setCarModel(data);
        });
    },[]);

    return (
        <>
            <h2>Car Models Table</h2>
            <br />
            <table>
                <thead>
                    <th>ID</th>
                    <th>Car Model Name</th>
                </thead>
                <tbody>
                    {
                        (carModel || []).map(carm => (
                            <tr>
                                <td>{carm.carmId}</td>
                                <td>{carm.carmName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
