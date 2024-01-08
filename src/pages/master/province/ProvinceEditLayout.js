import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { ProvinceApi, ZonesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function ProvinceEditLayout() {
    const api = new ProvinceApi();
    const zonesApi = new ZonesApi();
    let navigate = useNavigate();
    const { provID } = useParams();
    const [
        formValues, setFormValues
    ] = useState({});
    
    const [
        zones, setZones
    ] = useState([]);

    useEffect(() => {
        zonesApi.getZones().then(data => {
            setZones(data.content);
        });
    },[]);

    useEffect(() => {
        api.getByID(provID).then(data => {
            setFormValues({
                provName: data.provName,
                provZonesId: data.provZonesId
            });
        });
        
    },[]);

    const onSubmit = () => {
        api.update(formValues, provID).catch(err => console.log(err));
        navigate('/province', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'City Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select a Zone</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, provZonesId: e.target.value})
                    }}>
                        {(zones || []).map(item => (
                            <ClaySelect.Option
                                key={item.zonesId}
                                label={item.zonesName}
                                value={item.zonesId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Province Name</label>
                    <ClayInput 
                    type="text" 
                    name='provName'
                    value={formValues.provName}
                    onChange={(e) => {
                        setFormValues({ ...formValues, provName: e.target.value });
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
