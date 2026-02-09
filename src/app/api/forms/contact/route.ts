import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, phone, subject, message, enquiryType } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message || !enquiryType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Zoho CRM or email service
    console.log("Contact Form Submission:", {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      enquiryType,
      submittedAt: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Create lead in Zoho CRM
    // 2. Send notification email to team
    // 3. Send confirmation email to user
    // 4. Route to appropriate department based on enquiryType

    return NextResponse.json(
      { success: true, message: "Contact form submitted" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
