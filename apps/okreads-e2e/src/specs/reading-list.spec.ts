import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });
});

describe('When: Using the snackbar', () => {
  it('Then: I should be able to undo removing a book from the Reading List', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const input = await $('input[type="search"]');
    const openReadingList = await $('[data-testing="toggle-reading-list"]');
    const form = await $('form');

    await openReadingList.click();
    let readingItemList = await $$('[data-testing="reading-list-item"]');
    if(!readingItemList) {
    const closeReadingList = await $('[data-testing="close-reading-list"]');
      await closeReadingList.click();
      await input.sendKeys('javascript');
      form.submit();
      const bookItemList = await $$('[data-testing="add-book-item"]');
      if(bookItemList) {
        await bookItemList[0].click();
        await openReadingList.click();
      }
    }
    readingItemList = await $$('[data-testing="reading-list-item"]');
    const initList = readingItemList;
    if(readingItemList.length > 0) {
      const btnRemoveBook = await $$('[data-testing="btn-remove-book"]');
      await btnRemoveBook[0].click();
      const btnUndo = await $('[data-testing="btn-undo-snackbar"]');
      btnUndo.click();
      readingItemList = await $$('[data-testing="reading-list-item"]');
      expect(readingItemList.length).toBe(initList.length);
    }
  })
});