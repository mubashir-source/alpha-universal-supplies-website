
"use client";

import React, { useState } from 'react';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import Card from '../ui/Card';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  className?: string;
}

export default function ContactForm({ onSubmit, className = '' }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const subjectOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'support', label: 'Technical Support' },
    { value: 'billing', label: 'Billing Question' },
    { value: 'seller', label: 'Seller Support' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Contact form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you soon.');
    }
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Card className={className}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Send us a Message
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required
          placeholder="Enter your full name"
        />

        <Input
          label="Email Address"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required
          placeholder="Enter your email address"
        />

        <Select
          label="Subject"
          options={subjectOptions}
          value={formData.subject}
          onChange={(e) => handleInputChange('subject', e.target.value)}
          required
          placeholder="Select a subject"
        />

        <Textarea
          label="Message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          required
          rows={6}
          placeholder="Enter your message here..."
        />

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
}
