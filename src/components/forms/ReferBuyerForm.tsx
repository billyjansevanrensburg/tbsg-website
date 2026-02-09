"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

interface FormData {
  // Referrer details
  yourFirstName: string;
  yourLastName: string;
  yourEmail: string;
  yourPhone: string;
  yourCompanyName: string;
  // Buyer details
  buyerName: string;
  buyerEmail: string;
  buyerPhone: string;
  transactionStage: string;
}

const transactionStages = [
  { value: "", label: "Select transaction stage..." },
  { value: "pre-approval", label: "Pre-Approval" },
  { value: "otp-home-loan", label: "Offer to Purchase Signed (Home Loan)" },
  { value: "otp-commercial", label: "Offer to Purchase Signed (Commercial Loan)" },
  { value: "refinancing", label: "Property Owner Refinancing Current Property" },
];

export function ReferBuyerForm() {
  const [formData, setFormData] = useState<FormData>({
    yourFirstName: "",
    yourLastName: "",
    yourEmail: "",
    yourPhone: "",
    yourCompanyName: "",
    buyerName: "",
    buyerEmail: "",
    buyerPhone: "",
    transactionStage: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/forms/refer-buyer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-tbsg-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-tbsg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-xl text-tbsg-charcoal mb-2">
          Referral Submitted!
        </h3>
        <p className="text-tbsg-charcoal/70 mb-4">
          Thank you for your referral. We&apos;ll contact {formData.buyerName.split(" ")[0] || "the buyer"} shortly and keep you updated on progress.
        </p>
        <Button
          variant="ghost"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              yourFirstName: formData.yourFirstName,
              yourLastName: formData.yourLastName,
              yourEmail: formData.yourEmail,
              yourPhone: formData.yourPhone,
              yourCompanyName: formData.yourCompanyName,
              buyerName: "",
              buyerEmail: "",
              buyerPhone: "",
              transactionStage: "",
            });
          }}
        >
          Refer Another Buyer
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Your Details Section */}
      <div>
        <h4 className="font-heading font-bold text-lg text-tbsg-charcoal mb-4 pb-2 border-b border-gray-100">
          Your Details
        </h4>
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="yourFirstName" className="block text-sm font-medium text-tbsg-charcoal mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="yourFirstName"
                name="yourFirstName"
                required
                value={formData.yourFirstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label htmlFor="yourLastName" className="block text-sm font-medium text-tbsg-charcoal mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="yourLastName"
                name="yourLastName"
                required
                value={formData.yourLastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
                placeholder="Your last name"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="yourEmail" className="block text-sm font-medium text-tbsg-charcoal mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="yourEmail"
                name="yourEmail"
                required
                value={formData.yourEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="yourPhone" className="block text-sm font-medium text-tbsg-charcoal mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="yourPhone"
                name="yourPhone"
                required
                value={formData.yourPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
                placeholder="082 123 4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="yourCompanyName" className="block text-sm font-medium text-tbsg-charcoal mb-1">
              Company Name <span className="text-tbsg-charcoal/50">(optional)</span>
            </label>
            <input
              type="text"
              id="yourCompanyName"
              name="yourCompanyName"
              value={formData.yourCompanyName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              placeholder="Your agency or company"
            />
          </div>
        </div>
      </div>

      {/* Buyer Details Section */}
      <div>
        <h4 className="font-heading font-bold text-lg text-tbsg-charcoal mb-4 pb-2 border-b border-gray-100">
          Buyer Details
        </h4>
        <div className="space-y-4">
          <div>
            <label htmlFor="buyerName" className="block text-sm font-medium text-tbsg-charcoal mb-1">
              Buyer Name & Surname <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="buyerName"
              name="buyerName"
              required
              value={formData.buyerName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
              placeholder="Buyer's full name"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="buyerEmail" className="block text-sm font-medium text-tbsg-charcoal mb-1">
                Buyer Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="buyerEmail"
                name="buyerEmail"
                required
                value={formData.buyerEmail}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
                placeholder="buyer@email.com"
              />
            </div>
            <div>
              <label htmlFor="buyerPhone" className="block text-sm font-medium text-tbsg-charcoal mb-1">
                Buyer Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="buyerPhone"
                name="buyerPhone"
                required
                value={formData.buyerPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent"
                placeholder="Buyer's phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="transactionStage" className="block text-sm font-medium text-tbsg-charcoal mb-1">
              Transaction Stage <span className="text-red-500">*</span>
            </label>
            <select
              id="transactionStage"
              name="transactionStage"
              required
              value={formData.transactionStage}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-tbsg-primary focus:border-transparent bg-white"
            >
              {transactionStages.map((stage) => (
                <option key={stage.value} value={stage.value}>
                  {stage.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Submitting Referral..." : "Refer This Buyer"}
      </Button>
    </form>
  );
}
