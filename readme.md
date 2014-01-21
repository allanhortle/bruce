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

Variable Overrides
------------------

All unit values in Tunic are based off variables. There is not stupid long list of already defined variables.
If you dont like something, just define it before your tunic imports.

    $tunic-pageWidth:	1024px		// Width of wrapper classes
    $tunic-unit:		16px		// Default unit of scale.


Dev Usage
---------

For those that would like to have their own control of the repo, there is a grunt task that will copy a compiled version of Tunic
into the required folders. Create a file called `config.json` in the root directory.
Then fill up an array called `copyDirs` with the paths you would like. Now a quick `grunt` from the Tunic directory will copy compiled versions of Tunic
all over the place.


```
{
    "copyDirs":[
        "../path/top/copy/to",
        "../other/path",
        "../../even/more/path"
    ]
}
```

Because of the limitations of Grunt you will have to make the paths relative to `Gruntfile.js`.
