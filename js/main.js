const storage = [
    { text: '"The only way to do great work is to love what you do."',
         author: "Steve Jobs"
    },
    { text: '"Success is not the key to happiness. Happiness is the key to success."',
         author: "Albert Schweitzer"
    },
    { text: '"It does not matter how slowly you go as long as you do not stop."',
         author: "Confucius" 
    },
    { text: "Life is what happens when you're busy making other plans.",
         author: "John Lennon"
     },
    { text: '"The best time to plant a tree was 20 years ago. The second best time is now."', 
        author: "Chinese Proverb"
    },
    { text: '"The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate."',
     author: "Ralph Waldo Emerson" 
    },
];


function newQuote() {
    var returnstorage = Math.floor(Math.random() * storage.length );
    var quote = storage[returnstorage];
    document.getElementById("Text").textContent = `${quote.text}`;
    document.getElementById("Author").textContent = ` --${quote.author}--`;
}