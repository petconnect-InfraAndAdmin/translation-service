# Translation Service – PetConnect

Traduce texto entre múltiples idiomas usando la API LibreTranslate.

## Endpoint

### POST /api/v1/translation

| Campo   | Tipo   | Descripción              |
|---------|--------|--------------------------|
| text    | string | Texto a traducir         |
| source  | string | Idioma de origen (ej: "es") |
| target  | string | Idioma destino (ej: "en") |

### Ejemplo:

```json
{
  "text": "Hola mundo",
  "source": "es",
  "target": "en"
}
