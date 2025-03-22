const parrafos = [
    `<p>"Antes del reino de Hallownest, había una criatura todopoderosa, EL Destello, que a través de su luz engendró a
        la tribu de las polillas. Entre todas, crearon el reino de Hallownest, un lugar para que los artrópodos pudieran
        pasar sus vidas. Pronto llegaron artrópodos de todo tipo. La tribu de las Mantis, un pueblo guerrero o la tribu
        de las Abejas, una sociedad jerarquizada, eran de las muchas especies que llegaron al nuevo reino, y aunque
        respetaban a Destello como máxima autoridad, las Mantis tenian su propio gobierno, y las abejas se encerraron en
        su colmena, ajenas a todo lo que pasara en Hallownest.<br>
        <br>
        Todo era paz y armonía, o eso parecía".</p>
        <div class="videoCont m-4">
        <h1 class="text-3xl font-bold text-center">Tráiler</h1>
        <iframe width="450" height="200" src="https://www.youtube.com/embed/UAO2urG23S4?si=1jgtkPK14tufgo3B&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>`,

    `<p>"Destello en realidad era un parásito que aprovechaba las mentes débiles de los artrópodos que la veneraban, para
        sus propios fines, a cambio, ella les concedia los deseos que pidieran. Eso ya era bastante, aunque los
        artrópodos no se daban cuenta y alguno que se daba cuenta no le importaba. Sus mentes poseídas no eran problema
        en comparación a los deseos que conseguían. A nadie le importó hasta que llegó un ser que lo cambiaría todo".</p>`,

    `<p>"La tribu de los Wyrm eran una tribu que vivía desde la misma época que Destello, y tenían mucho poder,
        suficiente para derrotar a Destello. Y aunque podrían haberlo hecho, misteriosamente empezaron a extinguirse
        todos, pero cuando el último Wyrm murió, se reencarno en un ser más pequeño, pero con su misma sabiduría, el Rey
        Pálido.<br>
        <br>
        El Rey Pálido descubrió lo que estaba haciendo Destello y le abrió la mente a todos los artrópodos. Con ayuda de
        los 5 grandes caballeros, que el Rey fue reclutando, con el apoyo de la Dama Blanca, de la que el Rey se había
        enamorado y sin mentes para invadir Destello fue derrotada, o más bien olvidada, puesto que no hubo batalla. En
        Hallownest se inició una nueva etapa".</p>`,

    `<p>"El Rey intentó encontrar una solución a esta plaga, y pensó que para vencer a la luz, se necesita oscuridad, así
        que fue al Abismo y empezó a experimentar con él para crear a un receptáculo puro. Necesitaba crear algo capaz
        de contener la infección en su interior, y puesto que el vacío era eso, vacío, lo aprovechó para intentar crear
        a un ser capaz de cumplir ese cometido. Sus primeros experimentos no salieron muy bien, ni sus segundos. Tardó
        muchos años en encontrar un receptáculo puro, mientras Destello amenazaba con aniquilar a los artrópodos, hasta
        que un día, lo consiguió".</p>`,

    `<p>"Creó al receptáculo perfecto, o eso creía. Era el Hollow Knight, o el Caballero Vacío. El Rey necesitaba a un
        ser incapaz de tener sentimientos, y este lo aparentaba. El Hollow Knight absorbió a Radiance y ella se quedó
        atrapada en su mente, como en un sueño. Para asegurarse, el Rey consiguió que tres seres de mucho poder, se
        convirtieran en los sellos que contendrían al Hollow Knight, en caso de que algo saliera mal. Fueron Monomon, la
        Maestra, que contenía muchísima sabiduría, estudiaba mucho en sus archivos. También estuvo Lurien, el Vigilante,
        que vigilaba la Ciudad de Lágrimas desde su Torre y que por la lealtad que tenía hacia su rey aceptó hacer ese
        sacrificio. Y por último Herrah, la Bestia, reina de las criaturas de Nidoprofundo que en un principio no estaba
        dispuesta a sacrificarse, pero después de un trato que tuvo con el rey, aceptó. Los tres se convirtieron en los
        Soñadores, se durmieron para siempre y desde los sueños contuvieron al Hollow Knight".</p>`,

    `<p>"Pasó el tiempo y el Rey murió, la Dama Blanca se escondió y el grupo de los 5 caballeros se disolvió. Y aunque
        se suponía que todo estaba bajo control, había algo que hacía que la gente no se quedara tranquila. Pues como se
        había mencionado antes, el Hollow Knight no era perfecto. Sí tenía un sentimiento, lealtad hacia el rey. El rey
        trató al Hollow Knight como si fuera su hijo, y él sintió apego hacia el rey. Eso demostró que el Caballero
        Vacío, no estaba tan vacío después de todo. Destello aprovechó esto, y se propagó una vez más. Ni los Soñadores
        pudieron contra ella, pero no se podían despertar, porque ahora si que tenían que contener al Hollow Knight
        encerrado. El vacío del Hollow Knight, se llenó de infección y ahora ella controlaba su cuerpo, y a la vez, lo
        usaba de transmisor, por lo que si el Hollow Knight salía, se propagaría mucho más rápido. Los artrópodos
        débiles volvieron a infectarse. El reino volvió a la ruina, y sin su rey, se les acababan las esperanzas.<br>
        <br>
        Y en este punto es cuando llega nuestro personaje a Hallownest, otro receptáculo más que deberá abrirse paso
        entre este devastado reino para bien, sustituir al Hollow Knight como receptáculo puro, o bien acabar con la
        misma Destello de una vez".</p>`
];

