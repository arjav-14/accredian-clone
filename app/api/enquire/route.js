import { NextResponse } from "next/server";
import { neon } from '@neondatabase/serverless';
import fs from "fs";
import path from "path";

// Initialize Neon Client
const sql = neon(process.env.DATABASE_URL);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, domain, candidates, mode, location } = body;

    // 1. Validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { message: "Missing required fields (Name, Email, Phone)" },
        { status: 400 }
      );
    }

    // 2. Save to NEON Postgres (Production Database)
    try {
      await sql`
        INSERT INTO enquiries (name, email, phone, company, domain, candidates, mode, location)
        VALUES (${name}, ${email}, ${phone}, ${company}, ${domain}, ${candidates}, ${mode}, ${location})
      `;
      console.log("Lead saved to Neon Postgres successfully!");
    } catch (dbError) {
      console.error("Neon DB Error:", dbError);
      // Fallback: If DB fails, we still try to save to local file
    }

    // 3. Local Backup (Keep for offline/local development)
    const newEnquiry = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      ...body
    };

    const filePath = path.join(process.cwd(), "submissions.json");
    let enquiries = [];
    try {
      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf8");
        enquiries = JSON.parse(fileData);
      }
      enquiries.push(newEnquiry);
      fs.writeFileSync(filePath, JSON.stringify(enquiries, null, 2));
    } catch (fsError) {
      console.error("Local Save Error:", fsError);
    }

    return NextResponse.json(
      { 
        message: "Enquiry submitted successfully!",
        data: newEnquiry
      },
      { status: 201 }
    );

  } catch (error) {
    console.error("Critical API Error:", error);
    return NextResponse.json(
      { message: "Server error, please try again later." },
      { status: 500 }
    );
  }
}
