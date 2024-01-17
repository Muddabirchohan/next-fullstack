import Image from 'next/image'
import React from 'react'

export default function Blog() {
    return (
        <div className='w-100 flex justify-center py-5'>


            <Image
            src="/batch-2.jpg"
            alt={''} 
            width={200}
            height={100}
            />

            {/* <div> first blog </div> */}

        </div>
    )
}
