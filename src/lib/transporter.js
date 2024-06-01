import nodemailer from "nodemailer"

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure:'true',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
})