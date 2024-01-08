import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarModelsApi, CarSeriesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CarModelEditLayout() {
    const api = new CarSeriesApi();
    const carModelApi = new CarModelsApi();
    let navigate = useNavigate();
    const { seriesID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({});
    
    const [
        models, setModels
    ] = useState([]);

    useEffect(() => {
        carModelApi.getCarModels().then(data => {
            setModels(data.content);
        });
    },[]);

    useEffect(() => {
        api.getCarSeriesByID(seriesID).then(data => {
            setFormValues({
                carsName: data.carsName,
                carsCarmId: data.carsCarmId
            });
        });
        
    },[]);

    const onSubmit = () => {
        api.updateCarSeries(formValues, seriesID).catch(err => console.log(err));
        navigate('/car-series', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select a Models</label>
                    <ClaySelect className='mb-3' defaultValue={formValues.carsCarmId} onChange={(e) => {
                        setFormValues({...formValues, carsCarmId: parseInt(e.target.value)})
                        console.log(formValues)
                    }}>
                        {(models || []).map(item => (
                            <ClaySelect.Option
                                key={item.carmId}
                                label={item.carmName}
                                value={item.carmId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Series Name</label>
                    <ClayInput 
                    placeholder="Series Name" 
                    type="text" 
                    name='carsName'
                    value={formValues.carsName}
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
