/*
   status handling
*/

const StatusApiUrl = "https://status.kreativitaet-trifft-technik.de/api/statusStream?spaceOpen=1&radstelleOpen=1&machining=1&woodworking=1&lab3dOpen=1";

function set_status(room, state) {
    console.info("Updating room state", room, state);

    let element = document.getElementById("status-" + room);

    if (!element) {
        let newElement = document.getElementById("status-template")?.cloneNode(true);
        if (!newElement) {
            return;
        }

        newElement.id = newElement.id.replace("template", room);
        newElement.classList.remove("d-none");

        for (let child of newElement.children) {
            child.id = child.id.replace("template", room);
            child.classList.add("d-none");
        }

        let parent = document.getElementById("space-status");
        parent.appendChild(newElement);

        element = newElement;
    }

    for (let child of element.children) {
        if (child.id.startsWith("status-name")) {
            for (let room_translation of ROOMS) {
                if (room_translation.name === room) {
                    child.innerText = location.pathname.startsWith("/en") ? room_translation.title.en : room_translation.title.de;
                    break;
                } else {
                    child.innerText = room + ":";
                }
            }

            child.classList.remove("d-none");
        } else {
            child.classList.add("d-none");
        }
    }

    let public_state;
    let color;

    switch (state) {
        case 'none':
            public_state = 'closed';
            color = 'danger';
            break;
        case 'open':
            public_state = 'open';
            color = 'success';
            break;
        case 'open+':
            public_state = 'open';
            color = 'success';
            break;
        case 'keyholder':
            public_state = 'keyholder';
            color = 'warning';
            break;
        case 'member':
            public_state = 'member';
            color = 'warning';
            break;
        case 'closing':
            public_state = 'closing';
            color = 'warning';
            break;
        default:
            console.warn("Unknown state for room", state, room);
            public_state = 'unknown';
            color = 'info';
            break;
    }

    document.getElementById("status-text-" + public_state + "-" + room).classList.remove("d-none");

    element.classList.remove("btn-danger", "btn-success", "btn-warning", "btn-info");
    element.classList.add("btn-" + color);
}

function on_status_change(event) {
    let room = event.type;

    try {
        console.log(event.data);
        set_status(room, JSON.parse(event.data).state);
    } catch (err) {
        console.error("Error while setting room status", room, err, event);
        set_status(room, "none");
    }
}

function init_status() {
    let status_source = new EventSource(StatusApiUrl);
    let last_keepalive;
    let startup_timer;

    status_source.onopen = function () {
        console.log('EventSource is open');
        last_keepalive = Date.now();
    };

    status_source.onerror = function (err) {
        console.error('EventSource error.', err);
        clearTimeout(startup_timer);
        status_source.close();
        setTimeout(init_status, 5000);
    };

    status_source.addEventListener('spaceOpen', on_status_change);
    status_source.addEventListener('lab3dOpen', on_status_change);
    status_source.addEventListener('radstelleOpen', on_status_change);
    status_source.addEventListener('machining', on_status_change);
    status_source.addEventListener('woodworking', on_status_change);

    status_source.addEventListener('keepalive', function (e) {
        last_keepalive = Date.now();
    }, false);
}

init_status();


window.addEventListener("keydown", e => {
    let btn;

    console.log(e.key);
    switch (e.key) {
        case "ArrowLeft":
            btn = document.getElementById("album-image-previous");
            break;
        case "ArrowRight":
            btn = document.getElementById("album-image-next");
            break;
        case " ":
            btn = document.getElementById("img-controls-view");
            break;
        default:
            break;
    }

    if (btn) {
        btn.click();
    }

    return true;
});

function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function refreshDarkMode() {
    let elem = document.getElementById("img-icon-lang");

    if (!elem) {
        setTimeout(() => {
            elem = document.getElementById("img-icon-lang");
            if (elem) {
                refreshDarkMode();
            }
        }, 5)
    }
}

refreshDarkMode();
