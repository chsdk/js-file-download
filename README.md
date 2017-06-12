# js-file-download
This code shoes the best solution to open download file pop-up in a web page using JavaScript.

If you need to download a file to the client browser with javascript, you just need to call the `downloadFile(filePath)` function with the `filePath` url as an input prameter, it will load the file and download it in the browser.

I shared this code when I was trying to provide [the best solution as **an answer**](https://stackoverflow.com/a/43523297/3669624) to this question on stackoverflow. You can see it working in [this **live DEMO**](https://jsfiddle.net/chsdk/0pvdvssd/).

**Notes:**

- You have to use the `link.download` attribute so the browser doesn't open the file in a new tab and fires the download pop-up.
- This was tested with several file extensions (docx, xlsx, png, pdf, ...) and works in almost all browsers Chrome, Firefox,, Opera, IE and Safari.
