# Contact Form Setup Instructions

## Current Status
The contact form is now configured with a fallback mechanism. If EmailJS is not configured, it will automatically open the user's email client with a pre-filled message.

## To Enable EmailJS (Recommended)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your chosen provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{user_name}}

From: {{user_name}} ({{user_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

### Step 5: Configure Environment Variables
1. Create a `.env` file in your project root
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from steps 2-4

### Step 6: Deploy
1. Make sure your `.env` file is added to your deployment platform (Vercel, Netlify, etc.)
2. For Vercel: Add the environment variables in your project settings
3. Redeploy your site

## Fallback Behavior
If EmailJS is not configured, the form will:
1. Collect the form data
2. Open the user's default email client
3. Pre-fill the email with the form data
4. Show a success message

This ensures the contact form always works, even without EmailJS configuration.

## Testing
1. Test locally by running `npm run dev`
2. Fill out the contact form
3. Check if emails are received (if EmailJS is configured) or if the mailto fallback works
4. Test on your live website after deployment

## Troubleshooting
- Check browser console for any JavaScript errors
- Verify environment variables are correctly set
- Ensure EmailJS service and template are active
- Check if your email provider has any restrictions
