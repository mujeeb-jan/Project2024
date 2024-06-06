import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/editor", (req, res) =>{
    res.render("editor.ejs");
});

app.get("/about", (req, res) => {
    res.render("About.ejs");
});

app.get("/contact", (req, res) => {
    res.render("Contact.ejs");
});

app.get("/services", (req, res) => {
    res.render("Services.ejs");
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.listen(port, () => {
    console.log(`server running on port ${port}`);
});