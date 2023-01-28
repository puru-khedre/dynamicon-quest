# quest-template

## Quest Details

#### title: DynamIcon Smith

#### level: beginner

#### skills: database, backend, communication

#### dependencies: docker_localsetup

## Overview

In this quest, we will implement the ability to dynamically generate user avatars. The user's main responsibility is to produce an image, either using information provided by the user or totally random, convert it to a data URL, and then put the data URL in the database.

## Outline

Describe each step in the quest.

- Step 1 [intro_dynamicon_smith]:
- Step 2 [create_utils_dir_dynamicon_smith]:
- Step 3 [create_utility_function_dynamicon_smith]:
- Step 4 [send_set_user_avatar_in_db_dynamicon_smith]:

## Textbook solution

For each step, describe all actions the user needs to perform to complete the step, including links to PRs as they would need to be written to pass checks.
Before submitting your quest for review, test your quest in snack and check the instructions you wrote. Make sure that by following these instructions, you are able to successfully complete the quest.

### Instructions for completing the quest:

#### Step 1 [intro_dynamicon_smith]:

- Learning Objective: for little bit of communication
- Narrative: lucca greets player, and introduced about the feature to implement
- Instructions:
- How do users pass to the next step: just send done message to lucca
- Hints:

#### Step 2 [create_utils_dir_dynamicon_smith]:

- Learning Objective: learning about canvas API
- Narrative: Team manager A gives overview about how we are going implement this new feature
- Instructions: read more about canvas
- How do users pass to the next step: just send done message to lucca
- Hints:

#### Step 3 [create_utility_function_dynamicon_smith]:

- Learning Objective: how can we convert canvas into dataURL, what is base64.
- Narrative:
- Instructions:
  - Make a utils folder inside `backend/`
  - name of the file is **getUserAvatar.js**.
  - Open a PR
- How do users pass to the next step: user have to open PR, ([PR link](https://github.com/ObelusFamily/Anythink-Market-knf8a/pull/47))
- Hints:
  - you can create image by using canvas
  - "you can user this [canvas](https://yarnpkg.com/package/canvas) liabrary, this includes a canvas implementation for **Node.js**"

#### Step 3 [create_utility_function_dynamicon_smith]:

- Learning Objective: storing image url in database.
- Instructions:
  - change the sign up POST request handler method
  - Store this **dataURL** in the database
  - Open a PR
- How do users pass to the next step: user have to open PR, ([link](https://github.com/ObelusFamily/Anythink-Market-knf8a/pull/49))
- Hints:
  - storing image url in database.
