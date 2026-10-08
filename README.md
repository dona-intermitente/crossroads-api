# 🌓 Crossroads API

> ¿Qué prefiere el mundo? Una brújula sociológica impulsada por IA para ayudarte a tomar decisiones inteligentes.

## 🚀 Acerca del Proyecto

Crossroads es una API construida con el framework **NestJS** que utiliza la potencia de **Google Gemini AI** para analizar diferentes opciones y determinar cuál sería la preferencia de la población mundial.

La idea nació de la necesidad de tener un "segundo criterio" basado en tendencias sociológicas y datos globales al momento de enfrentar dilemas o decisiones importantes.

### ✨ Características Principales

- **IA Integration:** Motor de análisis basado en Google Gemini.
- **Validación Estricta:** Uso de NestJS Pipes y DTOs para asegurar la integridad de los datos.
- **Arquitectura Modular:** Código limpio, escalable y mantenible.
- **Manejo de Errores Global:** Sistema centralizado para respuestas de error profesionales y amigables.
- **Documentación Swagger:** Interfaz visual (vía Scalar) para probar la API en segundos.

---

## 🛠️ Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) - Framework de Node.js para aplicaciones eficientes y escalables.
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje robusto para el desarrollo.
- [Google Generative AI](https://ai.google.dev/) - SDK oficial para Gemini.
- [Class Validator](https://github.com/typestack/class-validator) - Validación de datos basada en decoradores.

---

## ⚙️ Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/crossroads-api.git
cd crossroads-api
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto y añade tu API Key de Gemini:

```env
GEMINI_API_KEY=tu_clave_de_google_ai_studio
PORT=4000
```

### 4. Ejecutar la aplicación

```bash
# Modo desarrollo
npm run start:dev
```

---

## 📖 Cómo Usar

### Endpoint Principal: `POST /crossroads`

Envía una lista de opciones y recibe un análisis porcentual sociológico.

**Ejemplo de Petición (JSON):**

```json
{
  "roads": ["Comprar casa", "Invertir en acciones", "Viajar por el mundo"]
}
```

**Ejemplo de Respuesta:**

```json
[
  {
    "label": "Comprar casa",
    "value": 60,
    "description": "La mayoría de las culturas valoran la propiedad como sinónimo de estabilidad y seguridad financiera a largo plazo."
  },
  ...
]
```

---

## 👤 Autor

- **dona-intermitente** - [GitHub](https://github.com/dona-intermitente)
