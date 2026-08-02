/* =========================================
   COST AI PROFILER
   Moteur d'analyse — JavaScript
========================================= */

/* ---------- ÉLÉMENTS HTML ---------- */

const welcomeScreen = document.getElementById("welcomeScreen");
const questionScreen = document.getElementById("questionScreen");
const analysisScreen = document.getElementById("analysisScreen");
const resultScreen = document.getElementById("resultScreen");

const userNameInput = document.getElementById("userName");
const startBtn = document.getElementById("startBtn");

const categoryText = document.getElementById("categoryText");
const questionNumber = document.getElementById("questionNumber");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

const questionIcon = document.getElementById("questionIcon");
const questionText = document.getElementById("questionText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const analysisText = document.getElementById("analysisText");
const loadingBar = document.getElementById("loadingBar");

const profileInitial = document.getElementById("profileInitial");
const resultName = document.getElementById("resultName");

const mainDomainIcon = document.getElementById("mainDomainIcon");
const mainDomain = document.getElementById("mainDomain");
const mainPercent = document.getElementById("mainPercent");
const resultComment = document.getElementById("resultComment");

const otherDomainsBtn =
    document.getElementById("otherDomainsBtn");

const otherDomains =
    document.getElementById("otherDomains");

const domainsList =
    document.getElementById("domainsList");

const shareBtn =
    document.getElementById("shareBtn");

const restartBtn =
    document.getElementById("restartBtn");


/* =========================================
   LES 16 DOMAINES
========================================= */

const domains = {

    footballeur: {
        name: "Footballeur",
        icon: "⚽"
    },

    basketteur: {
        name: "Basketteur",
        icon: "🏀"
    },

    medecin: {
        name: "Médecin",
        icon: "🩺"
    },

    chirurgien: {
        name: "Chirurgien",
        icon: "🏥"
    },

    informaticien: {
        name: "Informaticien",
        icon: "💻"
    },

    comptable: {
        name: "Comptable",
        icon: "📊"
    },

    enseignant: {
        name: "Enseignant",
        icon: "👨‍🏫"
    },

    avocat: {
        name: "Avocat",
        icon: "⚖️"
    },

    ingenieur: {
        name: "Ingénieur",
        icon: "🏗️"
    },

    scientifique: {
        name: "Scientifique",
        icon: "🔬"
    },

    pasteur: {
        name: "Pasteur",
        icon: "⛪"
    },

    entrepreneur: {
        name: "Entrepreneur",
        icon: "💼"
    },

    designer: {
        name: "Designer",
        icon: "🎨"
    },

    musicien: {
        name: "Musicien",
        icon: "🎵"
    },

    journaliste: {
        name: "Journaliste",
        icon: "📰"
    },

    pilote: {
        name: "Pilote",
        icon: "✈️"
    }

};


/* =========================================
   LES 18 QUESTIONS
========================================= */

const questions = [

    /* ===== INTENTIONS ===== */

    {
        category: "TES INTENTIONS",
        icon: "🎯",

        text:
        "Aimerais-tu aider des personnes à résoudre des problèmes importants ?",

        points: {
            medecin: 3,
            avocat: 3,
            enseignant: 2
        }
    },

    {
        category: "TES INTENTIONS",
        icon: "💼",

        text:
        "Aimerais-tu créer ou diriger ta propre entreprise ?",

        points: {
            entrepreneur: 5,
            comptable: 2
        }
    },

    {
        category: "TES INTENTIONS",
        icon: "💻",

        text:
        "Aimerais-tu travailler avec la technologie et les ordinateurs ?",

        points: {
            informaticien: 5,
            ingenieur: 3
        }
    },

    {
        category: "TES INTENTIONS",
        icon: "🩺",

        text:
        "Aimerais-tu soigner des personnes ou contribuer à sauver des vies ?",

        points: {
            medecin: 5,
            chirurgien: 4
        }
    },

    {
        category: "TES INTENTIONS",
        icon: "🗣️",

        text:
        "Aimerais-tu guider, enseigner ou inspirer un groupe de personnes ?",

        points: {
            enseignant: 4,
            pasteur: 4
        }
    },

    {
        category: "TES INTENTIONS",
        icon: "🌍",

        text:
        "Aimerais-tu voyager souvent dans le cadre de ton travail ?",

        points: {
            pilote: 5,
            journaliste: 2
        }
    },


    /* ===== CE QUE TU AIMES ===== */

    {
        category: "CE QUE TU AIMES",
        icon: "🧩",

        text:
        "Aimes-tu résoudre des problèmes logiques ou mathématiques ?",

        points: {
            informaticien: 4,
            ingenieur: 4,
            comptable: 3
        }
    },

    {
        category: "CE QUE TU AIMES",
        icon: "⚙️",

        text:
        "Aimes-tu comprendre comment fonctionnent les appareils et les machines ?",

        points: {
            ingenieur: 5,
            informaticien: 3
        }
    },

    {
        category: "CE QUE TU AIMES",
        icon: "📚",

        text:
        "Aimes-tu lire, rechercher et découvrir de nouvelles choses ?",

        points: {
            scientifique: 6,
            journaliste: 3,
            enseignant: 2
        }
    },

    {
        category: "CE QUE TU AIMES",
        icon: "⚖️",

        text:
        "Aimes-tu défendre les autres et expliquer leurs droits ?",

        points: {
            avocat: 5,
            journaliste: 2
        }
    },

    {
        category: "CE QUE TU AIMES",
        icon: "🎨",

        text:
        "Aimes-tu créer des dessins, des affiches ou des designs ?",

        points: {
            designer: 5
        }
    },

    {
        category: "CE QUE TU AIMES",
        icon: "🎵",

        text:
        "Aimes-tu la musique, le chant ou la création de sons ?",

        points: {
            musicien: 5
        }
    },


    /* ===== PASSE-TEMPS ===== */

    {
        category: "TES PASSE-TEMPS",
        icon: "⚽",

        text:
        "Pendant ton temps libre, aimes-tu jouer ou suivre le football ?",

        points: {
            footballeur: 6
        }
    },

    {
        category: "TES PASSE-TEMPS",
        icon: "🏀",

        text:
        "Pendant ton temps libre, aimes-tu jouer ou suivre le basketball ?",

        points: {
            basketteur: 6
        }
    },

    {
        category: "TES PASSE-TEMPS",
        icon: "📰",

        text:
        "Aimes-tu écrire des histoires, des articles ou raconter des événements ?",

        points: {
            journaliste: 5,
            enseignant: 1
        }
    },

    {
        category: "TES PASSE-TEMPS",
        icon: "💡",

        text:
        "Aimes-tu créer des projets ou imaginer des idées pour gagner de l'argent ?",

        points: {
            entrepreneur: 5,
            comptable: 2
        }
    },

    {
        category: "TES PASSE-TEMPS",
        icon: "⛪",

        text:
        "Aimes-tu parler de la foi ou aider les autres dans leur vie spirituelle ?",

        points: {
            pasteur: 6
        }
    },

    {
        category: "TES PASSE-TEMPS",
        icon: "🔬",

        text:
        "Aimes-tu faire des expériences ou observer la nature pour comprendre le monde ?",

        points: {
            scientifique: 5,
            medecin: 2,
            chirurgien: 1
        }
    }

];


/* =========================================
   VARIABLES DU JEU
========================================= */

let currentQuestion = 0;

let userName = "";

let scores = {};


/* =========================================
   INITIALISER LES SCORES
========================================= */

function resetScores() {

    scores = {};

    Object.keys(domains).forEach(
        function(domainKey) {

            scores[domainKey] = 0;

        }
    );

}


/* =========================================
   CHANGER D'ÉCRAN
========================================= */

function showScreen(screen) {

    const allScreens = [
        welcomeScreen,
        questionScreen,
        analysisScreen,
        resultScreen
    ];

    allScreens.forEach(
        function(item) {

            item.classList.remove("active");

        }
    );

    screen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================
   COMMENCER
========================================= */

startBtn.addEventListener(
    "click",
    startAnalysis
);


function startAnalysis() {

    const enteredName =
        userNameInput.value.trim();

    if (enteredName.length < 2) {

        userNameInput.focus();

        userNameInput.style.borderColor =
            "#fb7185";

        userNameInput.placeholder =
            "Entre au moins 2 lettres...";

        return;
    }

    userName = enteredName;

    currentQuestion = 0;

    resetScores();

    showScreen(questionScreen);

    displayQuestion();

}


/* Permet de commencer avec la touche Entrée */

userNameInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            startAnalysis();

        }

    }
);


