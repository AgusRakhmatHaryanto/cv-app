import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await req.json();
    const { id } = await params;

    const docRef = doc(db, "experience", id);
    await updateDoc(docRef, body);

    return NextResponse.json({ message: "experience updated", id });
  } catch (err) {
    console.error("Error updating experience:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const docRef = doc(db, "experience", id);
    await deleteDoc(docRef);

    return NextResponse.json({ message: "experience deleted", id });
  } catch (err) {
    console.error("Error deleting experience:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
