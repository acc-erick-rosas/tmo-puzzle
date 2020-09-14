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

  it('Then: I should see search results as I am typing', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
    const input = await $('input[type="search"]');
    await input.sendKeys('javas');
    await browser.sleep(600);

    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
  });
});

describe('When: Using the snackbar', () => {
  it('Then: I should be able to undo adding a book to the Reading List', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const input = await $('input[type="search"]');
    const btnUndo = await $('[data-testing="btn-undo-snackbar"]');
    await input.sendKeys('javascript');
    await browser.sleep(600);

    const bookItemList = await $$('[data-testing="btn-add-book"]:enabled');
    if(bookItemList) {
      const initList = await $$('[data-testing="reading-list-item"]');
        bookItemList[0].click();
        await browser.sleep(600);
        btnUndo.click();
        await browser.sleep(600);
        const finalList = await $$('[data-testing="reading-list-item"]');
        expect(finalList.length).toBe(initList.length);
    }
  })
});
