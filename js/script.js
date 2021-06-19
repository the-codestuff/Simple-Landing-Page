const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
})

sr.reveal('.section__contents',{
    origin: 'left',
    interval: 90,
})
sr.reveal('.image',{
    origin: 'right',
    interval: 90,
})