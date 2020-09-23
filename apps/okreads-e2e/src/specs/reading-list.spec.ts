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

  it('Then: I should be able to mark a book as finished', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();
    const bookList = await $$('[data-testing="btn-add-book"]:enabled');

    if(bookList.length > 0) {
      await bookList[0].click();
      const btnOpenList = await $('[data-testing="toggle-reading-list"]');
      await btnOpenList.click();
      const listItems = await $$('[data-testing="reading-list-item"]');
      if(listItems.length > 0) {
        const btnFinishList = await $$('[data-testing="btn-finish-book"]')
        const btnFinish = btnFinishList[listItems.length - 1];
        btnFinish.click();
        btnFinish.getText()
        .then(text => expect(text).toBe('Reset Book'));
      } else {
        throw new Error("Reading list is empty");
      }
    }
  });

  it('Then: I should be able to reset a book as unfinished', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();
    const bookList = await $$('[data-testing="btn-add-book"]:enabled');

    if(bookList.length > 0) {
      await bookList[0].click();
      const btnOpenList = await $('[data-testing="toggle-reading-list"]');
      await btnOpenList.click();
      const listItems = await $$('[data-testing="reading-list-item"]');
      if(listItems.length > 0) {
        const btnFinishList = await $$('[data-testing="btn-finish-book"]')
        const btnFinish = btnFinishList[listItems.length - 1];
        btnFinish.click();
        if(btnFinish.getText() === 'Reset Book'){
          btnFinish.click();
          btnFinish.getText()
          .then(text => expect(text).toBe('Finish Book'));
        } else {
          throw new Error("Item's state didn't change");
        }
      } else {
        throw new Error("Reading list is empty");
      }
    }
  });
});
