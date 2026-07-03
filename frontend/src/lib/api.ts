export const API_BASE_URL =
  (import.meta.env.VITE_API_URL as string | undefined) || 'http://localhost:4000'

export interface ContactoPayload {
  nombre: string
  email: string
  telefono?: string
  empresa?: string
  servicio?: string
  mensaje: string
}

export async function enviarContacto(payload: ContactoPayload) {
  const res = await fetch(`${API_BASE_URL}/api/contacto`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data?.error || 'No se pudo enviar el formulario')
  }

  return data
}
