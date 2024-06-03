import React from 'react';
import { NavLink } from 'react-router-dom';

const ReusableTag = ({ text }) => {
    return (
        <p className='mt-2'>{text}</p>
    );
};

export const Cards = ({ item }) => {
    const { id, name, city, cluster, code, is_live, is_registered, space_available, type, warehouse_image } = item;


    return (
        <NavLink to={`/details/${id}`}>
            <div className='w-[290px] min-h-[200px] border p-8 px-6 shadow-lg rounded-md'>
                <img src={warehouse_image} alt={name} />
                <div className='w-[100%] min-h-[200px]'>
                    <ReusableTag text={`Name: ${name}`} />
                    <ReusableTag text={`City: ${city}`} />
                    <ReusableTag text={`Cluster: ${cluster}`} />
                    <ReusableTag text={`Code: ${code}`} />
                    <ReusableTag text={`Live: ${is_live === true ? 'Yes' : 'No'}`} />
                    <ReusableTag text={`Registered: ${is_registered === true ? 'Yes' : 'No'}`} />
                    <ReusableTag text={`Space Available: ${space_available}`} />
                    <ReusableTag text={`Type: ${type}`} />
                </div>
            </div>
        </NavLink>
    );
};
