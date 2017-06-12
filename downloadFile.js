/*
* This JS function takes the path of the file to download as parameter
* and downloads it to the client browser
*/
function downloadFile(filePath){
    var link=document.createElement('a');
    link.href = filePath;
    link.download = filePath.substr(filePath.lastIndexOf('/') + 1);
    link.click();
}
