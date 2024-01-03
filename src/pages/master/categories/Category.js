import React, { useEffect, useState } from 'react'
import categoryApi from '../../../api/categoryApi';

export default function Category() {
    const [
        category, setCategory
    ] = useState([]);

    // phase componentDidMount
    useEffect(() => {
        categoryApi.findRow().then(data => {
            setCategory(data);
        });
    },[]);

    return (
        <>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Category Name</th>
                </thead>
                <tbody>
                    {
                        (category || []).map(cate => (
                            <tr>
                                <td>{cate.cateId}</td>
                                <td>{cate.cateName}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
