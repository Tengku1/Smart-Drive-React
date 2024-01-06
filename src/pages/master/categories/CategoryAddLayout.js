import React, { useState } from 'react'
import ClayForm, { ClayInput } from '@clayui/form';
import { useNavigate } from 'react-router-dom';
import Button from '@clayui/button';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { CategoriesApi } from '../../../api/MasterApi'
import PanelWidget from '../../../components/PanelWidget';

export default function CategoryAddLayout() {
    const api = new CategoriesApi();
    let navigate = useNavigate();

    const [
        formValues, setFormValues
    ] = useState({});

    const onSubmit = () => {
        api.create(formValues)
            .catch((err) => console.log(err));
        navigate('/categories', { state: { refresh: true } })
    }

    return (
        <>
            <ClayForm className='px-4 py-3 rounded border bg-white' onSubmit={onSubmit}>
                <PanelWidget title={'Category Create Form'} />
                <ClayForm.Group className="form-group">
                    <label htmlFor="basicInput" className='mb-3'>Category Name</label>
                    <ClayInput 
                    type="text" 
                    name='cateName'
                    onChange={(e) => {
                        setFormValues({ ...formValues, cateName: e.target.value });
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
