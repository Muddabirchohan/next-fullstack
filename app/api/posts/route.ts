import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export  async function GET() {

    try {

        const feed = await prisma.post.findMany({
          where: { published: true },
          include: {
            author: {
              select: { name: true },
            },
          },
        });

        return  NextResponse.json(feed)


      } catch (e) {
        console.log("exception occurred",e)
        return NextResponse.json({})
      }
  
}


// export  async function POST(data:any) {

//   try {

//       const feed = await prisma.post.create({
//         data
//       });

//       return  NextResponse.json(feed)


//     } catch (e) {
//       console.log("exception occurred",e)
//       return NextResponse.json({})
//     }

// }

export async function POST(request: { json: () => any; }) {
  try {
    
    
    const body =  await request.json()

    // Parse the stringified body as JSON
    
    const { title, content, published, authorId } = body;
  


    const post = await prisma.post.create({
      data: {
        title,
        content,
        published,
        // authorId,
      },
    });

    console.log("post",post)
  
    return NextResponse.json(post);
  } catch (error) {
    console.error("eror in post", error);
  }
}





export async function PATCH(request:any) {

  try {
    const body =  await request.json()

    // Parse the stringified body as JSON
    const {id } = body;

    const postDelete = await prisma.post.delete({
      where : {
        id: id
      }
    })
  
    return NextResponse.json(postDelete);
  } catch (error) {
    console.error("eror in post", error);
  }

}