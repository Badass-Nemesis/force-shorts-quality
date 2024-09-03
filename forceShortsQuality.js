// ==UserScript==
// @name        YouTube Shorts - Force 720p
// @namespace   https://tampermonkey.net/
// @version     0.1
// @description  Force YouTube Shorts videos to play in 720p quality
// @author       Badass-Nemesis
// @match       https://www.youtube.com/shorts/*
// @grant        none
// ==/UserScript==


// todo - make a dropdown for yt shorts quality 

(function () {
    'use strict';

    function setQuality() {

        // Get the player element
        const playerContainer = document.querySelector("div#shorts-player");

        // If player element is not available, return
        if (!playerContainer) return;

        // If setPlaybackQuality method is not available in the player, return
        if (!playerContainer.setPlaybackQuality) return;

        playerContainer.setPlaybackQualityRange("hd720");
        playerContainer.dataset.defaultQuality = "hd720";
    }

    // Set quality on initial load
    setQuality();

    // Try to set quality again on player changes (e.g., after resuming playback)
    const observer = new MutationObserver(setQuality);
    observer.observe(document.body, { childList: true, subtree: true });
})();