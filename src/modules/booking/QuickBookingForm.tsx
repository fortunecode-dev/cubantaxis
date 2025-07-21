"use client";
import { useState } from "react";

interface BookingData {
    phone: string;
    from: string;
    to: string;
    date: string;
    time: string;
    vehicle: string;
    passengers: string;
    luggage: string;
}

export default function QuickBookingForm() {
    const [formData, setFormData] = useState<BookingData>({
        phone: "",
        from: "Havana",
        to: "Varadero",
        date: "",
        time: "",
        vehicle: "Sedan",
        passengers: "1",
        luggage: "",
    });

    const locations = ["Havana", "Varadero", "Viñales", "Trinidad"];
    const vehicles = ["Sedan", "Van", "SUV"];

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/reservation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const message = `Hello! I want to book a transfer.
Phone: ${formData.phone}
From: ${formData.from}
To: ${formData.to}
Date: ${formData.date}
Time: ${formData.time}
Vehicle: ${formData.vehicle}
Passengers: ${formData.passengers}
Luggage: ${formData.luggage}`;

            const whatsappNumber = "+5355432748";
            window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="my-20 max-w-3xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-3"
        >
            {/* Phone */}
            <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-900">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                    placeholder="+53 555 432 748"
                    required
                />
            </div>
            {/* Vehicle */}
            <div className="flex flex-col">
                <label htmlFor="vehicle" className="mb-1 text-sm font-medium text-gray-900">
                    Vehicle Type
                </label>
                <select
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                >
                    {vehicles.map((veh) => (
                        <option key={veh} value={veh}>
                            {veh}
                        </option>
                    ))}
                </select>
            </div>

            {/* From */}
            <div className="flex flex-col">
                <label htmlFor="from" className="mb-1 text-sm font-medium text-gray-900">
                    From
                </label>
                <select
                    id="from"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                >
                    {locations
                        .filter((loc) => loc !== formData.to)
                        .map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                </select>
            </div>

            {/* To */}
            <div className="flex flex-col">
                <label htmlFor="to" className="mb-1 text-sm font-medium text-gray-900">
                    To
                </label>
                <select
                    id="to"
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                >
                    {locations
                        .filter((loc) => loc !== formData.from)
                        .map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                </select>
            </div>

            {/* Date */}
            <div className="flex flex-col">
                <label htmlFor="date" className="mb-1 text-sm font-medium text-gray-900">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                    min={new Date().toISOString().split("T")[0]}
                    required
                />
            </div>

            {/* Time */}
            <div className="flex flex-col">
                <label htmlFor="time" className="mb-1 text-sm font-medium text-gray-900">
                    Time
                </label>
                <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                    required
                />
            </div>



            {/* Passengers */}
            <div className="flex flex-col">
                <label htmlFor="passengers" className="mb-1 text-sm font-medium text-gray-900">
                    Passengers
                </label>
                <input
                    type="number"
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
                    min="1"
                    max="10"
                    required
                />
            </div>

            {/* Luggage */}
            <div className="flex flex-col ">
                <label htmlFor="luggage" className="mb-1 text-sm font-medium text-gray-900">
                    Luggage Description and other details
                </label>
                <input
                    id="luggage"
                    name="luggage"
                    value={formData.luggage}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"


                    placeholder="2 suitcases and 1 backpack"
                />
            </div>

            <button
                type="submit"
                className="md:col-span-2 text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
                Reserve Now
            </button>
        </form>
    );
}
