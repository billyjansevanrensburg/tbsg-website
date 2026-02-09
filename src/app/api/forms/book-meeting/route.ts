import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { firstName, surname, email, phone, companyName } = body;

    // Validate required fields
    if (!firstName || !surname || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Zoho CRM or email service
    // For now, log the submission
    console.log("Book Meeting Form Submission:", {
      firstName,
      surname,
      email,
      phone,
      companyName,
      submittedAt: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send to Zoho CRM via webhook
    // 2. Send confirmation email
    // 3. Notify team via Slack/email

    return NextResponse.json(
      { success: true, message: "Meeting request received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Book Meeting Form Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
