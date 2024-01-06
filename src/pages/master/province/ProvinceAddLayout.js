import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { ProvinceApi, ZonesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function ProvinceAddLayout() {
    const api = new ProvinceApi();
    const zonesApi = new ZonesApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({});

    const [inputErrors, setInputErros] = useState(true);
    
    const [
        zones, setZones
    ] = useState([]);

    useEffect(() => {
        zonesApi.getZones().then(data => {
            setZones(data);
        });
        if (zones.length > 0) {
            setFormValues({ ...formValues, provZonesId: zones[0].zonesId });
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!formValues.provZonesId) {
            setInputErros(true);
        } else {
            api.create(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/province', { state: { refresh: true } }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Province Add Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select Zones</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, provZonesId: e.target.value})
                        setInputErros(false)
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Zone Below'
                        />
                        {(zones).map(item => (
                            <ClaySelect.Option
                            key={item.zonesId}
                            label={item.zonesName}
                            value={item.zonesId}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Province Name</label>
                    <ClayInput 
                    type="text" 
                    name='cityName'
                    className='mb-3'
                    onChange={(e) => {
                        setFormValues({ ...formValues, provName: e.target.value });
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
