import React from 'react'
import { useSelector } from "react-redux"
import { Cards } from '../../Components/Cards';

export const Home = () => {

    const { data, filteredData } = useSelector((state) => state.WarehouseSlice);
    const displayData = filteredData && filteredData.length > 0 ? filteredData : data;

    return (
        <>
            <section className='w-full flex flex-col justify-center items-center'>
                <p className='marginTopWal mt-24'></p>
                <div className='home w-full min-h-scree flex justify-center items-center flex-wrap gap-4 px-4 mb-16'>
                    {displayData.length > 0 ? displayData.map((item) => <Cards item={item} key={item.id} />) : <div className='w-full text-2xl font-semibold text-center'>No Data Found</div>}
                </div>
            </section>
        </>
    )
}
