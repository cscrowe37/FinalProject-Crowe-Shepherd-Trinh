# FinalProject-Crowe-Shepherd-Trinh
Final Project for web115 browser based story

## Team Members:
- Colin Crowe
- Dat Trinh - Writes the captain's story path and builds its flowchart branch.
- Alyna Shepherd - Writes the maintenance workers story path and builds its flowchart branch.

## Application Overview
Play as a ghost on a crashing spaceship! Possess passengers on board and try to find a way to stop the ship from crashing!

### How to play
Choose to possess the captain, a passenger, or a maintenance worker. Click the choice buttons to decide what your character does next. Each Character has a different story path, and your choice determines whether you save the ship. Try to find the best path to saving the ship, as there is only one route per person that allows you to save the ship!

## Story Flowchart
***PLACEHOLDER UNFINISHED***
<img width="8192" height="6411" alt="Option Evaluation Decision Tree-2026-11-20-203347" src="https://github.com/user-attachments/assets/464c2353-a7e4-450b-bb91-63a38c46435e" />

flowchart LR
  A[start] --> C(Intro/plane crash)
  C --> B(Choose who to possess)
  B ----> D[Captain]
  B ----> E[Passenger]
  B ----> F[Maintenance Worker]

%% Each of the main branches have been split up below (captain, passenger, maintenance worker)
%% They each have their own naming conventions to make it a bit easier to read/manage
%% Captain uses D[num] ex. D --> D1, D1 --> D2, and so on (D to match where it splits at the top, B --> D)
%% Passenger uses E[num] ex. E --> E1, E1 --> E2, and so on (E to match where it splits at the top, B --> E)
%% Maintenance Worker uses F[num] ex. F --> F1, F1 --> F2, and so on (F to match where it splits at the top, B --> F)

%% This is the maintenance workers branch
  F --> F1(Take stock of body)

  F1 --> F2(Find broken panel)
  F1 --> F3(Go to different room)
  F1 --> F4(Talk to other maintenance worker)

  F2 --> F5{Fix Broken Panel PUZZLE}
  F3 --> F6[See broken lightbulb]
  F4 --> F7(Be told about damages to main control)

  F5 --> F8(Look around)
  F6 --> F9{Fix Broken lightbulb PUZZLE}
  F7 --> F10(Go to main control room)

  F10 --> F11{Fix Main Control PUZZLE}
  F11 --> F12[END - WINNING PATH]
  F8 --> F13[END - LOSING PATH]
  F9 --> F13


%% This is the Passengers branch
  E --> E1(PLACEHOLDER)

  E1 --> E2(PLACEHOLDER)
  E1 --> E3(PLACEHOLDER)
  E1 --> E4(PLACEHOLDER)

  E2 --> E5{PLACEHOLDER}
  E3 --> E6[PLACEHOLDER]
  E4 --> E7(PLACEHOLDER)

  E5 --> E8(PLACEHOLDER)
  E6 --> E9{PLACEHOLDER}
  E7 --> E10(PLACEHOLDER)

  E10 --> E11{PLACEHOLDER}
  E11 --> E12[PLACEHOLDER]
  E8 --> E13[PLACEHOLDER]
  E9 --> E13
  
%% This is the captain's branch
  D --> D1(Wake up on the bridge as the captain)

  D1 --> D2(Try to steer the ship)
  D1 --> D3(Call engineering)
  D1 --> D4(Check the navigation logs)

  D2 --> D5{Manual steering puzzle}
  D3 --> D6[Engineering reports a power failure]
  D4 --> D7(Find a record of the last autopilot update)

  D5 --> D8(The controls respond too slowly)
  D6 --> D9{Backup power puzzle}
  D7 --> D10(Find the emergency override code in the log)

  D10 --> D11{Autopilot override puzzle}
  D11 --> D12[WIN - Regain control and save the ship]
  D8 --> D13[LOSE - The ship crashes]
  D9 --> D13

