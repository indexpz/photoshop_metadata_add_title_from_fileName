//Copyright (c) 2022 Paweł Zieliński www.indexpz.pl
try {
    var doc = app.activeDocument;
    var fileName = doc.name;
    var metaData = doc.info;

   metaData.title = getFileNameOnly(fileName);

    function getFileNameOnly(myFileName) {
        var myString = "";
        var myResult = myFileName.lastIndexOf(".");
        if (myResult === -1) {
            myString = myFileName;
        } else {
            myString = myFileName.substring(0, myResult);
        }
        return myString;
    }

} catch (exception) {
    alert(exception)
}