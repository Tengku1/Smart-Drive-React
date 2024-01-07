import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { ProvinceApi, RegionPlatApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function RegionPlatAddLayout() {
    const api = new RegionPlatApi();
    const provinceApi = new ProvinceApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({});

    const [inputErrors, setInputErros] = useState(true);
    
    const [
        province, setProvince
    ] = useState([]);

    useEffect(() => {
        provinceApi.getProvince().then(data => {
            setProvince(data);
        });
        if (province.length > 0) {
            setFormValues({ ...formValues, regpProvId: province[0].provId });
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (!formValues.regpProvId) {
            setInputErros(true);
        } else {
            api.create(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/region-plat', { state: { refresh: true } }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Region Plat Add Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select Province</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, regpProvId: e.target.value})
                        setInputErros(false)
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Province Below'
                        />
                        {(province).map(item => (
                            <ClaySelect.Option
                            key={item.provId}
                            label={item.provName}
                            value={item.provId}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Region Plat Name</label>
                    <ClayInput 
                    type="text" 
                    name='regpName'
                    className='mb-3'
                    onChange={(e) => {
                        setFormValues({ ...formValues, regpName: e.target.value });
                    }}></ClayInput>
                    <label htmlFor="basicInput" className='mb-3'>Description</label>
                    <ClayInput 
                    type="text" 
                    name='regpDesc'
                    className='mb-3'
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
