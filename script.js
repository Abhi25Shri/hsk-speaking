// Global variables
let currentCardIndex = 0;
let filteredWords = [...hsk1Words];
let selectedDialogue = null;
let practiceStats = {
    wordsLearned: 0,
    sessionCount: 1,
    practiceMins: 0
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadVocabulary();
    updateStats();
    loadFlashcard();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');

    searchInput.addEventListener('input', filterVocabulary);
    categoryFilter.addEventListener('change', filterVocabulary);
}

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Load vocabulary cards
function loadVocabulary() {
    const vocabularyList = document.getElementById('vocabularyList');
    vocabularyList.innerHTML = '';

    filteredWords.forEach((word, index) => {
        const wordCard = document.createElement('div');
        wordCard.className = 'word-card';
        wordCard.innerHTML = `
            <div class="chinese-word">${word.chinese}</div>
            <div class="pinyin">${word.pinyin}</div>
            <div class="english">${word.english}</div>
            <button class="speak-btn-small" onclick="speakText('${word.chinese}', '${word.pinyin}')">🔊 Speak</button>
        `;
        wordCard.addEventListener('click', () => selectWord(wordCard, word));
        vocabularyList.appendChild(wordCard);
    });

    // Update total cards count
    document.getElementById('totalCards').textContent = filteredWords.length;
}

// Filter vocabulary
function filterVocabulary() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;

    filteredWords = hsk1Words.filter(word => {
        const matchesSearch = 
            word.chinese.toLowerCase().includes(searchTerm) ||
            word.pinyin.toLowerCase().includes(searchTerm) ||
            word.english.toLowerCase().includes(searchTerm);
        
        const matchesCategory = category === 'all' || word.category === category;

        return matchesSearch && matchesCategory;
    });

    currentCardIndex = 0;
    loadVocabulary();
}

// Select word
function selectWord(card, word) {
    // Remove previous selection
    document.querySelectorAll('.word-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    
    // Update flashcard
    updateFlashcard(word);
    
    // Log practice
    if (!practiceStats.wordsLearned.includes(word.chinese)) {
        practiceStats.wordsLearned++;
        updateStats();
    }
}

// Flashcard functions
function loadFlashcard() {
    if (filteredWords.length > 0) {
        updateFlashcard(filteredWords[currentCardIndex]);
        document.getElementById('currentCard').textContent = currentCardIndex + 1;
        document.getElementById('totalCards').textContent = filteredWords.length;
    }
}

function updateFlashcard(word) {
    document.getElementById('flashcardChinese').textContent = word.chinese;
    document.getElementById('flashcardPinyin').textContent = word.pinyin;
    document.getElementById('flashcardEnglish').textContent = word.english;
}

function nextCard() {
    if (filteredWords.length > 0) {
        currentCardIndex = (currentCardIndex + 1) % filteredWords.length;
        loadFlashcard();
    }
}

function previousCard() {
    if (filteredWords.length > 0) {
        currentCardIndex = (currentCardIndex - 1 + filteredWords.length) % filteredWords.length;
        loadFlashcard();
    }
}

// Speech synthesis
function speakWord() {
    const chinese = document.getElementById('flashcardChinese').textContent;
    const pinyin = document.getElementById('flashcardPinyin').textContent;
    speakText(chinese, pinyin);
}

function speakText(chinese, pinyin) {
    // Check if speech synthesis is available
    if (!('speechSynthesis' in window)) {
        alert('Speech synthesis is not supported in your browser.');
        return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Create utterance for Chinese
    const utterance = new SpeechSynthesisUtterance(chinese);
    utterance.lang = 'zh-CN'; // Chinese (Simplified)
    utterance.rate = 0.8; // Slow down speech
    utterance.pitch = 1;
    utterance.volume = 1;

    // Speak the text
    window.speechSynthesis.speak(utterance);

    // Log practice
    practiceStats.practiceMins += 1;
    updateStats();
}

// Dialogue functions
function loadDialogue(dialogueId) {
    selectedDialogue = dialogues.find(d => d.id === dialogueId);
    
    if (!selectedDialogue) return;

    const dialogueContent = document.getElementById('dialogueContent');
    const dialogueTitle = document.getElementById('dialogueTitle');
    const dialogueLines = document.getElementById('dialogueLines');

    dialogueTitle.textContent = selectedDialogue.title;
    dialogueLines.innerHTML = '';

    selectedDialogue.lines.forEach((line, index) => {
        const lineDiv = document.createElement('div');
        lineDiv.className = `dialogue-line ${index % 2 === 0 ? 'speaker-a' : 'speaker-b'}`;
        
        lineDiv.innerHTML = `
            <div class="dialogue-speaker">${line.speaker}</div>
            <div class="dialogue-chinese">${line.chinese}</div>
            <div class="dialogue-pinyin">${line.pinyin}</div>
            <div class="dialogue-english">${line.english}</div>
            <button class="dialogue-speak-btn" onclick="speakText('${line.chinese}', '${line.pinyin}')">🔊 Speak</button>
        `;
        
        dialogueLines.appendChild(lineDiv);
    });
}

// Update stats
function updateStats() {
    document.getElementById('wordsLearned').textContent = Object.keys(new Set(hsk1Words.map(w => w.chinese))).length;
    document.getElementById('sessionCount').textContent = practiceStats.sessionCount;
    document.getElementById('practiceMins').textContent = Math.floor(practiceStats.practiceMins / 10) || 0;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextCard();
    } else if (event.key === 'ArrowLeft') {
        previousCard();
    } else if (event.key === ' ') {
        event.preventDefault();
        speakWord();
    }
});

// Initialize on page load
window.addEventListener('load', function() {
    loadVocabulary();
    loadFlashcard();
});
