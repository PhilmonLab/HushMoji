// Translations for 3 languages
const translations = {
    en: {
        title: "Hide a message in an emoji",
        description: "This tool allows you to encode a hidden message into an emoji or alphabet letter. You can copy and paste text with a hidden message in it to decode the message.",
        decode: "Decode",
        encode: "Encode",
        decodeLabel: "Paste an emoji to decode",
        encodeLabel: "Enter your secret message",
        encodePlaceholder: "Type your secret message here...",
        decodeBtn: "Decode Message",
        encodeBtn: "Encode Message",
        clipboardBtn: "📋 Click to Copy Emoji",
        clipboardText: "Click to Copy Emoji",
        clipboardHint: "Ready to paste anywhere!",
        clipboardCopied: "Copied! ✅",
        selectedLabel: "Selected carrier",
        selectedReady: "Ready to send! ✅",
        emojiTitle: "Pick an emoji",
        letterTitle: "Or pick a standard alphabet letter",
        outputLabel: "Decoded Message",
        successDecode: "Decoded successfully!",
        errorEmpty: "Please enter some text first!",
        errorNoMessage: "No hidden message found",
        copyBtn: "Copy to Clipboard",
        copied: "Copied!",
        youtubeText: "▶️ How does this work? Watch tutorial",
        githubText: "Source on GitHub"
    },
    de: {
        title: "Verstecke eine Nachricht in einem Emoji",
        description: "Dieses Tool ermöglicht es dir, eine versteckte Nachricht in ein Emoji oder einen Buchstaben zu kodieren. Du kannst Text mit einer versteckten Nachricht kopieren und einfügen, um sie zu dekodieren.",
        decode: "Dekodieren",
        encode: "Kodieren",
        decodeLabel: "Emoji zum Dekodieren einfügen",
        encodeLabel: "Gib deine geheime Nachricht ein",
        encodePlaceholder: "Gib hier deine geheime Nachricht ein...",
        decodeBtn: "Nachricht Dekodieren",
        encodeBtn: "Nachricht Kodieren",
        clipboardBtn: "📋 Emoji Kopieren",
        clipboardText: "Emoji Kopieren",
        clipboardHint: "Bereit zum Einfügen!",
        clipboardCopied: "Kopiert! ✅",
        selectedLabel: "Ausgewählter Träger",
        selectedReady: "Bereit zum Senden! ✅",
        emojiTitle: "Wähle ein Emoji",
        letterTitle: "Oder wähle einen Buchstaben",
        outputLabel: "Dekodierte Nachricht",
        successDecode: "Erfolgreich dekodiert!",
        errorEmpty: "Bitte gib zuerst einen Text ein!",
        errorNoMessage: "Keine versteckte Nachricht gefunden",
        copyBtn: "In Zwischenablage kopieren",
        copied: "Kopiert!",
        youtubeText: "▶️ Wie funktioniert das? Tutorial ansehen",
        githubText: "Quellcode auf GitHub"
    },
    ti: {
        title: "ምስጢራዊ መልእኽቲ ኣብ ስእሊ መሕብኢ",
        description: "እዚ መሳርሒ ኣብ ስእሊ ወይ ኣብ ማእከል ቃላት ምስጢራዊ መልእኽቲ ንምሕባእ ይሕግዘና። ብተወሰኪ ኣብ ኣብ ውሽጢ ስእልታትን ጽሑፋትን ተሓቢኦም ንዝርከቡ ምስጢራት ንምርካብ ይሕግዘና።",
        decode: "መልእክቲ ሕባእ",
        encode: "መልእክቲ ፍታሕ",
        decodeLabel: "ክትፈትሖ ዝደለካ ምስጢር ኣብዚ ጸሓፎ",
        encodeLabel: "ክትሓብኦ ዝደልካ ምስጢር ኣብዚ የእትዎ",
        encodePlaceholder: "ኣብዚ ወሽጢ ጸሓፎ...",
        decodeBtn: "ኣብዚ ጠዊቅካ ሕብኣዮ",
        encodeBtn: "ኣብዚ ጠዊቅካ ፍትሓዮ ወይ ሕብኣዮ",
        clipboardBtn: "📋 ንክትቀድሖ  ኣብዚ ጠውቅ",
        clipboardText: "ንክትቀድሖ ኣብዚ  ጠውቅ",
        clipboardHint: "",
        clipboardCopied: "ተቐዲሑ, ክትሰዶ ትክእል ኢካ  ! ✅",
        selectedLabel: "መሪጽካዮ ዘለካ ሰእሊ ወይ ፊደል",
        selectedReady: "መሪጽካዮ ዘለካ ሰእሊ/Emoji! ✅",
        emojiTitle: "ሰእሊ/Emoji ምረጽ",
        letterTitle: "ወይ ድማ ፊደል ምረጽ",
        outputLabel: "ዝተቐደሐ መልእኽቲ",
        successDecode: "ምስጢራዊ መልእክቲ ተፈቲሑ!",
        errorEmpty: "መጀመርታ ጽሑፍ የእቱው!",
        errorNoMessage: "ምስጢራዊ መልእኽቲ ኣይተረኸበን",
        copyBtn: "ንክትቀድሖ ኣብዚ ጠውቅ",
        copied: "ተቐዲሑ!",
        youtubeText: "▶️ ከመይ ጌሩ ከም ዝሰርሕ ኣብ Youtube ምግለጺ",
        githubText: "ኣብ GitHub ምንጪ ኮድ"
    }
};

