import { PrismaClient } from "@prisma/client"
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";


const prisma = new PrismaClient()

export async function GET(request: NextApiRequest) {


  let query = new URL(request.url || "");

  try {

    let path = query.pathname.split("/");

    const id = path[path.length - 1];

    console.log("identify",id)

    const post = await prisma.post.findUnique({
        where: { id: id },
    });

    return NextResponse.json(post);
    
  } catch (e) {
    console.log("exception occurred", e)
    return NextResponse.json({})
  }

}



// export async function GET_BY_ID(request: { params: { id: string } }) {


//   try {
//     const { id } = request.params;

//     const post = await prisma.post.findUnique({
//       where: { id: parseInt(id) },
//       // include: {
//       //   author: {
//       //     select: { name: true },
//       //   },
//       // },
//     });

//     return NextResponse.json(post);
//   } catch (error) {
//     console.error("Error in GET_BY_ID", error);
//     return NextResponse.json({});
//   }
// }

export async function POST(request: { json: () => any; }) {
  try {


    const body = await request.json()

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

    console.log("post", post)

    return NextResponse.json(post);
  } catch (error) {
    console.error("eror in post", error);
  }
}


export async function PATCH(request: any) {

  try {
    const body = await request.json()

    // Parse the stringified body as JSON
    const { id } = body;

    const postDelete = await prisma.post.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json(postDelete);
  } catch (error) {
    console.error("eror in post", error);
  }

}