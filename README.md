# ZenFit Studio · Sistema de Reservas (Gimnasio / Yoga)

Template completo de sistema de reservas para gimnasio y yoga, construido en **HTML + Tailwind CSS (CDN) + JavaScript nativo** sin frameworks ni build step.

---

## Descripción

ZenFit Studio es un sistema web responsive que permite a los usuarios explorar servicios (yoga, pilates, meditación, funcional, musculación y spinning), reservar clases, gestionar pagos y mantener un historial de sus reservas. Incluye autenticación completa, perfiles editables, panel de administración de reservas y flujo de pago simulado.

---

## Stack técnico

| Capa | Tecnología |
|---|---|
| Estructura | HTML5 semántico |
| Estilos | Tailwind CSS v3 (CDN) + CSS personalizado |
| Lógica | JavaScript vanilla (ES2020+), sin dependencias |
| Persistencia | `localStorage` (namespace `gy_*`) |
| Iconos | SVG inline (Lucide-style) |
| Tipografías | Google Fonts: Playfair Display + Inter |
| Imágenes | Unsplash CDN |

---

## Estructura de archivos

```
gimnasio-yoga-01/
├── index.html              # Pantalla de inicio
├── servicios.html          # Catálogo de servicios
├── reserva.html            # Wizard de reserva (3 pasos)
├── confirmacion.html       # Confirmación de cita
├── pago.html               # Pago de reserva (4 métodos)
├── pago-confirmado.html    # Recibo imprimible
├── perfil.html             # Mi perfil + historial de reservas
├── detalle-reserva.html     # Detalle de reserva + anular cita
├── horarios.html           # Horario semanal de clases
├── precios.html            # Planes y membresías
├── galeria.html            # Galería con lightbox
├── contacto.html           # Formulario + mapa + horarios
├── inicio-sesion.html      # Login
├── registro.html           # Crear cuenta
├── recuperar-password.html # Recuperación de contraseña
├── terminos.html           # Términos y condiciones
├── privacidad.html         # Política de privacidad
├── css/
│   └── styles.css          # Variables CSS, animaciones, componentes
└── js/
    └── main.js             # Lógica completa (auth, reservas, pagos, UI)
```

---

## Cómo abrir el proyecto

No requiere instalación ni servidor. Simplemente abre `index.html` en cualquier navegador moderno.

```bash
# Opción 1: doble clic sobre index.html
# Opción 2: servidor local (recomendado para algunas funciones)
cd gimnasio-yoga-01
python -m http.server 8000
# Luego abre http://localhost:8000
```

---

## Cuentas de demostración

El sistema crea automáticamente datos de prueba en el primer acceso:

| Email | Contraseña | Reservas precargadas |
|---|---|---|
| `ana@yoga.com` | `123456` | Yoga (confirmada + pagada), Pilates (pendiente pago), Meditación (completada) |
| `carlos@gym.com` | `123456` | Funcional (confirmada + pagada), Spinning (cancelada) |

Para resetear todos los datos: abre DevTools (F12) → Application → Local Storage → elimina las claves `gy_*`.

---

## Flujo end-to-end

```
Inicio → [Login / Registro] → Servicios → Reserva (wizard 3 pasos)
  → Confirmación de cita → [Pago] → Confirmación de pago
  → Perfil → Detalle reserva → [Anular cita]
  → Contacto / Galería / Horarios / Precios (libres)
```

### Wizard de reserva (3 pasos)

1. **Servicio**: elige disciplina (yoga, pilates, funcional, etc.)
2. **Fecha y horario**: día + hora (slots dinámicos bloqueados si están ocupados)
3. **Confirmación**: notas opcionales + resumen

### Métodos de pago (simulados)

- **Tarjeta**: validación Luhn + vencimiento + CVV
- **Yape**: número de operación (8-10 dígitos)
- **Transferencia**: número de operación BCP
- **Efectivo**: pago en recepción

---

## Modelo de datos (localStorage)

```js
gy_users       // Usuarios registrados
gy_session     // Sesión activa
gy_reservas    // Reservas con estados
gy_reserva_draft  // Borrador durante wizard
gy_pago_draft     // Datos del pago actual
gy_contactos      // Mensajes del formulario de contacto
```

### Estados de reserva

| Estado | Descripción |
|---|---|
| `confirmada` | Reserva activa con pago o por pagar |
| `pendiente` | Reserva sin pago registrado |
| `completada` | Clase ya asistida |
| `cancelada` | Anulada por el usuario |

---

## Funcionalidades clave

- **Auth completo**: login, registro, recuperación, edición de perfil, cambio de contraseña
- **Reservas con wizard** de 3 pasos y slots dinámicos
- **Validación de tarjeta** con algoritmo Luhn
- **Gestión de historial** con filtros (todas / próximas / completadas / canceladas)
- **Anular citas** con modal de confirmación
- **Galería con lightbox** y navegación por teclado (Esc para cerrar)
- **Horarios semanales** con filtros por categoría
- **Comparativa de precios** con toggle mensual / anual (-15%)
- **Recibo imprimible** (compatible con `window.print()`)
- **Validación de formularios** y feedback con toasts
- **100% responsive** mobile-first

---

## Datos seed (primer load)

### Usuarios
- Ana García · `ana@yoga.com` · 123456
- Carlos Ruiz · `carlos@gym.com` · 123456

### Servicios (8)
Yoga Vinyasa, Hatha Yoga, Yin Yoga, Pilates Mat, Meditación Guiada, Entrenamiento Funcional, Musculación Guiada, Spinning Indoor.

### Profesionales (4)
Lucía Fernández (yoga), Mateo Silva (yoga), Camila Vega (funcional), Andrés Rojas (entrenador).

### Planes (3)
Básico (S/. 199), Yoga Ilimitado (S/. 349, destacado), Premium (S/. 599).

---

## Personalización

### Colores

Edita las variables en `css/styles.css`:

```css
--color-primary: #7ba05b;      /* verde sage principal */
--color-primary-dark: #5d7f43;
--color-gold: #d4af6a;          /* dorado de acento */
--color-bg-dark: #0f1410;       /* fondo principal */
```

O en el bloque `tailwind.config` de cada HTML:

```js
tailwind.config = {
  theme: { extend: { colors: {
    primary: '#7ba05b',
    gold: '#d4af6a',
    'background-dark': '#0f1410',
    // ...
  }}}
}
```

### Contenido

- **Servicios**: array `SERVICIOS` en `js/main.js` (línea ~10)
- **Profesionales**: array `PROFESIONALES` (línea ~22)
- **Horarios**: objeto `HORARIOS_CLASES` (línea ~40)
- **Planes**: array `PLANES` (línea ~58)

### Textos y copy

Edita directamente cada HTML. Todas las páginas comparten el mismo footer y cabecera, generados dinámicamente por `js/main.js` desde las funciones `UI.renderHeader()` y `UI.renderFooter()`.

---

## Compatibilidad

Probado en navegadores modernos:

- Chrome / Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

No requiere polyfills. Usa `localStorage`, `IntersectionObserver` y `fetch` (ninguno crítico para el funcionamiento base).

---

## Licencia

Template de uso libre. Las imágenes provienen de [Unsplash](https://unsplash.com) y están sujetas a sus respectivas licencias.