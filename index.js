const { app, port } = require("./app");

app.listen(port, (error) => {
  if (error) {
    console.error("Error starting the application:", error);
  }
  console.log(`Application running on port ${port}`);
});
