import React, { useCallback, useEffect, useState } from 'react'
import { ProvinceApi } from '../../../api/MasterApi'
import { Body, Cell, Head, Row, Table } from '@clayui/core';
import ClayDropDown from '@clayui/drop-down';
import ClayIcon from '@clayui/icon';
import { useLocation, useNavigate } from 'react-router-dom';
import PanelWidget from '../../../components/PanelWidget';
import ClayManagementToolbar from '@clayui/management-toolbar';
import { ClayInput } from '@clayui/form';
import ClayButton, {ClayButtonWithIcon} from '@clayui/button';
import { ClayPaginationWithBasicItems } from '@clayui/pagination';

export default function ProvinceLayout() {
    const api = new ProvinceApi();
    const [items, setItems] = useState([]);
    const [sort, setSort] = useState(null);
    const [searchValue, searchSetValue] = useState({value: ''});
    const [refresh, setRefresh] = useState({ search: '' })
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalDataSize, setTotalDataSize] = useState(10);
    let navigate = useNavigate();
    const state = useLocation();

    useEffect(() => {
        api.getProvince(activePage-1, totalDataSize).then(data => {
            setItems(data.content);
            setTotalPages(data.totalPages);
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

        setItems([...items.filter(el => el.provName.toLowerCase().includes(searchValue.value.toLowerCase() || ''))])
    }

    const onPaginated = (newActivePage) => {
        setActivePage(newActivePage)
        setRefresh(true)
    }

    return (
        <>
            <PanelWidget title={'Cities Page'} />
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
                    <Cell key='provId' sortable>No</Cell>
                    <Cell key='provName' sortable>Province Name</Cell>
                    <Cell key='zonesName' sortable>Zone</Cell>
                    <Cell key='actionHead'>Actions</Cell>
                </Head>

                <Body defaultItems={items}>
                    {
                        (items || []).map(item => (
                            <Row key={item.provId}>
                                <Cell>{item.provId}</Cell>
                                <Cell>{item.provName}</Cell>
                                <Cell>{item.zones.zonesName}</Cell>
                                <Cell>
                                    <ClayDropDown trigger={<ClayIcon className="inline-item inline-item-after" symbol="ellipsis-v"/>}>
                                        <ClayDropDown.ItemList>
                                        <ClayDropDown.Item onClick={() => navigate(`edit/${item.provId}`)}>
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
            <ClayPaginationWithBasicItems
            active={activePage}
            ellipsisBuffer={2}
            ellipsisProps={{ "aria-label": "More", title: "More" }}
            onActiveChange={onPaginated}
            totalPages={totalPages}
            />
        </>
    )
}
