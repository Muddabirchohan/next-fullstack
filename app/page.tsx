import Image from 'next/image'
import prisma from '../lib/prisma';

const fetch = async()=>{
  const feed = await prisma.post.findMany({
    // where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
}



export default async function Home() {


  const ldata = await fetch()


  console.log("ldata",ldata.props.feed)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      {ldata.props.feed?.map(item => <p> {item.title} </p>)}
      </div>
    </main>
  )
}
