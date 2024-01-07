import React, { useEffect, useState } from 'react'
import ClayForm, { ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { TemplateTypeApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';
import { TetyGroupEnum, TetyNameEnum } from '../../../utils/TetyGroup';

export default function TemplateTypeEditLayout() {
    const api = new TemplateTypeApi();
    let navigate = useNavigate();
    const { tetyID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({
        tetyName: '',
        tetyGroup: ''
    });

    useEffect(() => {
        api.getByID(tetyID).then(data => {
            setFormValues({
                tetyName: data.tetyName,
                tetyGroup: data.tetyGroup
            });
        });
        
    },[]);

    const onSubmit = () => {
        api.update(formValues, tetyID).catch(err => console.log(err));
        navigate('/template-type', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                <label htmlFor="basicInput" className='mb-3'>Select Name</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, tetyName: e.target.value})
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Name Below'
                        />
                        {Object.entries(TetyNameEnum).map(([key, value]) => (
                            <ClaySelect.Option
                            key={key}
                            label={value}
                            value={key}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Select Group</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, tetyGroup: e.target.value})
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Group Below'
                        />
                        {Object.entries(TetyGroupEnum).map(([key, value]) => (
                            <ClaySelect.Option
                            key={key}
                            label={value}
                            value={key}
                            />
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
