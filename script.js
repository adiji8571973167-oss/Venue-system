/* =====================================================
   SMART CAMPUS VENUE & TIMETABLE SYSTEM
   BCA 3rd SEMESTER
   EFFECTIVE FROM 10 AUGUST 2026
   ===================================================== */


/* =====================================================
   CURRENT SELECTED SECTION
   ===================================================== */

let selectedSection = null;


/* =====================================================
   TIME PERIODS
   ===================================================== */

const periods = {

    "1st": "8:35-9:30",

    "2nd": "9:30-10:25",

    "3rd": "10:25-11:20",

    "4th": "11:20-12:15",

    "5th": "12:15-01:10",

    "6th": "1:10-02:00",

    "7th": "02:00-02:50",

    "8th": "02:50-03:40"

};


/* =====================================================
   SECTION DATA
   ===================================================== */

const timetable = {

A: [

["Monday","1st","B302","GKD","AG-401"],
["Monday","2nd","B304 A2","PIS","T307"],
["Monday","2nd","B308 A1","BS","C8"],
["Monday","3rd","NCC-001","RC","AG-401"],
["Monday","4th","LUNCH","",""],
["Monday","5th","B303 A1","RW","T401"],
["Monday","5th","B308 A2","SV","C8"],
["Monday","6th","B301","RM","AG-401"],
["Monday","7th","B305","NK","AG-401"],

["Tuesday","1st","B305","NK","AG302"],
["Tuesday","2nd","B304 A1","PIS","T307"],
["Tuesday","2nd","B308 A2","SV","C10"],
["Tuesday","3rd","B303 A2","RW","T307"],
["Tuesday","3rd","B308 A1","BS","C8"],
["Tuesday","4th","LIBRARY","",""],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B301","RM","AG-401"],

["Wednesday","1st","B303","RW","AG-401"],
["Wednesday","2nd","B301","RM","AG-401"],
["Wednesday","3rd","B304","PIS","AG-401"],
["Wednesday","4th","LUNCH","",""],
["Wednesday","5th","B302","GKD","AG-401"],
["Wednesday","6th","B305","NK","AG-401"],

["Thursday","1st","FREE","",""],
["Thursday","2nd","B306 A1","RM","C7"],
["Thursday","2nd","B307 A2","GKD","C9"],
["Thursday","4th","LUNCH","",""],
["Thursday","5th","B304","PIS","AG-401"],
["Thursday","6th","B303","RW","AG-401"],
["Thursday","7th","FREE","",""],

["Friday","1st","B305","NK","AG-401"],
["Friday","2nd","B303","RW","AG-401"],
["Friday","3rd","B306 A2","RM","C5"],
["Friday","3rd","B307 A1","GKD","C7"],
["Friday","5th","LUNCH","",""],
["Friday","6th","B304","PIS","AG-403"],
["Friday","7th","B302","GKD","AG-403"]

],


/* =====================================================
   SECTION B
   ===================================================== */

B: [

["Monday","1st","B306 DS B1","DS","C6"],
["Monday","1st","B307 MSS B2","MSS","C5"],
["Monday","2nd","B305","PVJ","AG-402"],
["Monday","3rd","B304","PYS","AG-402"],
["Monday","5th","LUNCH","",""],
["Monday","6th","B303","KN","AG-402"],

["Tuesday","1st","NCC-001/NSS-001","RC","AG-402"],
["Tuesday","2nd","B303","KN","AG-402"],
["Tuesday","3rd","B305","PVJ","AG-402"],
["Tuesday","4th","LIBRARY","",""],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B308 VS B1","VS","C8"],
["Tuesday","6th","B308 DGS B2","DGS","C7"],

["Wednesday","1st","B304","PYS","AG-402"],
["Wednesday","2nd","B302","MSS","AG-402"],
["Wednesday","3rd","B305","PVJ","AG-402"],
["Wednesday","4th","B301","DS","AG-402"],
["Wednesday","5th","LUNCH","",""],
["Wednesday","6th","B303","KN","AG-402"],

["Thursday","1st","B301","DS","AG-402"],
["Thursday","2nd","B303 KN B1","KN","AG-416"],
["Thursday","2nd","B304 PYS B2","PYS","AG-409"],
["Thursday","3rd","B302","MSS","AG-402"],
["Thursday","4th","B304","PYS","AG-402"],
["Thursday","5th","LUNCH","",""],
["Thursday","6th","B305","PVJ","AG-402"],

["Friday","1st","B301","DS","AG-402"],
["Friday","2nd","B303 KN B2","KN","AG-416"],
["Friday","2nd","B304 PYS B1","PYS","AG-409"],
["Friday","3rd","B306 DS B2","DS","C2"],
["Friday","3rd","B307 MSS B1","MSS","C1"],
["Friday","4th","LUNCH","",""],
["Friday","6th","B308 VS B1","VS","C8"],
["Friday","6th","B308 DGS B2","DGS","C7"],
["Friday","7th","B302","MSS","AG-301"]

],


/* =====================================================
   SECTION C
   ===================================================== */

C: [

["Monday","1st","B301","PYS","AG-403"],
["Monday","2nd","B302","MSA","AG-403"],
["Monday","3rd","LIBRARY","",""],
["Monday","4th","B304","PJS","AG-401"],
["Monday","5th","LUNCH","",""],
["Monday","6th","B305","RKS","AG403"],
["Monday","7th","B308 C1","NG","Lab-C7"],
["Monday","7th","B308 C2","TS","Lab-C8"],

["Tuesday","1st","B306 C1","PYS","C7"],
["Tuesday","1st","B307 C2","MSA","C6"],
["Tuesday","3rd","LIBRARY","",""],
["Tuesday","4th","B303","AA","AG-403"],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B304","PJS","AG-403"],
["Tuesday","7th","B308 C1","NG","Lab-C7"],
["Tuesday","7th","B308 C2","TS","Lab-C8"],

["Wednesday","1st","B302","MSA","AG-403"],
["Wednesday","2nd","B304 C1","PJS","AG-409"],
["Wednesday","2nd","B303 C2","AA","AG-416"],
["Wednesday","3rd","B305","RKS","AG-403"],
["Wednesday","4th","B303","AA","AG-403"],
["Wednesday","5th","LUNCH","",""],
["Wednesday","6th","B301","PYS","AG-403"],

["Thursday","1st","B305","RKS","AG-403"],
["Thursday","2nd","B304","PJS","AG-403"],
["Thursday","3rd","B302","MSA","AG-403"],
["Thursday","4th","B303","AA","AG-403"],
["Thursday","5th","LUNCH","",""],
["Thursday","6th","B301","PYS","AG-403"],

["Friday","1st","B304 C2","PJS","AG-409"],
["Friday","1st","B303 C1","AA","AG-416"],
["Friday","2nd","LIBRARY","",""],
["Friday","3rd","NCC-001/NSS-001","RC","AG-402"],
["Friday","4th","B306 C2","PYS","C12"],
["Friday","4th","B307 C1","MSA","C11"],
["Friday","6th","LUNCH","",""],
["Friday","7th","B305","RKS","AG-412"]

],


/* =====================================================
   SECTION D
   ===================================================== */

D: [

["Monday","1st","B308","NK","C8"],
["Monday","2nd","B304","SHR","AG410"],
["Monday","3rd","B305","NK","AG410"],
["Monday","4th","LUNCH","",""],
["Monday","5th","B301","VG","AG410"],
["Monday","6th","NCC/NSS","RC","AG410"],

["Tuesday","1st","B302","MSS","AG410"],
["Tuesday","2nd","B303 D2","TK","AG-409"],
["Tuesday","2nd","B304 D1","SHR","AG-416"],
["Tuesday","3rd","B301","VG","AG410"],
["Tuesday","4th","LUNCH","",""],
["Tuesday","5th","B304","SHR","AG410"],
["Tuesday","6th","B305","NK","AG410"],

["Wednesday","1st","B305","NK","AG410"],
["Wednesday","2nd","B303","TK","AG410"],
["Wednesday","3rd","B302","MSS","AG410"],
["Wednesday","4th","LUNCH","",""],
["Wednesday","5th","B308 D1","NK","C6"],
["Wednesday","6th","B303 D1","TK","T401"],
["Wednesday","6th","B304 D2","SHR","T307"],

["Thursday","1st","B304","SHR","AG410"],
["Thursday","2nd","B302","MSS","AG410"],
["Thursday","3rd","B303","TK","AG410"],
["Thursday","4th","LUNCH","",""],
["Thursday","5th","B306 VG D1","VG","C7"],
["Thursday","5th","B307 MSS D2","MSS","C8"],
["Thursday","6th","B305","NK","AG402"],

["Friday","1st","B306 VG D2","VG","C7"],
["Friday","1st","B307 MSS D1","MSS","C8"],
["Friday","2nd","B303","TK","AG403"],
["Friday","3rd","B301","VG","AG403"],
["Friday","4th","LUNCH","",""],
["Friday","5th","B308 KN D2","KN","C14"]

],


/* =====================================================
   SECTION E
   ===================================================== */

E: [

["Monday","1st","B303","RW","AG-302"],
["Monday","2nd","B305","MB","AG-302"],
["Monday","3rd","B304","FJ","AG-302"],
["Monday","4th","LUNCH","",""],
["Monday","5th","B307 E2","GKD","C6"],
["Monday","5th","B306 E1","DPS","C5"],

["Tuesday","1st","B306 E2","DPS","C9"],
["Tuesday","1st","B307 E1","GKD","C8"],
["Tuesday","2nd","B302","GKD","AG-302"],
["Tuesday","4th","LUNCH","",""],
["Tuesday","5th","B305","MB","L404"],
["Tuesday","6th","B301","DPS","L404"],

["Wednesday","1st","B302","GKD","AG-302"],
["Wednesday","2nd","NCC-001/NSS-001","RC","AG-302"],
["Wednesday","3rd","B303","RW","AG-302"],
["Wednesday","4th","LUNCH","",""],
["Wednesday","5th","B304","FJ","AG-302"],
["Wednesday","6th","B308 E1","AA","C6"],
["Wednesday","6th","B308 E2","MJ","C5"],

["Thursday","1st","B302","GKD","AG-302"],
["Thursday","2nd","B301","DPS","AG-302"],
["Thursday","3rd","B303 E2","RW","AG-416"],
["Thursday","3rd","B304 E1","FJ","AG409"],
["Thursday","4th","LUNCH","",""],
["Thursday","5th","B304 E2","FJ","AG416"],
["Thursday","5th","B303 E1","RW","AG409"],
["Thursday","6th","B305","MB","AG-303"],

["Friday","1st","B303","RW","AG-302"],
["Friday","2nd","B304","FJ","AG-302"],
["Friday","3rd","B301","DPS","AG-302"],
["Friday","4th","LUNCH","",""],
["Friday","5th","B305","MB","AG-302"],
["Friday","6th","B308 E1","AA","C6"],
["Friday","6th","B308 E2","MJ","C5"]

],


/* =====================================================
   SECTION F
   ===================================================== */

F: [

["Monday","2nd","B303","RPR","L204"],
["Monday","3rd","B304","SHR","L204"],
["Monday","4th","B305","VAG","L204"],
["Monday","5th","LUNCH","",""],
["Monday","6th","B306 F1","SS","C3"],
["Monday","6th","B307 F2","MSS","C4"],

["Tuesday","2nd","B303","RPR","L404"],
["Tuesday","3rd","B305","VAG","L404"],
["Tuesday","4th","B304","SHR","L404"],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B306 F2","SS","C5"],
["Tuesday","6th","B307 F1","MSS","C6"],

["Wednesday","2nd","B305","VAG","L204"],
["Wednesday","3rd","B304","SHR","L105"],
["Wednesday","4th","B301","SS","L105"],
["Wednesday","5th","B308 F1","GEE","C3"],
["Wednesday","5th","B308 F2","RKS","C4"],
["Wednesday","6th","LUNCH","",""],
["Wednesday","7th","B302","MSS","AG402"],

["Thursday","2nd","B303","RPR","AG303"],
["Thursday","3rd","NCC-001/NSS-001","RC","AG303"],
["Thursday","4th","B301","SS","AG303"],
["Thursday","5th","B303 F1","RPR","T307"],
["Thursday","5th","B304 F2","SHR","T401"],
["Thursday","6th","LUNCH","",""],
["Thursday","7th","B302","MSS","AG303"],

["Friday","2nd","B301","SS","AG402"],
["Friday","3rd","B308 F1","GEE","C11"],
["Friday","3rd","B308 F2","RKS","C12"],
["Friday","4th","B303 F2","RPR","T307"],
["Friday","4th","B304 F1","SHR","T401"],
["Friday","5th","B302","MSS","AG402"],
["Friday","6th","LUNCH","",""],
["Friday","7th","B305","VAG","AG402"]

],


/* =====================================================
   SECTION G
   ===================================================== */

G: [

["Monday","3rd","B305","GK","AG403"],
["Monday","4th","B301","GEE","AG403"],
["Monday","5th","LUNCH","",""],
["Monday","6th","B303","PV","L304"],
["Monday","7th","B308 G2","PYS","C5"],
["Monday","7th","B307 G1","GKD","C6"],

["Tuesday","3rd","B305","GK","AG412"],
["Tuesday","4th","B306 G1","GEE","C9"],
["Tuesday","4th","B307 G2","GKD","C7"],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B304","HG","L105"],
["Tuesday","7th","B303","PV","L105"],

["Wednesday","3rd","B305","GK","AG301"],
["Wednesday","4th","B302","GKD","AG301"],
["Wednesday","5th","LUNCH","",""],
["Wednesday","6th","B304","HG","AG302"],
["Wednesday","7th","B303 G1","PV","AGT409"],
["Wednesday","7th","B306 G2","GEE","C5"],
["Wednesday","8th","B308 G1","SP","C6"],

["Thursday","3rd","B303","PV","AG401"],
["Thursday","4th","B301","GEE","AG401"],
["Thursday","5th","LUNCH","",""],
["Thursday","6th","B302","GKD","AG410"],
["Thursday","7th","B305","GK","AG410"],
["Thursday","8th","B308 G1","SP","C11"],
["Thursday","8th","B304 G2","HG","AG409"],

["Friday","3rd","B304","HG","AG401"],
["Friday","4th","B301","GEE","AG401"],
["Friday","5th","B302","GKD","AG401"],
["Friday","6th","LUNCH","",""],
["Friday","7th","B303 G2","PV","AGT416"],
["Friday","7th","B304 G1","HG","AG409"],
["Friday","8th","NCC-001/NGK-001","RC","AG302"]

],


/* =====================================================
   SECTION H
   ===================================================== */

H: [

["Monday","2nd","B305","KN","AG303"],
["Monday","3rd","B306 H1","TS","C5"],
["Monday","3rd","B307 H2","MSS","C6"],
["Monday","5th","LUNCH","",""],
["Monday","6th","B303","AA","AG411"],
["Monday","7th","LIBRARY","",""],
["Monday","8th","B308 H1","KN","C7"],
["Monday","8th","B308 H2","PIS","C8"],

["Tuesday","2nd","B302","MSS","AG302"],
["Tuesday","3rd","B307 H1","MSS","C6"],
["Tuesday","3rd","B306 H2","TS","C5"],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B304","FJ","L205"],
["Tuesday","7th","B305","KN","L205"],
["Tuesday","8th","B303 H2","AA","T401"],
["Tuesday","8th","B304 H1","FJ","T307"],

["Wednesday","2nd","B308 H1","KN","C7"],
["Wednesday","2nd","B304 H2","FJ","T401"],
["Wednesday","3rd","B301","TS","AG305"],
["Wednesday","4th","LIBRARY","",""],
["Wednesday","5th","B302","MSS","AG303"],
["Wednesday","6th","LUNCH","",""],
["Wednesday","7th","B303","AA","AG302"],

["Thursday","2nd","B304","FJ","L408"],
["Thursday","3rd","LIBRARY","",""],
["Thursday","4th","B305","KN","AG410"],
["Thursday","5th","LUNCH","",""],
["Thursday","6th","B301","TS","AG302"],
["Thursday","7th","B303","AA","AG302"],
["Thursday","8th","B302","MSS","AG302"],

["Friday","2nd","FREE","",""],
["Friday","3rd","B304","FJ","SHALL"],
["Friday","4th","B305","KN","SHALL"],
["Friday","5th","LUNCH","",""],
["Friday","6th","B301","TS","AG302"],
["Friday","7th","NCC-001/NSS-001","RC","AG302"],
["Friday","8th","B303 H1","AA","AGT416"],
["Friday","8th","B308 H2","PIS","C5"]

],


/* =====================================================
   SECTION I
   ===================================================== */

I: [

["Monday","3rd","B301","HG","AG305"],
["Monday","4th","B302","MSP","AG305"],
["Monday","5th","B305","NG","AG302"],
["Monday","6th","LUNCH","",""],
["Monday","7th","B303","MJ","L105"],
["Monday","8th","B308 I1","DPS","C9"],
["Monday","8th","B304 I2","PJS","T401"],

["Tuesday","3rd","B301","HG","AG305"],
["Tuesday","4th","B302","MSP","AG305"],
["Tuesday","5th","LUNCH","",""],
["Tuesday","6th","B305","NG","AG302"],
["Tuesday","7th","NCC-001/NSS-001","RC","AG302"],
["Tuesday","8th","B304","PJS","AG302"],

["Wednesday","3rd","B306 I1","HG","C7"],
["Wednesday","3rd","B307 I2","MSP","C8"],
["Wednesday","4th","B308 I1","DPS","C5"],
["Wednesday","4th","B303 I2","MJ","L204"],
["Wednesday","5th","LUNCH","",""],
["Wednesday","6th","B305","NG","L304"],
["Wednesday","7th","B303","MJ","L304"],

["Thursday","3rd","B306 I2","HG","C6"],
["Thursday","3rd","B307 I1","MSP","C8"],
["Thursday","4th","B304","PJS","SHALL"],
["Thursday","5th","LUNCH","",""],
["Thursday","6th","B303","MJ","SHALL"],
["Thursday","7th","B302","MSP","SHALL"],

["Friday","3rd","B308 I2","VAG","C6"],
["Friday","3rd","B304 I1","PJS","AGT409"],
["Friday","3rd","B303 I1","MJ","AGT409"],
["Friday","5th","LUNCH","",""],
["Friday","6th","B305","NG","AG401"],
["Friday","7th","B304","PJS","AG401"],
["Friday","8th","B301","HG","AG401"]

]

};


