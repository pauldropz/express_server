                // NOde Functionality

const { get } = require("https");

get ("https://www.google.com", (res) => {
    res.on("data", (chunk) => {
        console.log (`Data cunnk: ${chunk}`);

    });
    res.on("end", () => {
        console.log("No more data");
    });
 });


//  req.end();
                // MODULE USES
        // when we want to reuse existing code
        // Help us organise the code
        // Expose only what will be used






















                    // 