import { NextResponse } from 'next/server';
import { sendQuoteRequestEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await sendQuoteRequestEmail(data);

    if (result.success) {
      return NextResponse.json({ message: 'Email sent successfully' });
    } else {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}