/* =========================================
   AFFICHER UNE QUESTION
========================================= */

function displayQuestion() {

    const question =
        questions[currentQuestion];

    const number =
        currentQuestion + 1;

    const percentage =
        Math.round(
            (currentQuestion /
            questions.length) * 100
        );

    categoryText.textContent =
        question.category;

    questionNumber.textContent =
        "Question " +
        number +
        " sur " +
        questions.length;

    progressPercent.textContent =
        percentage;

    progressBar.style.width =
        percentage + "%";

    questionIcon.textContent =
        question.icon;

    questionText.textContent =
        question.text;

    /* Petite animation */

    const card =
        document.querySelector(
            ".question-card"
        );

    card.style.animation =
        "none";

    setTimeout(
        function() {

            card.style.animation =
                "screenEnter 0.4s ease";

        },
        10
    );

}


/* =========================================
   RÉPONDRE OUI
========================================= */

yesBtn.addEventListener(
    "click",
    function() {

        answerQuestion(true);

    }
);


/* =========================================
   RÉPONDRE NON
========================================= */

noBtn.addEventListener(
    "click",
    function() {

        answerQuestion(false);

    }
);


function answerQuestion(answer) {

    const question =
        questions[currentQuestion];

    /* Si OUI : ajouter les points */

    if (answer === true) {

        Object.keys(
            question.points
        ).forEach(
            function(domainKey) {

                scores[domainKey] +=
                    question.points[
                        domainKey
                    ];

            }
        );

    }

    currentQuestion++;

    /* Question suivante */

    if (
        currentQuestion <
        questions.length
    ) {

        displayQuestion();

    }

    /* Fin des questions */

    else {

        progressPercent.textContent =
            "100";

        progressBar.style.width =
            "100%";

        setTimeout(
            startArtificialAnalysis,
            500
        );

    }

}


