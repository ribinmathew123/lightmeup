const { Promise } = require("mongoose");
const nodemailer = require("nodemailer");

const sendOtpViaEmail = (email, otp) => {
  try {
    
 
  return new Promise((resolve, reject) => {
    try {
      
  
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "ribinmathew4you@gmail.com",
        pass: "fskfiggcrmuhynnz",
        

      },
    });
    const mailOptions = {
      to: email,
      subject: "OTP for account verification",
      html: `<h3>OTP for account verification is:</h3><h1 style='font-weight:bold;'>${otp}</h1>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      try {
        
    
      if (error) {
        console.log("Email sending error:", error);
        reject(false);
      } else {
        resolve(true);
      }
        // res.render("../views/user/otp.ejs");
      } catch (error) {
        console.log(error);
      }
    });
  } catch (error) {
      
  }
  });

} catch (error) {
    console.log(error);
}
};

module.exports = sendOtpViaEmail;
