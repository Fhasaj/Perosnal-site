/**
 * @name emailHandler
 * @description This function sends an email to the specified email address
 * @param options - The options object allows you to specify the email address of the sender, subject, and message they are sending
 * @returns Promise - A promise that resolves to the email being sent. 
 * 
 */

import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

interface EmailOptions {
    from?: string;
    to?: string;
    subject: string;
    template: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    context: any;
    NAME: string;
    EMAIL: string;
    SUBJECT: string;
    MESSAGE: string;
}

const hbsOptions = {
    viewEngine: {
        extName: '.handlebars',
        partialsDir: 'src/app/views',
        layoutsDir: 'src/app/views',
        defaultLayout: '',
    },
    viewPath: 'src/app/views',
    extName: '.hbs',
};

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

export default async function emailHandler(option: EmailOptions) {
    try {
        transporter.use('compile', hbs(hbsOptions));

        const info = {
            from: `"Contact Form - fhasaj.co.uk" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: 'Contact Form Request',
            template: 'contact',
            context: {
                NAME: option.NAME,
                EMAIL: option.EMAIL,
                SUBJECT: option.SUBJECT,
                MESSAGE: option.MESSAGE
            },
        };

        await transporter.sendMail(info);
        transporter.close();

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            new Error("An error occurred while sending the email" + error.message);
        } 
    }
}