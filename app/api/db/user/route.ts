import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const POST = async (req: Request) => {}