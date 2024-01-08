import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CitiesApi, AreaWorkGroupApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function AreaWorkGroupAddLayout() {
    const api = new AreaWorkGroupApi();
    const citiesApi = new CitiesApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({});

    const [inputErrors, setInputErros] = useState(true);
    
    const [
        cities, setCities
    ] = useState([]);

    useEffect(() => {
        citiesApi.getCities().then(data => {
            setCities(data.content);
        });
        if (cities.length > 0) {
            setFormValues({ ...formValues, arwgCityId: cities[0].cityId });
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!formValues.arwgCityId) {
            setInputErros(true);
        } else {
            api.create(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/area-work-group', { state: { refresh: true } }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Area Work Group Add Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select City</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, arwgCityId: e.target.value})
                        setInputErros(false)
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Province Below'
                        />
                        {(cities).map(item => (
                            <ClaySelect.Option
                            key={item.cityId}
                            label={item.cityName}
                            value={item.cityId}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Code</label>
                    <ClayInput 
                    type="text" 
                    name='arwgCode'
                    className='mb-3'
                    onChange={(e) => {
                        setFormValues({ ...formValues, arwgCode: e.target.value });
                    }}></ClayInput>
                    <label htmlFor="basicInput" className='mb-3'>Description</label>
                    <ClayInput 
                    type="text" 
                    name='arwgDesc'
                    className='mb-3'
                    onChange={(e) => {
                        setFormValues({ ...formValues, arwgDesc: e.target.value });
                    }}></ClayInput>
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
