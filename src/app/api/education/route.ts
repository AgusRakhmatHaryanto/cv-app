import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const educationRef = await getDocs(collection(db, "education"));
    const data = educationRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "education fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching education:", err);
    return NextResponse.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const educationRef = await addDoc(collection(db, "education"), body);

    return NextResponse.json({
      message: "education added successfully",
      id: educationRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding education:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
