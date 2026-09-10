function getCountdown(month, day, year, message, isAuto) {
    month = parseInt(month, 10) - 1; 
    day = parseInt(day, 10);
    
    year = year ? parseInt(year, 10) : null;

    if (!message) {
        message = "the Unknown Day";
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    let targetYear;
    if (year === null || year === 0) {
        targetYear = now.getFullYear();
    } else if (year < now.getFullYear()) {
        document.getElementById("output").textContent = "Please pick a future year!";
        return null;
    } else {
        targetYear = year;
    }

    let dateOfDay = new Date(targetYear, month, day);

    if (now > dateOfDay && (year === null || year === 0)) {
        dateOfDay.setFullYear(targetYear + 1);
    }

    const diff = dateOfDay - now;
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (days === 0) {
        document.getElementById("output").textContent = "Today is " + message + "!";
        return 0;
    }

    let daysOrDay = days === 1 ? "day" : "days";
    let isOrAre = days === 1 ? "is" : "are";
    let auto = isAuto ? "Example Output: " : "";

    document.getElementById("output").textContent = auto + "There " + isOrAre + " " + days + " " + daysOrDay + " until " + message + "!";
    return days;
}

function getNumberOfDaysSinceDate(month, day, year, message, isAuto) {
    month = parseInt(month, 10) - 1;
    day = parseInt(day, 10);
    
    year = year ? parseInt(year, 10) : null;

    if (!message) {
        message = "the Unknown Day";
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    let targetYear;
    if (year === null || year === 0) {
        targetYear = now.getFullYear();
    } else if (year > now.getFullYear()) {
        document.getElementById("output").textContent = "Please pick a past year!";
        return null;
    } else {
        targetYear = year;
    }

    let pastDate = new Date(targetYear, month, day);

    if (now < pastDate && (year === null || year === 0)) {
        pastDate.setFullYear(targetYear - 1);
    }

    const diff = now - pastDate; 
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)); 

    if (days === 0) {
        document.getElementById("output").textContent = "Today is " + message + "!";
        return 0;
    }

    let daysOrDay = days === 1 ? "day" : "days";
    let isOrAre = days === 1 ? "is" : "are";
    let auto = isAuto ? "Example Output: " : "";

    document.getElementById("output").textContent = auto + "It has been " + days + " " + daysOrDay + " since " + message + "!";
    return days;
}

const requestedMonth = document.getElementById("mm");
const requestedDay = document.getElementById("dd");
const requestedYear = document.getElementById("yy");
const requestedName = document.getElementById("label");

function ClearAll() {
    requestedMonth.value = "";
    requestedDay.value = "";
    requestedYear.value = "";
    requestedName.value = "";
}

function SubmitRequest() {
    if (!requestedMonth.value || !requestedDay.value) {
        alert("Please select a month and enter a day.");
        return;
    }

    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const reqYear = requestedYear.value ? parseInt(requestedYear.value, 10) : now.getFullYear();
    const reqMonth = parseInt(requestedMonth.value, 10) - 1;
    const reqDay = parseInt(requestedDay.value, 10);

    const checkDate = new Date(reqYear, reqMonth, reqDay);

    if (requestedYear.value && checkDate < now) {
        getNumberOfDaysSinceDate(requestedMonth.value, requestedDay.value, requestedYear.value, requestedName.value);
    } else {
        getCountdown(requestedMonth.value, requestedDay.value, requestedYear.value, requestedName.value);
    }
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1); 

const currentYear = today.getFullYear();
requestedYear.value = tomorrow.getFullYear(); 
requestedYear.min = currentYear;

requestedMonth.options[tomorrow.getMonth() + 1].selected = true;
requestedDay.value = tomorrow.getDate();

requestedName.value = "Tomorrow";

// Get the days until Tax Day! :)
// getCountdown(4, 15, null, "Tax Day", true);

let tableOfAds = [];

async function loadJson(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw Error(response.status);
        return await response.json();
    } catch (error) {
        console.error("Failed to load external sites:", error);
        return {};
    }
}

window.addEventListener("DOMContentLoaded", async () => {
    const tableOfInitials = await loadJson("Resources/initialCountdowns.json");
    const keys = Object.keys(tableOfInitials);

    if (keys.length > 0) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const initialData = tableOfInitials[randomKey];

        // imageElement.setAttribute("src", adData.imageURL);
        // linkElement.setAttribute("href", adData.linkOfAd);
        // linkElement.setAttribute("target", "_blank");
        // messageElement.textContent = adData.message;

        // // Additional attributes:
        // imageElement.setAttribute("style", adData.imageStyle);
        // imageElement.setAttribute("width", adData.imageWidth);
        // messageElement.setAttribute("style", adData.messageStyle);

        // if (adData.isDownload == true) linkElement.setAttribute("download", "");

        getCountdown(initialData.mm, initialData.dd, initialData.yy, initialData.name, true);

    } else {
        console.warn("The initial countdown JSON object is empty!");
    }
});
