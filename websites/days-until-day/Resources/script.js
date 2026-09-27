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
    const inputValues = [requestedDay, requestedMonth, requestedName, requestedYear];
    
    for (const inputVal of inputValues) {
        inputVal.value = "";
    }

    const keys = Object.keys(tableOfInitials);

    if (keys.length > 0) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const initialData = tableOfInitials[randomKey];

        const month = initialData[1];
        const day = initialData[2];
        const year = initialData[3];
        const name = initialData[0];

        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const checkDate = new Date(year, month, day);

        if (year && checkDate < now) {
            getNumberOfDaysSinceDate(month, day, year, name, true);
        } else {
            getCountdown(month, day, year, name, true);
        }
    }
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

const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);
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

// Get the number of day from the range of two dates

const month1 = document.getElementById("mm1");
const month2 = document.getElementById("mm2");

const day1 = document.getElementById("dd1");
const day2 = document.getElementById("dd2");

const year1 = document.getElementById("yy1");
const year2 = document.getElementById("yy2");

const rangeOutput = document.getElementById("output1");

year1.value = yesterday.getFullYear();
year2.value = tomorrow.getFullYear();

month1.options[yesterday.getMonth() + 1].selected = true;
month2.options[tomorrow.getMonth() + 1].selected = true;

day1.value = yesterday.getDate();
day2.value = tomorrow.getDate();

function clearAllRange() {
    const varTables = [month1, month2, day1, day2, year1, year2];

    varTables.forEach(element => {
        element.value = "";
    });
}

function getDaysFromRange(mo, da, ye, mo1, da1, ye1) {
    let m1;
    let d1;
    let y1;

    let m2;
    let d2;
    let y2;

    if (isNaN(mo) || isNaN(da) || isNaN(ye) || isNaN(mo1) || isNaN(da1) || isNaN(ye1)) {
        m1 = parseInt(month1.value, 10);
        d1 = parseInt(day1.value, 10);
        y1 = parseInt(year1.value, 10);

        m2 = parseInt(month2.value, 10);
        d2 = parseInt(day2.value, 10);
        y2 = parseInt(year2.value, 10);
    } else {
        m1 = mo;
        d1 = da;
        y1 = ye;

        m2 = mo1;
        d2 = da1;
        y2 = ye1;
    }

    if (isNaN(m1) || isNaN(d1) || isNaN(y1) || isNaN(m2) || isNaN(d2) || isNaN(y2)) {
        rangeOutput.innerHTML = "Please select valid dates for both ranges.";
        return;
    }

    const startDate = new Date(y1, m1 - 1, d1);
    const endDate = new Date(y2, m2 - 1, d2);

    const diffInTime = endDate.getTime() - startDate.getTime();
    const diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedStart = startDate.toLocaleDateString('en-US', options);
    const formattedEnd = endDate.toLocaleDateString('en-US', options);

    rangeOutput.innerHTML = `It's ${diffInDays} days from the range of ${formattedStart} - ${formattedEnd}`;
}

async function loadJson(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw Error(response.status);
        return await response.json();
    } catch (error) {
        console.error("Failed to load external sites:", error);
        return [];
    }
}

let tableOfInitials;
let keys;

window.addEventListener("DOMContentLoaded", async () => {
    tableOfInitials = await loadJson("Resources/initialCountdowns.json");

    keys = Object.keys(tableOfInitials);

    if (keys.length > 0) {
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const initialData = tableOfInitials[randomKey];

        const month = initialData[1];
        const day = initialData[2];
        const year = initialData[3];
        const name = initialData[0];

        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const checkDate = new Date(year, month, day);

        if (year && checkDate < now) {
            getNumberOfDaysSinceDate(month, day, year, name, true);
        } else {
            getCountdown(month, day, year, name, true);
        }

        const randomKey1 = keys[Math.floor(Math.random() * keys.length)];
        const initialData1 = tableOfInitials[randomKey1];

        const mon1 = initialData1[1];
        const dayy1 = initialData1[2];
        let yea1 = initialData1[3];

        if (!yea1 || isNaN(yea1)) {
            yea1 = now.getFullYear();
        }
        
        const date1 = new Date(yea1, mon1, dayy1);

        let randomKey2, initialData2, mon2, dayy2, yea2, date2;
        let maxRetries = 15;
        do {
            randomKey2 = keys[Math.floor(Math.random() * keys.length)];
            initialData2 = tableOfInitials[randomKey2];

            mon2 = initialData2[1];
            dayy2 = initialData2[2];
            yea2 = initialData2[3];

            if (!yea2 || isNaN(yea2)) {
                yea2 = now.getFullYear();
            }

            date2 = new Date(yea2, mon2, dayy2);
            maxRetries--;
            
        } while (date1.getTime() === date2.getTime() && maxRetries > 0);

        if (date1.getTime() === date2.getTime()) {
            console.warn("Could not find two different dates! Check if your JSON has enough unique dates.");
            return;
        }

        if (date1 > date2) {
            getDaysFromRange(mon2, dayy2, yea2, mon1, dayy1, yea1);
        } else {
            getDaysFromRange(mon1, dayy1, yea1, mon2, dayy2, yea2);
        }
    }
});
