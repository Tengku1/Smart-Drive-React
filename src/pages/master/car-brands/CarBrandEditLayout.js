import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarBrandsApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CarBrandEditLayout() {
    const api = new CarBrandsApi();
    let navigate = useNavigate();
    const { brandId } = useParams();
    const [
        formValues, setFormValues
    ] = useState([]);
    
    useEffect(() => {
        api.getCarBrandsByID(brandId).then(data => {
            setFormValues(data);
        });
    },[]);

    const onSubmit = () => {
        api.updateCarBrands(formValues, brandId).catch(err => console.log(err));
        navigate('/car-brands', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Car Brand Name</label>
                    <ClayInput 
                    placeholder="Brand Name" 
                    type="text" 
                    name='cabrName'
                    value={formValues.cabrName}
                    onChange={(e) => {
                        setFormValues({ cabrName: e.target.value });
                    }}>

                    </ClayInput>
                    <ClayButtonGroup className='mt-3 col-12 pl-0'>
                        <Button className='col-1 border-0' type='submit'>Save</Button>
                        <Button className='bg-danger col-1 border-0'>Clear</Button>
                        <Button displayType="secondary" onClick={() => navigate(-1)}>
                            Back
                        </Button>
                    </ClayButtonGroup>
                </ClayForm.Group>
            </ClayForm>
        </>
    )
}
