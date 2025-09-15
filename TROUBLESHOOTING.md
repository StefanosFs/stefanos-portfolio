# Contact Form Troubleshooting Guide

## "Failed to fetch" Error - Common Causes & Solutions

### 1. **Environment Variables Not Set in Vercel** (Most Common)
**Problem**: Environment variables work locally but not on live site.

**Solution**:
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:
   ```
   VITE_EMAILJS_SERVICE_ID = your_service_id
   VITE_EMAILJS_TEMPLATE_ID = your_template_id  
   VITE_EMAILJS_PUBLIC_KEY = your_public_key
   ```
5. **Important**: Make sure to set them for "Production" environment
6. Redeploy your site

### 2. **EmailJS Domain Restrictions** (CORS Issue)
**Problem**: EmailJS blocks requests from your domain.

**Solution**:
1. Go to EmailJS dashboard → Account → General
2. Find "Authorized domains" section
3. Add your live domain: `stefanosfessahaie.com`
4. Also add: `stefanos-portfolio.vercel.app` (if using Vercel)
5. Save changes

### 3. **EmailJS Service/Template Issues**
**Problem**: Service or template is inactive or misconfigured.

**Solution**:
1. Check EmailJS dashboard → Email Services
2. Ensure your service is "Active"
3. Check Email Templates → ensure template is "Active"
4. Verify template variables match form fields:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{message}}`

### 4. **Network/Firewall Issues**
**Problem**: Corporate firewall or network blocking EmailJS.

**Solution**:
- Test from different network
- Check if EmailJS API is accessible: `https://api.emailjs.com`

## Quick Debug Steps

1. **Check Browser Console**:
   - Open Developer Tools (F12)
   - Look for the debug log showing environment variables
   - Check for any network errors

2. **Test Environment Variables**:
   - The debug log will show if env vars are loaded
   - If `hasEnvVars` shows `false`, variables aren't set in Vercel

3. **Verify EmailJS Settings**:
   - Service ID starts with `service_`
   - Template ID starts with `template_`
   - Public Key is your User ID from EmailJS

## Testing Checklist

- [ ] Environment variables set in Vercel (Production)
- [ ] Domain added to EmailJS authorized domains
- [ ] EmailJS service is active
- [ ] EmailJS template is active
- [ ] Template variables match form fields
- [ ] Site redeployed after changes

## Fallback Solution

If EmailJS continues to fail, the form will automatically fall back to opening the user's email client with pre-filled data. This ensures users can always contact you.
