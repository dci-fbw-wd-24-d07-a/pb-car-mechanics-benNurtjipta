# Die Autowerkstatt

Du sollst ein Suchprogramm schreiben für eine Autowerkstatt. Der Mechaniker kann einen Suchbegriff eingeben und bekommt passende Teile angezeigt. Bei der Anzeige wird unterschieden ob Teile vorhanden oder nicht auf Lager sind.

Arbeite am Anfang ohne Readline-Sync! Speichere den Suchbegirff fest in einer Variable ein.

Brands: Ford, VW, Porsche
parts: Keilriemen, Bremsklötze
ids: Ford-Keilriemen, VW-Keilriemen, Porsche-Keilriemen, Ford-Bremsklötze, VM-Bremsklötze, Porsche-Bremsklötze
amount: 3, 5, 1, 4, 8, 0

- Welche Daten sind Wichtig?
- Welchen Weg würdest du nehmen?

## Aufgaben

1. Überprüfe mit dem Suchbegriff `Fiat`, ob die Brand in der Werkstatt überhaupt angenommen werden kann.
   Output: Sorry wir nehmen keine ${search} an! und brich das Programm ab.
2. Überprüfe welche Teile es von `Ford` gibt und gebe sie aus.
   Output: 1. Ford-Keilriemen 3 2. Ford-Bremsklötze 4
3. Überprüfe ob das ebenfalls mit VW und Porsche Funktionier
4. Wenn ein Ersatzteil nicht vorhanden ist (z.B. bei Porsche die Bremsklötze) gebe dies wie folgt aus:
   Output: 1. Porsche-Keilriemen 1
   Nicht auf Lager: 1. Porsche-Bremsklötze 0

Du hast soeben einen sogenannten Filter gebaut. Du filterst über deine Daten und suchst die passenden Daten raus. Außerdem erstellste du Abhäönhingigkeiten zwischen der Anzahl der gelagerten Teile und dem Suchbegriff. Sehr gut!
