    "use client";
    import { useState } from "react";
    import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

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
            e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

                const message = `🚕 Quick Booking Request:
    📞 Phone: ${formData.phone}
    📍 From: ${formData.from}
    🏁 To: ${formData.to}
    📅 Date: ${formData.date}
    🕒 Time: ${formData.time}
    🚗 Vehicle: ${formData.vehicle}
    👥 Passengers: ${formData.passengers}
    🎒 Luggage: ${formData.luggage}`;

                const whatsappNumber = "+5355432748";
                window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            } catch (error) {
                console.error("Error:", error);
            }
        };

        return (
            <form
                onSubmit={handleSubmit}
                className="mx-auto max-w-3xl bg-white p-6 md:p-10 rounded-2xl border-amber-100 border-1 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {/* Campo genérico */}
                {[
                    {
                        id: "phone",
                        label: "📞 Phone Number",
                        type: "tel",
                        placeholder: "+53 555 432 748",
                    },
                    {
                        id: "date",
                        label: "📅 Travel Date",
                        type: "date",
                        min: new Date().toISOString().split("T")[0],
                    },
                    {
                        id: "time",
                        label: "🕒 Time",
                        type: "time",
                    },
                    {
                        id: "passengers",
                        label: "👥 Passengers",
                        type: "number",
                        min: 1,
                        max: 10,
                    },
                    {
                        id: "luggage",
                        label: "🎒 Luggage / Notes",
                        type: "text",
                        placeholder: "2 suitcases and 1 backpack",
                    },
                ].map((field) => (
                    <div key={field.id} className="flex flex-col">
                        <label htmlFor={field.id} className="text-sm font-semibold text-gray-800 mb-1">
                            {field.label}
                        </label>
                        <input
                            {...field}
                            name={field.id}
                            value={(formData as any)[field.id]}
                            onChange={handleChange}
                            className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                            required={field.type !== "text"}
                        />
                    </div>
                ))}

                {/* Selects */}
                <div className="flex flex-col">
                    <label htmlFor="vehicle" className="text-sm font-semibold text-gray-800 mb-1">
                        🚗 Vehicle Type
                    </label>
                    <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    >
                        {vehicles.map((v) => (
                            <option key={v} value={v}>{v}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="from" className="text-sm font-semibold text-gray-800 mb-1">
                        📍 From
                    </label>
                    <select
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    >
                        {locations.filter((l) => l !== formData.to).map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="to" className="text-sm font-semibold text-gray-800 mb-1">
                        🏁 To
                    </label>
                    <select
                        name="to"
                        value={formData.to}
                        onChange={handleChange}
                        className="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                    >
                        {locations.filter((l) => l !== formData.from).map((loc) => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>
                </div>

                {/* Submit */}
                <div className="md:col-span-2">
                    {/* Submit and Messaging Options */}
                    {/* Submit via Messaging Apps */}
                    <div className="md:col-span-2 flex flex-col gap-3 mt-4">
                        <button
                            type="button"
                            onClick={async () => {
                                const message = `🚕 Quick Booking Request:
    📞 Phone: ${formData.phone}
    📍 From: ${formData.from}
    🏁 To: ${formData.to}
    📅 Date: ${formData.date}
    🕒 Time: ${formData.time}
    🚗 Vehicle: ${formData.vehicle}
    👥 Passengers: ${formData.passengers}
    🎒 Luggage: ${formData.luggage}`;
                                try {
                                    await fetch("/api/reservation", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(formData),
                                    });
                                    const whatsappNumber = "+5355432748";
                                    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
                                } catch (error) {
                                    console.error("Error:", error);
                                }
                            }}
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            <FaWhatsapp className="text-xl" />
                            Reservar vía WhatsApp
                        </button>

                        <button
                            type="button"
                            onClick={async () => {
                                const message = `🚕 Quick Booking Request:\n📞 Phone: ${formData.phone}\n📍 From: ${formData.from}\n🏁 To: ${formData.to}\n📅 Date: ${formData.date}\n🕒 Time: ${formData.time}\n🚗 Vehicle: ${formData.vehicle}\n👥 Passengers: ${formData.passengers}\n🎒 Luggage: ${formData.luggage}`;
                                try {
                                    await fetch("/api/reservation", {
                                        method: "POST",
                                        headers: { "Content-Type": "application/json" },
                                        body: JSON.stringify(formData),
                                    });
                                    const telegramUsername = "TaxiCubaBot";
                                    window.open(`https://t.me/${telegramUsername}?start=${encodeURIComponent(message)}`, "_blank");
                                } catch (error) {
                                    console.error("Error:", error);
                                }
                            }}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2"
                        >
                            <FaTelegramPlane className="text-xl" />
                            Reservar vía Telegram
                        </button>
                    </div>
                </div>
            </form>
        );
    }
