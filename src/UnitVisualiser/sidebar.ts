import transitionEvent from './transition_event';

// Sidebar visibility
var sideBarState = false;

/* Event listener */
document.getElementById('sidebar-btn').addEventListener('click', viewSidebar);

function viewSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (!sideBarState) {
        sidebar.classList.remove('sidebar-closed');
        var transitionEnd = transitionEvent(sidebar);
        document
            .getElementById('sidebar')
            .addEventListener(transitionEnd, () => {
                document
                    .getElementById('sidebar-btn')
                    .classList.add('sidebar-btn-opened');
                document
                    .getElementById('sidebar-btn')
                    .classList.remove('sidebar-btn-closed');
                sideBarState = true;
            });
    } else {
        sidebar.classList.add('sidebar-closed');
        var transitionEnd = transitionEvent(sidebar);
        sidebar.addEventListener(transitionEnd, () => {
            document
                .getElementById('sidebar-btn')
                .classList.remove('sidebar-btn-opened');
            document
                .getElementById('sidebar-btn')
                .classList.add('sidebar-btn-closed');
            sideBarState = false;
        });
    }
}
