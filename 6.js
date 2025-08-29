let user = prompt("Enter a S,W,G");

let cpuI = Math.floor(Math.random() * 3);
let cpu = ["S", "W", "G"][cpuI];

const match = (cpu, user) => {
    if (cpu === user) {
        return "Nobody";
    }
    else if (user === "W" && cpu === "S") {
        return "user";
    }
    else if (user === "G" && cpu === "S") {
        return "cpu";
    }
    else if (user === "S" && cpu === "G") {
        return "user";
    }
    else if (user === "G" && cpu === "W") {
        return "cpu";
    }
    else if (user === "W" && cpu === "G") {
        return "user";
    }
};

let result = match(cpu, user);

document.write(`cpu: ${cpu} <br> and user: ${user} <br> The winner is: ${result}`);