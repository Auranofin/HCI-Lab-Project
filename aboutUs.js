document.addEventListener("DOMContentLoaded", function() {
    const storyWrapper = document.querySelector(".our-story-wrapper");

    storyWrapper.addEventListener("mouseover", function() {
        storyWrapper.querySelector(".our-story-content").style.display = "block";
        storyWrapper.querySelector(".our-story-overlay").style.opacity = "0";
    });

    storyWrapper.addEventListener("mouseout", function() {
        storyWrapper.querySelector(".our-story-content").style.display = "none";
        storyWrapper.querySelector(".our-story-overlay").style.opacity = "1";
    });

    storyWrapper.addEventListener("click", function() {
        const storyContent = storyWrapper.querySelector(".our-story-content");
        if (storyContent.style.display === "block") {
            storyContent.style.display = "none";
            storyWrapper.querySelector(".our-story-overlay").style.opacity = "1";
        } else {
            storyContent.style.display = "block";
            storyWrapper.querySelector(".our-story-overlay").style.opacity = "0";
        }
    });
});