/* =====================================================
   TEACHER FULL NAMES
   ===================================================== */

const teachers = {

    GKD: "Mr. Gourav Kumar Dhiman",
    RW: "Dr. Rubika Walia",
    PIS: "Ms. Preeti Sharma",
    NK: "Ms. Navneet Kaur",
    RC: "Dr. Ramesh Chander",
    RM: "Dr. Ritu Mishra",
    BS: "Dr. Bharti Sharma",
    SV: "Dr. Shikha Verma",

    PYS: "Ms. Preety Sharma",
    MSA: "Mr. Shivam Shukla",
    AA: "Ms. Ankita",
    PJS: "Dr. Pooja Sharma",
    RKS: "Dr. Ravi Sharma",
    TS: "Dr. Tejbir Singh",
    NG: "Dr. Neha Goyal",

    DS: "Dr. Shelja",
    PVJ: "Ms. Priya Vij",
    MSS: "Mr. Suraj Singh",
    KN: "Ms. Kanchan Nahar",
    VS: "Dr. Vivek Srivastava",
    DGS: "Dr. Gauri Sood",

    VG: "Mr. Varun Gupta",
    TK: "Dr. Tejinder Kaur",
    SHR: "Ms. Shikha Rani",

    DPS: "Dr. Poonam Singh",
    MB: "Ms. Manju Bagga",
    FJ: "Dr. Fakrun Jamal",
    MJ: "Ms. Jyoti Garg",
    AA: "Ms. Ankita",

    RPR: "Dr. Ratan Pal Rana",
    VAG: "Dr. Varsha Grover",
    SS: "Dr. Shaweta Sachdeva",
    GEE: "Dr. Geeta Kocher",
    GK: "Ms. Gurpreet Kaur",
    PV: "Dr. Priyanka Verma",
    SP: "Dr. Sanjeev Puri",

    HG: "Ms. Himanshi Gauri",
    PYS: "Ms. Preety Sharma",

    ARP: "Dr. Arpita Grover",
    DSH: "Dr. Deepshikha",
    MSA: "Mr. Shivam Shukla",
    MB: "Dr. Manju Bagga",
    NVJ: "Ms. Navjeet Kaur"

};


