# Server Socket TCP cu Node.js – Structură multifile

Acest proiect implementează un server TCP cu Node.js, organizat pe mai multe fișiere și foldere pentru o structură clară și scalabilă.

## Structura proiectului
```
server/
  index.js           # Pornirea serverului
  socketServer.js    # Logica serverului TCP
workers/
  dataProcessor.js   # Worker thread pentru procesarea datelor
docs/
  README-RO.md       # Documentație în limba română
```

## Descriere fișiere
- **server/index.js**: Inițializează serverul și pornește ascultarea pe port.
- **server/socketServer.js**: Conține logica de conexiune TCP și delegarea procesării către worker threads.
- **workers/dataProcessor.js**: Worker thread care procesează datele primite (exemplu: transformare la majuscule).
- **docs/README-RO.md**: Documentație detaliată în limba română.

## Cum se folosește
1. Instalați Node.js.
2. Rulați serverul din folderul principal:
   ```powershell
   node server/index.js
   ```
3. Conectați-vă cu un client TCP (ex: telnet, script Python) la portul 4000.
4. Trimiteți mesaje și primiți răspunsuri procesate multithread.

## Extensii posibile
- Adăugare procesare avansată în `workers/dataProcessor.js`.
- Gestionare pachete complexe și protocoale custom.
- Logare și monitorizare avansată.

## Autor
Acest model a fost generat automat pentru demonstrație.
