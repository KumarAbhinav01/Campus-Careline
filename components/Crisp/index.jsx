"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("d5ffe532-4451-4dce-9627-2f988f63d99c");
  });

  return null;
}

export default CrispChat;