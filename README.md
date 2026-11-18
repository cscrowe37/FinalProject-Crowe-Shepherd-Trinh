# FinalProject-Crowe-Shepherd-Trinh
Final Project for web115 browser based story

<<<<<<< HEAD
## Team Members and Roles
- Colin Crowe: [Character path and responsibilities]
- Alyna Shepherd: [Character path and responsibilities]
- Jackson Trinh: [Character path and responsibilities]

We will each work on each character path's and all work together for the beginning of the story

Shared tasks:
- Page layout and styling: [Name]
- Combining the story paths: [Name]
- Testing and reviewing code: [Name]

## Story Overview

Our story takes place on a crashing spaceship. The player is
a ghost who can possess the captain, a maintenance worker,
or a passenger. Each character has a different path, and
the player’s choices affect how the story ends.
=======
## Team Members:
- Colin Crowe
- Dat Trinh
- Alyna Shepherd

## Application Overview
Play as a ghost on a crashing spaceship! Possess passengers on board and try to find a way to stop the ship from crashing!

## Story Flowchart
***PLACEHOLDER UNFINISHED***
<img width="8192" height="5951" alt="image" src="https://github.com/user-attachments/assets/e8f82573-9530-4c42-ac7c-e98b2de7032f" />
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

%% This is the Captains branch
  D --> D1(PLACEHOLDER)

  D1 --> D2(PLACEHOLDER)
  D1 --> D3(PLACEHOLDER)
  D1 --> D4(PLACEHOLDER)

  D2 --> D5{PLACEHOLDER}
  D3 --> D6[PLACEHOLDER]
  D4 --> D7(PLACEHOLDER)

  D5 --> D8(PLACEHOLDER)
  D6 --> D9{PLACEHOLDER}
  D7 --> D10(PLACEHOLDER)

  D10 --> D11{PLACEHOLDER}
  D11 --> D12[PLACEHOLDER]
  D8 --> D13[PLACEHOLDER]
  D9 --> D13

>>>>>>> a42bf5716cdcd35c556e74d9d3894f17e2e615bc
