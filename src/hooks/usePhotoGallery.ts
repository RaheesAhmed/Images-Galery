import { useState, useEffect } from "react";
import { useCamera } from '@ionic/react-hooks/camera';
import { useFilesystem, base64FromPath } from '@ionic/react-hooks/filesystem';
import { useStorage } from '@ionic/react-hooks/storage';
import { isPlatform } from '@ionic/react';
import { CameraResultType, CameraSource, CameraPhoto, Capacitor, FilesystemDirectory } from "@capacitor/core";

export function usePhotoGallery() {

    const { getPhoto } = useCamera();
    const [photos, setPhotos] = useState<Photo[]>([]);
  
    const takePhoto = async () => {
        const fileName = new Date().getTime() + '.jpeg';
        const newPhotos = [{
          filepath: fileName,
          webviewPath: CameraPhoto.webPath
        }, ...photos];
        setPhotos(newPhotos)
    };
  
    return {
        photos,
        takePhoto
    };
  }
  export interface Photo {
    filepath: string;
    webviewPath?: string;
    base64?: string;
  }