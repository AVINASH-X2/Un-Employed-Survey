const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProfileModel = require('./models/profile')
const mine = require('mime-types');
const nodemailer = require('nodemailer');



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/React")



// New One


app.post("/login", async (req, res) => {
    try {
      const { email } = req.body;
  
      const existingUser = await ProfileModel.findOne({ email });
      if (existingUser) {
        console.log("Email already in use...");
        return res.status(400).json({ message: "Email already in use" });
      }
  
      await ProfileModel.create(req.body);
  
      // Send welcome email
      const welcomeEmail = async () => {
        const transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // or 'STARTTLS'
          auth: {
            user: 'sinhaak321@gmail.com',
            pass: 'qyni splx fnuh tmke',
          },
        });
  
        const mailOptions = {
          from: 'sinhaak321@gmail.com',
          to: email,
          subject: 'Welcome to our platform!',
          text: 'Hello! Welcome to our platform!',
          html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h1>Welcome to our platform!</h1>
            <p>Hello,</p>
            <p>Thank you for registering at our joblessness count web page. We are thrilled to have you as part of our community.</p>
            <p>Here are some things you can do now:</p>
            <ul>
              <li>Explore our features and services</li>
              <li>Connect with other users</li>
              <li>Stay updated with the latest news and updates</li>
            </ul>
            <p>If you have any questions, feel free to reply to this email. We're here to help!</p>
            <p>Best regards,</p>
            <p>The Joblessness Count Team</p>
          </div>
        `,
        };
  
        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${email}`);
      };
  
      welcomeEmail();
  
      const userCount = await ProfileModel.countDocuments();
      console.log("Count from the db", userCount);
      res.send(userCount.toString());
      console.log("Count again...: ", userCount.toString());
    } catch (err) {
      console.error("Error creating user: ", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  
app.get('/userCount', async (req, res) =>{
    try{
        const userCount = await ProfileModel.countDocuments();
        console.log("Count from the db...", userCount);
        res.json({userCount});
    } catch(error){
        console.error("Error fetching data...", error);
        res.status(500).json({error: "Internal server error"});
    }
})

// app.post("/checkUser", async (req, res) =>{
//     try{
//         const {email} = req.body;
//         const existingUser = await ProfileModel.findOne({email});
//         res.json({existingUser});
//     } catch(error){
//         console.error("Error checking user...", error);
//         res.status(500).json({error: "Internal server error"});
//     }
// })

console.log(mine.lookup('html'));

app.listen(3001, (req, res) =>{
    console.log("Listening...");
})

