// get elements
const bestInput = document.getElementById("bestInput");
const likelyInput = document.getElementById("likelyInput");
const worstInput = document.getElementById("worstInput");
const metricSelect = document.getElementsByClassName("metricSelect");
let currentMetric = metricSelect[0];

const O = document.getElementsByClassName("O");
const N = document.getElementsByClassName("N");
const P = document.getElementsByClassName("P");

const estimateOut = document.getElementsByClassName("estimate");
const deviationOut = document.getElementsByClassName("deviation");
const metricOut = document.getElementsByClassName("metricOut");

//default the metric
[].forEach.call( metricOut, el => el.innerHTML = currentMetric.value );

addEvent(bestInput, "keyup");
addEvent(likelyInput, "keyup");
addEvent(worstInput, "keyup");
addEvent(metricSelect[0], "change");

function addEvent(element, event){
    element.addEventListener(event, 
                            () => 
                            { 
                                updateDisplay();
                            });
}

function updateDisplay() {
    let metric = metricSelect[0].value;
    let opt = bestInput.value != '' ? bestInput.value : 0;
    let nom = likelyInput.value != '' ? likelyInput.value : 0;
    let pes = worstInput.value != '' ? worstInput.value : 0;
    let estimate = (( 4*nom + 1*opt + 1*pes )/6).toFixed(1);
    let deviation = ((1*pes - 1*opt)/6).toFixed(1);

    [].forEach.call(O, el => el.innerHTML = opt);
    [].forEach.call(N, el => el.innerHTML = nom);
    [].forEach.call(P, el => el.innerHTML = pes);
    [].forEach.call(estimateOut, el => el.innerHTML = estimate);
    [].forEach.call(deviationOut, el => el.innerHTML = deviation);
    [].forEach.call(metricOut, el => el.innerHTML = metric);
}
