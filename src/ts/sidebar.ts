// Sidebar visibility
var sideBarState = false;

/* Event listener */
document.getElementById("sidebar-btn").addEventListener("click", viewSidebar);

function viewSidebar() {
    if (!sideBarState) {
        document.getElementById("sidebar").classList.remove("sidebar-closed");
        document.getElementById("sidebar-btn").classList.add("sidebar-btn-opened");
        document.getElementById("sidebar-btn").classList.remove("sidebar-btn-closed");
        sideBarState = true;
    } else {
        document.getElementById("sidebar").classList.add("sidebar-closed");
        document.getElementById("sidebar-btn").classList.remove("sidebar-btn-opened");
        document.getElementById("sidebar-btn").classList.add("sidebar-btn-closed");
        sideBarState = false;
    }
}