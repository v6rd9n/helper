function compileHTML() {
    var htmlCode = document.getElementById('htmlInput').value;
    var cssCode = document.getElementById('cssInput').value;
  
    var outputFrame = document.getElementById('outputFrame').contentWindow.document;
  
    outputFrame.open();
    outputFrame.write('<style>' + cssCode + '</style>');
    outputFrame.write(htmlCode);
    outputFrame.close();
}
  