/* =========================================
   ANALYSE ANIMÉE
========================================= */

function startArtificialAnalysis() {

    showScreen(analysisScreen);

    loadingBar.style.width =
        "0%";

    const analysisSteps = [

        {
            text:
            "Lecture de tes réponses...",
            progress: 18
        },

        {
            text:
            "Recherche de tes centres d'intérêt...",
            progress: 38
        },

        {
            text:
            "Comparaison des 16 domaines...",
            progress: 60
        },

        {
            text:
            "Calcul des compatibilités...",
            progress: 82
        },

        {
            text:
            "Génération de ta carte de profil...",
            progress: 100
        }

    ];

    let step = 0;

    const interval =
        setInterval(
            function() {

                analysisText.textContent =
                    analysisSteps[step].text;

                loadingBar.style.width =
                    analysisSteps[step].progress
                    + "%";

                step++;

                if (
                    step >=
                    analysisSteps.length
                ) {

                    clearInterval(
                        interval
                    );

                    setTimeout(
                        showResults,
                        900
                    );

                }

            },
            900
        );

}


/* =========================================
   CALCULER LES RÉSULTATS
========================================= */

function calculateResults() {

    const results = [];

    Object.keys(domains).forEach(
        function(domainKey) {

            results.push({

                key: domainKey,

                name:
                    domains[
                        domainKey
                    ].name,

                icon:
                    domains[
                        domainKey
                    ].icon,

                score:
                    scores[
                        domainKey
                    ]

            });

        }
    );

    /* Trier du plus grand
       score au plus petit */

    results.sort(
        function(a, b) {

            return (
                b.score -
                a.score
            );

        }
    );

    /*
       Transformation des scores
       en compatibilités estimées
    */

    const highestScore =
        results[0].score;

    results.forEach(
        function(result, index) {

            if (
                highestScore === 0
            ) {

                /*
                   Si tout est NON,
                   on garde des valeurs
                   neutres.
                */

                result.percent =
                    Math.max(
                        20,
                        45 - index * 3
                    );

            }

            else {

                /*
                   Le meilleur domaine
                   obtient entre 70 et 96%.
                */

                let percent =
                    Math.round(
                        35 +
                        (
                            result.score /
                            highestScore
                        ) * 61
                    );

                /*
                   Les domaines sans
                   point restent faibles.
                */

                if (
                    result.score === 0
                ) {

                    percent =
                        Math.max(
                            8,
                            24 - index
                        );

                }

                result.percent =
                    Math.min(
                        96,
                        percent
                    );

            }

        }
    );

    return results;

}


