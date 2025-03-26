
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(1) + "°C";
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windSpeed").textContent);
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});