// State variables
let mode = 'encode';
let selectedCarrier = '😊';
let currentLang = 'en';
let isEncoded = false;
let encodedEmoji = '';

// Emoji set
const emojis = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', 
               '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰',
               '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜'];

// DOM Elements
const app = document.getElementById('app');
const languageSelector = document.getElementById('languageSelector');
const languageDropdown = document.getElementById('languageDropdown');
const modeSwitch = document.getElementById('modeSwitch');
const decodeLabel = document.getElementById('decodeLabel');
const encodeLabel = document.getElementById('encodeLabel');
const flipContainer = document.getElementById('flipContainer');
const inputText = document.getElementById('inputText');
const clipboardBox = document.getElementById('clipboardBox');
const clipboardText = document.getElementById('clipboardText');
const actionBtn = document.getElementById('actionBtn');
const selectedDisplay = document.getElementById('selectedDisplay');
const selectedLabel = document.getElementById('selectedLabel');
const selectedEmoji = document.getElementById('selectedEmoji');
const emojiGrid = document.getElementById('emojiGrid');
const letterGrid = document.getElementById('letterGrid');
const errorMsg = document.getElementById('errorMsg');
const successMsg = document.getElementById('successMsg');
const decodeInput = document.getElementById('decodeInput');
const decodeOutputSection = document.getElementById('decodeOutputSection');
const decodeOutputContent = document.getElementById('decodeOutputContent');
const decodeCopyBtn = document.getElementById('decodeCopyBtn');

// Initialize
function init() {
    renderEmojiGrid();
    renderLetterGrid();
    updateMode();
    setupInputListener();
}

// Setup input listener for button text change
function setupInputListener() {
    inputText.addEventListener('input', () => {
        if (mode === 'encode') {
            updateButtonState();
        }
    });
}

function updateButtonState() {
    const t = translations[currentLang];
    const hasText = inputText.value.trim().length > 0;

    if (hasText && !isEncoded) {
        actionBtn.textContent = t.encodeBtn;
        actionBtn.classList.remove('clipboard-mode');
    } else if (isEncoded) {
        actionBtn.textContent = t.clipboardBtn;
        actionBtn.classList.add('clipboard-mode');
    }
}

// Language Switcher
languageSelector.addEventListener('click', (e) => {
    e.stopPropagation();
    languageDropdown.classList.toggle('show');
});

document.addEventListener('click', () => {
    languageDropdown.classList.remove('show');
});

