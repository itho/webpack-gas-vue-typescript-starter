/**
 * Adds random data to an example spreadsheet.
 */
global.addDataToSheet = () => {
  const sheetsId = '1K7UTKAre2wo-ynsQSxTSgsEVQrIHBHhxITsuglDhtcw';
  const sheetName = 'gcs-created-resolved';

  const sheets = SpreadsheetApp.openById(sheetsId);
  const sheet = sheets.getSheetByName(sheetName);

  for (let i = 0; i < 10; i++) {
    sheet.appendRow([
      Utilities.formatDate(
        new Date(new Date().setDate(new Date().getDate() - (i * 7))),
        'UTC',
        `yyyy-MM-dd'T'HH:mm:ss'Z'`,
      ),
      Math.round(Math.random() * 20),
      Math.round(Math.random() * 20),
    ]);
  }

  return true;
}
