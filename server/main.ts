declare var global: any;

global.doGet = (e: WebApp.HttpRequest) => {
  const htmlTemplate: any = HtmlService.createTemplateFromFile('index')
  htmlTemplate.data = {
    prop: JSON.stringify({
      number: 1,
      string: "abc",
      array: [1, 2, 3],
      obj: {
        id: 1,
        name: "test"
      }
    })
  };

  return htmlTemplate.evaluate();
}

global.doPost = (e: WebApp.HttpRequest) => {
  global.addDataToSheet();  
  return HtmlService.createHtmlOutput("success");
}