document.querySelectorAll('.language-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        setLanguage(lang);
        document.querySelectorAll('.language-option').forEach(o => o.classList.remove('active'));
        option.classList.add('active');
        languageDropdown.classList.remove('show');
    });
});

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    const flags = { en: '🇺🇸', de: '🇩🇪', ti: '🇪🇷' };
    languageSelector.textContent = flags[lang];

    document.getElementById('mainHeading').textContent = t.title;
    document.getElementById('description').textContent = t.description;
    decodeLabel.textContent = t.decode;
    encodeLabel.textContent = t.encode;
    document.getElementById('decodeInputLabel').textContent = t.decodeLabel;
    document.getElementById('inputLabel').textContent = t.encodeLabel;
    inputText.placeholder = t.encodePlaceholder;
    selectedLabel.textContent = t.selectedLabel;
    document.getElementById('emojiSectionTitle').textContent = t.emojiTitle;
    document.getElementById('letterSectionTitle').textContent = t.letterTitle;
    document.getElementById('tutorialLink').textContent = t.youtubeText;
    clipboardText.textContent = t.clipboardText;
    document.getElementById('clipboardHint').textContent = t.clipboardHint;
    document.getElementById('outputLabel').textContent = t.outputLabel;
    decodeCopyBtn.textContent = t.copyBtn;

    updateButtonState();
}

// Render Emoji Grid
function renderEmojiGrid() {
    emojiGrid.innerHTML = emojis.map(emoji => 
        `<button class="emoji-btn ${emoji === selectedCarrier ? 'selected' : ''}" data-emoji="${emoji}">${emoji}</button>`
    ).join('');

    emojiGrid.querySelectorAll('.emoji-btn').forEach(btn => {
        btn.addEventListener('click', () => selectCarrier(btn.dataset.emoji));
    });
}

// Render Letter Grid
function renderLetterGrid() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    letterGrid.innerHTML = letters.split('').map(letter => 
        `<button class="letter-btn ${letter === selectedCarrier ? 'selected' : ''}" data-letter="${letter}">${letter}</button>`
    ).join('');

    letterGrid.querySelectorAll('.letter-btn').forEach(btn => {
        btn.addEventListener('click', () => selectCarrier(btn.dataset.letter));
    });
}

function selectCarrier(carrier) {
    selectedCarrier = carrier;
    selectedEmoji.textContent = carrier;
    selectedDisplay.classList.add('has-selection');

    document.querySelectorAll('.emoji-btn, .letter-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    const btn = document.querySelector(`[data-emoji="${carrier}"], [data-letter="${carrier}"]`);
    if (btn) btn.classList.add('selected');
}

// Toggle Mode
modeSwitch.addEventListener('click', () => {
    mode = mode === 'decode' ? 'encode' : 'decode';
    modeSwitch.classList.toggle('on');
    updateMode();
    resetEncodeState();
    decodeOutputSection.classList.remove('show');
    decodeInput.value = '';
});

function updateMode() {
    const t = translations[currentLang];

    if (mode === 'encode') {
        app.classList.remove('decode-mode');
        decodeLabel.classList.remove('active');
        encodeLabel.classList.add('active');
        updateButtonState();
    } else {
        app.classList.add('decode-mode');
        decodeLabel.classList.add('active');
        encodeLabel.classList.remove('active');
        actionBtn.textContent = t.decodeBtn;
        actionBtn.classList.remove('clipboard-mode');
    }
}

function resetEncodeState() {
    isEncoded = false;
    encodedEmoji = '';
    flipContainer.classList.remove('flipped');
    clipboardBox.classList.remove('copied');
    clipboardText.classList.remove('copied');
    selectedDisplay.classList.remove('ready');
    document.querySelectorAll('.emoji-btn, .letter-btn').forEach(btn => {
        btn.classList.remove('ready');
    });
    updateButtonState();
}

function showError(msg) {
    errorMsg.textContent = msg;
    errorMsg.classList.add('show');
    successMsg.classList.remove('show');

    if (mode === 'encode') {
        inputText.classList.add('shake');
        setTimeout(() => inputText.classList.remove('shake'), 500);
    }
}

function showSuccess(msg) {
    successMsg.textContent = msg;
    successMsg.classList.add('show');
    errorMsg.classList.remove('show');
}

function clearMessages() {
    errorMsg.classList.remove('show');
    successMsg.classList.remove('show');
}

// Encoding/Decoding functions
function encodeText(baseEmoji, text) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    let result = baseEmoji;

    for (const byte of bytes) {
        if (byte < 16) {
            result += String.fromCodePoint(0xFE00 + byte);
        } else {
            result += String.fromCodePoint(0xE0100 + (byte - 16));
        }
    }
    return result;
}

