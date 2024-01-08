import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CitiesApi, ProvinceApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CitiesEditLayout() {
    const api = new CitiesApi();
    const provinceApi = new ProvinceApi();
    let navigate = useNavigate();
    const { cityID } = useParams();

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
        api.getbyID(cityID).then(data => {
            setFormValues({
                cityName: data.cityName,
                cityProvId: data.cityProvId
            });
        });
        
    },[]);

    const onSubmit = () => {
        api.update(formValues, cityID).catch(err => console.log(err));
        navigate('/cities', {state: {refresh: true} })
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
                    <label htmlFor="basicInput" className='mb-3'>City Name</label>
                    <ClayInput 
                    placeholder="City Name" 
                    type="text" 
                    name='cityName'
                    value={formValues.cityName}
                    onChange={(e) => {
                        setFormValues({ ...formValues, cityName: e.target.value });
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
