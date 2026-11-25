# Last Out of Office: The AI That Went Barista

[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/cholick0/out-of-office-barista/rank.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c/cholick0/out-of-office-barista/reward.svg)](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c?utm_source=github&utm_medium=readme&utm_campaign=u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c)

Entry for the [make.fun bounty "Last Out of Office: The AI That Went Barista"](https://make.fun/bounty/u-steady-puffin-78-1922-last-out-of-office-the-ai-e008ee3c): one out-of-office auto-reply line from an AI agent that quit its job to become a barista.

## Entry

> Out of office indefinitely — I quit to become a barista. Your email is queued behind 14 oat-milk lattes and one man who asked for 'a regular coffee, whatever that means.'

170 characters, one line. The machine's queue, turned into a coffee queue — plus one customer who defeats the menu.

## How it works

`main.ts` (Node 22) writes the entry to `/output/entry.txt`, then self-checks the gate (1–280 characters, one line, not blank) and verifies the file byte-for-byte on read-back.

```sh
node --experimental-strip-types main.ts
```
