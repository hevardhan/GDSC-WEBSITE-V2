import React, { useEffect, useState, useRef } from 'react';
import "../search.css";

const Search = () => {
    const [currentText, setCurrentText] = useState('');
    const indexRef = useRef(0);
    const searchBarRef = useRef(null);

    const sentences = [
        "What is GDSC ?",
        "GDSC में लोग क्या करते हैं ?",
        "What is the benefit of being GDSC Member ?",
        "How to join GDSC ?",
        "Who is the Lead of this club ?",
        // Add more sentences as needed
    ];

    const typingSpeed = 100; // Speed at which characters are typed (milliseconds)
    const deletingSpeed = 50; // Speed at which characters are deleted (milliseconds)
    const sentenceDisplayTime = 1000; // Time to display each sentence (milliseconds)

    useEffect(() => {
        // searchBarRef.current.focus();
        const updateSearchBar = () => {
            let sentence = sentences[indexRef.current];
            let currentIndex = 0;

            const typeSentence = () => {
                if (currentIndex < sentence.length) {
                    setCurrentText(sentence.slice(0, currentIndex + 1));
                    currentIndex++;
                    setTimeout(typeSentence, typingSpeed);
                } else {
                    setTimeout(deleteSentence, sentenceDisplayTime);
                }
            };

            const deleteSentence = () => {
                if (currentIndex > 0) {
                    setCurrentText(sentence.slice(0, currentIndex - 1));
                    currentIndex--;
                    setTimeout(deleteSentence, deletingSpeed);
                } else {
                    indexRef.current = (indexRef.current + 1) % sentences.length;
                    setTimeout(updateSearchBar, 1000);
                }
            };

            typeSentence();
        };

        updateSearchBar();
    }, []);

    return (
        <div>
            <div className="bar">
                <a href="#">
                    <img className="voice" src="/search.png" title="Search by Voice" alt="Search by Voice" />
                </a>
                <input
                    className="searchbar text-white font-sans"
                    type="text"
                    title="Search"
                    id="searchbar"
                    ref={searchBarRef}
                    value={currentText}
                    readOnly
                />
            </div>
            <p className="result font-sans">About 1 result found (0.0 seconds)</p>
        </div>
    );
};

export default Search;