/* =========================================
   COMMENTAIRES PERSONNALISÉS
========================================= */

function getComment(
    domainKey,
    name
) {

    const comments = {

        footballeur:
        name +
        ", tes réponses montrent un fort intérêt pour le football, l'esprit d'équipe et les défis sportifs. Ce domaine semble bien correspondre à ton profil.",

        basketteur:
        name +
        ", ton profil montre une attirance pour le basketball, le travail d'équipe et le dépassement de soi.",

        medecin:
        name +
        ", tes réponses montrent une forte envie d'aider les autres et de comprendre les problèmes liés à la santé.",

        chirurgien:
        name +
        ", ton profil semble associer précision, intérêt pour la santé et envie d'agir dans des situations importantes.",

        informaticien:
        name +
        ", tu sembles attiré par la technologie, les ordinateurs et la recherche de solutions intelligentes.",

        comptable:
        name +
        ", ton profil montre un intérêt pour les chiffres, l'organisation et la gestion des ressources.",

        enseignant:
        name +
        ", tu sembles aimer transmettre des connaissances, guider les autres et expliquer des idées.",

        avocat:
        name +
        ", tes réponses montrent un intérêt pour la justice, la défense des autres et l'argumentation.",

        ingenieur:
        name +
        ", tu sembles aimer comprendre comment les choses fonctionnent et imaginer des solutions concrètes.",

        scientifique:
        name +
        ", ton profil montre de la curiosité, un goût pour la recherche et l'envie de comprendre le monde.",

        pasteur:
        name +
        ", tes réponses montrent un intérêt pour la foi, l'accompagnement et l'inspiration des autres.",

        entrepreneur:
        name +
        ", tu sembles avoir un esprit créatif, ambitieux et orienté vers les projets et les opportunités.",

        designer:
        name +
        ", ton profil révèle une forte créativité et un intérêt pour la création visuelle.",

        musicien:
        name +
        ", tes réponses montrent une attirance pour la musique, les sons et l'expression artistique.",

        journaliste:
        name +
        ", tu sembles aimer découvrir, raconter, écrire et partager des informations.",

        pilote:
        name +
        ", ton profil montre une attirance pour les voyages, les défis et les environnements dynamiques."

    };

    return comments[
        domainKey
    ];

}


/* =========================================
   AFFICHER LE RÉSULTAT
========================================= */

function showResults() {

    const results =
        calculateResults();

    const winner =
        results[0];

    profileInitial.textContent =
        userName
        .charAt(0)
        .toUpperCase();

    resultName.textContent =
        userName.toUpperCase();

    mainDomainIcon.textContent =
        winner.icon;

    mainDomain.textContent =
        winner.name.toUpperCase();

    resultComment.textContent =
        getComment(
            winner.key,
            userName
        );

    animatePercentage(
        winner.percent
    );

    createOtherDomains(
        results.slice(1, 6)
    );

    otherDomains.classList.remove(
        "show"
    );

    otherDomainsBtn.innerHTML =
        "🔎 D’AUTRES DOMAINES POSSIBLES";

    showScreen(resultScreen);

}


