// TODO
 document.getElementById('inquiry-type').addEventListener('change', function() {
        // Hide all additional sections initially
        document.querySelector(".business").classList.add('hidden');
        document.querySelector(".technical").classList.add('hidden');
    
        // Show the selected additional section
        const selectedOption = this.value;
        if (selectedOption === "business") {
            document.querySelector(".business").classList.remove('hidden');
        } else if (selectedOption === "technical") {
            document.querySelector(".technical").classList.remove('hidden');
        }
    });
