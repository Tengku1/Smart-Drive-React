import React, { useState } from 'react'
import ClayForm, { ClayInput } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { ZonesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function ZonesAddLayout() {
    const api = new ZonesApi();
    let navigate = useNavigate();
    const [
        formValues, setFormValues
    ] = useState({});

    const onSubmit = () => {
        api.create(formValues).catch(err => console.log(err));
        navigate('/zones', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Zone Add Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Zone Name</label>
                    <ClayInput 
                    placeholder="Brand Name" 
                    type="text" 
                    name='zonesName'
                    value={formValues !== null ? formValues.zonesName : ''}
                    onChange={(e) => {
                        setFormValues({ ...formValues, zonesName: e.target.value });
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