/* =====================================================
   SELECT SECTION
   ===================================================== */

function selectSection(section) {

    selectedSection = section;

    document.getElementById("selectedSection").innerHTML =
        `✅ Selected Section: <strong>BCA 3rd Semester - Section ${section}</strong>`;

    document.getElementById("searchInput").disabled = false;

    document.getElementById("searchButton").disabled = false;

    document.getElementById("searchInstruction").innerHTML =
        `You selected <strong>Section ${section}</strong>.
        Now search your classroom, teacher, day or code.`;

    document.getElementById("timetableTitle").innerHTML =
        `BCA 3rd Semester - Section ${section}
        | Effective from 10 August 2026`;

    document.getElementById("searchInput").placeholder =
        `Search Section ${section}: room, teacher, code, day...`;

    displaySection(section);

    document.getElementById("search").scrollIntoView({
        behavior: "smooth"
    });
}


/* =====================================================
   DISPLAY SECTION
   ===================================================== */

function displaySection(section, data = null) {

    const entries = data || timetable[section];

    const head = document.getElementById("tableHead");

    const body = document.getElementById("tableBody");

    head.innerHTML = `
        <tr>
            <th>Day</th>
            <th>Period</th>
            <th>Time</th>
            <th>Room / Venue</th>
            <th>Teacher</th>
            <th>Class / Lab</th>
        </tr>
    `;

    body.innerHTML = "";

    if (!entries || entries.length === 0) {

        body.innerHTML = `
            <tr>
                <td colspan="6">
                    No result found.
                </td>
            </tr>
        `;

        return;
    }


    entries.forEach(item => {

        const row = document.createElement("tr");

        let day = item[0];
        let period = item[1];
        let room = item[2];
        let code = item[3];
        let className = item[4];

        let teacher =
            teachers[code] || code || "-";

        let time =
            periods[period] || "-";


        if (
            room.toUpperCase() === "LUNCH" ||
            room.toUpperCase() === "LIBRARY" ||
            room.toUpperCase() === "FREE"
        ) {

            row.innerHTML = `
                <td>${day}</td>
                <td>${period}</td>
                <td>${time}</td>
                <td class="special">${room}</td>
                <td>-</td>
                <td>-</td>
            `;

        } else {

            row.innerHTML = `
                <td>${day}</td>
                <td>${period}</td>
                <td>${time}</td>
                <td>${room}</td>
                <td>
                    <strong>${code}</strong>
                    <br>
                    ${teacher}
                </td>
                <td>${className}</td>
            `;

        }

        body.appendChild(row);

    });

}


