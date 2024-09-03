function toggleQuoteSection() {
    var checkBox = document.getElementById("quote-toggle");
    var textBox = document.getElementById("quote-text-box");

    if (checkBox.checked) {
        textBox.classList.remove('collapsed'); // Show the quote box
    } else {
        textBox.classList.add('collapsed'); // Hide the quote box
    }
}

function toggleObituarySection() {
    var checkBox = document.getElementById("obituary-toggle");
    var textBox = document.getElementById("obituary-text-box");

    if (checkBox.checked) {
        textBox.classList.remove('collapsed'); // Show the obituary box
    } else {
        textBox.classList.add('collapsed'); // Hide the obituary box
    }
}

function toggleTimelineSection() {
    var checkBox = document.getElementById("timeline-toggle");
    var contentBox = document.getElementById("timeline-content");

    if (checkBox.checked) {
        contentBox.style.display = "block"; // Show the timeline content
    } else {
        contentBox.style.display = "none"; // Hide the timeline content
    }
}

function toggleFavouritesSection() {
    var checkBox = document.getElementById("favourites-toggle");
    var contentBox = document.getElementById("favourites-content");

    if (checkBox.checked) {
        contentBox.style.display = "block"; // Show the favourites content
    } else {
        contentBox.style.display = "none"; // Hide the favourites content
    }
}

// Add this to ensure the content toggles as soon as the page loads
document.getElementById("favourites-toggle").addEventListener("change", toggleFavouritesSection);





let eventCount = 0;
const maxEvents = 20;

function toggleTimelineSection() {
    var checkBox = document.getElementById("timeline-toggle");
    var contentBox = document.getElementById("timeline-content");

    if (checkBox.checked) {
        contentBox.style.display = "block"; // Show the timeline content
    } else {
        contentBox.style.display = "none"; // Hide the timeline content
    }
}

function addTimelineEvent() {
    if (eventCount >= maxEvents) {
        document.getElementById("warning-message").style.display = "block";
        return;
    }

    eventCount++;

    const timelineContent = document.getElementById("timeline-content");

    // Create a new timeline event box
    const newEvent = document.createElement("div");
    newEvent.classList.add("timeline-event");

    // Add the structure for the timeline event form
    newEvent.innerHTML = `
        <div class="timeline-event-form">
            <div class="timeline-date-section">
                <label for="month-${eventCount}">Month</label>
                <select id="month-${eventCount}">
                    <option>Select Month</option>
                    <option>January</option>
                    <option>February</option>
                    <!-- Add other months here -->
                </select>

                <label for="year-${eventCount}">Year</label>
                <select id="year-${eventCount}">
                    <option>Select Year</option>
                    <!-- Add options for years here -->
                </select>

                <label for="day-${eventCount}">Day</label>
                <select id="day-${eventCount}">
                    <option>Select Day</option>
                    <!-- Add options for days here -->
                </select>
            </div>
            <div class="timeline-details-section">
                <label for="title-${eventCount}">Title</label>
                <input type="text" id="title-${eventCount}" placeholder="Title of the event">

                <label for="description-${eventCount}">Description</label>
                <textarea id="description-${eventCount}" placeholder="Description of event"></textarea>

                <label for="location-${eventCount}">Location (optional)</label>
                <input type="text" id="location-${eventCount}" placeholder="Location (optional)">
            </div>
            <button class="delete-btn" onclick="deleteTimelineEvent(this)">×</button>
        </div>
    `;

    // Insert the new event before the "Add a timeline event" button
    timelineContent.insertBefore(newEvent, document.getElementById("add-timeline-event-btn"));

    // Hide the "Add a timeline event" button if max events reached
    if (eventCount >= maxEvents) {
        document.getElementById("add-timeline-event-btn").style.display = "none";
    }
}

function deleteTimelineEvent(button) {
    const eventBox = button.parentElement;
    eventBox.remove();
    eventCount--;

    // Show the "Add a timeline event" button if the number of events is below the maximum
    if (eventCount < maxEvents) {
        document.getElementById("add-timeline-event-btn").style.display = "block";
        document.getElementById("warning-message").style.display = "none";
    }
}

document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        event.target.style.height = 'auto';
        event.target.style.height = (event.target.scrollHeight) + 'px';
    }
}, false);
