import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { RouteContext } from "@/types/cv";

export async function PUT(
  req: Request,
  { params }: RouteContext
) {
  try {
    const body = await req.json();
    const { id } = await params;

    const docRef = doc(db, "language", id);
    await updateDoc(docRef, body);

    return NextResponse.json({ message: "language updated", id });
  } catch (err) {
    console.error("Error updating language:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  { params }: RouteContext
) {
  try {
    const { id } = await params;

    const docRef = doc(db, "language", id);
    await deleteDoc(docRef);

    return NextResponse.json({ message: "language deleted", id });
  } catch (err) {
    console.error("Error deleting language:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
