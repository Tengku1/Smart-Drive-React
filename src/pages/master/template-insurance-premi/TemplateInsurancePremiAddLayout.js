import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CategoriesApi, ZonesApi, InsuranceApi, TemplateInsurancePremiApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function TemplateInsurancePremiAddLayout() {
    const api = new TemplateInsurancePremiApi();
    const insuranceApi = new InsuranceApi();
    const categoryApi = new CategoriesApi();
    const zonesApi = new ZonesApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({
        temiName: "",
        temiRateMin: 0,
        temiRateMax: 0,
        temiNominal: 0,
        temiZonesId: null,
        temiIntyName: null,
        temiCateId: null
    });
    
    const [
        insurance, setInsurance
    ] = useState([]);
    const [
        category, setCategory
    ] = useState([]);
    const [
        zones, setZones
    ] = useState([]);

    const [inputErrors, setInputErros] = useState(true);

    useEffect(() => {
        insuranceApi.getInsurances().then(data => {
            setInsurance(data.content);
        });
        categoryApi.getCategories().then(data => {
            setCategory(data.content);
        });
        zonesApi.getZones().then(data => {
            setZones(data.content);
        });
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (formValues.temiCateId === null || formValues.temiZonesId === null || formValues.temiIntyName === null) {
            setInputErros(true);
        } else {
            api.create(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/insurance-premi', {state: {refresh: true} }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Template Insurance Premi Add Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput">Premi Name</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiName'
                    required
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiName: e.target.value });
                    }}>

                    </ClayInput>
                    <label htmlFor="basicInput">Premi Rate Min</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiRateMin'
                    required
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiRateMin: parseFloat(e.target.value) });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput">Premi Rate Max</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiRateMax'
                    required
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiRateMax: parseFloat(e.target.value) });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput">Nominal</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiNominal'
                    required
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiNominal: parseFloat(e.target.value) });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput">Select Category</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, temiCateId: parseInt(e.target.value)})
                        setInputErros(false)
                    }}>
                        {(category || []).map(item => (
                            <ClaySelect.Option
                                key={item.cateId}
                                label={item.cateName}
                                value={item.cateId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput">Select Insurance Type</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, temiIntyName: e.target.value})
                        setInputErros(false)
                    }}>
                        {(insurance || []).map(item => (
                            <ClaySelect.Option
                                key={item.intyName}
                                label={item.intyName}
                                value={item.intyName}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput">Select Zones</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, temiZonesId: parseInt(e.target.value)})
                        setInputErros(false)
                    }}>
                        {(zones || []).map(item => (
                            <ClaySelect.Option
                                key={item.zonesId}
                                label={item.zonesName}
                                value={item.zonesId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
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
