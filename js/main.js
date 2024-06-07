const API_URL = 'http://localhost:3000/api'; // Backend API URL

document.getElementById('pruebaAfectivaForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    apariencia: parseInt(document.getElementById('apariencia').value),
    aroma: parseInt(document.getElementById('aroma').value),
    sabor: parseInt(document.getElementById('sabor').value),
    textura_boca: parseInt(document.getElementById('textura_boca').value)
  };
  console.log('Prueba Afectiva data to send:', data); // Log data to send
  const response = await fetch(`${API_URL}/prueba-afectiva`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
});

document.getElementById('pruebaDescriptivaForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    sensaciones: document.getElementById('sensaciones').value,
    textura_morder: parseInt(document.getElementById('textura_morder').value),
    aspecto_irregularidad: document.getElementById('aspecto_irregularidad').value,
    sensacion_granulado_arenoso: parseInt(document.getElementById('sensacion_granulado_arenoso').value),
    aroma: document.getElementById('aroma').value,
    sabor_predominante: document.getElementById('sabor_predominante').value,
    crujiente: parseInt(document.getElementById('crujiente').value)
  };
  console.log('Prueba Descriptiva data to send:', data); // Log data to send
  const response = await fetch(`${API_URL}/prueba-descriptiva`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
});

document.getElementById('generalForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const data = {
    estrellas_general: parseInt(document.getElementById('estrellas_general').value),
    volver_consumir: parseInt(document.getElementById('volver_consumir').value)
  };
  console.log('General data to send:', data); // Log data to send
  const response = await fetch(`${API_URL}/general`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  console.log(result);
});
