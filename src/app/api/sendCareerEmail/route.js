import { NextRequest, NextResponse } from "next/server";
import { transporter } from "@/lib/transporter";

export async function POST(req) {
    try {
        const { name, email, number, position, experience, attachments } = await req.json();
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: "Asmitadhole@vionsys.com", // Assuming this is the correct email address
            subject: 'New Job Application Submission - NAS Infotech Pvt. Ltd.',
            html: `
           <h2 style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px;">Job Application for the Position of ${position} </h2>
           <h4 style="font-size: 1.2rem; font-weight: bold; margin-bottom: 20px;">Applicant Details:</h4>
           <div style="margin-bottom: 20px;">
            <h2 style="font-weight: semibold;">Name: <span style="font-weight: lighter;">${name}</span></h2>
            <h2 style="font-weight: semibold;">Email: <span style="font-weight: lighter;">${email}</span></h2>
            <h2 style="font-weight: semibold;">Mobile number: <span style="font-weight: lighter;">${number}</span></h2>
            <h2 style="font-weight: semibold;">Years of Experience: <span style="font-weight: lighter;">${experience}</span></h2>
           </div>
        `,  
            attachments: attachments.map((file) => ({
                filename: file.filename,
                content: Buffer.from(file.content, 'base64'),
            }))
        };
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully", success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return Response.json({ message: "Something went wrong!!!", success: false })
    }
}
