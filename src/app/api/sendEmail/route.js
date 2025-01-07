import { transporter } from "@/lib/transporter";

export async function POST(request) {
  try {
    const { fname, lname, number, email, subject, questions, message } = await request.json();

    // Setup email data
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "hr@nasinfotech.com",
      subject: 'NAS Website Contact Form',
      html: `
        <h3>You have a new contact query from NAS website!!!</h3>
        <br/>
        <h2><span style="font-weight: bold;">First Name:</span> <span style="font-weight: lighter;">${fname}</span></h2>
        <h2><span style="font-weight: bold;">Last Name:</span> <span style="font-weight: lighter;">${lname}</span></h2>
        <h2><span style="font-weight: bold;">Email:</span> <span style="font-weight: lighter;">${email}</span></h2>
        <h2><span style="font-weight: bold;">Contact Number:</span> <span style="font-weight: lighter;">${number}</span></h2>
        <h2><span style="font-weight: bold;">Subject:</span> <span style="font-weight: lighter;">${subject}</span></h2>
        <h2><span style="font-weight: bold;">Questions:</span> <span style="font-weight: lighter;">${questions}</span></h2>
        <h2><span style="font-weight: bold;">Message:</span> <span style="font-weight: lighter;">${message}</span></h2> 
      `,
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    return new Response(JSON.stringify({ message: "Email sent successfully", success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: "Something went wrong!!!", success: false,error:error.message }), { status: 500 });
  }
}
