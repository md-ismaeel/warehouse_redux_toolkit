import { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setWarehouseData } from '../../Slice/WarehouseSlice';
import "../WarehouseDetails/WarehouseDetails.css"

export const WarehouseDetails = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.WarehouseSlice);

    const [warehouseDetailsEdit, setWarehouseDetailsEdit] = useState({});
    const { name, warehouse_image, city, cluster, code, space_available, is_live, is_registered, type } = warehouseDetailsEdit || {};

    const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
    const { id } = useParams();

    useEffect(() => {
        const selectedWareHouseToUpdate = data.find((item) => item.id === Number(id));
        if (selectedWareHouseToUpdate) {
            setWarehouseDetailsEdit(selectedWareHouseToUpdate);
        } else {
            setWarehouseDetailsEdit({});
        }
    }, [data, id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setWarehouseDetailsEdit(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSave = () => {
        dispatch(setWarehouseData({ id: Number(id), updatedDetails: warehouseDetailsEdit }));
        setIsEditMode(false); // Exit edit mode after saving
    };

    const handleEdit = () => {
        setIsEditMode(true); // Enter edit mode
    };


    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <div className='w-details-parent w-[400px] min-h-[200px] border px-6 py-4 shadow-lg rounded-md mt-20'>
                <img src={warehouse_image} alt={name} className='w-full' />
                {isEditMode ? (
                    <>
                        <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Name" className='border px-2 py-2 w-full mt-2' />
                        <input type="text" name="city" value={city} onChange={handleInputChange} placeholder="City" className='border px-2 py-2 w-full mt-2' />
                        <input type="text" name="code" value={code} onChange={handleInputChange} placeholder="Code" className='border px-2 py-2 w-full mt-2' />
                        <input type="text" name="cluster" value={cluster} onChange={handleInputChange} placeholder="Cluster" className='border px-2 py-2 w-full mt-2' />
                        <input type="text" name="space_available" value={space_available} onChange={handleInputChange} placeholder="Space Available" className='border px-2 py-2 w-full mt-2' />
                        <input type="text" name="type" value={type} onChange={handleInputChange} placeholder="type" className='border px-2 py-2 w-full mt-2' />
                    </>
                ) : (
                    <>
                        <input type="text" name="name" value={name} readOnly placeholder="Name" className='border px-2 py-2 w-full mt-2 outline-none' />
                        <input type="text" name="city" value={city} readOnly placeholder="City" className='border px-2 py-2 w-full mt-2 outline-none' />
                        <input type="text" name="code" value={code} readOnly placeholder="Code" className='border px-2 py-2 w-full mt-2 outline-none' />
                        <input type="text" name="cluster" value={cluster} readOnly placeholder="Cluster" className='border px-2 py-2 w-full mt-2 outline-none' />
                        <input type="text" name="space_available" value={space_available} readOnly placeholder="Space Available" className='border px-2 py-2 w-full mt-2 outline-none' />
                        <input type="text" name="type" value={type} readOnly placeholder="type" className='border px-2 py-2 w-full mt-2' />
                    </>
                )}
                <div className='w-full flex justify-between items-center px-1 py-2'>
                    <p>Registered: {is_registered ? 'Yes' : 'No'}</p>
                    <p>Live: {is_live ? <span className='w-[10px] h-[10px] rounded-full bg-green-600 inline-block'></span> : <span className='w-[10px] h-[10px] rounded-full bg-red-600 inline-block'></span>}</p>
                </div>
            </div>
            <div className='w-details w-[400px] min-h-[100px] mt-2'>
                {isEditMode ? (
                    <button onClick={handleSave} className='w-full h-[40px] rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 active:bg-blue-800'>Save</button>
                ) : (
                    <button onClick={handleEdit} className='w-full h-[40px] rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 active:bg-blue-800'>Edit</button>
                )}
            </div>
        </div>
    );
}



