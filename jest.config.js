module.exports = {
    "testEnvironment": "node",
    "runner": "groups",
    "coverageReporters": ["text-summary", "html"],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporters", {
            "publicPath": "./html-report",
            "filename": "OpenWeatherMapTestResults.html",
            "expand": true,
            "openReport": false
        }]
    ]
}

