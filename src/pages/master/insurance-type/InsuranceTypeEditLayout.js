import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { InsuranceApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function InsuranceTypeEditLayout() {
    const api = new InsuranceApi();
    let navigate = useNavigate();
    const { intyName } = useParams();

    const [
        formValues, setFormValues
    ] = useState({});

    useEffect(() => {
        api.getInsuranceByID(intyName).then(data => {
            setFormValues(data);
        });
    },[]);

    const onSubmit = () => {
        api.update(formValues, intyName).catch(err => console.log(err));
        navigate('/insurance-type', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Category Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Description</label>
                    <ClayInput  
                    type="text" 
                    name='intyDesc'
                    value={formValues.intyDesc}
                    onChange={(e) => {
                        setFormValues({ ...formValues, intyDesc: e.target.value });
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
