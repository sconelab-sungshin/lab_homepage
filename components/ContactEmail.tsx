import React, { useState } from "react";

type ContactEmailProps = {
  email: string;
  className?: string;
};

const ContactEmail: React.FC<ContactEmailProps> = ({
  email,
  className = "text-[#555] mb-4",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <p className={className}>
      Contact:{" "}
      <span
        onClick={handleCopy}
        className="cursor-pointer text-[#3498db] hover:underline"
      >
        {email}
      </span>
      {copied && (
        <span className="ml-2 text-sm text-purple-600">Copied!</span>
      )}
    </p>
  );
};

export default ContactEmail;
