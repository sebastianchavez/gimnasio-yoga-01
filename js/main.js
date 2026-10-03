const STORAGE_KEYS = {
  USERS: 'gy_users',
  SESSION: 'gy_session',
  RESERVAS: 'gy_reservas',
  RESERVA_DRAFT: 'gy_reserva_draft',
  PAGO_DRAFT: 'gy_pago_draft',
  CONTACTOS: 'gy_contactos',
  THEME: 'gy_theme'
};

const SERVICIOS = [
  { id: 's1', categoria: 'yoga', nombre: 'Yoga Vinyasa', descripcion: 'Flujo dinámico de posturas sincronizadas con la respiración.', duracion: 60, precio: 45, imagen: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80' },
  { id: 's2', categoria: 'yoga', nombre: 'Hatha Yoga', descripcion: 'Posturas clásicas y suaves para equilibrar cuerpo y mente.', duracion: 75, precio: 50, imagen: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80' },
  { id: 's3', categoria: 'yoga', nombre: 'Yin Yoga', descripcion: 'Estiramientos profundos y meditación en安静.', duracion: 75, precio: 50, imagen: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80' },
  { id: 's4', categoria: 'pilates', nombre: 'Pilates Mat', descripcion: 'Fortalecimiento del core y postural en colchoneta.', duracion: 50, precio: 40, imagen: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80' },
  { id: 's5', categoria: 'meditacion', nombre: 'Meditación Guiada', descripcion: 'Sesiones de mindfulness y respiración consciente.', duracion: 45, precio: 35, imagen: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80' },
  { id: 's6', categoria: 'funcional', nombre: 'Entrenamiento Funcional', descripcion: 'Circuitos de fuerza, movilidad y resistencia.', duracion: 60, precio: 55, imagen: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80' },
  { id: 's7', categoria: 'gym', nombre: 'Musculación Guiada', descripcion: 'Acompañamiento personalizado en sala de pesas.', duracion: 60, precio: 60, imagen: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80' },
  { id: 's8', categoria: 'cardio', nombre: 'Spinning Indoor', descripcion: 'Ciclismo indoor con ritmo y energía.', duracion: 45, precio: 40, imagen: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80' }
];

const PROFESIONALES = [
  { id: 'p1', nombre: 'Lucía Fernández', rol: 'Instructora de Yoga', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', rating: 4.9, especialidades: ['s1','s2','s3'] },
  { id: 'p2', nombre: 'Mateo Silva', rol: 'Instructor de Yoga', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', rating: 4.8, especialidades: ['s1','s3','s5'] },
  { id: 'p3', nombre: 'Camila Vega', rol: 'Coach Funcional', foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', rating: 5.0, especialidades: ['s4','s6'] },
  { id: 'p4', nombre: 'Andrés Rojas', rol: 'Entrenador', foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', rating: 4.9, especialidades: ['s6','s7','s8'] }
];

const HORARIOS_ATENCION = {
  lunes:    { abierto: true,  desde: '06:00', hasta: '22:00' },
  martes:   { abierto: true,  desde: '06:00', hasta: '22:00' },
  miercoles:{ abierto: true,  desde: '06:00', hasta: '22:00' },
  jueves:   { abierto: true,  desde: '06:00', hasta: '22:00' },
  viernes:  { abierto: true,  desde: '06:00', hasta: '21:00' },
  sabado:   { abierto: true,  desde: '08:00', hasta: '20:00' },
  domingo:  { abierto: true,  desde: '09:00', hasta: '14:00' }
};

const HORARIOS_CLASES = {
  lunes: [
    { hora: '07:00', servicio: 's1', profesional: 'p1', nivel: 'Todos' },
    { hora: '09:00', servicio: 's6', profesional: 'p4', nivel: 'Intermedio' },
    { hora: '17:00', servicio: 's4', profesional: 'p3', nivel: 'Todos' },
    { hora: '19:00', servicio: 's8', profesional: 'p4', nivel: 'Avanzado' }
  ],
  martes: [
    { hora: '07:00', servicio: 's2', profesional: 'p1', nivel: 'Principiante' },
    { hora: '12:00', servicio: 's5', profesional: 'p2', nivel: 'Todos' },
    { hora: '18:00', servicio: 's1', profesional: 'p1', nivel: 'Intermedio' }
  ],
  miercoles: [
    { hora: '07:00', servicio: 's3', profesional: 'p2', nivel: 'Todos' },
    { hora: '09:00', servicio: 's6', profesional: 'p4', nivel: 'Avanzado' },
    { hora: '17:00', servicio: 's4', profesional: 'p3', nivel: 'Todos' },
    { hora: '19:30', servicio: 's8', profesional: 'p4', nivel: 'Intermedio' }
  ],
  jueves: [
    { hora: '07:00', servicio: 's1', profesional: 'p1', nivel: 'Intermedio' },
    { hora: '12:00', servicio: 's5', profesional: 'p2', nivel: 'Todos' },
    { hora: '18:00', servicio: 's2', profesional: 'p1', nivel: 'Todos' }
  ],
  viernes: [
    { hora: '07:00', servicio: 's6', profesional: 'p4', nivel: 'Todos' },
    { hora: '17:00', servicio: 's4', profesional: 'p3', nivel: 'Avanzado' },
    { hora: '19:00', servicio: 's8', profesional: 'p4', nivel: 'Todos' }
  ],
  sabado: [
    { hora: '09:00', servicio: 's2', profesional: 'p1', nivel: 'Todos' },
    { hora: '11:00', servicio: 's5', profesional: 'p2', nivel: 'Todos' },
    { hora: '16:00', servicio: 's3', profesional: 'p2', nivel: 'Todos' }
  ],
  domingo: [
    { hora: '10:00', servicio: 's3', profesional: 'p2', nivel: 'Todos' },
    { hora: '12:00', servicio: 's5', profesional: 'p2', nivel: 'Todos' }
  ]
};

const PLANES = [
  { id: 'plan-basico', nombre: 'Básico', precioMensual: 199, precioAnual: 1990, destacado: false, caracteristicas: ['Acceso a musculación', 'Horario 6:00 - 16:00', '2 clases grupales/mes', 'Asesoría inicial'], color: 'border-gray-700' },
  { id: 'plan-yoga', nombre: 'Yoga Ilimitado', precioMensual: 349, precioAnual: 3490, destacado: true, caracteristicas: ['Clases de yoga ilimitadas', 'Pilates y meditación', 'Acceso 6:00 - 22:00', 'Toalla y mat incluidos', 'App de seguimiento'], color: 'border-primary' },
  { id: 'plan-premium', nombre: 'Premium', precioMensual: 599, precioAnual: 5990, destacado: false, caracteristicas: ['Todo del plan Yoga', 'Entrenamiento funcional', 'Spinning ilimitado', '1 sesión mensual con coach', 'Plan nutricional'], color: 'border-gray-700' }
];

const Storage = {
  get(key, fallback = null) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); }
    catch (e) { console.error('Storage error', e); }
  },
  remove(key) { localStorage.removeItem(key); }
};

const Auth = {
  init() {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.length === 0) {
      Storage.set(STORAGE_KEYS.USERS, [
        { id: 'u1', nombre: 'Ana García', email: 'ana@yoga.com', telefono: '+51 987 654 321', password: '123456', foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80', createdAt: Date.now() - 86400000 * 60 },
        { id: 'u2', nombre: 'Carlos Ruiz', email: 'carlos@gym.com', telefono: '+51 999 888 777', password: '123456', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', createdAt: Date.now() - 86400000 * 30 }
      ]);
    }
  },
  isLogged() { return !!this.current(); },
  current() {
    const s = Storage.get(STORAGE_KEYS.SESSION);
    if (!s) return null;
    if (s.expires && s.expires < Date.now()) { this.logout(); return null; }
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    return users.find(u => u.id === s.userId) || null;
  },
  login(email, password, remember = false) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) return { ok: false, error: 'Email o contraseña incorrectos.' };
    const session = { userId: user.id, token: 'tkn_' + Date.now(), expires: Date.now() + (remember ? 30 * 86400000 : 86400000) };
    Storage.set(STORAGE_KEYS.SESSION, session);
    return { ok: true, user };
  },
  register(data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    if (users.find(u => u.email === data.email)) return { ok: false, error: 'El email ya está registrado.' };
    if (data.password.length < 6) return { ok: false, error: 'La contraseña debe tener al menos 6 caracteres.' };
    const newUser = {
      id: 'u' + Date.now(),
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono || '',
      password: data.password,
      foto: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&q=80',
      createdAt: Date.now()
    };
    users.push(newUser);
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: newUser };
  },
  logout() { Storage.remove(STORAGE_KEYS.SESSION); },
  update(userId, data) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const idx = users.findIndex(u => u.id === userId);
    if (idx === -1) return { ok: false };
    if (data.email) {
      const conflict = users.find(u => u.email === data.email && u.id !== userId);
      if (conflict) return { ok: false, error: 'El email ya está en uso.' };
    }
    users[idx] = { ...users[idx], ...data };
    Storage.set(STORAGE_KEYS.USERS, users);
    return { ok: true, user: users[idx] };
  },
  recoverPassword(email) {
    const users = Storage.get(STORAGE_KEYS.USERS, []);
    const user = users.find(u => u.email === email);
    if (!user) return { ok: false, error: 'No existe una cuenta con ese email.' };
    return { ok: true };
  }
};

const Reservas = {
  init() {
    const list = Storage.get(STORAGE_KEYS.RESERVAS, null);
    if (list === null) {
      const today = new Date();
      const fmt = (d) => d.toISOString().split('T')[0];
      const f0 = new Date(today); f0.setDate(today.getDate() + 3);
      const f1 = new Date(today); f1.setDate(today.getDate() + 7);
      const f2 = new Date(today); f2.setDate(today.getDate() - 5);
      const f3 = new Date(today); f3.setDate(today.getDate() + 2);
      const f4 = new Date(today); f4.setDate(today.getDate() - 10);
      const samples = [
        { id: 'r1', userId: 'u1', servicioId: 's1', profesionalId: 'p1', fecha: fmt(f0), hora: '07:00', estado: 'confirmada', pago: 'pagado', metodoPago: 'tarjeta', precio: 45, notas: '', createdAt: Date.now() - 86400000 * 2 },
        { id: 'r2', userId: 'u1', servicioId: 's4', profesionalId: 'p3', fecha: fmt(f1), hora: '17:00', estado: 'pendiente', pago: 'pendiente', metodoPago: null, precio: 40, notas: '', createdAt: Date.now() - 86400000 },
        { id: 'r3', userId: 'u1', servicioId: 's5', profesionalId: 'p2', fecha: fmt(f2), hora: '12:00', estado: 'completada', pago: 'pagado', metodoPago: 'yape', precio: 35, notas: '', createdAt: Date.now() - 86400000 * 7 },
        { id: 'r4', userId: 'u2', servicioId: 's6', profesionalId: 'p4', fecha: fmt(f3), hora: '09:00', estado: 'confirmada', pago: 'pagado', metodoPago: 'transferencia', precio: 55, notas: '', createdAt: Date.now() - 86400000 * 1 },
        { id: 'r5', userId: 'u2', servicioId: 's8', profesionalId: 'p4', fecha: fmt(f4), hora: '19:00', estado: 'cancelada', pago: 'pendiente', metodoPago: null, precio: 40, notas: '', createdAt: Date.now() - 86400000 * 12 }
      ];
      Storage.set(STORAGE_KEYS.RESERVAS, samples);
    }
  },
  all() { return Storage.get(STORAGE_KEYS.RESERVAS, []); },
  byUser(userId) { return this.all().filter(r => r.userId === userId); },
  byId(id) { return this.all().find(r => r.id === id); },
  create(data) {
    const reservas = this.all();
    const nueva = {
      id: 'r' + Date.now(),
      ...data,
      estado: 'confirmada',
      pago: 'pendiente',
      metodoPago: null,
      createdAt: Date.now()
    };
    reservas.push(nueva);
    Storage.set(STORAGE_KEYS.RESERVAS, reservas);
    return nueva;
  },
  update(id, data) {
    const reservas = this.all();
    const idx = reservas.findIndex(r => r.id === id);
    if (idx === -1) return null;
    reservas[idx] = { ...reservas[idx], ...data };
    Storage.set(STORAGE_KEYS.RESERVAS, reservas);
    return reservas[idx];
  },
  cancel(id) { return this.update(id, { estado: 'cancelada' }); },
  markPaid(id, metodoPago) { return this.update(id, { pago: 'pagado', metodoPago, estado: 'confirmada' }); },
  occupiedSlots(servicioId, fecha) {
    return this.all()
      .filter(r => r.servicioId === servicioId && r.fecha === fecha && r.estado !== 'cancelada')
      .map(r => r.hora);
  },
  stats(userId) {
    const list = this.byUser(userId);
    const today = new Date().toISOString().split('T')[0];
    let proximas = 0, completadas = 0, canceladas = 0;
    list.forEach(r => {
      if (r.estado === 'cancelada') canceladas++;
      else if (r.fecha >= today && r.estado !== 'completada') proximas++;
      else if (r.estado === 'completada' || r.fecha < today) completadas++;
    });
    return { total: list.length, proximas, completadas, canceladas };
  }
};

const Pagos = {
  draft: null,
  init() {
    this.draft = Storage.get(STORAGE_KEYS.PAGO_DRAFT, null);
  },
  saveDraft(data) { this.draft = data; Storage.set(STORAGE_KEYS.PAGO_DRAFT, data); },
  clearDraft() { this.draft = null; Storage.remove(STORAGE_KEYS.PAGO_DRAFT); }
};

const UI = {
  toast(message, type = 'success') {
    const existing = document.querySelectorAll('.toast');
    existing.forEach(t => t.remove());
    const t = document.createElement('div');
    t.className = `toast ${type}`;
    t.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 mt-0.5">
          ${type === 'success' ? '<svg class="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>' : type === 'error' ? '<svg class="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>' : '<svg class="h-5 w-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"></path></svg>'}
        </div>
        <div class="flex-1">
          <p class="text-sm font-medium">${message}</p>
        </div>
        <button onclick="this.parentElement.parentElement.remove()" class="text-gray-500 hover:text-white">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>`;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 4000);
  },
  modal({ title, message, confirmText = 'Confirmar', cancelText = 'Cancelar', onConfirm }) {
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop-custom active';
    backdrop.innerHTML = `
      <div class="modal-content-custom">
        <h3 class="text-2xl font-display text-white mb-3">${title}</h3>
        <p class="text-gray-300 mb-6 leading-relaxed">${message}</p>
        <div class="flex gap-3 justify-end">
          <button class="btn-outline modal-cancel">${cancelText}</button>
          <button class="btn-primary modal-confirm">${confirmText}</button>
        </div>
      </div>`;
    document.body.appendChild(backdrop);
    const close = () => backdrop.remove();
    backdrop.querySelector('.modal-cancel').onclick = close;
    backdrop.querySelector('.modal-confirm').onclick = () => { if (onConfirm) onConfirm(); close(); };
    backdrop.onclick = (e) => { if (e.target === backdrop) close(); };
  },
  formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  },
  formatDateShort(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
  },
  formatPrice(n) { return 'S/. ' + Number(n).toFixed(2); },
  getServicio(id) { return SERVICIOS.find(s => s.id === id) || null; },
  getProfesional(id) { return PROFESIONALES.find(p => p.id === id) || null; },
  estadoBadge(estado) {
    const map = {
      'confirmada': '<span class="badge-estado badge-confirmada"><svg class="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>Confirmada</span>',
      'pendiente': '<span class="badge-estado badge-pendiente"><svg class="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>Pendiente pago</span>',
      'completada': '<span class="badge-estado badge-completada"><svg class="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>Completada</span>',
      'cancelada': '<span class="badge-estado badge-cancelada"><svg class="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>Cancelada</span>'
    };
    return map[estado] || '';
  },
  pagoBadge(pago) {
    return pago === 'pagado'
      ? '<span class="badge-estado badge-pagado"><svg class="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>Pagado</span>'
      : '<span class="badge-estado badge-pendiente"><svg class="h-3 w-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"/></svg>Por pagar</span>';
  },
  renderHeader() {
    const user = Auth.current();
    const navLinks = `
      <a href="index.html" data-nav="index" class="nav-link">Inicio</a>
      <a href="servicios.html" data-nav="servicios" class="nav-link">Servicios</a>
      <a href="horarios.html" data-nav="horarios" class="nav-link">Horarios</a>
      <a href="precios.html" data-nav="precios" class="nav-link">Precios</a>
      <a href="galeria.html" data-nav="galeria" class="nav-link">Galería</a>
      <a href="contacto.html" data-nav="contacto" class="nav-link">Contacto</a>
    `;
    const authSection = user
      ? `<a href="perfil.html" class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-background-card border border-border hover:border-primary transition"><img src="${user.foto}" alt="${user.nombre}" class="h-8 w-8 rounded-full object-cover"/><span class="text-sm font-medium text-white">${user.nombre.split(' ')[0]}</span></a>
         <button id="logoutBtn" class="text-sm text-gray-300 hover:text-primary">Salir</button>`
      : `<a href="inicio-sesion.html" class="nav-link">Iniciar Sesión</a>
         <a href="registro.html" class="btn-primary text-sm">Únete</a>`;
    const html = `
      <nav class="fixed top-0 inset-x-0 z-50 bg-background-dark/95 backdrop-blur-sm border-b border-border">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a href="index.html" class="flex items-center gap-2 text-2xl font-bold font-display">
              <svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-1.5 0-3 .5-4 1.5C7 5.5 6 7 6 9c0 1 .3 2 .8 3l-1.5 2c-.4.5-.3 1.3.3 1.7l.7.4c.5.3 1.2.2 1.6-.3l1.5-1.7c.6.3 1.4.5 2.1.5v.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V15c.7 0 1.5-.2 2.1-.5l1.5 1.7c.4.5 1.1.6 1.6.3l.7-.4c.6-.4.7-1.2.3-1.7l-1.5-2c.5-1 .8-2 .8-3 0-2-1-3.5-2-4.5-1-1-2.5-1.5-4-1.5z"></path><circle cx="10" cy="9" r="1" fill="currentColor"/><circle cx="14" cy="9" r="1" fill="currentColor"/></svg>
              <span class="text-white">Zen<span class="text-primary">Fit</span></span>
            </a>
            <div class="hidden lg:flex items-center gap-1">${navLinks}</div>
            <div class="hidden lg:flex items-center gap-3">${authSection}</div>
            <button id="mobileMenuBtn" class="lg:hidden text-white p-2">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
          <div id="mobileMenu" class="lg:hidden hidden pb-4 space-y-1">
            ${navLinks}
            <div class="pt-3 border-t border-border mt-3 space-y-2">${user ? `<a href="perfil.html" class="block px-3 py-2 text-white">Mi Perfil</a><button id="mobileLogoutBtn" class="block w-full text-left px-3 py-2 text-gray-300">Salir</button>` : `<a href="inicio-sesion.html" class="block px-3 py-2 text-gray-300">Iniciar Sesión</a><a href="registro.html" class="block btn-primary text-center">Únete</a>`}</div>
          </div>
        </div>
      </nav>`;
    const container = document.getElementById('appHeader');
    if (container) container.innerHTML = html;

    const page = document.body.dataset.page;
    if (page) {
      document.querySelectorAll('[data-nav]').forEach(a => {
        if (a.dataset.nav === page) a.classList.add('active');
      });
    }

    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
    const setupLogout = (id) => {
      const btn = document.getElementById(id);
      if (btn) btn.addEventListener('click', () => { Auth.logout(); UI.toast('Sesión cerrada'); setTimeout(() => location.href = 'index.html', 800); });
    };
    setupLogout('logoutBtn');
    setupLogout('mobileLogoutBtn');
  },
  renderFooter() {
    const footerHtml = `
      <footer class="bg-background-card border-t border-border mt-20">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="md:col-span-2">
              <div class="flex items-center gap-2 text-2xl font-bold font-display mb-4">
                <svg class="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3c-1.5 0-3 .5-4 1.5C7 5.5 6 7 6 9c0 1 .3 2 .8 3l-1.5 2c-.4.5-.3 1.3.3 1.7l.7.4c.5.3 1.2.2 1.6-.3l1.5-1.7c.6.3 1.4.5 2.1.5v.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V15c.7 0 1.5-.2 2.1-.5l1.5 1.7c.4.5 1.1.6 1.6.3l.7-.4c.6-.4.7-1.2.3-1.7l-1.5-2c.5-1 .8-2 .8-3 0-2-1-3.5-2-4.5-1-1-2.5-1.5-4-1.5z"></path></svg>
                <span class="text-white">Zen<span class="text-primary">Fit</span></span>
              </div>
              <p class="text-gray-400 leading-relaxed max-w-md mb-4">Tu refugio de bienestar donde el cuerpo, la mente y el movimiento se encuentran. Yoga, pilates, funcional y más.</p>
              <div class="flex gap-3">
                <a href="#" class="h-10 w-10 rounded-full bg-background-dark border border-border flex items-center justify-center hover:border-primary hover:text-primary transition" aria-label="Facebook">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-background-dark border border-border flex items-center justify-center hover:border-primary hover:text-primary transition" aria-label="Instagram">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" class="h-10 w-10 rounded-full bg-background-dark border border-border flex items-center justify-center hover:border-primary hover:text-primary transition" aria-label="YouTube">
                  <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Navegación</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="index.html" class="text-gray-400 hover:text-primary transition">Inicio</a></li>
                <li><a href="servicios.html" class="text-gray-400 hover:text-primary transition">Servicios</a></li>
                <li><a href="horarios.html" class="text-gray-400 hover:text-primary transition">Horarios</a></li>
                <li><a href="precios.html" class="text-gray-400 hover:text-primary transition">Precios</a></li>
                <li><a href="galeria.html" class="text-gray-400 hover:text-primary transition">Galería</a></li>
                <li><a href="contacto.html" class="text-gray-400 hover:text-primary transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-semibold mb-4">Contacto</h4>
              <ul class="space-y-3 text-sm text-gray-400">
                <li class="flex items-start gap-2"><svg class="h-4 w-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Av. Larco 345, Miraflores, Lima</li>
                <li class="flex items-start gap-2"><svg class="h-4 w-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>(01) 234-5678</li>
                <li class="flex items-start gap-2"><svg class="h-4 w-4 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>hola@zenfit.pe</li>
              </ul>
            </div>
          </div>
          <div class="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <p class="text-sm text-gray-500">&copy; ${new Date().getFullYear()} ZenFit Studio. Todos los derechos reservados.</p>
            <div class="flex gap-4 text-sm text-gray-500">
              <a href="terminos.html" class="hover:text-primary transition">Términos</a>
              <a href="privacidad.html" class="hover:text-primary transition">Privacidad</a>
            </div>
          </div>
        </div>
      </footer>`;
    const container = document.getElementById('appFooter');
    if (container) container.innerHTML = footerHtml;
  }
};

function init() {
  Auth.init();
  Reservas.init();
  Pagos.init();
  UI.renderHeader();
  UI.renderFooter();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

function requireAuth(redirect = 'inicio-sesion.html') {
  if (!Auth.isLogged()) { UI.toast('Inicia sesión para continuar', 'warning'); setTimeout(() => location.href = redirect, 800); return false; }
  return true;
}

function getQueryParam(name) { return new URLSearchParams(location.search).get(name); }