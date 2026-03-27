# Erros — AgroClima Inteligente

Registro resumido dos defeitos encontrados (testes + revisão). **Status:** todos corrigidos.

| Área | Problema |
|------|----------|
| **irrigationRule.js** | Lógica invertida: os três limiares (alta / média / baixa) retornavam mensagens trocadas. |
| **weatherService.js** | JSON da Open-Meteo lido em `current.temperature`; o correto é `current_weather.temperature`. |
| **server.js** | Resposta usava `temp` em vez de `temperature`; erro HTTP 200 no `catch`; `listen(3000)` ao importar o módulo (porta/Jest). |
| **script.js (frontend)** | `res.json()` sem `await`; campo `temp` em vez de `temperature`. |

**Testes:** `tests/irrigationRule.test.js`, `weatherService.test.js`, `integration.test.js`.

*Novos erros:* anotar na tabela com data breve e arquivo afetado.
