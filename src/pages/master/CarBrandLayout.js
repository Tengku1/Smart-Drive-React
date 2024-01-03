import React, { useEffect, useState } from 'react'
import carBrandApi from '../../api/carBrandApi';
import ClayButton from '@clayui/button';
import { Link } from 'react-router-dom';

export default function CarBrandLayout() {
    const [
        carBrand, setCarBrand
    ] = useState([]);

    // phase componentDidMount
    useEffect(() => {
        carBrandApi.allRow().then(data => {
            setCarBrand(data);
        });
    },[]);

    return (
        <>
            <h3 className='text-primary'>Car Brands</h3>
            <br />
            <table className='table table-hover table-bordered'>
                <thead>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Car Brand Name</th>
                    <th colSpan={2} className='text-center'>Action</th>
                </thead>
                <tbody>
                    {
                        (carBrand || []).map(carb => (
                            <tr>
                                <td>{carb.cabrID}</td>
                                <td>{carb.cabrName}</td>
                                <td className='text-center'>
                                    <Link 
                                    to={`/master/car-brands/${carb.cabrID}`}
                                    >
                                        <ClayButton className='bg-info border-0'>{"Edit"}</ClayButton>
                                    </Link>
                                </td>
                                <td className='text-center'>
                                    <ClayButton className='bg-danger border-0'>{"Hapus"}</ClayButton>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
