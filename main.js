function openPopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.add("open-popup");
}

function closePopup(popupId) {
    let popup = document.getElementById(popupId);
    popup.classList.remove("open-popup");
}

// Get all close buttons
let closeButtons = document.querySelectorAll('.popup a.close');
closeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        let popup = button.closest('.popup');
        popup.classList.remove("open-popup");
    });
});
