const sidebar_items = document.querySelectorAll('.sidebar-item .item-head');

sidebar_items.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('showItem')
    })
})

const filter_btn = document.querySelector('.filter-btn')
filter_btn.addEventListener('click', () => {
    filter_btn.parentElement.classList.toggle('showSidebar')
})