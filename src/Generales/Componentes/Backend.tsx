import { getLocalStorageJWT } from "./LocalStorage";
const url_backend = "http://localhost:3010/api/v1";
export function getDatos<T>(
  url: string,
  authorize: boolean = false
): Promise<T> {
  const new_url = url_backend + url;
  return new Promise<T>((resolve, reject) => {
    fetch(new_url, {
      headers: authorize ? getHeaders() : {},
    })
      .then((response) => {
        if (!response.ok) {
          reject("Hubo un problema al realizar la solicitud.");
        }
        return response.json() as Promise<T>;
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}

export function enviarDatos<T>(
  url: string,
  data: any,
  authorize: boolean = false
): Promise<T> {
  const new_url = url_backend + url;
  return new Promise<T>((resolve, reject) => {
    fetch(new_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(authorize ? getHeaders() : {}),
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json() as Promise<T>;
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        reject(error);
      });
  });
}
function getHeaders() {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };
  const token = getLocalStorageJWT(); // Obtener el token JWT del almacenamiento local
  if (token) {
    headers["Authorization"] = `Bearer ${token}`; // Agregar el token JWT al encabezado de autorización
  } else {
    // Manejar la falta de token JWT según tu lógica
  }
  return headers;
}
