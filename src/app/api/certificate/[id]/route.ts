import { db } from "@/lib/firebaseConfig";
import { NextResponse } from "next/server";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { message: "Missing certificate id" },
        { status: 400 }
      );
    }

    const body = await req.json();
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
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { message: "Missing certificate id" },
        { status: 400 }
      );
    }

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
