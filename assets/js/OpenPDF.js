$(document).ready(function() {
    $("#openPdfButton").click(function() {
        
        var pdfPath = "assets/DOC-20231012-WA0039..pdf";
        // Open the PDF in a new tab
        window.open(pdfPath, '_blank');
    });
});
