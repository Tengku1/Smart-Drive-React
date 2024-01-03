import React, { useEffect, useState } from 'react'
import { CarSeriesApi } from '../../../api/MasterApi'

export default function CarSeriesLayout() {
    const api = new CarSeriesApi();
    const [
        carModel, setCarModel
    ] = useState([]);

    // phase componentDidMount
    useEffect(() => {
        api.getCarSeries().then(data => {
            setCarModel(data);
        });
    },[]);

    return (
        <>
            <h2>Car Series Table</h2>
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
