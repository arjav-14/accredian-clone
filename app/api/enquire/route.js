import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, domain, candidates, mode, location } = body;

    // 1. Basic Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields (Name, Email, Phone)" },
        { status: 400 }
      );
    }

    // 2. Prepare Data to Save
    const newEnquiry = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      ...body
    };

    // 3. Save to Local JSON File (submissions.json)
    const filePath = path.join(process.cwd(), "submissions.json");
    
    let enquiries = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      enquiries = JSON.parse(fileData);
    }

    enquiries.push(newEnquiry);
    fs.writeFileSync(filePath, JSON.stringify(enquiries, null, 2));

    console.log("Enquiry saved to submissions.json:", newEnquiry);

    // 4. Success Response
    return NextResponse.json(
      { 
        message: "Enquiry submitted and saved successfully!",
        data: newEnquiry
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Server error, please try again later." },
      { status: 500 }
    );
  }
}
