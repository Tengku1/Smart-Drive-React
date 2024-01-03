import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput } from '@clayui/form';
import { useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarBrandsApi } from '../../../api/MasterApi'

export default function CarBrandEditLayout() {
    const api = new CarBrandsApi();
    const { brandId } = useParams();
    const [
        carBrand, setCarBrand
    ] = useState([]);
    
    // phase componentDidMount
    useEffect(() => {
        api.getCarBrandsByID(brandId).then(data => {
            setCarBrand(data);
        });
    },[]);

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white'>
            <ClayForm.Group className="form-group">
                <label htmlFor="basicInput" className='mb-3'>Car Brand Name</label>
                <ClayInput placeholder="cabrName" type="text" value={carBrand.cabrName}></ClayInput>
                <ClayButtonGroup className='mt-3 col-12 pl-0'>
                    <Button className='col-1 border-0'>Save</Button>
                    <Button className='bg-danger col-1 border-0'>Clear</Button>
                </ClayButtonGroup>
            </ClayForm.Group>
            </ClayForm>
        </>
    )
}
