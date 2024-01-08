import React, { useEffect, useState } from 'react'
import ClayForm, { ClayInput, ClaySelect } from '@clayui/form';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { TemplateTaskApi, TemplateTypeApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function TemplateTaskAddLayout() {
    const api = new TemplateTaskApi();
    const templateTypeApi = new TemplateTypeApi();
    let navigate = useNavigate();
    const { taskID } = useParams();

    const [
        formValues, setFormValues
    ] = useState({});
    
    const [
        type, setType
    ] = useState([]);

    useEffect(() => {
        templateTypeApi.getTety().then(data => {
            setType(data.content);
        });
        api.getByID(taskID).then(data => {
            setFormValues({
                testaName: data.testaName,
                testaGroup: data.testaGroup,
                testaCallMethod: data.testaCallMethod,
                testaSeqOrder: data.testaSeqOrder,
                testaTetyId: data.testaTetyId
            });
        });
    },[]);

    const onSubmit = (e) => {
        api.update(formValues, taskID)
            .catch((err) => console.log(err));
        navigate('/template-task', { state: { refresh: true } })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Template Type Add Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Select Template Type</label>
                    <ClaySelect required className='mb-3' 
                    onChange={(e) => {
                        setFormValues({...formValues, testaTetyId: parseInt(e.target.value)})
                    }}
                    >
                        <ClaySelect.Option
                            label='Select The Task Below'
                        />
                        {(type).map(item => (
                            <ClaySelect.Option
                            key={item.tetyId}
                            label={item.tetyName}
                            value={item.tetyId}
                            />
                        ))}
                    </ClaySelect>
                    <label htmlFor="basicInput" className='mb-3'>Task Name</label>
                    <ClayInput 
                    type="text" 
                    name='testaName'
                    value={formValues.testaName}
                    onChange={(e) => {
                        setFormValues({ ...formValues, testaName: e.target.value });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput" className='mb-3'>Call Method Name</label>
                    <ClayInput 
                    type="text" 
                    name='testaCallMethod'
                    value={formValues.testaCallMethod}
                    onChange={(e) => {
                        setFormValues({ ...formValues, testaCallMethod: e.target.value });
                    }}>
                    </ClayInput>
                    <label htmlFor="basicInput" className='mb-3'>Seq Order</label>
                    <ClayInput 
                    type="text" 
                    name='testaSeqOrder'
                    value={formValues.testaSeqOrder}
                    onChange={(e) => {
                        setFormValues({ ...formValues, testaSeqOrder: parseInt(e.target.value) });
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
