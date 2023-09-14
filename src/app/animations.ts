import {transition, style, state, trigger, animate} from '@angular/animations'

export let fade = trigger('fade',[

    state('void',style({ opacity:0})),

    transition(':enter, :leave', [
        animate(2000)
    ])
])

export let slide = trigger('slide',[

    state('void',style({ opacity:1, transform:'translateX(50px)'})),

    transition(':enter', [
        animate(200)
    ])
])