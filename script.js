//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click', () => {
    const select = document.getElementById('colorSelect');
    select.remove(select.selectedIndex);
});
