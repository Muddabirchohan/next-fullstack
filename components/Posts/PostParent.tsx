"use client"

import useSWR from 'swr';

export default function PostParent() {

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const { data, error } = useSWR('/api/posts', fetcher)

if (error) return <div>An error occured.</div>
if (!data) return <div>Loading ...</div>

console.log("data",data)

return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      {/* {ldata?.props?.feed?.map(item => <p> {item.title} </p>)} */}
      </div>
    </main>
  )

}
