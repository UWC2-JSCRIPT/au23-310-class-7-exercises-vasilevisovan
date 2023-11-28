// TODO
 document.getElementById('inquiry-type').addEventListener('change', function() {
    // Hide all additional sections initially
    document.querySelector('.job-opportunity').classList.add('hidden');
    document.querySelector('.talk-code').classList.add('hidden');

    // Show the selected additional section
    var selectedOption = this.value;
    if (selectedOption === 'job-opportunity') {
        document.querySelector('.job-opportunity').classList.remove('hidden');
    } else if (selectedOption === 'talk-code') {
        document.querySelector('.talk-code').classList.remove('hidden');
    }
});






