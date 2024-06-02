import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterData } from '../../Slice/WarehouseSlice';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

const selectFilter = [
    { type: 'Name', value: 'name' },
    { type: 'City', value: 'city' },
    { type: 'Cluster', value: 'cluster' },
    { type: 'Space_available', value: 'space_available' },
    { type: 'Is_registered', value: 'is_registered' },
    { type: 'Is_live', value: 'is_live' },
];

export const Navbar = () => {
    const { data } = useSelector((state) => state.WarehouseSlice);
    const dispatch = useDispatch();
    const [selectType, setSelectType] = useState('');
    const [inputVal, setInputVal] = useState('');

    const handleTypeChange = (e) => {
        setSelectType(e.target.value);
    };

    useEffect(() => {
        if (selectType && inputVal) {
            const filteredData = data.filter((item) => {
                switch (selectType) {
                    case 'name':
                    case 'city':
                    case 'cluster':
                        return item[selectType].toLowerCase().includes(inputVal);
                    case 'space_available':
                        return item[selectType] === parseInt(inputVal, 10);
                    case 'is_registered':
                    case 'is_live':
                        return item[selectType].toString().toLowerCase() === inputVal;
                    default:
                        return true;
                }
            });

            dispatch(setFilterData(filteredData));
        }
    }, [selectType, inputVal, data, dispatch]);

    return (
        <>
            <header className="container fixed w-full min-h-[70px] flex justify-center items-center bg-gray-100 shadow-md gap-10">

                <NavLink to='/'>
                    <h1 className="text-2xl font-semibold">Warehouse Details</h1>
                </NavLink>

                <div className="select-container flex items-center">
                    <label htmlFor="type-select" className="mr-2">Search Warehouse:</label>
                    <select id="type-select" value={selectType} onChange={handleTypeChange} className="border rounded px-6 py-2 mr-2">
                        <option value="">Select</option>
                        {selectFilter.map((item, index) => (
                            <option key={index} value={item.value} className='px-6 py-2'>
                                {item.type}
                            </option>
                        ))}
                    </select>

                    <input
                        type="text"
                        id='input-type'
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value.toLocaleLowerCase())}
                        placeholder="Search warehouse details"
                        className="px-10 py-2 border rounded"
                    />
                </div>
            </header>
        </>
    );
};
