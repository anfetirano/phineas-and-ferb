"use client";

import Lottie from "lottie-react";
import treeAnimation from "@/lotties/tree.json";

export default function ArbolAnimado() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-20">
      <div className="w-[300px] h-[300px]">
        <Lottie animationData={treeAnimation} loop={true} />
      </div>
    </div>
  );
}
