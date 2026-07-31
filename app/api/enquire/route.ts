import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: "Website Enquiry <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New Enquiry: ${subject}`,
      html: `
        <h2>New Enquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr>

        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 },
      );
    }

    console.log("Email sent:", data);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
