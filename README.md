# Server Socket TCP cu Node.js și Multithreading

Acest proiect implementează un server TCP folosind Node.js, care procesează cererile clienților în mod multithread (folosind worker threads) și răspunde la pachete.

## Cum funcționează
- Serverul ascultă pe un port TCP (implicit 4000).
- La fiecare pachet primit de la client, datele sunt procesate într-un worker thread separat.
- Rezultatul procesării este trimis înapoi clientului ca răspuns.

## Avantaje
- Procesarea multithread permite manipularea datelor intensive fără a bloca thread-ul principal.
- Scalabilitate crescută pentru mai mulți clienți simultan.

## Exemplu de utilizare
1. Porniți serverul:
   ```powershell
   node server/index.js
   ```
2. Conectați-vă cu un client TCP (de exemplu, folosind `telnet` sau un script Python):
   ```powershell
   telnet localhost 4000
   ```
3. Trimiteți un mesaj. Serverul va răspunde cu mesajul procesat (transformare la majuscule).

## Structura codului
- `server/index.js`: Codul sursă al serverului.
- Folosește modulul `net` pentru conexiuni TCP și `worker_threads` pentru multithreading.

## Extensii posibile
- Procesare personalizată a datelor (criptare, parsare JSON etc).
- Logare avansată și gestionare erori.
- Suport pentru mai multe tipuri de pachete.

## Autor
Acest model a fost generat automat pentru demonstrație.
