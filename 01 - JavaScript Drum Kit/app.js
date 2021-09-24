/**
 * 
 */
window.addEventListener("keydown", playSound);
/**
 * Takes the event from window after key has been pressed down.
 * Uses the data-attributes to fire the audio play.
 * uses key since KeyCode is deprecated
 * @param {*} e 
 * @returns sound that fit
 */
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);
    //console.log(objectOrParameterPeeker(audio));
    if (!audio) return "not the correct key";
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
/**
 * Waits for the css-transform to end and then removes it.
 * @param {*} e looks for the transform porpertyName
 * @returns nothing, just removes the class "playing" from the classList
 */
function removeTransition(e) { //then when we give it the "e", it can display it on the console.
    if (e.propertyName !== 'transform') return; //skip if not transition propertyName
    this.classList.remove('playing');
}


const keys = this.document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener(
    'transitionend', removeTransition //holy hell, so there is a default event parameter being passed in that function
));

//-------------------------------------------------------
function objectOrParameterPeeker(objectOrParameter) {
    if (typeof objectOrParameter === 'object') {
        console.log(
            "This passed the object conditional.\n" +
            "If any Errors happen it's due to my lack of knowledge")
        return Object.keys(objectOrParameter);
    }
    console.log("this one has no keys.")
}