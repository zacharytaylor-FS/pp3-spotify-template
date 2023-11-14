import { NextResponse } from "next/server"
export async function GET() {
    return NextResponse.json({text: 'Callback API Route!'})
}