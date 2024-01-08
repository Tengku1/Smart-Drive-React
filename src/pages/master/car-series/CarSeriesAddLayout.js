import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarModelsApi, CarSeriesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CarSeriesAddLayout() {
    const api = new CarSeriesApi();
    const carModelApi = new CarModelsApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({});

    const [inputErrors, setInputErros] = useState(true);
    
    const [
        models, setModels
    ] = useState([]);

    useEffect(() => {
        carModelApi.getCarModels().then(data => {
            setModels(data.content);
        });
        if (models.length > 0) {
            setFormValues({ ...formValues, carsCarmId: models[0].carmId });
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!formValues.carsCarmId) {
            setInputErros(true);
        } else {
            api.createCarSeries(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/car-series', { state: { refresh: true } }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select a Model</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, carsCarmId: e.target.value})
                        setInputErros(false)
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Model Below'
                        />
                        {(models).map(item => (
                            <ClaySelect.Option
                            key={item.carmId}
                            label={item.carmName}
                            value={item.carmId}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Total Passenger</label>
                    <ClayInput 
                    type="number" 
                    name='carsPassenger'
                    className='mb-3'
                    onChange={(e) => {
                        setFormValues({ ...formValues, carsPassenger: e.target.value });
                    }}></ClayInput>
                    <label htmlFor="basicInput" className='mb-3'>Series Name</label>
                    <ClayInput 
                    type="text" 
                    name='carsName'
                    onChange={(e) => {
                        setFormValues({ ...formValues, carsName: e.target.value });
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
