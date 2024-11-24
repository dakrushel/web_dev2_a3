import { NextResponse } from 'next/server';

const HARDCODED_USER = {
    email: "user@example.com",
    password: "IMRCUser123"
};

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        //checks the credentials
        if (email === HARDCODED_USER.email && password === HARDCODED_USER.password) {
            return NextResponse.json({ success: true, email });
        } else {
            return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });        }
    } catch (error) {
        return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
    }    
}

