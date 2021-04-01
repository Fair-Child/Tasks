const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'brentliang@foxmail.com',
        subject: 'Thank you for Creating account with Tasks :)',
        text: `Welcome to Tasks, ${name}. \nThank you for your joining with Tasks app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'brentliang@foxmail.com',
        subject: 'Sorry to see you go :(',
        text: `Sorry to see you leave, ${name}. \nWish to see you back soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}