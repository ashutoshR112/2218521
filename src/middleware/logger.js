const axios = require("axios");

const LOGGING_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhc2h1dG9zaHJhanBvb3Q5NTE5NTRAZ21haWwuY29tIiwiZXhwIjoxNzUyNTU2Nzk4LCJpYXQiOjE3NTI1NTU4OTgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4NmMwMjk5NC1lN2MwLTRiYjQtODgxMy1kZGFhYjQwYzBjN2YiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhc2h1dG9zaCByYWpwb290Iiwic3ViIjoiYmM3MjM1ZGMtODg0YS00MjRkLTg0YzItNTIzZmM2NzU1MWQxIn0sImVtYWlsIjoiYXNodXRvc2hyYWpwb290OTUxOTU0QGdtYWlsLmNvbSIsIm5hbWUiOiJhc2h1dG9zaCByYWpwb290Iiwicm9sbE5vIjoiMjIxODUyMSIsImFjY2Vzc0NvZGUiOiJRQWhEVXIiLCJjbGllbnRJRCI6ImJjNzIzNWRjLTg4NGEtNDI0ZC04NGMyLTUyM2ZjNjc1NTFkMSIsImNsaWVudFNlY3JldCI6InBFTUhCSlBzcUdoeXhKUGIifQ.ulgf4d1woD0Z-rl5OOlOciNTCDVUGKRyhHd_zNU83Oo"; 

async function log(stack, level, logPackage, message) {
    try {
        const res = await axios.post(LOGGING_ENDPOINT, {
            stack, level, package: logPackage, message
        }, {
            headers: { Authorization: `Bearer ${AUTH_TOKEN}` }
        });
        return res.data;
    } catch (err) {
        console.error("Failed to log:", err.message);
    }
}

module.exports = async function logger(req, res, next) {
    await log("backend", "info", "middleware", `Incoming request: ${req.method} ${req.url}`);
    next();
};

module.exports.log = log;