'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, Loader2, RefreshCw } from 'lucide-react';
import { COMPANY_CONFIG } from '@/lib/company-config';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  serviceCategory: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ preselectedService }: { preselectedService?: string }) {
  const searchParams = useSearchParams();
  const serviceFromQuery = searchParams.get('service');

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceCategory: preselectedService || serviceFromQuery || 'Accountant Services (General)',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const desiredService = preselectedService || serviceFromQuery;
  const [prevDesiredService, setPrevDesiredService] = useState(desiredService);

  if (desiredService && desiredService !== prevDesiredService) {
    setPrevDesiredService(desiredService);
    setFormData((prev) => ({ ...prev, serviceCategory: desiredService }));
  }

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full Name is required.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        return undefined;
      case 'phone': {
        if (!value.trim()) return 'Phone number is required.';
        const cleanPhone = value.replace(/[\s\-+()]/g, '');
        if (cleanPhone.length < 7 || cleanPhone.length > 15) {
          return 'Please provide a valid contact number (7 to 15 digits).';
        }
        return undefined;
      }
      case 'email': {
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value.trim())) {
          return 'Please enter a valid corporate or personal email address.';
        }
        return undefined;
      }
      case 'message':
        if (!value.trim()) return 'Please describe your business or estate requirements.';
        if (value.trim().length < 10) return 'Message should contain at least 10 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof FormData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const error = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all
    const newErrors: FormErrors = {};
    const fields: (keyof FormErrors)[] = ['fullName', 'phone', 'email', 'message'];
    let hasError = false;

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        hasError = true;
      }
    });

    setErrors(newErrors);
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      message: true,
    });

    if (hasError) {
      return;
    }

    // Simulate structured transmission
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 850));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setSubmittedData({ ...formData });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      serviceCategory: 'Accountant Services (General)',
      message: '',
    });
    setErrors({});
    setTouched({});
  };

  if (isSubmitted && submittedData) {
    return (
      <div
        id="enquiry-success-container"
        className="p-5 sm:p-8 lg:p-10 bg-white border border-zinc-200 shadow-md text-zinc-900"
      >
        <div className="flex items-center gap-3 text-emerald-600 mb-4">
          <CheckCircle2 className="w-8 h-8 shrink-0" />
          <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900">
            Enquiry Prepared Successfully
          </h3>
        </div>

        <p className="text-sm text-zinc-600 leading-relaxed mb-6">
          Thank you, <strong className="text-zinc-900">{submittedData.fullName}</strong>. Your consultation request regarding <span className="font-semibold text-[#b3883b]">{submittedData.serviceCategory}</span> has been validated and formatted.
        </p>

        {/* Structured summary */}
        <div className="bg-zinc-50 border border-zinc-200 p-4 mb-6 space-y-2 text-xs font-mono text-zinc-700">
          <div><span className="text-zinc-400">PHONE:</span> {submittedData.phone}</div>
          <div className="truncate"><span className="text-zinc-400">EMAIL:</span> {submittedData.email}</div>
          <div><span className="text-zinc-400">SERVICE:</span> {submittedData.serviceCategory}</div>
          <div className="pt-2 border-t border-zinc-200">
            <span className="text-zinc-400">SUMMARY:</span>
            <p className="font-sans text-xs text-zinc-600 mt-1 italic break-words">
              &quot;{submittedData.message}&quot;
            </p>
          </div>
        </div>

        {/* Dispatch Action Notice */}
        <div className="p-4 bg-emerald-50/80 border border-emerald-200 text-emerald-950 text-xs leading-relaxed mb-6">
          <p className="font-semibold mb-0.5 text-emerald-900">Direct Dispatch Available:</p>
          <p className="text-emerald-800">
            You can launch your preferred email client with all consultation details pre-filled for direct transmission to our practice inbox ({COMPANY_CONFIG.EMAIL_DISPLAY}), or connect your corporate SMTP / CRM webhook in production.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={`mailto:${COMPANY_CONFIG.EMAIL}?subject=${encodeURIComponent(
              `Enquiry: ${submittedData.serviceCategory} - ${submittedData.fullName}`
            )}&body=${encodeURIComponent(
              `Name: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nService: ${submittedData.serviceCategory}\n\nRequirements:\n${submittedData.message}`
            )}`}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs font-semibold tracking-wider uppercase transition-colors text-center"
          >
            <span>Open in Mail App (Pre-filled)</span>
          </a>

          <button
            type="button"
            onClick={handleReset}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-800 text-xs font-medium tracking-wider uppercase transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Enquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="p-5 sm:p-8 lg:p-10 bg-white border border-zinc-200 shadow-md text-zinc-900"
    >
      <div className="pb-5 mb-6 border-b border-zinc-100">
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 mb-1.5">
          Send an Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500">
          Fields marked with <span className="text-[#b3883b]">*</span> are required.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold tracking-wider uppercase text-zinc-700 mb-1.5"
          >
            Full Name <span className="text-[#b3883b]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Rajesh Sharma / Director"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            className={`w-full px-4 py-3 min-h-[48px] text-base sm:text-sm bg-white border ${
              errors.fullName && touched.fullName
                ? 'border-red-500 ring-1 ring-red-500'
                : 'border-zinc-300 focus:border-[#b3883b] focus:ring-1 focus:ring-[#b3883b]'
            } text-zinc-900 placeholder:text-zinc-400 transition-colors focus:outline-hidden`}
          />
          {errors.fullName && touched.fullName && (
            <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        {/* Contact Grid: Phone + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold tracking-wider uppercase text-zinc-700 mb-1.5"
            >
              Phone Number <span className="text-[#b3883b]">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              onBlur={() => handleBlur('phone')}
              className={`w-full px-4 py-3 min-h-[48px] text-base sm:text-sm bg-white border ${
                errors.phone && touched.phone
                  ? 'border-red-500 ring-1 ring-red-500'
                  : 'border-zinc-300 focus:border-[#b3883b] focus:ring-1 focus:ring-[#b3883b]'
              } text-zinc-900 placeholder:text-zinc-400 transition-colors focus:outline-hidden`}
            />
            {errors.phone && touched.phone && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold tracking-wider uppercase text-zinc-700 mb-1.5"
            >
              Email Address <span className="text-[#b3883b]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="director@enterprise.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 min-h-[48px] text-base sm:text-sm bg-white border ${
                errors.email && touched.email
                  ? 'border-red-500 ring-1 ring-red-500'
                  : 'border-zinc-300 focus:border-[#b3883b] focus:ring-1 focus:ring-[#b3883b]'
              } text-zinc-900 placeholder:text-zinc-400 transition-colors focus:outline-hidden`}
            />
            {errors.email && touched.email && (
              <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Service Category Selection */}
        <div>
          <label
            htmlFor="serviceCategory"
            className="block text-xs font-semibold tracking-wider uppercase text-zinc-700 mb-1.5"
          >
            Practice Service of Interest
          </label>
          <select
            id="serviceCategory"
            name="serviceCategory"
            value={formData.serviceCategory}
            onChange={(e) => handleChange('serviceCategory', e.target.value)}
            className="w-full px-4 py-3 min-h-[48px] text-base sm:text-sm bg-white border border-zinc-300 text-zinc-900 focus:border-[#b3883b] focus:ring-1 focus:ring-[#b3883b] transition-colors focus:outline-hidden"
          >
            <optgroup label="Accountant Services">
              <option value="Accountant Services (General)">Accountant Services (General Inquiry)</option>
              {COMPANY_CONFIG.ACCOUNTANT_SERVICES.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </optgroup>
            <optgroup label="DSI Estates">
              <option value="DSI Estates (General)">DSI Estates (General Inquiry)</option>
              {COMPANY_CONFIG.DSI_ESTATES.map((e) => (
                <option key={e.id} value={e.title}>
                  {e.title}
                </option>
              ))}
            </optgroup>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-semibold tracking-wider uppercase text-zinc-700 mb-1.5"
          >
            Message & Scope Details <span className="text-[#b3883b]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Please outline your entity type, estimated transaction volume, or estate documentation requirements..."
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            className={`w-full px-4 py-3 text-base sm:text-sm bg-white border ${
              errors.message && touched.message
                ? 'border-red-500 ring-1 ring-red-500'
                : 'border-zinc-300 focus:border-[#b3883b] focus:ring-1 focus:ring-[#b3883b]'
            } text-zinc-900 placeholder:text-zinc-400 transition-colors focus:outline-hidden resize-none`}
          />
          {errors.message && touched.message && (
            <p className="flex items-center gap-1 text-xs text-red-600 mt-1.5 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            id="contact-form-submit"
            className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#c89f56] hover:bg-[#b88f46] text-[#0f1114] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md disabled:opacity-60 active:scale-[0.99] focus:outline-hidden"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Validating & Formatting...</span>
              </>
            ) : (
              <>
                <span>Send Enquiry</span>
                <Send className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
