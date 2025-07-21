"use client";
import { useState } from "react";

interface BookingData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  from: string;
  to: string;
  date: string;
  time: string;
  passengers: string;
  luggage: string;
  details: string;
  images: File[];
}

export default function ExtendedBookingForm() {
  const [formData, setFormData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    vehicle: "Sedan",
    from: "Havana",
    to: "Varadero",
    date: "",
    time: "",
    passengers: "1",
    luggage: "",
    details: "",
    images: [],
  });

  const locations = ["Havana", "Varadero", "Viñales", "Trinidad"];
  const vehicles = ["Sedan", "Van", "SUV"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: Array.from(e.target.files) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Subida a Supabase o API si es necesario
      const uploadedImageLinks = formData.images.map((file) => file.name); // Placeholder

      // Mensaje de WhatsApp
      const message = `Hello! I want to book a transfer.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
From: ${formData.from}
To: ${formData.to}
Date: ${formData.date}
Time: ${formData.time}
Vehicle: ${formData.vehicle}
Passengers: ${formData.passengers}
Luggage: ${formData.luggage}
Details: ${formData.details}
Images: ${uploadedImageLinks.join(", ")}`;

      const whatsappNumber = "+5355432748";
      window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-20 max-w-4xl mx-auto bg-white p-4 md:p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-3"
    >
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-sm font-medium text-gray-900">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
          placeholder="John Doe"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-900">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
          placeholder="john@example.com"
          required
        />
      </div>

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
          {locations.filter((loc) => loc !== formData.to).map((loc) => (
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
          {locations.filter((loc) => loc !== formData.from).map((loc) => (
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
      <div className="flex flex-col">
        <label htmlFor="luggage" className="mb-1 text-sm font-medium text-gray-900">
          Luggage Description
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

      {/* Details */}
      <div className="flex flex-col md:col-span-2">
        <label htmlFor="details" className="mb-1 text-sm font-medium text-gray-900">
          Additional Details
        </label>
        <textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
          placeholder="Special instructions or details about your trip..."
        />
      </div>

      {/* Images */}
      <div className="flex flex-col md:col-span-2">
        <label htmlFor="images" className="mb-1 text-sm font-medium text-gray-900">
          Attach Images
        </label>
        <input
          type="file"
          id="images"
          name="images"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 w-full p-2"
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
