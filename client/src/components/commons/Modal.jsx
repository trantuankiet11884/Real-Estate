import React from "react";
import { useAppStore } from "@/store/useAppStore";

function Modal() {
  const { contentModal, setModal } = useAppStore();

  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen z-[999] bg-overlay-40 flex items-center justify-center "
      onClick={() => setModal(false, null)}
    >
      {contentModal}
    </div>
  );
}

export default Modal;
