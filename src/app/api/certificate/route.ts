import { db } from "@/lib/firebaseConfig";
import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const certificateRef = await getDocs(collection(db, "certificate"));
    const data = certificateRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "certificate fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching certificate:", err);
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

    const certificateRef = await addDoc(collection(db, "certificate"), body);

    return NextResponse.json({
      message: "certificate added successfully",
      id: certificateRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding certificate:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
