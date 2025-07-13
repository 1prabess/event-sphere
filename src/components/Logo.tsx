import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      {/* <Image src="/logo.png" alt="Logo" width={200} height={50} /> */}
      <h1 className="font-bold">EventSphere</h1>
    </Link>
  );
}
