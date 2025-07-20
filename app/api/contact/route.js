import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Google Form configuration
    const GOOGLE_FORM_ACTION_URL = process.env.GOOGLE_FORM_ACTION_URL || '';
    const GOOGLE_FORM_NAME_ENTRY = process.env.GOOGLE_FORM_NAME_ENTRY || '';
    const GOOGLE_FORM_EMAIL_ENTRY = process.env.GOOGLE_FORM_EMAIL_ENTRY || '';
    const GOOGLE_FORM_SUBJECT_ENTRY = process.env.GOOGLE_FORM_SUBJECT_ENTRY || '';
    const GOOGLE_FORM_MESSAGE_ENTRY = process.env.GOOGLE_FORM_MESSAGE_ENTRY || '';

    if (!GOOGLE_FORM_ACTION_URL) {
      return NextResponse.json(
        { error: 'Google Form not configured' },
        { status: 500 }
      );
    }

    // Prepare form data for Google Forms
    const googleFormData = new URLSearchParams();
    googleFormData.append(GOOGLE_FORM_NAME_ENTRY, name);
    googleFormData.append(GOOGLE_FORM_EMAIL_ENTRY, email);
    googleFormData.append(GOOGLE_FORM_SUBJECT_ENTRY, subject);
    googleFormData.append(GOOGLE_FORM_MESSAGE_ENTRY, message);

    // Submit to Google Form
    const response = await fetch(GOOGLE_FORM_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: googleFormData.toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Google Form');
    }

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}