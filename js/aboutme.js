const aboutmeApp = new Vue({
    el: ".aboutmeContent",
    data: {
        currWord: "",
        currBlurb: "",
        allText: [
            {
                preview: "FE Web",
                html: "<span style='color: red;'>TEST</span>",
                word: "Front-end Web",
                blurb: "HTML CSS JS; immense interest in UI/UX Design",
                current: false
            },
            {
                preview: "TCK",
                html: "<span style='color: blue;'>TEST</span>",
                word: "Third Culture Kid",
                blurb: "Born in Korea, also raised in America, Germany, Malaysia",
                current: false
            },
            {
                preview: "Honest",
                html: "<span style='color: purple;'>TEST</span>",
                word: "Honest",
                blurb: "What my friends say about me :)",
                current: false
            },
            {
                preview: "MBTI",
                html: "<span style='color: green;'>TEST</span>",
                word: "ESTJ: The Executive",
                blurb: "Insight of the Day: Executives are the least likely personality type to feel overwhelmed by their to-do list.",
                current: false
            }
        ],

    },
    methods: {
        setCurrent(text) {
            this.currWord = text.word;
            this.currBlurb = text.blurb;
            this.allText.forEach(t => {
                t.current = false;
            });
            text.current = true;
        }
    }
});