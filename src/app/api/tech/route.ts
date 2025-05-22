import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const technologyRef = await getDocs(collection(db, "technology"));
    const data = technologyRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "technology fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching technology:", err);
    return NextResponse.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const technologyRef = await addDoc(collection(db, "technology"), body);

    return NextResponse.json({
      message: "technology added successfully",
      id: technologyRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding technology:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
