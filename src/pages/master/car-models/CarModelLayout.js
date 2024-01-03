import React, { useEffect, useState } from 'react'
import { CarModelsApi } from '../../../api/MasterApi'

export default function CarModelLayout() {
    const api = new CarModelsApi();
    const [
        carModel, setCarModel
    ] = useState([]);

    // phase componentDidMount
    useEffect(() => {
        api.getCarModels().then(data => {
            setCarModel(data);
        });
    },[]);

    return (
        <>
            <h2>Car Models Table</h2>
            <br />
            <table className='table table-hover table-bordered'>
                <thead>
                    <th>ID</th>
                    <th>Model Name</th>
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
