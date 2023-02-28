function random(a, b) {
    let rand = ( Math.random() * (Math.floor(b) + 1 - Math.ceil(a) ) + Math.ceil(a) - 0.5 );
    return Math.round(rand);
    }
    alert (random(-0.7, 2.7));