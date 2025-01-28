import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'AppAsis',
  webDir: 'www',
  plugins: {
    Camera: {
      allowEditing: true,
      quality: 90, // Calidad de la imagen
      saveToGallery: false // Cambiar a true si deseas guardar la imagen en la galería
    }
  }
};

export default config;
