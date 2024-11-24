// app/api\posts/[id]
// http://localhost:3000/api/posts

import client from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async (request, {params}) => {

    try {
        const {id} = params;

        const posts = await client.post.findUnique({
            where: { id },
        });
        if(!posts){
            return NextResponse.error({
                status: 404, message: "Post not found"})
        }
        return NextResponse.json(posts)
    } catch (error) {
        console.log("app/posts/[id]/route.js")
        return NextResponse.error({status: 500, message: error.message})
    }

}

export const PATCH = async (request, context) => {
    try {
      const { params } = context || {};
      if (!params || !params.id) {
        console.error("No params received or invalid params:", params);
        return NextResponse.json({ status: 400, message: "Post ID is required" });
      }
  
      const { id } = params;
      const body = await request.json();
      const { title, actors, year } = body;
  
      const updatedPost = await client.post.update({
        where: { id },
        data: {
          title,
          actors,
          year: parseInt(year),
        },
      });
  
      if (!updatedPost) {
        return NextResponse.json({ status: 404, message: "Post not found" });
      }
  
      return NextResponse.json(updatedPost);
    } catch (error) {
      console.error("Error updating post:", error.message);
      return NextResponse.json({ status: 500, message: error.message });
    }
  };
  

export const DELETE = async (request, {params}) => {
    const {id} = params
    try {
        const posts = await client.post.delete({
            where: {
                id
            }
        })
        return NextResponse.json("Post Deleted",posts)

    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }
};