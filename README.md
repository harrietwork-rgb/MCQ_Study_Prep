# Multiple Choice Study Prep

Anki-style multiple choice study app: FSRS-style spaced repetition, tags, images, timed exams, and a Data tab (stability, difficulty, retrievability, retention, hourly breakdown, activity calendar). Everything is saved on your computer.

## Run it on Windows
1. Install Node.js (LTS) from https://nodejs.org
2. Double-click `start.bat` (first run installs Electron, which takes a minute).

## Make a standalone app (.exe)
1. Open a terminal in this folder (type `cmd` in the folder's address bar).
2. Run `npm install` (once), then `npm run package`.
3. Open `dist\MCQStudyPrep-win32-x64\MCQStudyPrep.exe`. Right-click it to pin to the taskbar or Start.

## Just use a browser instead
Double-click `index.html`. Progress is then stored in that browser.

## Backing up
Add / import tab → "Copy backup" copies all your data as text. Paste it into a text file and keep it somewhere safe.
