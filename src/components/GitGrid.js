

import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs';
import { GidGridItem } from './GidGridItem';

export const GitGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category);

    return (

        <>
            <h3 className='animate__animated animate__fadeIn'> {category} </h3>
            {loading && <p className='animate__animated animate__flash'>loading</p>}

            {<div className='card-grid'>
                {
                    images.map(img => (
                        <GidGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
            }
        </>

    )
}
