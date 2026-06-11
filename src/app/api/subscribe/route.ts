import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, _subject, Message } = body;

    // 1. Basic Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ 
        error: 'Please enter a valid email address'
      }, { status: 400 });
    }

    // 2. Ensure environment variables are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing EMAIL_USER or EMAIL_PASS environment variables.');
      return NextResponse.json({ 
        error: 'Server email configuration missing.' 
      }, { status: 500 });
    }

    // 3. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // 4. Send Email directly using Nodemailer
    const mailOptions = {
      from: `"Website Leads" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: _subject || "🚀 New Subscriber Lead from Website",
      text: Message || `New subscriber: ${email}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({ error: 'Failed to send email. Check SMTP credentials.' }, { status: 500 });
  }
}
