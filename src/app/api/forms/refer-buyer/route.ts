import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      yourFirstName,
      yourLastName,
      yourEmail,
      yourPhone,
      yourCompanyName,
      buyerName,
      buyerEmail,
      buyerPhone,
      transactionStage,
    } = body;

    // Validate required fields
    if (
      !yourFirstName ||
      !yourLastName ||
      !yourEmail ||
      !yourPhone ||
      !buyerName ||
      !buyerEmail ||
      !buyerPhone ||
      !transactionStage
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Integrate with Zoho CRM or email service
    // For now, log the submission
    console.log("Refer Buyer Form Submission:", {
      referrer: {
        firstName: yourFirstName,
        lastName: yourLastName,
        email: yourEmail,
        phone: yourPhone,
        company: yourCompanyName,
      },
      buyer: {
        name: buyerName,
        email: buyerEmail,
        phone: buyerPhone,
        transactionStage,
      },
      submittedAt: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Create referrer in Zoho CRM (if new)
    // 2. Create buyer lead in Zoho CRM linked to referrer
    // 3. Send confirmation email to referrer
    // 4. Notify team to contact buyer
    // 5. Set up automated tracking

    return NextResponse.json(
      { success: true, message: "Referral submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Refer Buyer Form Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
