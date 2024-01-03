import React, { useCallback, useEffect, useState } from 'react'
import { CarBrandsApi } from '../../../api/MasterApi'
import { Body, Cell, Head, Row, Table } from '@clayui/core';
import ClayButtonGroup from '@clayui/button/lib/Group';
import { Link } from 'react-router-dom';
import PanelWidget from '../../../components/PanelWidget';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import ClayManagementToolbar from '@clayui/management-toolbar';
import { ClayInput } from '@clayui/form';
import ClayIcon from '@clayui/icon';

export default function CarBrandLayout() {
    const api = new CarBrandsApi();
    const [items, setItems] = useState([]);
    const [searchMobile, setSearchMobile] = useState(false);

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
            <br />
            <PanelWidget title={'Car Brands Page'} />
            <ClayManagementToolbar>
                <ClayManagementToolbar.ItemList>
                    <ClayManagementToolbar.Search>
                    <ClayInput.Group>
                        <ClayInput.GroupItem>
                        <ClayInput
                            aria-label="Search"
                            className="form-control input-group-inset input-group-inset-after"
                            defaultValue="Red"
                            type="text"
                        />
                        <ClayInput.GroupInsetItem after tag="span">
                            <ClayButtonWithIcon
                            aria-label="Close search"
                            className="navbar-breakpoint-d-none"
                            displayType="unstyled"
                            onClick={() => setSearchMobile(false)}
                            symbol="times"
                            />
                            <ClayButtonWithIcon
                            aria-label="Search"
                            displayType="unstyled"
                            symbol="search"
                            type="submit"
                            />
                        </ClayInput.GroupInsetItem>
                        </ClayInput.GroupItem>
                    </ClayInput.Group>
                    </ClayManagementToolbar.Search>

                    <ClayManagementToolbar.Item>
                    <ClayButton
                        aria-label="Info"
                        className="nav-link nav-link-monospaced"
                        displayType="unstyled"
                        onClick={() => {}}
                    >
                        <ClayIcon symbol="info-circle-open" />
                    </ClayButton>
                    </ClayManagementToolbar.Item>

                    <ClayManagementToolbar.Item>
                    <ClayButtonWithIcon
                        aria-label="Add"
                        className="nav-btn nav-btn-monospaced"
                        symbol="plus"
                    />
                    </ClayManagementToolbar.Item>
                </ClayManagementToolbar.ItemList>
            </ClayManagementToolbar>
            <Table onSortChange={onSortChange} sort={sort}>
                <Head>
                    <Cell key='cabrID' sortable>No</Cell>
                    <Cell key='cabrName' sortable>Brand Name</Cell>
                    <Cell key='actionHead'>Actions</Cell>
                </Head>

                <Body defaultItems={items}>
                    {
                        (items || []).map(item => (
                            <Row key={item.cabrID}>
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
