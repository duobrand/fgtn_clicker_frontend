document.addEventListener('click', event => {
    // Create a new "+1" element
    const plusOne = document.createElement('div');
    plusOne.classList.add('click-animation');
    plusOne.textContent = '+1 FGTN';

    // Position the "+1" element at the click location
    plusOne.style.left = `${event.clientX}px`;
    plusOne.style.top = `${event.clientY}px`;

    // Add the "+1" element to the body
    document.body.appendChild(plusOne);

    // Remove the "+1" element after the animation ends
    setTimeout(() => {
        document.body.removeChild(plusOne);
    }, 1500);

    // Increment the counter
    counter++;
    document.getElementById('counter').textContent = counter;
});
