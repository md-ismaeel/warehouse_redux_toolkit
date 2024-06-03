// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { setWarehouseData } from '../../Slice/WarehouseSlice';
// import "../WarehouseDetails/WarehouseDetails.css";

// export const WarehouseDetails = () => {
//     const dispatch = useDispatch();
//     const { data } = useSelector((state) => state.WarehouseSlice);

//     const [warehouseDetailsEdit, setWarehouseDetailsEdit] = useState({});
//     const { name, warehouse_image, city, cluster, code, space_available, is_live, is_registered, type } = warehouseDetailsEdit || {};

//     const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
//     const { id } = useParams();

//     useEffect(() => {
//         const selectedWareHouseToUpdate = data.find((item) => item.id === Number(id));
//         if (selectedWareHouseToUpdate) {
//             setWarehouseDetailsEdit(selectedWareHouseToUpdate);
//         } else {
//             setWarehouseDetailsEdit({});
//         }
//     }, [data, id]);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setWarehouseDetailsEdit(prevState => ({ ...prevState, [name]: value }));
//     };

//     const handleSave = () => {
//         dispatch(setWarehouseData({ id: Number(id), updatedDetails: warehouseDetailsEdit }));
//         setIsEditMode(false); // Exit edit mode after saving
//     };

//     const handleEdit = () => {
//         setIsEditMode(true); // Enter edit mode
//     };

//     const renderInputField = (name, value, placeholder, type = "text") => (
//         <input
//             type={type}
//             name={name}
//             value={value || ''}
//             onChange={handleInputChange}
//             placeholder={placeholder}
//             className={`border px-2 py-2 w-full mt-2 ${isEditMode ? '' : 'outline-none'}`}
//             readOnly={!isEditMode}
//         />
//     );

//     return (
//         <div className='w-full min-h-screen flex flex-col justify-center items-center'>
//             <div className='w-details-parent w-[400px] min-h-[200px] border px-6 py-4 shadow-lg rounded-md mt-20'>
//                 <img src={warehouse_image || ''} alt={name} className='w-full' />
//                 {renderInputField("name", name, "Name")}
//                 {renderInputField("city", city, "City")}
//                 {renderInputField("code", code, "Code")}
//                 {renderInputField("cluster", cluster, "Cluster")}
//                 {renderInputField("space_available", space_available, "Space Available", "number")}
//                 {renderInputField("type", type, "Type")}
//                 <div className='w-full flex justify-between items-center px-1 py-2'>
//                     <p>Registered: {is_registered ? 'Yes' : 'No'}</p>
//                     <p>Live: {is_live ? <span className='w-[10px] h-[10px] rounded-full bg-green-600 inline-block'></span> : <span className='w-[10px] h-[10px] rounded-full bg-red-600 inline-block'></span>}</p>
//                 </div>
//             </div>
//             <div className='w-details w-[400px] min-h-[100px] mt-2'>
//                 {isEditMode ? (
//                     <button
//                         onClick={handleSave}
//                         className='w-full h-[40px] rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 active:bg-blue-800'>
//                         Save
//                     </button>
//                 ) : (
//                     <button
//                         onClick={handleEdit}
//                         className='w-full h-[40px] rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 active:bg-blue-800'>
//                         Edit
//                     </button>
//                 )}
//             </div>
//         </div>
//     );
// }



import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setWarehouseData } from '../../Slice/WarehouseSlice';
import "../WarehouseDetails/WarehouseDetails.css";
import { RenderInputFields } from '../../Components/RenderInputFields';

export const WarehouseDetails = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.WarehouseSlice);

    const [warehouseDetailsEdit, setWarehouseDetailsEdit] = useState({});
    const { name, warehouse_image, city, cluster, code, space_available, is_live, is_registered, type } = warehouseDetailsEdit || {};

    const [isEditMode, setIsEditMode] = useState(false);
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
        setWarehouseDetailsEdit(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSave = () => {
        dispatch(setWarehouseData({ id: Number(id), updatedDetails: warehouseDetailsEdit }));
        setIsEditMode(false);
    };

    const handleEdit = () => {
        setIsEditMode(true);
    };

    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center'>
            <div className='w-details-parent w-[400px] min-h-[200px] border px-6 py-4 shadow-lg rounded-md mt-20'>

                <img src={warehouse_image || ''} alt={name} className='w-full' />
                <RenderInputFields name="name" value={name} placeholder="Name" isEditMode={isEditMode} handleInputChange={handleInputChange} />
                <RenderInputFields name="city" value={city} placeholder="City" isEditMode={isEditMode} handleInputChange={handleInputChange} />
                <RenderInputFields name="code" value={code} placeholder="Code" isEditMode={isEditMode} handleInputChange={handleInputChange} />
                <RenderInputFields name="cluster" value={cluster} placeholder="Cluster" isEditMode={isEditMode} handleInputChange={handleInputChange} />
                <RenderInputFields name="space_available" value={space_available} placeholder="Space Available" type="number" isEditMode={isEditMode} handleInputChange={handleInputChange} />
                <RenderInputFields name="type" value={type} placeholder="Type" isEditMode={isEditMode} handleInputChange={handleInputChange} />

                <div className='w-full flex justify-between items-center px-1 py-2'>
                    <p>Registered: {is_registered ? 'Yes' : 'No'}</p>
                    <p>Live: {is_live ? <span className='w-[10px] h-[10px] rounded-full bg-green-600 inline-block'></span> : <span className='w-[10px] h-[10px] rounded-full bg-red-600 inline-block'></span>}</p>
                </div>

            </div>

            <div className='w-details w-[400px] min-h-[100px] mt-2'>
                {isEditMode ? (
                    <button onClick={handleSave} className='w-full h-[40px] rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 active:bg-blue-800'> Save</button>
                ) : (
                    <button onClick={handleEdit} className='w-full h-[40px] rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 active:bg-blue-800'> Edit</button>
                )}
            </div>

        </div>
    );
};

export default WarehouseDetails;
