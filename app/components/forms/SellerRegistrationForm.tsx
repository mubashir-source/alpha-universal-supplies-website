
"use client";

import React, { useState } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface SellerFormData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  businessType: string;
  taxId: string;
  description: string;
}

interface SellerRegistrationFormProps {
  onSubmit?: (data: SellerFormData) => void;
  className?: string;
}

export default function SellerRegistrationForm({ onSubmit, className = '' }: SellerRegistrationFormProps) {
  const [formData, setFormData] = useState<SellerFormData>({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    businessType: '',
    taxId: '',
    description: ''
  });

  const businessTypeOptions = [
    { value: 'individual', label: 'Individual' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'corporation', label: 'Corporation' },
    { value: 'llc', label: 'LLC' }
  ];

  const handleInputChange = (field: keyof SellerFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Seller registration submitted:', formData);
      alert('Registration submitted successfully! We\'ll review your application and get back to you soon.');
    }
  };

  return (
    <Card className={className}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Seller Registration Form
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Business Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Business Name"
              value={formData.businessName}
              onChange={(e) => handleInputChange('businessName', e.target.value)}
              required
              placeholder="Enter your business name"
            />
            <Input
              label="Owner Name"
              value={formData.ownerName}
              onChange={(e) => handleInputChange('ownerName', e.target.value)}
              required
              placeholder="Enter owner's full name"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              placeholder="Enter your email address"
            />
            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {/* Address Information */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Address Information</h3>
          <div className="space-y-4">
            <Input
              label="Business Address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              required
              placeholder="Enter your business address"
            />
            <div className="grid md:grid-cols-3 gap-4">
              <Input
                label="City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                required
                placeholder="City"
              />
              <Input
                label="State"
                value={formData.state}
                onChange={(e) => handleInputChange('state', e.target.value)}
                required
                placeholder="State"
              />
              <Input
                label="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                required
                placeholder="ZIP Code"
              />
            </div>
          </div>
        </div>

        {/* Business Details */}
        <div>
          <h3 className="text-lg font-medium text-gray-800 mb-4">Business Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Select
              label="Business Type"
              options={businessTypeOptions}
              value={formData.businessType}
              onChange={(e) => handleInputChange('businessType', e.target.value)}
              required
              placeholder="Select business type"
            />
            <Input
              label="Tax ID (Optional)"
              value={formData.taxId}
              onChange={(e) => handleInputChange('taxId', e.target.value)}
              placeholder="Enter your tax ID"
            />
          </div>
        </div>

        {/* Business Description */}
        <Textarea
          label="Business Description"
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          required
          rows={4}
          placeholder="Describe your business and the products you plan to sell..."
        />

        {/* Terms and Conditions */}
        <div className="flex items-start">
          <input
            type="checkbox"
            required
            className="mt-1 mr-3"
          />
          <label className="text-sm text-gray-600">
            I agree to the{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms and Conditions
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" size="lg">
            Submit Registration
          </Button>
        </div>
      </form>
    </Card>
  );
}
