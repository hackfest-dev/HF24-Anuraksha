import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.anuraksha.app",
  appName: "Anuraksha",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config",
      iconColor: "#7d0a0a",
    },
    PushNotifications: { presentationOptions: ["badge", "sound", "alert"] },
  },
};

export default config;
