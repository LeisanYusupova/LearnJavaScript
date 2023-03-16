document.getElementById('thumbs').addEventListener('click', function(event) {
    event.preventDefault()
        if(!event.target.closest('a')) return
        document.getElementById('largeImg').src = event.target.src
})
    
    