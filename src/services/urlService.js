const { log } = require("../middleware/logger");
const { generateShortcode } = require("../utils/utils");
const db = require("../data/data");

exports.createShortURL = async (req, res) => {
    const { url, validity = 30, shortcode } = req.body;
    try {
        const code = shortcode || generateShortcode();
        if (db[code]) return res.status(409).json({ error: "Shortcode already exists" });

        const now = new Date();
        const expiry = new Date(now.getTime() + validity * 60000);
        db[code] = { url, expiry, created: now, clicks: [] };

        await log("backend", "info", "service", `Short URL created: ${code}`);
        res.status(201).json({ shortLink: `http://localhost:3000/${code}`, expiry: expiry.toISOString() });
    } catch (err) {
        await log("backend", "error", "service", err.message);
        res.status(500).json({ error: "Server Error" });
    }
};

exports.redirectURL = (req, res) => {
    const { code } = req.params;
    const entry = db[code];
    if (!entry) return res.status(404).json({ error: "Shortcode not found" });
    if (new Date() > new Date(entry.expiry)) return res.status(410).json({ error: "Link expired" });

    entry.clicks.push({ timestamp: new Date().toISOString(), referrer: req.get("Referer") || "direct" });
    res.redirect(entry.url);
};

exports.getStats = (req, res) => {
    const { code } = req.params;
    const entry = db[code];
    if (!entry) return res.status(404).json({ error: "Shortcode not found" });

    res.json({
        url: entry.url,
        created: entry.created.toISOString(),
        expiry: entry.expiry.toISOString(),
        totalClicks: entry.clicks.length,
        clicks: entry.clicks
    });
};