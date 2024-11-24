// app/api\posts/route.js
// url: http://localhost:3000/api/posts
import client from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const POST = async (req) => {
    try {
        // parse the request body to JSON format
        const body = await req.json()
        // Extract title and description from the request body
        const { title, actors, year } = body

        if (!actors) {
            return NextResponse.json({ status: 400, message: "Actors cannot be null"});
        }
        // use Prisma client to create a new post with the title and description
        const newPost = await client.post.create({
            data: {
                title,
                actors, //vice description
                year: parseInt(year), //Make sure it's an int
            },
        });
        // return the new post in JSON format
        return NextResponse.json(newPost)
    } catch (error) {
        console.log("api/posts/route.js")
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }
};

export const GET = async () => {

    try {
        const posts = await client.post.findMany()
        console.log("Fetched posts from database: ", posts);
        return NextResponse.json(posts)
        
    } catch (error) {
        console.error("Error fetching posts: ", error.message);
        return NextResponse.json({status: 500}, {message: error.message})
    }
};