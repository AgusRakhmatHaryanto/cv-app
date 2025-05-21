import { db } from "@/lib/firebaseConfig";
import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const projectRef = await getDocs(collection(db, "project"));
    const data = projectRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "project fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching project:", err);
    return NextResponse.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 }
      );
    }

    const projectRef = await addDoc(collection(db, "project"), body);

    return NextResponse.json({
      message: "project added successfully",
      id: projectRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding project:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
