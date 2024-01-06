import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { ZonesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function ZonesEditLayout() {
    const api = new ZonesApi();
    let navigate = useNavigate();
    const { zoneID } = useParams();
    const [
        formValues, setFormValues
    ] = useState([]);
    
    useEffect(() => {
        api.getByID(zoneID).then(data => {
            setFormValues(data);
        });
    },[]);

    const onSubmit = () => {
        api.update(formValues, zoneID).catch(err => console.log(err));
        navigate('/zones', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Zone Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Zones Name</label>
                    <ClayInput 
                    placeholder="Brand Name" 
                    type="text" 
                    name='cabrName'
                    value={formValues.zonesName}
                    onChange={(e) => {
                        setFormValues({ zonesName: e.target.value });
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
