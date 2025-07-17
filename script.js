// Datos de la malla curricular: arreglo de semestres, cada semestre un array de ramos con codigo, nombre y prerrequisitos

const malla = [
  // Año 1 - Semestre 1
  [
    { codigo: "A1S1_01", nombre: "Anatomía General", prerequisitos: [] },
    { codigo: "A1S1_02", nombre: "Biología Humana", prerequisitos: [] },
    { codigo: "A1S1_03", nombre: "Química General y Orgánica", prerequisitos: [] },
    { codigo: "A1S1_04", nombre: "Introducción a la Matronería y Gestión en Salud", prerequisitos: [] },
    { codigo: "A1S1_05", nombre: "Inglés I", prerequisitos: [] },
    { codigo: "A1S1_06", nombre: "Expresión Oral y Escrita", prerequisitos: [] }
  ],
  // Año 1 - Semestre 2
  [
    { codigo: "A1S2_01", nombre: "Anatomía Gineco-Obstétrica", prerequisitos: ["A1S1_01"] },
    { codigo: "A1S2_02", nombre: "Cuidados Básicos de Matronería", prerequisitos: ["A1S1_01"] },
    { codigo: "A1S2_03", nombre: "Embriología Humana", prerequisitos: ["A1S1_01", "A1S1_02"] },
    { codigo: "A1S2_04", nombre: "Microbiología y Parasitología", prerequisitos: ["A1S1_02"] },
    { codigo: "A1S2_05", nombre: "Fisiología Humana", prerequisitos: ["A1S1_01", "A1S1_02"] },
    { codigo: "A1S2_06", nombre: "Bioquímica", prerequisitos: ["A1S1_03"] }
  ],
  // Año 2 - Semestre 1
  [
    { codigo: "A2S1_01", nombre: "Farmacología", prerequisitos: ["A1S1_03", "A1S2_05"] },
    { codigo: "A2S1_02", nombre: "Matronería Médico Quirúrgica", prerequisitos: ["A1S2_01", "A1S2_02", "A1S2_04"] },
    { codigo: "A2S1_03", nombre: "Obstetricia Fisiología I", prerequisitos: ["A1S2_01", "A1S2_03", "A1S2_05"] },
    { codigo: "A2S1_04", nombre: "Neonatología Fisiológica", prerequisitos: ["A1S2_02", "A1S2_03", "A1S2_05"] },
    { codigo: "A2S1_05", nombre: "Fisiopatología", prerequisitos: ["A1S2_03"] },
    { codigo: "A2S1_06", nombre: "Inglés II", prerequisitos: ["A1S1_05"] }
  ],
  // Año 2 - Semestre 2
  [
    { codigo: "A2S2_01", nombre: "Clínica Obstétrica y Neonatal I", prerequisitos: ["A2S1_01", "A2S1_02", "A2S1_03", "A2S1_05"] },
    { codigo: "A2S2_02", nombre: "Morbilidad Obstétrica", prerequisitos: ["A2S1_01", "A2S1_03", "A2S1_05"] },
    { codigo: "A2S2_03", nombre: "Obstetricia Fisiológica II", prerequisitos: ["A2S1_03", "A2S1_05"] },
    { codigo: "A2S2_04", nombre: "Neonatología Patológica", prerequisitos: ["A2S1_04", "A2S1_01"] },
    { codigo: "A2S2_05", nombre: "Psicología Evolutiva", prerequisitos: [] }
  ],
  // Año 3 - Semestre 1
  [
    { codigo: "A3S1_01", nombre: "Clínica Obstétrica y Neonatal II", prerequisitos: ["A2S2_01", "A2S2_02", "A2S2_03"] },
    { codigo: "A3S1_02", nombre: "Metodología de la Investigación", prerequisitos: ["A1S1_05"] },
    { codigo: "A3S1_03", nombre: "Evaluación Unidad Feto Placentaria", prerequisitos: ["A2S2_02", "A2S2_03"] },
    { codigo: "A3S1_04", nombre: "Ginecología", prerequisitos: ["A2S1_01", "A2S1_05"] },
    { codigo: "A3S1_05", nombre: "Cosmovisión Andina en la Salud de la Mujer", prerequisitos: ["A2S2_05"] }
  ],
  // Año 3 - Semestre 2
  [
    { codigo: "A3S2_01", nombre: "Clínica Obstétrica y Neonatal II", prerequisitos: ["A2S2_01", "A2S2_02", "A2S2_03"] },
    { codigo: "A3S2_02", nombre: "Salud Pública y Epidemiología", prerequisitos: ["A2S2_05"] },
    { codigo: "A3S2_03", nombre: "Planificación Familiar", prerequisitos: ["A3S1_04"] },
    { codigo: "A3S2_04", nombre: "Sexualidad", prerequisitos: ["A3S1_04"] }
  ],
  // Año 4 - Semestre 1
  [
    { codigo: "A4S1_01", nombre: "Clínica Gineco-Obstétrica y Neonatal", prerequisitos: ["A3S2_01", "A3S1_03", "A3S1_04", "A3S2_03"] },
    { codigo: "A4S1_02", nombre: "Salud Familiar", prerequisitos: ["A3S2_02"] },
    { codigo: "A4S1_03", nombre: "Gestión del Programa de Salud Sexual y Salud Reproductiva", prerequisitos: ["A3S2_03"] },
    { codigo: "A4S1_04", nombre: "Gestión y Políticas en Salud", prerequisitos: ["A3S2_02"] },
    { codigo: "A4S1_05", nombre: "EFG", prerequisitos: [] }
  ],
  // Año 4 - Semestre 2
  [
    { codigo: "A4S2_01", nombre: "Clínica Gineco-Obstétrica y Neonatal", prerequisitos: ["A3S2_01", "A3S1_03", "A3S1_04", "A3S2_03"] },
    { codigo: "A4S2_02", nombre: "Gestión y Liderazgo en Matronería", prerequisitos: ["A4S1_02", "A4S1_03"] },
    { codigo: "A4S2_03", nombre: "Seminario de Grado", prerequisitos: ["A3S2_02", "A3S1_02"] },
    { codigo: "A4S2_04", nombre: "Bioética y Legislación en Matronería", prerequisitos: ["A3S2_01"] }
  ],
  // Año 5 - Semestre 1
  [
    { codigo: "A5S1_01", nombre: "Gestión en Matronería Aplicada", prerequisitos: ["A4S2_02"] },
    { codigo: "A5S1_02", nombre: "Simulación Clínica Integrada", prerequisitos: ["A4S2_01"] },
    { codigo: "A5S1_03", nombre: "EFP", prerequisitos: ["A4S2_04"] }
  ],
  // Año 5 - Semestre 2
  [
    { codigo: "A5S2_01", nombre: "Internado", prerequisitos: ["A1S1_01", "A1S1_02", "A1S1_03", "A1S1_04"] }
  ]
];

