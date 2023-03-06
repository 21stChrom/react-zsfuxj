
import React, { useState, useEffect } from 'react';

//import libraries and components for Bluetooth, spring tank and Wi-Fi 
import { Bluetooth, SpringTank, WiFi } from 'mylib';

export const SpringTankLevel = () => {

  const [waterLevel, setWaterLevel] = useState(0);

  useEffect(() => {
    const scanDevice = async () => {
      const device = await Bluetooth.scanDevice();
      if (device) {
        //connect to device
        await Bluetooth.connectToDevice(device);
        const values = await SpringTank.getValues();
        //extract water level value
        setWaterLevel(values.waterLevel);
      }
    };
    scanDevice();
  }, []);

  const shareDataWidthWiFi = async () => {
    // get Wi-Fi connection
    const wifiConnection = await WiFi.getConnection();
    if (wifiConnection) {
      // share data with wifi
      await WiFi.share(wifiConnection, { waterLevel});
    }
  };

  return (default {App);
  ///code to display water level with UI elements here)
 l 