import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// Handle GET requests
export function GET() {
    return NextResponse.json({
        email: "abcd@gmail.com",
        name: "abcd",
    });
}

// Handle POST requests
export async function POST(req: NextRequest) {
    
        const body = await req.json(); // Extract request body

        // Ensure username and password are provided
       
   
        // Store user data in the database
        await client.user.create({
            data: {
                username: body.username, // ✅ Corrected the field name
                password: body.password, // Ideally, hash the password before storing
            },
        });

        return NextResponse.json({
            message: "User created successfully!",
        });
    } 
    