// Obtener máximo número de ramos para filas iguales
const maxFilas = Math.max(...malla.map(s => s.length));

// Estado guardado en localStorage
const estadoRamos = JSON.parse(localStorage.getItem('estadoRamos') || '{}');

const tablaBody = document.querySelector('#mallaHorario tbody');

function puedeActivar(ramo) {
  if (!ramo.prerequisitos || ramo.prerequisitos.length === 0) return true;
  return ramo.prerequisitos.every(cod => estadoRamos[cod] === 'aprobado');
}

function crearCelda(ramo) {
  const td = document.createElement('td');
  if (!ramo) {
    td.textContent = '';
    td.classList.add('vacío');
    return td;
  }
  td.textContent = `${ramo.codigo}\n${ramo.nombre}`;
  td.title = `Prerrequisitos: ${ramo.prerequisitos.length > 0 ? ramo.prerequisitos.join(', ') : 'Ninguno'}`;
  if (!puedeActivar(ramo)) {
    td.classList.add('bloqueado');
  } else {
    const estado = estadoRamos[ramo.codigo];
    if (estado === 'aprobado') td.classList.add('aprobado');
    else if (estado === 'reprobado') td.classList.add('reprobado');
  }
  td.addEventListener('click', () => {
    if (td.classList.contains('bloqueado')) return;
    const codigo = ramo.codigo;
    const estadoActual = estadoRamos[codigo];
    if (estadoActual === 'aprobado') estadoRamos[codigo] = 'reprobado';
    else if (estadoActual === 'reprobado') delete estadoRamos[codigo];
    else estadoRamos[codigo] = 'aprobado';
    localStorage.setItem('estadoRamos', JSON.stringify(estadoRamos));
    actualizarTabla();
  });
  return td;
}

function actualizarTabla() {
  tablaBody.innerHTML = '';
  for (let i = 0; i < maxFilas; i++) {
    const tr = document.createElement('tr');
    for (let s = 0; s < malla.length; s++) {
      const ramo = malla[s][i];
      tr.appendChild(crearCelda(ramo));
    }
    tablaBody.appendChild(tr);
  }
}

actualizarTabla();
