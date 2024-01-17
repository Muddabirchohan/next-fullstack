
import { Suspense } from 'react'
import Post  from './PostParent'
import CreatePost from './CreatePost'
import useSWR from 'swr';
 
export default function Posts() {

  // const fetchDataAndSave = async () => {
  //   try {
  //     const response = await fetch("https://rickandmortyapi.com/api/character");

  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
  //     }

  //     const result = await response.json();
  //     console.log('Data fetched and saved:', result);
  //   } catch (error) {
  //     console.error('Error fetching or saving data:', error);
  //   }
  // };

  const fetcher = (url: any) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR('/api/posts', fetcher)

 

  return (
    <section>
            {/* <button onClick={fetchDataAndSave}>Fetch and Save Data</button> */}

      <Suspense fallback={<p>Loading feed...</p>}>
        <CreatePost/>
        <Post data={data} error={error}/>
      </Suspense>
      {/* <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense> */}
    </section>
  )
}