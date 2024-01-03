import React, { useCallback, useEffect, useState } from 'react'
import { CarBrandsApi } from '../../../api/MasterApi'
import { Body, Button, Cell, Head, Row, Table } from '@clayui/core';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { Link } from 'react-router-dom';

export default function CarBrandLayout() {
    const api = new CarBrandsApi();
    const [items, setItems] = useState([]);

    // phase componentDidMount
    useEffect(() => {
        api.getCarBrands().then(data => {
            setItems(data);
        });
    },[]);
    const [sort, setSort] = useState(null);
    
    
    const onSortChange = useCallback(sort => {
        if (sort) {
            setItems(items =>
                items.sort((a, b) => {
                    let cmp = new Intl.Collator("en", {
                        numeric: true
                    }).compare(
                        a[sort.column],
                        b[sort.column]
                    );
    
                    if (sort.direction === "descending") {
                        cmp *= -1;
                    }
    
                    return cmp;
                })
            );
        }
    
        setSort(sort);
    }, []);
    return (
        <>
            <h3 className='text-primary'>Car Brands</h3>
            <br />
            <Table onSortChange={onSortChange} sort={sort}>
                <Head>
                    <Cell key='idHead' sortable>No</Cell>
                    <Cell key='brandNameHead' sortable>Brand Name</Cell>
                    <Cell key='actionHead'>Actions</Cell>
                </Head>

                <Body defaultItems={items}>
                    {
                        (items || []).map(item => (
                            <Row key={`Row - ${item.cabrID}`}>
                                <Cell>{item.cabrID}</Cell>
                                <Cell>{item.cabrName}</Cell>
                                <Cell key={`Action - ${item.cabrID}`}>
                                    <ClayButtonGroup>
                                        <Link to={`/car-brands/${item.cabrID}`} className='btn btn-info'>
                                            Edit
                                        </Link>
                                        <Link to='/car-brands' className='btn btn-danger'>
                                            Hapus
                                        </Link>
                                    </ClayButtonGroup>
                                </Cell>
                            </Row>
                        ))
                    }
                </Body>
            </Table>
        </>
    )
}
