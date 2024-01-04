import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CarModelsApi, CarSeriesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CarSeriesEditLayout() {
    const api = new CarSeriesApi();
    const carModelApi = new CarModelsApi();
    let navigate = useNavigate();
    const { carsID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({
        carsName: '',
        carsPassenger: 0,
        carsCarmId: null,
    });
    
    const [
        carm, setCarm
    ] = useState([]);

    useEffect(() => {
        carModelApi.getCarModels().then(data => {
            setCarm(data);
        });
    },[]);

    useEffect(() => {
        api.getCarSeriesByID(carsID).then(data => {
            setFormValues({
                carsName: data.carsName,
                carsCarmId: data.carsCarmId
            });
        });
    },[]);

    const onSubmit = () => {
        api.updateCarModels(formValues, carsID).catch(err => console.log(err));
        navigate('/car-series', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Series Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select Car Series</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, carsCarmId: e.target.value})
                    }}>
                        {(carm || []).map(item => (
                            <ClaySelect.Option
                                key={item.carmId}
                                label={item.carmName}
                                value={item.carmId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Brand Name</label>
                    <ClayInput 
                    placeholder="Brand Name" 
                    type="text" 
                    name='cabrName'
                    value={formValues.carsName}
                    onChange={(e) => {
                        setFormValues({ carsName: e.target.value });
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