// Lore
let indice = 0;
const loreParent = document.getElementById("parent");
const loreCont = document.getElementById("loreCont");
const btnNext = document.getElementById("btn-next");
const btnBef = document.getElementById("btn-bef");
const start = document.getElementById("startBtn");

function comenzarHistoria() {
    indice = 0;
    actualizarParrafo();
}

function actualizarParrafo() {
    loreCont.innerHTML = parrafos[indice];

    btnNext.disabled = indice === parrafos.length - 1;
    btnBef.disabled = indice === 0;

    btnNext.style.visibility = indice === parrafos.length - 1 ? "hidden" : "visible";
    btnBef.style.visibility = indice === 0 ? "hidden" : "visible";
}

function cambiarParrafo(direccion) {
    indice += direccion;
    actualizarParrafo();
}
btnNext.addEventListener("click", () => {
    cambiarParrafo(1);
});
btnBef.addEventListener("click", () => {
    cambiarParrafo(-1);
});

comenzarHistoria();

// Quiz
start.addEventListener("click", empezarQuiz);

const questions = [
    {
        question: "¿Quiénes crearon el reino de Hallownest?",
        answers: [
            { text: "La tribu de los Wyrm", correct: false },
            { text: "Los sellos", correct: false },
            { text: "la tribu de las polillas", correct: true },
            { text: "El Vacío", correct: false }
        ]
    },
    {
        question: "¿De dónde proviene el Caballero?",
        answers: [
            { text: "De Más Allá del Reino", correct: false },
            { text: "De la Luz", correct: false },
            { text: "Del Abismo", correct: true }
        ]
    },
    {
        question: "¿Quién creó miles de recipientes fallidos?",
        answers: [
            { text: "El Hollow Knight", correct: false },
            { text: "El Vacío", correct: false },
            { text: "Herrah La Bestia", correct: false },
            { text: "El Rey Pálido", correct: true }
        ]
    },
    {
        question: "Los recipientes están hechos de Alma.",
        answers: [
            { text: "Verdadero", correct: false },
            { text: "Falso", correct: true }
        ]
    },
    {
        question: "¿Quién gobernó durante la Época Dorada de Hallownest?",
        answers: [
            { text: "El Hollow Knight", correct: false },
            { text: "Radiance", correct: false },
            { text: "El Rey Pálido", correct: true },
            { text: "La Dama Blanca", correct: false }
        ]
    },
    {
        question: "¿Qué tipo de criatura era el Rey Pálido?",
        answers: [
            { text: "Un Dios", correct: false },
            { text: "Una Sombra", correct: false },
            { text: "Un Wyrm", correct: true },
            { text: "Un recipiente", correct: false }
        ]
    },
    {
        question: "¿Cuál era la única debilidad del Hollow Knight?",
        answers: [
            { text: "Que no estaba realmente hecho de Vacío", correct: false },
            { text: "Su odio hacia el reino", correct: false },
            { text: "El amor que sentía por su padre", correct: true },
            { text: "Tenía sentimientos", correct: false }
        ]
    },
    {
        question: "El propósito del Caballero es matar al Hollow Knight.",
        answers: [
            { text: "Verdadero", correct: false },
            { text: "Falso", correct: true },
        ]
    },
    {
        question: "¿Qué busca el Caballero en el Abismo?",
        answers: [
            { text: "El origen de la infección", correct: false },
            { text: "El origen del Vacío", correct: true },
            { text: "El origen de los sueños", correct: false },
            { text: "El origen de la luz", correct: false }
        ]
    },
    {
        question: "¿Cuál es el verdadero objetivo del Caballero?",
        answers: [
            { text: "Acabar con la infección de Radiance", correct: true },
            { text: "Acabar con el Hollow Knight", correct: false },
            { text: "Acabar con Hornet", correct: false }
        ]
    }
];