/* =====================================================
   SEARCH
   ===================================================== */

function searchTimetable() {

    if (!selectedSection) {

        alert("Please select your section first.");

        return;
    }


    const query =
        document.getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();


    if (!query) {

        displaySection(selectedSection);

        document.getElementById("searchMessage").innerHTML =
            `Showing complete timetable for Section ${selectedSection}.`;

        return;
    }


    const data = timetable[selectedSection];


    const results = data.filter(item => {

        const day = item[0];
        const period = item[1];
        const room = item[2];
        const code = item[3];
        const className = item[4];

        const teacher =
            teachers[code] || "";


        const searchableText = `

            ${day}
            ${period}
            ${periods[period] || ""}
            ${room}
            ${code}
            ${teacher}
            ${className}

        `.toLowerCase();


        return searchableText.includes(query);

    });


    displaySection(
        selectedSection,
        results
    );


    document.getElementById("searchMessage").innerHTML =

        results.length > 0

        ? `✅ ${results.length} result(s) found in Section ${selectedSection}.`

        : `❌ No result found in Section ${selectedSection}.`;


    document.getElementById("timetable")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   QUICK SEARCH
   ===================================================== */

function quickSearch(value) {

    if (!selectedSection) {

        alert(
            "Please select your section first."
        );

        return;
    }


    document.getElementById("searchInput").value =
        value;

    searchTimetable();

}


/* =====================================================
   ENTER KEY
   ===================================================== */

document.getElementById("searchInput")
    .addEventListener(
        "keypress",
        function(event) {

            if (event.key === "Enter") {

                searchTimetable();

            }

        }
    );


/* =====================================================
   CAMPUS MAP
   ===================================================== */

const campusLocation = [
    30.2513883,
    77.0468112
];


const campusMap =
    L.map("campusMap")
     .setView(
         campusLocation,
         17
     );


L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,

        attribution:
            "&copy; OpenStreetMap contributors"
    }
).addTo(campusMap);


