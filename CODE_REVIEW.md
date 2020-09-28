# Code Review

## My Review Items

1. The models file in **libs/shared/models** can be changed, leaving the "models" forlder, but spliting the model.ts creating a file for each model and its children models, naming the file as the father model, for a better present and future management.

2. The **libs/books/data-access/src/lib/+state** folder can be split into multiple folders, leaving the *state* as the father folder, and having child folders for *books* and *reading-list*, as the way it is right now, complicates searching for an specific file. The change should also allow the growth of the app without creating a mess in the folder, as more states would mean more files mixed in the same place.

3. On **libs/books/feature/src/lib/book-search** I think the *formatDate(date: void | string)* method shoul be taken out and replaced for a pipe on the shared lib folder.

4. On **lib/book-search/book-search.component.html** the variable naming is kind of ambiguous leaving just as b, should be changed for something more descriptive.

5. Same issue as point 4, for files on the *reading-list* selector (**+state/reading-list/reading-list.selectors.ts**) and component's HTML (**lib/reading-list/reading-list.component.html**)


## Accessibility Issues

1. Buttons do not have an accessible name. The *search* input field doesn't have an *aria-label* text.

2. Background and foreground colors do not have a sufficient contrast ratio.

3. The books have no *alt* text for the images.

4. The *Want to Read* button doesn't have an *aria-label* that indicates wich book the user is adding.

5. The *search* button doesn't have an *aria-label* text.

6. The *Reading List* button doesn't have an *aria-label*.

7. The button for closing the *Reading List* doesn't have an *aria-label*.