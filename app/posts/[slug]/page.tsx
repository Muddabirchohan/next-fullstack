
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr';

export default async function Blog({ params }: any) {

    async function fetchBlog(id: string) {
     
        try {
          var requestOptions = {
            method: 'GET',
          };

          const res = await fetch(`http://localhost:3000/api/posts/${id}`,requestOptions);

          const response = await res.json();
          

          return response;
        } catch (err) {
          console.error("err,err",err);
        }
        
      }



      const blog = await fetchBlog(params.slug);

      console.log("blog",blog)

    return (
        <div className='w-100 max-w-lg h-300 rounded shadow-lg p-10 d-flex justify-center align-center'>
          <div> <p> {blog?.title} </p> </div>
          <div> 
            <Image
                src={`https://cdn.dummyjson.com/product-images/1/${Math.floor(Math.random() * 5) + 1}.jpg`}
                alt={''}
                width={350}
                height={300}
            /> </div>
          <div> 

            <p> {blog?.content}</p>
           </div>

        

        </div>
    )
}

// export async function generateStaticParams() {
//     const fetcher = (url: any) => fetch(url).then((res) => res.json());

//     const { data, error } = useSWR('/api/posts', fetcher)
   
//     return data.map((post: { slug: any; }) => ({
//       slug: post.slug,
//     }))
//   }