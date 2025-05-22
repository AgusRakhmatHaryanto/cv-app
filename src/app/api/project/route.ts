import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
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

export async function POST(req: Request) {
  try {
    const body = await req.json();

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