/* =========================================
   ANIMATION DU POURCENTAGE
========================================= */

function animatePercentage(target) {

    let current = 0;

    mainPercent.textContent =
        "0";

    const animation =
        setInterval(
            function() {

                current += 1;

                mainPercent.textContent =
                    current;

                if (
                    current >= target
                ) {

                    clearInterval(
                        animation
                    );

                }

            },
            18
        );

}


/* =========================================
   CRÉER LES 5 AUTRES DOMAINES
========================================= */

function createOtherDomains(
    otherResults
) {

    domainsList.innerHTML = "";

    otherResults.forEach(
        function(result, index) {

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "domain-item";

            item.innerHTML = `

                <div class="domain-row">

                    <span>
                        ${index + 2}.
                        ${result.icon}
                        ${result.name}
                    </span>

                    <span>
                        ${result.percent}%
                    </span>

                </div>

                <div class="domain-progress">

                    <div
                        data-width="${result.percent}"
                    ></div>

                </div>

            `;

            domainsList.appendChild(
                item
            );

        }
    );

}


/* =========================================
   AFFICHER / CACHER LES DOMAINES
========================================= */

otherDomainsBtn.addEventListener(
    "click",
    function() {

        const isVisible =
            otherDomains.classList.contains(
                "show"
            );

        otherDomains.classList.toggle(
            "show"
        );

        if (isVisible) {

            otherDomainsBtn.innerHTML =
                "🔎 D’AUTRES DOMAINES POSSIBLES";

        }

        else {

            otherDomainsBtn.innerHTML =
                "▲ MASQUER LES DOMAINES";

            const bars =
                otherDomains.querySelectorAll(
                    ".domain-progress div"
                );

            setTimeout(
                function() {

                    bars.forEach(
                        function(bar) {

                            bar.style.width =
                                bar.dataset.width
                                + "%";

                        }
                    );

                },
                100
            );

        }

    }
);


/* =========================================
   PARTAGER LE PROFIL
========================================= */

shareBtn.addEventListener(
    "click",
    async function() {

        const domain =
            mainDomain.textContent;

        const percent =
            mainPercent.textContent;
       const websiteLink = "https://cost-kipirisi.github.io/CODE-AI-PROFILER/index.html" ;

        const shareText =

            "🤖 COST AI PROFILER a analysé mon profil !\n\n" +

            "👤 Profil : " +
            userName + "\n" +

            "🏆 Domaine principal : " +
            domain + "\n" +

            "📊 Compatibilité estimée : " +
            percent + "%\n\n" +
            "🧠 Découvrez ton propre profil ici : \n" + websiteLink + "\n\n" +

            "Fais ton analyse toi aussi ! 🚀";

        /*
           Partage natif sur téléphone
        */

        if (
            navigator.share
        ) {

            try {

                await navigator.share({

                    title:
                    "Mon profil COST AI",

                    text:
                    shareText

                });

            }

            catch (error) {

                console.log(
                    "Partage annulé."
                );

            }

        }

        /*
           Copie si le partage
           n'est pas disponible
        */

        else {

            try {

                await navigator
                .clipboard
                .writeText(
                    shareText
                );

                const oldText =
                    shareBtn.innerHTML;

                shareBtn.innerHTML =
                    "✅ PROFIL COPIÉ !";

                setTimeout(
                    function() {

                        shareBtn.innerHTML =
                            oldText;

                    },
                    2000
                );

            }

            catch (error) {

                alert(
                    shareText
                );

            }

        }

    }
);


/* =========================================
   RECOMMENCER
========================================= */

restartBtn.addEventListener(
    "click",
    function() {

        currentQuestion = 0;

        resetScores();

        userNameInput.value =
            userName;

        showScreen(
            welcomeScreen
        );

    }
);


/* =========================================
   INITIALISATION
========================================= */

resetScores();