const quizCont = document.getElementById("quizCont");
const pregunta = document.getElementById("pregunta");
const msjScore = document.getElementById("msjScore")
const ans = document.getElementById("respuestas");
const nextQ = document.getElementById("nextQ");
const fondo = document.getElementById("fondo");

let pos = 0;
let score = 0;

// Comenzar Quiz
function empezarQuiz() {
    pos = 0;
    score = 0;
    fondo.style.opacity = 0.1;
    quizCont.showModal();
    ans.classList.remove("hidden");
    pregunta.classList.remove("text-4xl")
    pregunta.classList.add("text-xl");
    nextQ.innerHTML = "Siguiente";
    mostrarPregunta();
}

// Mostrar la caja de dialogo
function mostrarPregunta() {
    reset();
    let preguntaActual = questions[pos];
    let numPregunta = pos + 1;

    // Mostrar pregunta
    pregunta.innerHTML = numPregunta + ". " + preguntaActual.question;

    // Mostrar puntuación
    msjScore.innerHTML = score + " de " + questions.length;

    // Mostrar respuestas
    preguntaActual.answers.forEach(respuesta => {
        const boton = document.createElement("button");
        boton.innerHTML = respuesta.text;
        boton.classList.add("bg-[#0f0f1b87]", "text-lg", "text-center", "font-bold", "p-[1rem]", "cursor-pointer", "rounded-3xl", "disabled:border-none", "disabled:cursor-default", "border-b-[1px]", "border-transparent", "ease-in", "duration-300", "hover:border-[#fafbf6]", "[text-shadow:_0_0_6px_rgb(255_255_255_/_0.463)]", "white-shadow");
        ans.appendChild(boton);

        if (respuesta.correct) {
            boton.dataset.correct = respuesta.correct; // Añadir data-correct="true"
        }

        boton.addEventListener("click", selecRespuesta);
    });
}

// Estado al principio de la pregunta
function reset() {
    nextQ.style.opacity = 0.5;
    nextQ.disabled = true;

    // Eliminar respuestas anteriores
    while (ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
}

// Al hacer click en alguna respuesta
function selecRespuesta(e) {

    // Hacer referencia al elemento clicado
    const btnSelec = e.target.closest("button");
    const esCorrecto = btnSelec.dataset.correct === "true";

    // Acciones en función de si es correcto o no
    if (!esCorrecto) {
        btnSelec.classList.add("text-[#0f0f1b]", "border-[#0f0f1b]");
    } else {
        score++;
    }

    // Mostrar respuesta correcta
    Array.from(ans.children).forEach(btn => {
        if (btn.dataset.correct === "true") {
            const img = document.createElement("img");
            img.classList.add("max-w-5", "ml-2");
            btn.classList.add("flex", "items-center", "justify-center")
            img.src = "correcto.png";
            img.alt = "correcto";
            btn.appendChild(img)
        }
        btn.disabled = true; // Desactivar selección de respuestas
    });
    nextQ.style.opacity = 1;
    nextQ.disabled = false;
}

// Salir del quiz
function salirQuiz() {
    quizCont.close();
    fondo.style.opacity = 1;
    comenzarHistoria();
}

function manejarNext() {
    pos++;
    console.log(pos);
    if (pos < questions.length) {
        mostrarPregunta();
    } else if (pos == questions.length) {
        mostrarScore();
    } else {
        salirQuiz();
    }
}

function mostrarScore() {
    msjScore.innerHTML = score + " de " + questions.length;
    ans.classList.add("hidden");
    nextQ.innerHTML = "Finalizar";
    const pctj = (score / questions.length) * 100;

    pregunta.classList.remove("text-xl");
    pregunta.classList.add("text-4xl");

    pregunta.innerHTML = `Tu puntuación es de<br><b>${pctj}%<b>`;
}

nextQ.addEventListener("click", manejarNext);

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        event.preventDefault(); // Evita que se cierre
    }
});