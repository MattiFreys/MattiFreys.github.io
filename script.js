document.addEventListener('DOMContentLoaded', function () {
    const englishContent = document.querySelectorAll('.english');
    const icelandicContent = document.querySelectorAll('.icelandic');
    const switchLanguageButton = document.getElementById('switchLanguage');

    // Function to toggle content
    function toggleLanguage() {
        if (englishContent[0].style.display === 'block') {
            // Switch to Icelandic
            flagImage.src = "images/icelandic_flag.svg";
            flagImage.alt = "UK";
            for (let i = 0; i < englishContent.length; i++) {
                englishContent[i].style.display = 'none';
                icelandicContent[i].style.display = 'block';
            }
        } else {
            // Switch to English          
            flagImage.src = "images/uk_flag.svg";
            flagImage.alt = "IS";
            for (let i = 0; i < englishContent.length; i++) {
                icelandicContent[i].style.display = 'none';
                englishContent[i].style.display = 'block';
            }
        }
    }

    // Add click event listener to the language switch button
    switchLanguageButton.addEventListener('click', toggleLanguage);
});
