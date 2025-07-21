function setupSpeechButton(contentSelector, buttonSelector) {
    // Get associated elements
    const button = document.getElementById(buttonSelector);
    const content = document.getElementById(contentSelector);

    // Escape this function if Web Speech API is not supported, or associated elements are missing
    if (!window.speechSynthesis || !button || !content) return;

    // Track current utterance
    let currentUtterance = null;
    let isSpeaking = false;

    // Get the best female voice from document language
    function getPreferredVoice() {
        const htmlLang = document.documentElement.lang || 'en';
        const voices = window.speechSynthesis.getVoices();
        
        // Helper function to check if voice is likely female
        const isFemaleVoice = (voice) => {
            const name = voice.name.toLowerCase();
            return name.includes('female') || 
                   name.includes('woman') || 
                   name.includes('samantha') || 
                   name.includes('susan') || 
                   name.includes('victoria') || 
                   name.includes('karen') || 
                   name.includes('zira') || 
                   name.includes('hazel') || 
                   name.includes('serena') || 
                   name.includes('alex') && name.includes('female');
        };
        
        // First priority: high-quality female voices
        const highQualityFemaleVoice = voices.find((v) => 
            v.lang.startsWith(htmlLang) && 
            isFemaleVoice(v) &&
            (v.name.includes('Neural') || v.name.includes('Premium') || v.name.includes('Enhanced'))
        );
        
        if (highQualityFemaleVoice) return highQualityFemaleVoice;
        
        // Second priority: any female voice matching the language
        const femaleVoice = voices.find((v) => 
            v.lang.startsWith(htmlLang) && isFemaleVoice(v)
        );
        
        if (femaleVoice) return femaleVoice;
        
        // Third priority: high-quality voices (any gender)
        const highQualityVoice = voices.find((v) => 
            v.lang.startsWith(htmlLang) && 
            (v.name.includes('Neural') || v.name.includes('Premium') || v.name.includes('Enhanced'))
        );
        
        if (highQualityVoice) return highQualityVoice;
        
        // Fourth priority: any voice matching the language
        const langVoice = voices.find((v) => v.lang.startsWith(htmlLang));
        if (langVoice) return langVoice;
        
        // Final fallback
        return voices[0];
    }

    function speakContent() {
        // If already speaking, stop
        if (isSpeaking) {
            window.speechSynthesis.cancel();
            return;
        }

        // Cancel any existing speech
        window.speechSynthesis.cancel();

        currentUtterance = new SpeechSynthesisUtterance(content.innerText);

        // Specify the voice based on language
        const voice = getPreferredVoice();
        if (voice) currentUtterance.voice = voice;

        // Set speech parameters for better experience
        currentUtterance.rate = 1.2;  // Increased speed for better listening experience
        currentUtterance.pitch = 1;
        currentUtterance.volume = 1;

        // Handle speech events
        currentUtterance.onstart = () => {
            isSpeaking = true;
            button.textContent = 'Stop';
            button.setAttribute('aria-label', 'Stop reading');
        };

        currentUtterance.onend = () => {
            isSpeaking = false;
            button.textContent = 'Listen';
            button.setAttribute('aria-label', 'Listen to this article');
            currentUtterance = null;
        };

        currentUtterance.onerror = () => {
            isSpeaking = false;
            button.textContent = 'Listen';
            button.setAttribute('aria-label', 'Listen to this article');
            currentUtterance = null;
        };

        // Speak the content
        window.speechSynthesis.speak(currentUtterance);
    }

    // Set initial button state
    button.textContent = 'Listen';
    button.setAttribute('aria-label', 'Listen to this article');

    // For browsers that load voices asynchronously
    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
            button.addEventListener('click', speakContent);
        };
    } else {
        button.addEventListener('click', speakContent);
    }

    // Clean up when page is unloaded
    window.addEventListener('beforeunload', () => {
        if (currentUtterance) {
            window.speechSynthesis.cancel();
        }
    });
}

// Initialize speech functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupSpeechButton('blog-content', 'listen-btn');
});