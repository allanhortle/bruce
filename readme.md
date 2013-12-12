Tunic
=====

A utility base for Sass. Nothing Schmancy.

Importing
---------

Tunic is just a bunch of Sass helpers. To use it just import as you like, before your real sass. 

    @import 
    	"tunic/tunic",
    	"tunic/tunic-layout"
    ;
	
	@import
    	"myActuallySass",
    	"otherSass",
    	"moreSass",
    	"embarrassingSass"
    ;

Varaible Overrides
------------------

All unit values in Tunic are based off variables. There is not stupid long list of already defined variables.
If you dont like something, just define it before your tunic imports.

    $tunic-pageWidth:	1024px		// Width of wrapper classes
    $tunic-unit:		16px		// Default unit of scale.