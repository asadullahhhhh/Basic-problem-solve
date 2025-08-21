const pingPong = (n) => {
    for (let i = 1; i <= n; i++) {
        let output = (i % 3 === 0 ? "Ping" : "") +
                     (i % 5 === 0 ? "Pong" : "");
        console.log(output || i);
    }
}

pingPong(15);