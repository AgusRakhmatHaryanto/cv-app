import { db } from "@/lib/firebaseConfig";
import { NextResponse, NextRequest } from "next/server";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export async function PUT(
  req: NextRequest,
  { params }: { params:Promise< { id: string }> }
) {
  try {
    const body = await req.json();
    const id  = (await params).id;

    const docRef = doc(db, "certificate", id);
    await updateDoc(docRef, body);

    return NextResponse.json({ message: "certificate updated", id });
  } catch (err) {
    console.error("Error updating certificate:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const docRef = doc(db, "certificate", id);
    await deleteDoc(docRef);

    return NextResponse.json({ message: "certificate deleted", id });
  } catch (err) {
    console.error("Error deleting certificate:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
