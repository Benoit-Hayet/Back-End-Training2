/*1*/const express = require('express');
/*2*/ const app = express();
/*3*/const port = 5331;

/*4*/app
.listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });/*4*/