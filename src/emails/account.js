const sgMail = require('@sendgrid/mail')





sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "eivorx123@gmail.com",
        subject: "Welcome to our Task App",
        text: `Welcome to the app ${name}. Let us know your experience.`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "eivorx123@gmail.com",
        subject: "Sorry, to see you go !",
        text: `GoodBye, ${name}. We hope to see you again.`,
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}