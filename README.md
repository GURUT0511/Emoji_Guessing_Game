# Emoji Guessing Game

A playful, lightweight emoji puzzle game where players guess words, phrases, or emotions represented by one or more emojis.

Table of contents
- About
- Game modes (featured)
  - Real-time Emotion
  - Story Sequence
  - Two-Emoji Combo
- Examples
- Data format (puzzles.json template)
- Installation & running
- How to play
- Contributing
- License

About

This repository contains the core content and scaffolding for an Emoji Guessing Game. Puzzles are short emoji sequences that map to an expected answer (a word, phrase, or emotional state). The game can be used for teaching, party games, chat bots, or small interactive web experiences.

Game modes (featured)

1) Real-time Emotion (featured)

Description
In this mode, the emoji sequence represents an emotional reaction or state you'd see in real time — a concise emotional snapshot. Players guess the emotion, feeling, or reaction.

How it differs
- Focuses on feelings and reactions rather than literal objects or stories.
- Good for social or classroom play and for teaching emotional vocabulary.

Examples
- 😀😳  -> awkwardly happy / embarrassed happiness
- 😭➡️😅 -> from crying to laughing (emotional turnaround)
- 😠🔥 -> furious / very angry
- 😶‍🌫️😕 -> confused / foggy-headed

2) Story Sequence

Description
A short sequence of emojis tells a tiny story, proverb, or well-known phrase. Players interpret the story and guess the phrase or sentence.

Examples
- 🐛➡️🦋 -> transformation / metamorphosis / "butterfly"
- 🐢🏁 -> "slow and steady wins the race"
- 🧑‍🚀🌕 -> moon landing / astronaut on the moon
- 👩‍🌾🍅➡️🍲 -> farm to table / homegrown meal

3) Two-Emoji Combo

Description
Compact and challenging: two emojis combine to convey a single concept, short phrase, or word. Great for quick rounds and tie-breakers.

Examples
- 🔒📱 -> phone security / privacy
- 🍎📚 -> school / education
- ☕️💤 -> tired / need coffee

Data format (puzzles.json template)

Store puzzles in JSON with mode and puzzle entries. Example structure:

```json
{
  "mode": "real_time_emotion",
  "puzzles": [
    { "emoji": "😀😳", "answer": "awkwardly happy" },
    { "emoji": "😭➡️😅", "answer": "from crying to laughing" }
  ]
}
```

You can create separate files per mode (real_time_emotion.json, story_sequence.json) or keep them together in a single puzzles.json.

Installation & running

These are generic instructions — adapt them to the actual project stack in this repository (static HTML, Node.js, or Python backend).

Static web (index.html present)
- Open `index.html` in a browser, or serve the directory with a static server:
  - Python 3: `python -m http.server 8000`
  - Node.js: `npx http-server . -p 8000`
- Visit `http://localhost:8000`.

Node.js (package.json present)
- Install: `npm install`
- Start: `npm start` or `npm run dev`

Python/Flask (app.py/requirements.txt present)
- Create venv: `python -m venv .venv && source .venv/bin/activate`
- Install: `pip install -r requirements.txt`
- Run: `python app.py`

How to play (typical flow)
1. Start the app and choose a game mode.
2. The app displays an emoji sequence as the puzzle.
3. Type your guess and submit.
4. The app verifies your answer and shows correct/incorrect and optionally a small explanation or the canonical answer.

Scoring & options (ideas)
- Timed rounds with countdown
- Points per correct answer, bonus for speed
- Hints: reveal one emoji's meaning or the word length

Customizing puzzles
- Add new puzzles to puzzles.json using the template above.
- To add a mode, implement a new processing function in the code and link it to the UI mode selector.

Contributing
Contributions welcome — please follow a normal Git workflow:
1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit changes and push
4. Open a Pull Request with a clear description

If you want, I can also:
- Inspect the repository to provide exact install/run commands (I can detect package.json, index.html, or other files),
- Add a sample puzzles.json and commit it for you,
- Implement a simple static web UI for this game and open a PR.

Tell me which of these you'd like me to do next and I'll proceed.

License

This project is provided under the MIT License. Replace with your preferred license if needed.
