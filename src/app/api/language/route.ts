import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const languageRef = await getDocs(collection(db, "language"));
    const data = languageRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "language fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching language:", err);
    return NextResponse.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const languageRef = await addDoc(collection(db, "language"), body);

    return NextResponse.json({
      message: "language added successfully",
      id: languageRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding language:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
