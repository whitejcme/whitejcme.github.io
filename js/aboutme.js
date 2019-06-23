const aboutmeApp = new Vue({
    el: ".aboutmeContent",
    data: {
        currWord: "",
        currBlurb: "",
        allText: [
            {
                preview: "FE Web",
                word: "Front-end Web",
                blurb: "HTML CSS JS; immense interest in UI/UX Design",
                current: false
            },
            {
                preview: "TCK",
                word: "Third Culture Kid",
                blurb: "Born in Korea, also raised in America, Germany, Malaysia",
                current: false
            },
            {
                preview: "Honest",
                word: "Honest",
                blurb: "What my friends say about me :)",
                current: false
            },
            {
                preview: "MBTI",
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