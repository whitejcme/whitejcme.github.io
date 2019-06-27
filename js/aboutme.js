const aboutmeApp = new Vue({
    el: ".aboutmeContent",
    data: {
        currWord: "",
        currBlurb: "",
        allText: [
            {
                preview: "FE Web",
                html: "<div class='wordBox crown'><div class='rightTriangle triL'><div class='crownTop'></div></div><div class='rightTriangle triR'><div class='crownTop'></div></div><div class='triCenter'><div class='crownTop'></div></div><div class='preview'>FE Web</div></div>",
                word: "Front-end Web",
                blurb: "HTML CSS JS; immense interest in UI/UX Design",
                current: false
            },
            {
                preview: "TCK",
                html: "<div class='wordBox diamond'><div class='cut-diamond'></div><div class='preview'>TCK</div></div>",
                word: "Third Culture Kid",
                blurb: "Born in Korea, also raised in America, Germany, Malaysia",
                current: false
            },
            {
                preview: "Honest",
                html: "<div class='wordBox sword'><div class='pentagon'><div class='recHor'></div><div class='recVer'></div></div><div class='preview'>Honest</div></div>",
                word: "Honest",
                blurb: "What my friends say about me :)",
                current: false
            },
            {
                preview: "MBTI",
                html: "<div class='wordBox starwand'><div class='starshape'><div class='wand'></div></div><div class='preview'>MBTI</div></div>",
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