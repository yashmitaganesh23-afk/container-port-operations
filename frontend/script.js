

const customs = [
    {
        id: "CONT1001",
        status: "Pending",
        inspection: "Required"
    },
    {
        id: "CONT1002",
        status: "Under Inspection",
        inspection: "In Progress"
    },
    {
        id: "CONT1003",
        status: "Cleared",
        inspection: "Completed"
    }
];

const logistics = [
    {
        container: "CONT1001",
        truck: "TRK101",
        driver: "Arun",
        destination: "Chennai",
        status: "Dispatched"
    },
    {
        container: "CONT1002",
        truck: "TRK102",
        driver: "Kumar",
        destination: "Mumbai",
        status: "Waiting"
    }
];

function showSection(sectionId) {

    const sections = document.querySelectorAll("main section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}


// Load containers from MySQL database through API
async function loadContainers() {

    const table = document.getElementById("containerTable");

    try {

        const response = await fetch("/api/containers");

        const containers = await response.json();

        table.innerHTML = "";

        containers.forEach(container => {

            table.innerHTML += `
                <tr>
                    <td>${container.container_number}</td>
                    <td>${container.cargo_type}</td>
                    <td>${container.location}</td>
                    <td>${container.status}</td>
                    <td>${container.destination}</td>
                </tr>
            `;

        });

        document.getElementById("totalContainers").textContent =
            containers.length;

    } catch (error) {

        console.error("Error loading containers:", error);

    }

}


async function loadVessels() {

    const table = document.getElementById("vesselTable");

    try {

        const response = await fetch("/api/vessels");

        const vessels = await response.json();

        table.innerHTML = "";

        vessels.forEach(vessel => {

            table.innerHTML += `
                <tr>
                    <td>${vessel.vessel_name}</td>
                    <td>${vessel.arrival_time}</td>
                    <td>${vessel.departure_time}</td>
                    <td>${vessel.berth}</td>
                    <td>${vessel.status}</td>
                </tr>
            `;

        });

        document.getElementById("activeVessels").textContent =
            vessels.length;

    } catch (error) {

        console.error("Error loading vessels:", error);

    }
}


function loadCustoms() {

    const table = document.getElementById("customsTable");

    table.innerHTML = "";

    customs.forEach(item => {

        table.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.status}</td>
                <td>${item.inspection}</td>
            </tr>
        `;

    });

    document.getElementById("customsPending").textContent =
        customs.filter(item => item.status !== "Cleared").length;

}


function loadLogistics() {

    const table = document.getElementById("logisticsTable");

    table.innerHTML = "";

    logistics.forEach(item => {

        table.innerHTML += `
            <tr>
                <td>${item.container}</td>
                <td>${item.truck}</td>
                <td>${item.driver}</td>
                <td>${item.destination}</td>
                <td>${item.status}</td>
            </tr>
        `;

    });

}




loadContainers();
loadVessels();
loadCustoms();
loadLogistics();