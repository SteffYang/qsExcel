<h3>qsExcel Angular Directive</h3>
<h4>Introduction</h4>

This Angular JS directive can export angular array data into Excel files in xlsx format.

<h4>Installation</h4>

This Angular JS directive is based on [AlaSQL](https://github.com/agershun/alasql) and [xlsx.js](https://github.com/SheetJS/js-xlsx), so please include this two plugins before your custom javascript:
	
	<script src="http://cdn.jsdelivr.net/alasql/0.2/alasql.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.full.min.js"></script>
	
(You can include the script using other CDN services.)

To use the directive, simply download the script and include it before your custom javascript.

<h4>Usage</h4>

In your anngular javascript file, include the directive as:

	var app = angular.module('myApp', ['qsearch.trend.export.excel']);


Then you can bind it with a button(or something else) in your HTML code in the following format:

	<button excel-directive="items">Export</button>
	
(``items`` is the angular array data that you want to export as an Excel file.)

There is also a simple sample in the github as ``index.html`` and ``app.js``, you can take a look for further usage.

<h4>Liscence</h4>
