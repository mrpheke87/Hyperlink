function doGet(e) {
  
  return HtmlService.createTemplateFromFile("index").evaluate()
  .setTitle("WebApp: Search By Password")
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}


/* PROCESS FORM */
function processForm(formObject){ 
  var concat = formObject.searchtext+formObject.searchtext2;
  var result = "";
  if(concat){//Execute if form passes search text
      result = search(concat);
  }
  return result;
}

//SEARCH FOR MATCHED CONTENTS ;
function search(searchtext){
  var spreadsheetId   = '#####'; //** CHANGE !!!!
  var sheetName = "####"
  var range = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange();
  var data = range.getValues();
  var ar = [];
  
  data.forEach(function(f) {
    if (~[f[8]].indexOf(searchtext)) {
      ar.push([f[2],f[3],f[4],f[5],'<a target="_blank"  href='  + f[6] + '>' + f[7] + '</a>']);
    }
  });
                                           
  return ar;
};