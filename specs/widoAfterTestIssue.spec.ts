describe('WIDO afterTest Issue Example', () => {
  it('should fail to trigger afterTest hook', async () => {
    await browser.url('');
    const searchInput = await browser.$('input[name="q"]');
    await expect(
      (await (await searchInput).isDisplayed()) === false
    ).toBeTruthy();
  });
});
