"use client"

import { Suspense } from 'react'
import Post  from './PostParent'
import useSWR from 'swr';

export default function Posts() {

  const fetcher = (url: any) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/posts', fetcher)


  return (
    <section>
            {/* <button onClick={fetchDataAndSave}>Fetch and Save Data</button> */}

      <Suspense fallback={<p>Loading feed...</p>}>
     
        <Post data={data} error={error}/>
      </Suspense>
      {/* <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense> */}
    </section>
  )
}