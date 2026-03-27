async function buscar() {
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const resultado = document.getElementById("resultado");

    try {
        const res = await fetch(`/irrigation?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`);
        const data = await res.json();

        if (!res.ok) {
            resultado.textContent = data.erro || "Não foi possível obter a recomendação.";
            return;
        }

        resultado.innerHTML =
            `Temperatura: ${data.temperature}°C<br>${data.advice}`;
    } catch (e) {
        resultado.textContent = "Erro de rede ou servidor indisponível.";
    }
}