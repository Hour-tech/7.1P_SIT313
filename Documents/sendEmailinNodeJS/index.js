require("dotenv").config();

const express = require("express");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.json());

app.use(express.static("public"));

const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/send-email", async (req, res) => {
    const userEmail = req.body.email; 

    const message = {
        to: userEmail, 
        from: "senghourkeat@gmail.com", 
        subject: "Welcome to our memebership",
        text: "Thank for subscribe",
    };

    try {
        await sgMail.send(message);
        console.log("Email sent to", userEmail);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("Error sending email:", error);
        if (error.response) {
            console.error(error.response.body);
        }
        res.status(500).json({ success: false });
    }
});

// const sendMail = async (msg) => {
//     try {
//         await sgMail.send(msg);
//         console.log("Message sent succesfully");
//     } catch (error) {
//         console.error(error);

//         if (error.response) {
//             console.error(error.response.body);
//         }
//     }
// };
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


// sendMail({
//     to: "senghourkeat@gmail.com",
//     from: "senghourkeat@gmail.com",
//     subject: "NodeJS Says Hello!",
//     text: "It's really this easy",
// });