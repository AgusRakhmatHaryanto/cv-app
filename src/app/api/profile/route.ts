import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function GET() {
  try {
    const profileRef = await getDocs(collection(db, "profile"));
    const data = profileRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return NextResponse.json({
      message: "Profile fetched successfully",
      data: data,
    });
  } catch (err) {
    console.error("Error fetching profile:", err);
    return NextResponse.json(
      { message: "Internal Server Error", err },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const profileRef = await addDoc(collection(db, "profile"), body);

    return NextResponse.json({
      message: "Profile added successfully",
      id: profileRef.id,
      ...body,
    });
  } catch (err) {
    console.error("Error adding profile:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
