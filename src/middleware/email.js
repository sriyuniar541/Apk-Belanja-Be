const nodemailer = require('nodemailer');

module.exports =async (email,subject,url) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            secure :true,
            port : 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD_EMAIL
            }
        });
        
        const mailOptions = {
            from: process.env.EMAIL,
            to: 'sriyuniar86@gmail.com',
            subject: 'sending OTP',
            text: 'That was easy!'
        };
        
        await transporter.sendMail({

        
            from : process.env.EMAIL,
            to :email,
            subject : subject,
            html : `<h1>Email convirmation</h1>
                    <h2>hello ${email}</h2>
                    <p>thank you for join us, please confirm your email by dicking on the following link</p>
                    <a href='${url}'> Clik here<a>
                    atau masuk ke link ${url}
                    </div>`

        })
        console.log('email sedning successfully')

    }catch (error) {
        console.log(error)
        return error
    }
}