function decodeText(encodedStr) {
    const bytes = [];

    for (const char of encodedStr) {
        const code = char.codePointAt(0);
        if (code >= 0xFE00 && code <= 0xFE0F) {
            bytes.push(code - 0xFE00);
        } else if (code >= 0xE0100 && code <= 0xE01EF) {
            bytes.push(code - 0xE0100 + 16);
        }
    }

    if (bytes.length === 0) {
        throw new Error('No hidden message found');
    }

    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array(bytes));
}

// Action Button Click
actionBtn.addEventListener('click', () => {
    clearMessages();
    const t = translations[currentLang];

    if (mode === 'decode') {
        const text = decodeInput.value.trim();
        if (!text) {
            showError(t.errorEmpty);
            return;
        }
        try {
            const decoded = decodeText(text);
            decodeOutputContent.textContent = decoded;
            decodeOutputSection.classList.add('show');
            showSuccess(t.successDecode);
        } catch (err) {
            showError(t.errorNoMessage);
            decodeOutputSection.classList.remove('show');
        }
    } else {
        // Encode mode
        if (!isEncoded) {
            const text = inputText.value.trim();
            if (!text) {
                showError(t.errorEmpty);
                return;
            }

            encodedEmoji = encodeText(selectedCarrier, text);
            isEncoded = true;

            flipContainer.classList.add('flipped');

            actionBtn.textContent = t.clipboardBtn;
            actionBtn.classList.add('clipboard-mode');

            selectedDisplay.classList.add('ready');
            selectedLabel.textContent = t.selectedReady;

            document.querySelectorAll('.emoji-btn.selected, .letter-btn.selected').forEach(btn => {
                btn.classList.add('ready');
            });
        } else {
            copyToClipboard();
        }
    }
});

// Decode copy button
decodeCopyBtn.addEventListener('click', () => {
    const t = translations[currentLang];
    const text = decodeOutputContent.textContent;

    navigator.clipboard.writeText(text).then(() => {
        decodeCopyBtn.textContent = t.copied;
        decodeCopyBtn.classList.add('copied');

        setTimeout(() => {
            decodeCopyBtn.textContent = t.copyBtn;
            decodeCopyBtn.classList.remove('copied');
        }, 2000);
    });
});

// Clipboard box click
clipboardBox.addEventListener('click', () => {
    if (isEncoded) {
        copyToClipboard();
    }
});

function copyToClipboard() {
    const t = translations[currentLang];

    navigator.clipboard.writeText(encodedEmoji).then(() => {
        clipboardBox.classList.add('copied');
        clipboardText.textContent = t.clipboardCopied;
        clipboardText.classList.add('copied');
        actionBtn.classList.add('active');

        launchFireworks();

        setTimeout(() => {
            clipboardBox.classList.remove('copied');
            clipboardText.textContent = t.clipboardText;
            clipboardText.classList.remove('copied');
            actionBtn.classList.remove('active');
        }, 2000);
    });
}

// Fireworks Animation
function launchFireworks() {
    const canvas = document.getElementById('fireworks-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 300;

    const particles = [];
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            life: 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 4 + 2
        });
    }

    let animationId;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.2;
            p.life -= 0.02;
            p.size *= 0.98;

            if (p.life > 0) {
                ctx.globalAlpha = p.life;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        if (particles.some(p => p.life > 0)) {
            animationId = requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();

    setTimeout(() => {
        cancelAnimationFrame(animationId);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 1500);
}

// Initialize on page load
init();
