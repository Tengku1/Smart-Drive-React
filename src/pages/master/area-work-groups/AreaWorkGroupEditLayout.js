import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { AreaWorkGroupApi, CitiesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function AreaWorkGroupEditLayout() {
    const api = new AreaWorkGroupApi();
    const citiesApi = new CitiesApi();
    let navigate = useNavigate();
    const { arwgCode } = useParams();

    const [
        formValues, setFormValues
    ] = useState({});
    
    const [
        cities, setCities
    ] = useState([]);

    useEffect(() => {
        citiesApi.getCities().then(data => {
            setCities(data.content);
        });
    },[]);

    useEffect(() => {
        api.getByID(arwgCode).then(data => {
            setFormValues(data);
        });
        
    },[]);

    const onSubmit = () => {
        api.update(formValues, arwgCode).catch(err => console.log(err));
        navigate('/area-work-group', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'City Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select City</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, arwgCityId: e.target.value})
                    }}>
                        {(cities || []).map(item => (
                            <ClaySelect.Option
                                key={item.cityId}
                                label={item.cityName}
                                value={item.cityId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Description</label>
                    <ClayInput  
                    type="text" 
                    name='arwgDesc'
                    value={formValues.arwgDesc}
                    onChange={(e) => {
                        setFormValues({ ...formValues, arwgDesc: e.target.value });
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
