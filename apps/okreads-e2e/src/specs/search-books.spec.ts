import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: Use the search feature', () => {
  it('Then: I should be able to search books by title', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
  });

  xit('Then: I should see search results as I am typing', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
  });
});

describe('When: Using the snackbar', () => {
  it('Then: I should be able to undo adding a book to the Reading List', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const bookItemList = await $$('[data-testing="btn-add-book"]:enabled');
    if(bookItemList.length > 0) {
        const initList = await $$('[data-testing="reading-list-item"]');
        bookItemList[0].click();
        const btnUndo = await $('[data-testing="btn-undo-snackbar"]');
        btnUndo.click();
        const finalList = await $$('[data-testing="reading-list-item"]');
        expect(finalList.length).toBe(initList.length);
    } else {
      throw new Error('The list is empty');
    }
  })
});