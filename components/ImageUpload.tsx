"use client";
import config from "@/lib/config";
import { ImageKitProvider } from "imagekitio-next";
import Image from "next/image";
import React from "react";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndPoint}/api/auth/imagekit`);

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Error: ${response.status} - ${text}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;

    return { signature, expire, token };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }

    throw new Error("Unknown error during authentication.");
  }
};

interface ImageUploadProps {
  accept?: string;
  placeholder: string;
  folder: string;
  value?: string;
  onFileChange: (filePath: string) => void;
}

const ImageUpload = ({
  accept,
  placeholder,
  folder,
  value,
  onFileChange,
}: ImageUploadProps) => {
  return (
    <ImageKitProvider
      urlEndpoint={config.env.imageKit.urlEndpoint}
      publicKey={config.env.imageKit.publicKey}
      authenticator={authenticator}
    >
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </ImageKitProvider>
  );
};

export default ImageUpload;
