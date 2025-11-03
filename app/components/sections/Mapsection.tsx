import React from 'react'

interface MapSectionProps {
  className?: string;
}

export default function MapSection({ className = '' }: MapSectionProps) {
  return (
    <section className={`w-full bg-whit ${className}`}>
      <div className="w-full mx-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.566671456402!2d-95.66013992368188!3d29.645326437369008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e0c7f55eaaab%3A0xbd95d10c55b9c70!2s15500%20Voss%20Rd%20Suite%20240%2C%20Sugar%20Land%2C%20TX%2077498%2C%20USA!5e0!3m2!1sen!2s!4v1762185779744!5m2!1sen!2s" width="100%" height="450" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  );
}