/* =====================================================
   VENUES
   ===================================================== */

const venues = {

    "Block B": [
        30.25155,
        77.04665
    ],

    "Library": [
        30.25130,
        77.04640
    ],

    "Auditorium": [
        30.25110,
        77.04705
    ],

    "Canteen": [
        30.25095,
        77.04655
    ],

    "Medical Centre": [
        30.25075,
        77.04690
    ],

    "Sports Complex": [
        30.25055,
        77.04720
    ],

    "Parking": [
        30.25180,
        77.04715
    ],

    "Administrative Block": [
        30.25190,
        77.04655
    ]

};


const markers = {};


/* =====================================================
   CREATE MARKERS
   ===================================================== */

Object.keys(venues).forEach(name => {

    const marker =
        L.marker(venues[name])
        .addTo(campusMap);


    marker.bindPopup(`
        <strong>📍 ${name}</strong>
        <br><br>
        Smart Campus Venue
        <br><br>

        <button onclick="openGoogleMaps()">
            Open Google Maps
        </button>
    `);


    markers[name] = marker;

});


/* =====================================================
   SHOW VENUE
   ===================================================== */

function showVenue(name) {

    const position =
        venues[name];


    if (!position) return;


    campusMap.setView(
        position,
        19
    );


    markers[name].openPopup();


    document.getElementById("map")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================================
   SHOW ALL VENUES
   ===================================================== */

function showAllVenues() {

    campusMap.setView(
        campusLocation,
        17
    );

}


/* =====================================================
   GOOGLE MAPS
   ===================================================== */

function openGoogleMaps() {

    window.open(
        "https://maps.app.goo.gl/Krq2H4o7uM9fvLnY9",
        "_blank"
    );

}


/* =====================================================
   GO TO SECTION
   ===================================================== */

function goToSections() {

    document.getElementById("sections")
        .scrollIntoView({
            behavior: "smooth"
        });

}
/* =====================================================
   PERSONAL DETAILS
===================================================== */

function showMember(name) {

    const details = document.getElementById("memberDetails");
    const memberName = document.getElementById("memberName");
    const memberInfo = document.getElementById("memberInfo");

    memberName.innerText = name;

    if (name === "Aditya Kumar") {

        memberInfo.innerHTML =
            "Name: Aditya Kumar<br>" +
            "Course: BCA(AI/ML)<br>" +
            "Semester: 3rd Semester<br>" +
            "Roll number: 13250318<br>" +
            "Role: Project Team Member";

    }

    else if (name === "Aksh Pundir") {

        memberInfo.innerHTML =
            "Name: Aksh Pundir<br>" +
            "Course: BCA(AI/ML)<br>" +
            "Semester: 3rd Semester<br>" +
            "Roll number: 13250319<br>" +
            "Role: Project Team Member";

    }

    else if (name === "Aakash Kamboj") {

        memberInfo.innerHTML =
            "Name: Aakash Kamboj<br>" +
            "Course: BCA(AI/ML)<br>" +
            "Semester: 3rd Semester<br>" +
            "Roll number: 13250302<br>" +
            "Role: Project Team Member";

    }

    details.style.display = "block";

    details.scrollIntoView({
        behavior: "smooth"
    });
}


function closeMemberDetails() {

    document.getElementById("memberDetails").style.display = "none";

}