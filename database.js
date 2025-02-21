const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(
  "./maBaseDeDonnees.sqlite",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connecté à la base de données SQLite.");
      db.run(
        `CREATE TABLE IF NOT EXISTS personnes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nom TEXT NOT NULL,
          adresse TEXT
        )`,
        (err) => {
          if (err) {
            console.error(err.message);
          } else {
            const personnes = [
              { nom: "Bob", adresse: "123" },
              { nom: "Alice", adresse: "456" },
              { nom: "Charlie", adresse: "789" },
            ];
            personnes.forEach(({ nom, adresse }) => {
              db.run(
                `INSERT INTO personnes (nom, adresse) VALUES (?, ?)`,
                [nom, adresse],
                (err) => {
                  if (err) {
                    console.error(err.message);
                  }
                }
              );
            });
          }
        }
      );
    }
  }
);

module.exports = db;
