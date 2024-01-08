import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CategoriesApi, ZonesApi, InsuranceApi, TemplateInsurancePremiApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function TemplateInsurancePremiEditLayout() {
    const api = new TemplateInsurancePremiApi();
    const insuranceApi = new InsuranceApi();
    const categoryApi = new CategoriesApi();
    const zonesApi = new ZonesApi();
    let navigate = useNavigate();
    const { temiID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({});
    
    const [
        insurance, setInsurance
    ] = useState([]);
    const [
        category, setCategory
    ] = useState([]);
    const [
        zones, setZones
    ] = useState([]);

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

        api.getByID(temiID).then(data => {
            setFormValues({
                temiName: data.temiName,
                temiRateMin: data.temiRateMin,
                temiRateMax: data.temiRateMax,
                temiNominal: data.temiNominal,
                temiType: data.temiType,
                temiZonesId: data.temiZonesId,
                temiIntyName: data.temiIntyName,
                temiCateId: data.temiCateId
            });
        });
    },[]);

    const onSubmit = () => {
        api.update(formValues, temiID).catch(err => console.log(err));
        navigate('/insurance-premi', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Template Insurance Premi Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput">Premi Name</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiName'
                    value={formValues.temiName}
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiName: e.target.value });
                    }}>

                    </ClayInput>
                    <label htmlFor="basicInput">Premi Rate Min</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiRateMin'
                    value={formValues.temiRateMin}
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiRateMin: e.target.value });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput">Premi Rate Max</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiRateMax'
                    value={formValues.temiRateMax}
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiRateMax: e.target.value });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput">Nominal</label>
                    <ClayInput  
                    className='mb-3'
                    type="text" 
                    name='temiNominal'
                    value={formValues.temiNominal}
                    onChange={(e) => {
                        setFormValues({ ...formValues, temiNominal: e.target.value });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput">Select Category</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, temiCateId: parseInt(e.target.value)})
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
                        setFormValues({...formValues, temiIntyName: parseInt(e.target.value)})
                    }}>
                        {(insurance || []).map(item => (
                            <ClaySelect.Option
                                key={item.intyId}
                                label={item.intyName}
                                value={item.intyId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput">Select Zones</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, temiZonesId: parseInt(e.target.value)})
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
