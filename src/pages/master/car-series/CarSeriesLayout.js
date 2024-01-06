import React, { useCallback, useEffect, useState } from 'react'
import { CarSeriesApi } from '../../../api/MasterApi'
import { Body, Cell, Head, Row, Table } from '@clayui/core';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import PanelWidget from '../../../components/PanelWidget';
import ClayManagementToolbar from '@clayui/management-toolbar';
import { ClayInput } from '@clayui/form';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';

export default function CarSeriesLayout() {
    const api = new CarSeriesApi();
    const [items, setItems] = useState([]);
    const [sort, setSort] = useState(null);
    const [searchValue, searchSetValue] = useState({value: ''});
    const [refresh, setRefresh] = useState({ search: '' })
    let navigate = useNavigate();
    const state = useLocation();

    useEffect(() => {
        api.getCarSeries().then(data => {
            setItems(data);
        });
        setRefresh(false)
    },[refresh, state]);

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

    const onSearch = () => {
        if(searchValue.value.length === 0) {
            setRefresh(true)
        }

        setItems([...items.filter(el => el.carmName.toLowerCase().includes(searchValue.value.toLowerCase() || ''))])
    }

    return (
        <>
            <PanelWidget title={'Car Series Page'} />
            <ClayManagementToolbar>
                <ClayManagementToolbar.ItemList>
                    <ClayManagementToolbar.Search>
                    <ClayInput.Group>
                        <ClayInput.GroupItem>
                        <ClayInput
                            aria-label="Search"
                            className="form-control input-group-inset input-group-inset-after"
                            placeholder='Search ...'
                            type="text"
                            onChange={(event) => {
                                searchSetValue({...searchValue, value : event.target.value})
                            }}
                        />
                        <ClayInput.GroupInsetItem after tag="span">
                            <ClayButtonWithIcon
                            aria-label="Close search"
                            className="navbar-breakpoint-d-none"
                            displayType="unstyled"
                            symbol="times"
                            />
                            <ClayButtonWithIcon
                            aria-label="Search"
                            displayType="unstyled"
                            symbol="search"
                            type="submit"
                            onClick={(e) => {
                                onSearch()
                                e.preventDefault()
                            }}
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
                        onClick={() => navigate('add')}
                    />
                    </ClayManagementToolbar.Item>
                </ClayManagementToolbar.ItemList>
            </ClayManagementToolbar>
            <Table onSortChange={onSortChange} sort={sort}>
                <Head>
                    <Cell key='carsId' sortable>No</Cell>
                    <Cell key='carsName' sortable>Series Name</Cell>
                    <Cell key='carmName' sortable>Model</Cell>
                    <Cell key='carsPassenger' sortable>Total Passenger</Cell>
                    <Cell key='actionHead'>Actions</Cell>
                </Head>

                <Body defaultItems={items}>
                    {
                        (items || []).map(item => (
                            <Row key={item.carsId}>
                                <Cell>{item.carsId}</Cell>
                                <Cell>{item.carsName}</Cell>
                                <Cell>{item.carModel.carmName}</Cell>
                                <Cell>{item.carsPassenger}</Cell>
                                <Cell key={`Action - ${item.carsId}`}>
                                    <ClayDropDown trigger={<ClayIcon className="inline-item inline-item-after" symbol="ellipsis-v"/>}>
                                        <ClayDropDown.ItemList>
                                        <ClayDropDown.Item onClick={() => navigate(`edit/${item.carsId}`)}>
                                            Edit
                                        </ClayDropDown.Item>
                                        <ClayDropDown.Item
                                            onClick={() => navigate('delete')}>
                                            Delete
                                        </ClayDropDown.Item>
                                        </ClayDropDown.ItemList>
                                    </ClayDropDown>
                                </Cell>
                            </Row>
                        ))
                    }
                </Body>
            </Table>
        </>
    )
}
