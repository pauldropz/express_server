const eventEmitter = require("events");
const baller = new eventEmitter();

            // First Ballers
baller.on("laliga", (cup) => {
    if (cup === "laliga") {
    console.log("Congratulation on winning the laliga");
}
});


            // Second Baller
baller.on ("epl", (cup) => {
    if (cup === "epl") {
    console.log("Congratulation on winning the epl");
}
});

            // Third Baller
baller.on("lig1", (cup) => {
    if (cup === "lig1") {
    console.log("Congratulation on winning the lig1 tittle");
}
});

            // Fourth Baller
baller.on("Serie_A", (cup) => {
    if (cup === "Serie_A") {
    console.log("congratulation on winning the Serie A tittle");
}
});

process.on("exit", (code) => {
    console.log ( "process exit event code", code);
});

        baller.emit("laliga", "laliga" );
        baller.emit("epl",  "epl");
        baller.emit("Serie_A", "Serie_A" );
        baller.emit("lig1",  "lig1"  );
