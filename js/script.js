const spans = document.querySelectorAll('h1 span');

spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand');
}));

spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.remove('animated', 'rubberBand');
}));

const hmtlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')

var t1 = new TimelineLite()

t1.fromTo(hmtlBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(80% - 6px)`, ease: Power4.easeOut})
    .fromTo(cssBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut})
    .fromTo(jsBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(70% - 6px)`, ease: Power4.easeOut});


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0.2
})
.setTween(t1)
.addTo(controller)

