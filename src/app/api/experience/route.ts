import { db } from "@/lib/firebaseConfig";
import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const experienceRef = await getDocs(collection(db, "experience"));
    const data = experienceRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "experience fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching experience:", err);
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

    const experienceRef = await addDoc(collection(db, "experience"), body);

    return NextResponse.json({
      message: "experience added successfully",
      id: experienceRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding experience:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
