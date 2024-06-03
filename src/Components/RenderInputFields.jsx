import React from 'react'

export const RenderInputFields = ({ name, value, placeholder, isEditMode, handleInputChange }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-start mt-2'>
                <label className='text-lg font-normal'>{name} :</label>
                <input
                    type={`text`}
                    name={name}
                    value={value || ''}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className={`border px-2 py-1 w-full mt-1  ${isEditMode ? '' : 'text-slate-500 outline-none'}`}
                    readOnly={!isEditMode}
                />
            </div>
        </>
    );
};

