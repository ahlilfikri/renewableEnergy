import React, { useState } from "react";
import NavBar from "../../components/nav-bar/NavBar";
import "./Count.css";

const Count = () => {
    const [deviceType, setDeviceType] = useState("");
    const [vehicleType, setVehicleType] = useState(""); // Sub-pilihan untuk kendaraan
    const [usageTime, setUsageTime] = useState("");
    const [distance, setDistance] = useState("");
    const [result, setResult] = useState(null);
    const [comparison, setComparison] = useState(null);

    // Data konsumsi energi per km (bahan bakar dan listrik)
    const energyData = {
        fan: 0.05, // Kipas Angin: 0.05 kWh per jam
        monitor: 0.1, // Monitor: 0.1 kWh per jam
        ac: 1.2, // AC: 1.2 kWh per jam
        motor: 0.025, // Motor: 0.025 Liter per km
        car: 0.083, // Mobil: 0.083 Liter per km
        motorElectric: 0.01, // Motor Listrik: 0.01 kWh per km
        carElectric: 0.2, // Mobil Listrik: 0.2 kWh per km
    };

    const calculateEnergy = () => {
        if (!deviceType || (!usageTime && !distance) || (deviceType === "vehicle" && !vehicleType)) {
            alert("Harap isi semua kolom!");
            return;
        }

        let consumptionRate;
        let energyUsed;

        if (deviceType === "vehicle") {
            // Kendaraan: gunakan jarak untuk perhitungan
            consumptionRate = energyData[vehicleType];
            energyUsed = parseFloat(distance) * consumptionRate;
        } else {
            // Perangkat: gunakan waktu untuk perhitungan
            consumptionRate = energyData[deviceType];
            energyUsed = parseFloat(usageTime) * consumptionRate;
        }

        setResult({
            energyUsed,
            unit: deviceType === "vehicle" ? "Liter" : "kWh",
        });

        if (deviceType === "vehicle") {
            // Perbandingan dengan energi terbarukan
            const electricConsumptionRate =
                vehicleType === "motor" ? energyData.motorElectric : energyData.carElectric;
            const electricEnergyUsed = parseFloat(distance) * electricConsumptionRate;

            setComparison({
                fossil: energyUsed,
                electric: electricEnergyUsed,
                unit: deviceType === "vehicle" ? "Liter vs kWh" : "kWh",
            });
        } else {
            setComparison(null); // Tidak ada perbandingan untuk perangkat
        }
    };

    return (
        <div className="monitoring-container">
            <NavBar />
            <h1>Hitung dan Bandingkan Konsumsi Energi</h1>
            <div className="form-container">
                <label>
                    Jenis Perangkat/Kendaraan:
                    <select
                        value={deviceType}
                        onChange={(e) => {
                            setDeviceType(e.target.value);
                            setVehicleType("");
                            setResult(null);
                            setComparison(null);
                        }}
                    >
                        <option value="">Pilih...</option>
                        <option value="fan">Kipas Angin</option>
                        <option value="monitor">Monitor</option>
                        <option value="ac">AC</option>
                        <option value="vehicle">Kendaraan</option>
                    </select>
                </label>
                {deviceType === "vehicle" && (
                    <>
                        <label>
                            Jenis Kendaraan:
                            <select
                                value={vehicleType}
                                onChange={(e) => setVehicleType(e.target.value)}
                            >
                                <option value="">Pilih...</option>
                                <option value="motor">Motor</option>
                                <option value="car">Mobil</option>
                            </select>
                        </label>
                        <label>
                            Jarak yang Ditempuh (KM):
                            <input
                                type="number"
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                                placeholder="Masukkan jarak dalam KM"
                            />
                        </label>
                    </>
                )}
                {deviceType !== "vehicle" && (
                    <label>
                        Lama Penggunaan (jam):
                        <input
                            type="number"
                            value={usageTime}
                            onChange={(e) => setUsageTime(e.target.value)}
                            placeholder="Masukkan lama penggunaan"
                        />
                    </label>
                )}
                <button onClick={calculateEnergy}>Hitung</button>
            </div>
            {result && (
                <div className="result-container">
                    <h2>Hasil Perhitungan</h2>
                    <p>
                        Penggunaan {deviceType === "vehicle" ? "bahan bakar" : "energi"} adalah{" "}
                        <strong>
                            {result.energyUsed.toFixed(2)} {result.unit}
                        </strong>
                    </p>
                </div>
            )}
            {comparison && (
                <div className="comparison-container">
                    <h2>Perbandingan dengan Energi Terbarukan</h2>
                    <p>
                        Kendaraan menggunakan <strong>{comparison.fossil.toFixed(2)} Liter</strong>{" "}
                        (bahan bakar fosil) dibandingkan{" "}
                        <strong>{comparison.electric.toFixed(2)} kWh</strong> (listrik).
                    </p>
                </div>
            )}
        </div>
    );
};

export default Count;
