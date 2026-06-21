export const PLAN_ESTUDIOS = [
  {
    anio: 1, cuatrimestre: 1,
    materias: [
      { codigo: '1.1.083', materia: 'Administración Empresarial I', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 9, fechaAprob: '02/02/2026', observaciones: 'Equivalencia externa - Univ. Austral (Administración I)' },
      { codigo: '1.2.001', materia: 'Marketing', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 9, fechaAprob: '17/07/2025', observaciones: '' },
      { codigo: '2.1.174', materia: 'Escritura y Oralidad', horas: 68, correlativas: '', prerequisito: '', estado: 'Final pendiente', nota: null, fechaAprob: '', observaciones: 'Cursada regular (a final). Vence 21/07/2027' },
      { codigo: '2.3.001', materia: 'Introducción al Derecho', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 4, fechaAprob: '02/02/2026', observaciones: 'Equivalencia externa - Univ. Austral (Derecho Público y Constitucional)' },
      { codigo: '3.1.038', materia: 'Matemática Empresarial I', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 8, fechaAprob: '18/12/2025', observaciones: '' },
    ]
  },
  {
    anio: 1, cuatrimestre: 2,
    materias: [
      { codigo: '1.1.084', materia: 'Administración Empresarial II', horas: 68, correlativas: '1.1.083', prerequisito: '', estado: 'Final pendiente', nota: null, fechaAprob: '', observaciones: 'Cursada regular (a final). Vence 21/07/2027' },
      { codigo: '3.1.036', materia: 'Estadística Empresarial I', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 8, fechaAprob: '15/07/2025', observaciones: 'Promoción' },
      { codigo: '1.1.143', materia: 'Gestión de las Personas en las Organizaciones', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 6, fechaAprob: '09/12/2025', observaciones: '' },
      { codigo: '1.3.001', materia: 'Contabilidad I', horas: 68, correlativas: '', prerequisito: '', estado: 'Aprobada', nota: 4, fechaAprob: '02/02/2026', observaciones: 'Equivalencia externa - Univ. Austral (Introducción a la Contabilidad)' },
      { codigo: '2.1.003', materia: 'Historia Económica Mundial', horas: 68, correlativas: '', prerequisito: '', estado: 'Cursando', nota: null, fechaAprob: '', observaciones: '1°C 2026' },
    ]
  },
  {
    anio: 2, cuatrimestre: 1,
    materias: [
      { codigo: '1.4.001', materia: 'Microeconomía', horas: 68, correlativas: '', prerequisito: '', estado: 'Recursando', nota: null, fechaAprob: '', observaciones: 'Desaprobó cursada anterior (2025 2°C)' },
      { codigo: '3.1.039', materia: 'Matemática Empresarial II', horas: 68, correlativas: '3.1.038', prerequisito: '', estado: 'Cursando', nota: null, fechaAprob: '', observaciones: '1°C 2026' },
      { codigo: '1.2.080', materia: 'Plataformas y Negocios web', horas: 68, correlativas: '', prerequisito: '', estado: 'Final pendiente', nota: null, fechaAprob: '', observaciones: 'Cursada regular (a final). Vence 15/07/2027' },
      { codigo: '2.3.114', materia: 'Derecho del Trabajo Individual', horas: 68, correlativas: '2.3.001', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.2.091', materia: 'Desarrollo Internacional de Negocios', horas: 68, correlativas: '1.2.001', prerequisito: '', estado: 'Aprobada', nota: 7, fechaAprob: '15/12/2025', observaciones: '' },
    ]
  },
  {
    anio: 2, cuatrimestre: 2,
    materias: [
      { codigo: '2.3.002', materia: 'Obligaciones, Contratos y Sociedades', horas: 68, correlativas: '2.3.001', prerequisito: '', estado: 'Cursando', nota: null, fechaAprob: '', observaciones: '1°C 2026' },
      { codigo: '1.4.003', materia: 'Macroeconomía', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '3.1.037', materia: 'Estadística Empresarial II', horas: 68, correlativas: '3.1.036', prerequisito: '', estado: 'Cursando', nota: null, fechaAprob: '', observaciones: '1°C 2026' },
      { codigo: '1.1.144', materia: 'Diseño y Auditoría de Sistemas de Información', horas: 68, correlativas: '1.1.084', prerequisito: '', estado: 'Final pendiente', nota: null, fechaAprob: '', observaciones: 'Cursada regular (a final). Vence 10/12/2027' },
      { codigo: '1.3.013', materia: 'Contabilidad Gerencial', horas: 68, correlativas: '1.3.001', prerequisito: '', estado: 'Cursando', nota: null, fechaAprob: '', observaciones: '1°C 2026' },
    ]
  },
  {
    anio: 3, cuatrimestre: 1, tituloIntermedio: true,
    materias: [
      { codigo: 'OPT1', materia: 'Optativa I', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: 'OPT2', materia: 'Optativa II', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.4.002', materia: 'Cálculo Financiero', horas: 68, correlativas: '3.1.038', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.3.076', materia: 'Sistemas de Costos', horas: 68, correlativas: '1.3.001', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '3.1.017', materia: 'Programación Operativa', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
    ]
  },
  {
    anio: 3, cuatrimestre: 2,
    materias: [
      { codigo: 'OPT3', materia: 'Optativa III', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.3.023', materia: 'Impuestos', horas: 68, correlativas: '1.3.013', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.1.011', materia: 'Gerencia de Operaciones', horas: 68, correlativas: '1.1.084', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.1.093', materia: 'Liderazgo y Negociación', horas: 68, correlativas: '1.1.084', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.4.021', materia: 'Finanzas Corporativas I', horas: 68, correlativas: '1.4.002', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
    ]
  },
  {
    anio: 4, cuatrimestre: 1,
    materias: [
      { codigo: 'OPT4', materia: 'Optativa IV', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.1.087', materia: 'Dirección Estratégica', horas: 68, correlativas: '1.1.084', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.6.001', materia: 'Control de Gestión', horas: 68, correlativas: '1.3.076', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.6.002', materia: 'Nuevas Tendencias en Administración', horas: 68, correlativas: '1.1.011 / 1.1.084', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.1.146', materia: 'Consultoría', horas: 68, correlativas: '', prerequisito: '30 materias aprobadas', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
    ]
  },
  {
    anio: 4, cuatrimestre: 2, tituloFinal: true,
    materias: [
      { codigo: 'OPT5', materia: 'Optativa V', horas: 68, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.6.003', materia: 'Análisis Estratégico de Datos', horas: 68, correlativas: '', prerequisito: '30 materias aprobadas', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.1.090', materia: 'Desarrollo Empresarial', horas: 68, correlativas: '1.4.021 / 1.3.076', prerequisito: '30 materias aprobadas', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.6.004', materia: 'Simulaciones y Toma de Decisiones en Negocios', horas: 68, correlativas: '1.3.013 / 1.1.087', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '1.1.170', materia: 'Trabajo Integrador Final en Administración', horas: 68, correlativas: '', prerequisito: '30 materias aprobadas', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
      { codigo: '2.4.216', materia: 'Examen de Inglés', horas: 0, correlativas: '', prerequisito: '', estado: 'Pendiente', nota: null, fechaAprob: '', observaciones: '' },
    ]
  },
]

export const CURSADA_ACTUAL = [
  { codigo: '2.1.003', materia: 'Historia Económica Mundial', parcial1: 4, parcial2: 4, recuperatorio: null, tps: '8, 9, 0', promParciales: 4.0, condicion: 'Cursando', notaFinal: null, observaciones: '' },
  { codigo: '3.1.039', materia: 'Matemática Empresarial II', parcial1: 8, parcial2: null, recuperatorio: null, tps: '-', promParciales: 8.0, condicion: 'Cursando', notaFinal: null, observaciones: '' },
  { codigo: '2.3.002', materia: 'Obligaciones, Contratos y Sociedades', parcial1: 3, parcial2: null, recuperatorio: null, tps: '-', promParciales: 3.0, condicion: 'Cursando', notaFinal: null, observaciones: '' },
  { codigo: '3.1.037', materia: 'Estadística Empresarial II', parcial1: null, parcial2: null, recuperatorio: null, tps: '4, 0, 0', promParciales: null, condicion: 'Cursando', notaFinal: null, observaciones: '' },
  { codigo: '1.3.013', materia: 'Contabilidad Gerencial', parcial1: 2, parcial2: null, recuperatorio: null, tps: '0', promParciales: 2.0, condicion: 'Cursando', notaFinal: null, observaciones: '' },
]

export const STATUS_CONFIG = {
  'Aprobada':        { color: 'var(--status-aprobada)',   bg: 'var(--status-aprobada-bg)',   label: 'Aprobada' },
  'Cursando':        { color: 'var(--status-cursando)',   bg: 'var(--status-cursando-bg)',   label: 'Cursando' },
  'Final pendiente': { color: 'var(--status-final)',      bg: 'var(--status-final-bg)',      label: 'Final pendiente' },
  'Recursando':      { color: 'var(--status-recursando)', bg: 'var(--status-recursando-bg)', label: 'Recursando' },
  'Pendiente':       { color: 'var(--status-pendiente)',  bg: 'var(--status-pendiente-bg)',  label: 'Pendiente' },
}
