const materias = [
    { id: "anat_general", nombre: "Anatomía General", requisitos: [] },
    { id: "bio_humana", nombre: "Biología Humana", requisitos: [] },
    { id: "quimica", nombre: "Química General y Orgánica", requisitos: [] },
    { id: "intro_matroneria", nombre: "Introducción a la Matronería y Gestión en Salud", requisitos: [] },
    { id: "ingles1", nombre: "Inglés I", requisitos: [] },
    { id: "expresion", nombre: "Expresión Oral y Escrita", requisitos: [] },
    { id: "anat_gin", nombre: "Anatomía Gineco-Obstetrica", requisitos: ["anat_general"] },
    { id: "cuidados_basicos", nombre: "Cuidados Básicos de Matronería", requisitos: ["anat_general"] },
    { id: "embrio", nombre: "Embriología Humana", requisitos: ["anat_general", "bio_humana"] },
    { id: "micro", nombre: "Microbiología y Parasitología", requisitos: ["bio_humana"] },
    { id: "fisiologia", nombre: "Fisiología Humana", requisitos: ["anat_general", "bio_humana"] },
    { id: "bioquimica", nombre: "Bioquímica", requisitos: ["quimica"] },
    { id: "farmacologia", nombre: "Farmacología", requisitos: ["quimica", "fisiologia"] },
    { id: "mat_med_quir", nombre: "Matronería Médico Quirúrgica", requisitos: ["anat_gin", "cuidados_basicos", "micro"] },
    { id: "obs_fisio1", nombre: "Obstetricia Fisiología I", requisitos: ["anat_gin", "embrio", "fisiologia"] },
    { id: "neonato_fisio", nombre: "Neonatología Fisiológica", requisitos: ["cuidados_basicos", "embrio", "fisiologia"] },
    { id: "fisiopato", nombre: "Fisiopatología", requisitos: ["embrio"] },
    { id: "ingles2", nombre: "Inglés II", requisitos: ["ingles1"] },
    { id: "clinica1", nombre: "Clínica Obstétrica y Neonatal I", requisitos: ["farmacologia", "mat_med_quir", "obs_fisio1", "fisiopato"] },
    { id: "morbilidad", nombre: "Morbilidad Obstétrica", requisitos: ["farmacologia", "obs_fisio1", "fisiopato"] },
    { id: "obs_fisio2", nombre: "Obstetricia Fisiológica II", requisitos: ["obs_fisio1", "fisiopato"] },
    { id: "neonato_pat", nombre: "Neonatología Patológica", requisitos: ["neonato_fisio", "farmacologia"] },
    { id: "psico_evo", nombre: "Psicología Evolutiva", requisitos: [] },
    { id: "clinica2", nombre: "Clínica Obstétrica y Neonatal II", requisitos: ["clinica1", "morbilidad", "obs_fisio2"] },
    { id: "investigacion", nombre: "Metodología de la Investigación", requisitos: ["ingles1"] },
    { id: "evaluacion_ufp", nombre: "Evaluación Unidad Feto Placentaria", requisitos: ["morbilidad", "obs_fisio2"] },
    { id: "gineco", nombre: "Ginecología", requisitos: ["farmacologia", "fisiopato"] },
    { id: "cosmovision", nombre: "Cosmovisión Andina en la Salud de la Mujer", requisitos: ["psico_evo"] },
    { id: "salud_publica", nombre: "Salud Pública y Epidemiología", requisitos: ["psico_evo"] },
    { id: "planificacion", nombre: "Planificación Familiar", requisitos: ["gineco"] },
    { id: "sexualidad", nombre: "Sexualidad", requisitos: ["gineco"] },
    { id: "clinica_gine", nombre: "Clínica Gineco-Obstétrica y Neonatal", requisitos: ["clinica2", "evaluacion_ufp", "gineco", "planificacion"] },
    { id: "salud_familiar", nombre: "Salud Familiar", requisitos: ["salud_publica"] },
    { id: "gestion_programa", nombre: "Gestión del Programa de Salud Sexual y Salud Reproductiva", requisitos: ["planificacion"] },
    { id: "gestion_politicas", nombre: "Gestión y Políticas en Salud", requisitos: ["salud_publica"] },
    { id: "efg", nombre: "EFG", requisitos: [] },
    { id: "liderazgo", nombre: "Gestión y Liderazgo en Matronería", requisitos: ["salud_familiar", "gestion_programa"] },
    { id: "seminario", nombre: "Seminario de Grado", requisitos: ["salud_publica", "investigacion"] },
    { id: "bioetica", nombre: "Bioética y Legislación en Matronería", requisitos: ["clinica2"] },
    { id: "gestion_aplicada", nombre: "Gestión en Matronería Aplicada", requisitos: ["liderazgo"] },
    { id: "simulacion", nombre: "Simulación Clínica Integrada", requisitos: ["clinica_gine"] },
    { id: "efp", nombre: "EFP", requisitos: ["bioetica"] },
    { id: "internado", nombre: "Internado", requisitos: [
        "anat_general","bio_humana","quimica","intro_matroneria","ingles1","expresion",
        "anat_gin","cuidados_basicos","embrio","micro","fisiologia","bioquimica",
        "farmacologia","mat_med_quir","obs_fisio1","neonato_fisio","fisiopato","ingles2",
        "clinica1","morbilidad","obs_fisio2","neonato_pat","psico_evo","clinica2",
        "investigacion","evaluacion_ufp","gineco","cosmovision","salud_publica","planificacion",
        "sexualidad","clinica_gine","salud_familiar","gestion_programa","gestion_politicas",
        "efg","liderazgo","seminario","bioetica","gestion_aplicada","simulacion","efp"
    ]}
];

const estado = JSON.parse(localStorage.getItem('estadoMaterias') || '{}');

function guardarEstado() {
    localStorage.setItem('estadoMaterias', JSON.stringify(estado));
}

function crearMalla() {
    const contenedor = document.getElementById('malla');
    contenedor.innerHTML = '';
    materias.forEach(m => {
        const div = document.createElement('div');
        div.className = 'materia';
        div.textContent = m.nombre;
        div.id = m.id;
        div.addEventListener('click', () => toggleMateria(m.id));
        contenedor.appendChild(div);
    });
    actualizarMalla();
}

function toggleMateria(id) {
    estado[id] = !estado[id];
    guardarEstado();
    actualizarMalla();
}

function actualizarMalla() {
    materias.forEach(m => {
        const div = document.getElementById(m.id);
        const aprobadas = m.requisitos.every(req => estado[req]);
        if (estado[m.id]) {
            div.className = 'materia completada';
        } else if (aprobadas) {
            div.className = 'materia habilitada';
        } else {
            div.className = 'materia';
        }
    });
}

document.getElementById('resetBtn').addEventListener('click', () => {
    localStorage.removeItem('estadoMaterias');
    location.reload();
});

crearMalla();
