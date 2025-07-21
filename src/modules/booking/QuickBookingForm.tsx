"use client";
import { useState } from "react";

export default function QuickBookingForm() {
    const [formData, setFormData] = useState({ name: "", email: "", location: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Guardar en Supabase vía API
            await fetch("/api/reservation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            // Armar mensaje para WhatsApp
            const message = `Hello! I want to book a transfer.\nName: John Doe\nEmail: john@example.com\nPick-up Location: Havana Airport`;

            const whatsappNumber = "+5355432748";
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.location.href = whatsappUrl;

        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 gap-4">
            <input className="p-3 border rounded-lg" type="text" name="name" placeholder="Full Name" onChange={handleChange} />
            <input className="p-3 border rounded-lg" type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input className="p-3 border rounded-lg" type="text" name="location" placeholder="Pick-up Location" onChange={handleChange} />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold">Reserve Now</button>
        </form>
    );
}
