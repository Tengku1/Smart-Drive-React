import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { TemplateWorkOrderApi, TemplateTaskApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function WorkOrderAddLayout() {
    const api = new TemplateWorkOrderApi();
    const templateTypeApi = new TemplateTaskApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({
        tewoName: '',
        tewoTestaId: null
    });
    
    const [
        task, setTask
    ] = useState([]);

    const [inputErrors, setInputErros] = useState(true);

    useEffect(() => {
        templateTypeApi.getTesta().then(data => {
            setTask(data.content);
        });
        if (task.length > 0) {
            setFormValues({ ...formValues, tewoTestaId: task[0].testaId });
        }
    },[]);

    const onSubmit = (e) => {
        e.preventDefault();
        if (formValues.tewoTestaId === null) {
            setInputErros(true);
        } else {
            api.create(formValues)
                .catch((err) => console.log(err))
                .finally(() => navigate('/work-order', { state: { refresh: true } }));
        }
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Car Brands Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select Task</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, tewoTestaId: e.target.value})
                        setInputErros(false)
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Task Below'
                        />
                        {(task).map(item => (
                            <ClaySelect.Option
                            key={item.testaId}
                            label={item.testaName}
                            value={item.testaId}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Work Order Name</label>
                    <ClayInput 
                    placeholder="Work Order Name" 
                    type="text" 
                    name='tewoName'
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
