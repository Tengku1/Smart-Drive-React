import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { ProvinceApi, RegionPlatApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function RegionPlatEditLayout() {
    const api = new RegionPlatApi();
    const provinceApi = new ProvinceApi();
    let navigate = useNavigate();
    const { regpID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({});
    
    const [
        province, setProvince
    ] = useState([]);

    useEffect(() => {
        provinceApi.getProvince().then(data => {
            setProvince(data.content);
        });
    },[]);

    useEffect(() => {
        api.getByID(regpID).then(data => {
            setFormValues({
                regpDesc: data.regpDesc,
                regpProvId: data.regpProvId
            });
        });
        
    },[]);

    const onSubmit = () => {
        api.update(formValues, regpID).catch(err => console.log(err));
        navigate('/region-plat', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'City Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select a Province</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, cityProvId: e.target.value})
                    }}>
                        {(province || []).map(item => (
                            <ClaySelect.Option
                                key={item.provId}
                                label={item.provName}
                                value={item.provId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Description</label>
                    <ClayInput
                    type="text" 
                    name='regpDesc'
                    value={formValues.regpDesc}
                    onChange={(e) => {
                        setFormValues({ ...formValues, regpDesc: e.target.value });
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
