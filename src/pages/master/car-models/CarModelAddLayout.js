import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarModelsApi, CarBrandsApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CarModelAddLayout() {
    const api = new CarModelsApi();
    const carBrandApi = new CarBrandsApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({
        carmName: '',
        carmCarbId: null
    });

    const [inputErrors, setInputErros] = useState(true);
    
    const [
        brands, setBrands
    ] = useState([]);

    useEffect(() => {
        carBrandApi.getCarBrands().then(data => {
            setBrands(data.content);
        });
        if (brands.length > 0) {
            setFormValues({ ...formValues, carmCarbId: brands[0].cabrID });
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (formValues.carmCarbId === null) {
            setInputErros(true);
        } else {
            api.createCarModels(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/car-models', { state: { refresh: true } }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select a Brand</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, carmCarbId: e.target.value})
                        setInputErros(false)
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Brand Below'
                        />
                        {(brands).map(item => (
                            <ClaySelect.Option
                            key={item.cabrID}
                            label={item.cabrName}
                            value={item.cabrID}
                            />
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
