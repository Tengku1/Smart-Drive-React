import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarModelsApi, CarBrandsApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CarModelEditLayout() {
    const api = new CarModelsApi();
    const carBrandApi = new CarBrandsApi();
    let navigate = useNavigate();
    const { modelID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({
        carmName: '',
        carmCarbId: null
    });
    
    const [
        brands, setBrands
    ] = useState([]);

    useEffect(() => {
        carBrandApi.getCarBrands().then(data => {
            setBrands(data);
        });
    },[]);

    useEffect(() => {
        api.getCarModelsByID(modelID).then(data => {
            setFormValues({
                carmName: data.carmName,
                carmCarbId: data.carmCarbId
            });
        });
        
    },[]);

    const onSubmit = () => {
        api.updateCarModels(formValues, modelID).catch(err => console.log(err));
        navigate('/car-models', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select a Brand</label>
                    <ClaySelect className='mb-3' defaultValue={formValues.carmCarbId} onChange={(e) => {
                        setFormValues({...formValues, carmCarbId: parseInt(e.target.value)})
                        console.log(formValues)
                    }}>
                        {(brands || []).map(item => (
                            <ClaySelect.Option
                                key={item.cabrID}
                                label={item.cabrName}
                                value={item.cabrID}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Brand Name</label>
                    <ClayInput 
                    placeholder="Brand Name" 
                    type="text" 
                    name='cabrName'
                    value={formValues.carmName}
                    onChange={(e) => {
                        setFormValues({ ...formValues, carmName: e.target.value });
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
