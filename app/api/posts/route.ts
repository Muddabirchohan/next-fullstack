import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export  async function GET() {

    try {

        const feed = await prisma.post.findMany({
          // where: { published: true },
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




// export async function POST() {
//   async function saveData() {
//     try {
//       // Fetch data from the API
//       const response = await fetch("https://rickandmortyapi.com/api/character");
//       if (!response.ok) {
//         throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
//       }

//       // Convert the response to JSON
//       const apiResponse = await response.json();

//       // Save data to the Prisma database
//       const charactersData = apiResponse.results;
//       for (const characterData of charactersData) {
//         await prisma.character.create({
//           data: {
//             id: characterData.id,
//             name: characterData.name,
//             status: characterData.status,
//             species: characterData.species,
//             type: characterData.type,
//             gender: characterData.gender,
//             origin: {
//               create: {
//                 name: characterData.origin.name,
//                 url: characterData.origin.url,
//               },
//             },
//             location: {
//               create: {
//                 name: characterData.location.name,
//                 url: characterData.location.url,
//               },
//             },
//             image: characterData.image,
//             episodes: {
//               create: characterData.episode.map((episodeUrl: any) => ({
//                 url: episodeUrl,
//               })),
//             },
//             url: characterData.url,
//             created: new Date(characterData.created),
//           },
//         });
//       }

//       console.log("Data saved successfully.");
//     } catch (error) {
//       console.error("Error fetching or saving data:", error);
//     } finally {
//       await prisma.$disconnect();
//     }
//   }

//   return saveData();
// }