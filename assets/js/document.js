const documents = document.querySelectorAll('.document-item .item-head')

documents.forEach(doc => {
    doc.addEventListener('click', () => {
        doc.parentElement.classList.toggle('showDocument')
    })
})

document.addEventListener('click', (e) => {
    documents.forEach(doc => {
        doc.parentElement.contains(e.target) || doc.parentElement.classList.remove('showDocument')
    })
})