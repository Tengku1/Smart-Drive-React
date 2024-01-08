import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { TemplateWorkOrderApi, TemplateTaskApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function WorkOrderEditLayout() {
    const api = new TemplateWorkOrderApi();
    const templateTypeApi = new TemplateTaskApi();
    let navigate = useNavigate();
    const { tewoID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({
        tewoName: '',
        tewoTestaId: null
    });
    
    const [
        task, setTask
    ] = useState([]);

    useEffect(() => {
        templateTypeApi.getTesta().then(data => {
            setTask(data.content);
        });
        api.getByID(tewoID).then(data => {
            setFormValues({
                tewoName: data.tewoName,
                tewoTestaId: data.tewoTestaId
            });
        });
    },[]);

    const onSubmit = () => {
        api.update(formValues, tewoID).catch(err => console.log(err));
        navigate('/work-order', {state: {refresh: true} })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Template Work Order Edit Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select Task</label>
                    <ClaySelect className='mb-3' onChange={(e) => {
                        setFormValues({...formValues, tewoTestaId: parseInt(e.target.value)})
                    }}>
                        {(task || []).map(item => (
                            <ClaySelect.Option
                                key={item.testaId}
                                label={item.testaName}
                                value={item.testaId}
                            ></ClaySelect.Option>
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Work Order Name</label>
                    <ClayInput  
                    type="text" 
                    name='tewoName'
                    value={formValues.tewoName}
                    onChange={(e) => {
                        setFormValues({ ...formValues, tewoName: e.target.value });
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
