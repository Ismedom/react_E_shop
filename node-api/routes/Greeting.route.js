const Router = require("express").Router();

const paths = ["/", "/greeting"];
paths.forEach((path) => {
    Router.get(path, (req, res) => {
        res.send(`
            <!DOCTYPE html>
      <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome</title>
        <style>
            body {
                background: linear-gradient(45deg, rgb(1, 61, 1), rgb(1, 1, 67));
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                font-weight: bolder;
                overflow: hidden;
                margin: 0;
            }

            div:not(.circle) {
                font-size: 2rem;
                color: rgb(205, 205, 205);
                position: fixed;
                z-index: 100;
                inset: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(20px);
            }

            div.circle {
                width: 1px;
                aspect-ratio: 1/1;
                border-radius: 50%;
                position: absolute;
                background: transparent;
                box-shadow: 0 0 200px 100px #a9cdff;
            }

            div.circle:first-child {
                animation: move1 100s infinite linear;
            }

            div.circle:last-child {
                animation: move2 120s infinite linear;
                box-shadow: 0 0 200px 100px #ffa9a9;
            }

            @keyframes move1 {
                0% {
                    top: 30%;
                    left: 20%;
                }
                25% {
                    top: 30%;
                    left: 80%;
                }
                50% {
                    top: 80%;
                    left: 80%;
                }
                75% {
                    top: 80%;
                    left: 20%;
                }
                100% {
                    top: 30%;
                    left: 20%;
                }
            }

            @keyframes move2 {
                0% {
                    top: 70%;
                    left: 80%;
                }
                25% {
                    top: 70%;
                    left: 20%;
                }
                50% {
                    top: 20%;
                    left: 20%;
                }
                75% {
                    top: 20%;
                    left: 80%;
                }
                100% {
                    top: 70%;
                    left: 80%;
                }
            }
        </style>
        </head>
         <body>
        <div class="circle"></div>
        <div class="circle"></div>
        <div>Welcome to my API</div>
         </body>
    </html>

        `);
    });
});

module.exports = Router;
