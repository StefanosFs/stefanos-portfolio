// EmailJS Configuration
// Replace these placeholder values with your actual EmailJS credentials
// Get them from: https://www.emailjs.com/

export const emailjsConfig = {
  serviceId: 'service_placeholder',
  templateId: 'template_placeholder',
  publicKey: 'public_key_placeholder'
};

// Instructions:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Set up an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{user_name}}
//    - {{user_email}} 
//    - {{message}}
// 4. Get your public key from Account > General
// 5. Replace the placeholder values above
// 6. Add these as environment variables in your deployment platform:
//    VITE_EMAILJS_SERVICE_ID=your_service_id
//    VITE_EMAILJS_TEMPLATE_ID=your_template_id
//    VITE_EMAILJS_PUBLIC_KEY=your_public_key
