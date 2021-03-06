// This code is optimized for IS&T sites other than PEM sites
// DEVELOPERS: be sure to update the property ID on line 29 with the appropriate appropriate Production Property Id

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', myEnvironment(), 'auto');
//No additional Dimensions are required for IS&T sites
ga('send', 'pageview');

// the following function identifies the environment(QA,QC, PROD) and returns the appropriate ID code
// Domains not preceeded by qa. or qc. are assumed to be production
function myEnvironment() {
    var environmentString = location.hostname;

    if (environmentString.indexOf('qa.') > -1 || environmentString.indexOf('qc.') > -1 || environmentString.indexOf('localhost') > -1 || environmentString.indexOf('127.0.0.1') > -1) {
        return 'UA-51404617-1';
    } else  {
        return 'UA-31873580-61'; // Replace as appropriate with Production Property Id
    }
}