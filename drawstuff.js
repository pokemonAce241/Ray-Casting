/* classes */ 

// Color constructor
class Color {
    constructor(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end try
        
        catch (e) {
            console.log(e);
        }
    } // end Color constructor

        // Color change method
    change(r,g,b,a) {
        try {
            if ((typeof(r) !== "number") || (typeof(g) !== "number") || (typeof(b) !== "number") || (typeof(a) !== "number"))
                throw "color component not a number";
            else if ((r<0) || (g<0) || (b<0) || (a<0)) 
                throw "color component less than 0";
            else if ((r>255) || (g>255) || (b>255) || (a>255)) 
                throw "color component bigger than 255";
            else {
                this.r = r; this.g = g; this.b = b; this.a = a; 
            }
        } // end throw
        
        catch (e) {
            console.log(e);
        }
    } // end Color change method
} // end color class


// Vector class, base code from exercise 3
class Vector { 
    constructor(x=0,y=0,z=0) {
        this.set(x,y,z);
    } // end constructor
    
    // sets the components of a vector
    set(x,y,z) {
        try {
            if ((typeof(x) !== "number") || (typeof(y) !== "number") || (typeof(z) !== "number"))
                throw "vector component not a number";
            else
                this.x = x; this.y = y; this.z = z; 
        } // end try
        
        catch(e) {
            console.log(e);
        }
    } // end vector set
    
    // copy the passed vector into this one
    copy(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.copy: non-vector parameter";
            else
                this.x = v.x; this.y = v.y; this.z = v.z;
        } // end try
        
        catch(e) {
            console.log(e);
        }
    }
    
    toConsole(prefix) {
        console.log(prefix+"["+this.x+","+this.y+","+this.z+"]");
    } // end to console
    
    // static dot method
    static dot(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.dot: non-vector parameter";
            else
                return(v1.x*v2.x + v1.y*v2.y + v1.z*v2.z);
        } // end try
        
        catch(e) {
            console.log(e);
            return(NaN);
        }
    } // end dot static method
    
    // static add method
    static add(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(v1.x+v2.x,v1.y+v2.y,v1.z+v2.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end add static method
    
    
    // static divide method
    static divide(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.add: non-vector parameter";
            else
                return(new Vector(Math.round(v1.x/v2.x),Math.round(v1.y/v2.y),Math.round(v1.z/v2.z)));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end  static method
    

    // static subtract method, v1-v2
    static subtract(v1,v2) {
        try {
            if (!(v1 instanceof Vector) || !(v2 instanceof Vector))
                throw "Vector.subtract: non-vector parameter";
            else {
                var v = new Vector(v1.x-v2.x,v1.y-v2.y,v1.z-v2.z);
                //v.toConsole("Vector.subtract: ");
                return(v);
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end subtract static method

    // static scale method
    static scale(c,v) {
        try {
            if (!(typeof(c) === "number") || !(v instanceof Vector))
                throw "Vector.scale: malformed parameter";
            else
                return(new Vector(c*v.x,c*v.y,c*v.z));
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
    // static normalize method
    static normalize(v) {
        try {
            if (!(v instanceof Vector))
                throw "Vector.normalize: parameter not a vector";
            else {
                var lenDenom = 1/Math.sqrt(Vector.dot(v,v));
                return(Vector.scale(lenDenom,v));
            }
        } // end try
        
        catch(e) {
            console.log(e);
            return(new Vector(NaN,NaN,NaN));
        }
    } // end scale static method
    
} // end Vector class


/* utility functions */

// returns the  upper value from the quadratic formula
function positiveQuadratic(a,b,c) {
 
    return(1/(2*a)) * (-b + (Math.sqrt((Math.pow(b,2)) - (4*a*c))));
 
}

// returns the  lower value from the quadratic formula
function negativeQuadratic(a,b,c) {
 return(1/(2*a)) * (-b - (Math.sqrt((Math.pow(b,2)) - (4*a*c))));
}

//returns the discriminant
function discriminant(a,b,c) {
 return((Math.pow(b,2))-(4*a*c));

}

// draw a pixel at x,y using color
function drawPixel(imagedata,x,y,color) {
    try {
        if ((typeof(x) !== "number") || (typeof(y) !== "number"))
            throw "drawpixel location not a number";
        else if ((x<0) || (y<0) || (x>=imagedata.width) || (y>=imagedata.height))
            throw "drawpixel location outside of image";
        else if (color instanceof Color) {
            var pixelindex = (y*imagedata.width + x) * 4;
            imagedata.data[pixelindex] = color.r;
            imagedata.data[pixelindex+1] = color.g;
            imagedata.data[pixelindex+2] = color.b;
            imagedata.data[pixelindex+3] = color.a;
        } else 
            throw "drawpixel color is not a Color";
    } // end try
    
    catch(e) {
        console.log(e);
    }
} // end drawPixel
    

// get the input ellipsoids from the standard class URL
function getInputEllipsoids() {
    const INPUT_ELLIPSOIDS_URL = 
        "https://ncsucgclass.github.io/prog1/ellipsoids.json";
        
    // load the ellipsoids file
    var httpReq = new XMLHttpRequest(); // a new http request
    httpReq.open("GET",INPUT_ELLIPSOIDS_URL,false); // init the request
    httpReq.send(null); // send the request
    var startTime = Date.now();
    while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
        if ((Date.now()-startTime) > 3000)
            break;
    } // until its loaded or we time out after three seconds
    if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE)) {
        console.log*("Unable to open input ellipses file!");
        return String.null;
    } else
        return JSON.parse(httpReq.response); 
} // end get input ellipsoids

// put random points in the ellipsoids from the class github
function drawRandPixelsInInputEllipsoids(context) {
    var inputEllipsoids = getInputEllipsoids();
    var w = context.canvas.width;
    var h = context.canvas.height;
    
    var imagedata = context.createImageData(w,h);
    const PIXEL_DENSITY = 0.05;
    var numCanvasPixels = (w*h)*PIXEL_DENSITY;
    var LL = new Vector(0,1,0);
    var UL = new Vector(0,0,0);
    var UR = new Vector(1,0,0);
    var LR = new Vector(1,1,0);
    
    if (inputEllipsoids != String.null) { 
        var x = 0; var y = 0; var z = 0; // pixel coord init
        var cx = 0; var cy = 0; var cz = 0; // init center x,y, and z coord
        var ellipsoidXRadius = 0; // init ellipsoid x radius
        var ellipsoidYRadius = 0; // init ellipsoid y radius
        var ellipsoidZRadius = 0; // init ellipsoid z radius
	
        var c = new Color(0,0,0,0); // init the ellipsoid color
        var n = inputEllipsoids.length; // the number of input ellipsoids
        var eye = new Vector(0.5,0.5,-0.5); //eye location
        var lightPos = new Vector(-1,3,-0.5); //light location
        var lightCol = new Vector(1,1,1); //light color
        //console.log("number of ellipses: " + n);

        // Loop over the ellipsoids, draw rand pixels in each
        for (var e=0; e<1; e++) {
            cx = inputEllipsoids[e].x; // ellipsoid center x
            cy = inputEllipsoids[e].y; // ellipsoid center y
            cz = inputEllipsoids[e].z;// ellipsoid center z
            ellipsoidXRadius = inputEllipsoids[e].a;  // x radius
            ellipsoidYRadius = inputEllipsoids[e].b;  // y radius
            ellipsoidZRadius = inputEllipsoids[e].c; //z radius
		    
            var center = new Vector(cx,cy,cz);
            var radius = new Vector(ellipsoidXRadius,ellipsoidYRadius,ellipsoidZRadius);
           
            c.change(
                inputEllipsoids[e].diffuse[0]*255,
                inputEllipsoids[e].diffuse[1]*255,
                inputEllipsoids[e].diffuse[2]*255,
                255); // ellipsoid diffuse color
            for (var y=0; y<h; y++) {
                for(var x=0;x<w;x++){
                   
			var t = x/w; 
			var s = y/h;
				   var PLZ = UL.z +(s*(LL.z-UL.z));
				   var PRZ = UR.z + (s*(LR.z-UR.z));
				   var Pz = PLZ + (t*(PRZ-PLZ));
				   
				   var PLX = UL.x +(s*(LL.x-UL.x));
				   var PRX = UR.x + (s*(LR.x-UR.x));
				   var Px = PLX + (t*(PRX-PLX));
				   
				   var PLY = UL.y +(s*(LL.y-UL.y));
				   var PRY = UR.y + (s*(LR.y-UR.y));
				   var Py = PLY + (t*(PRY-PLY));
				   
				   var pixel = new Vector(Px,Py,Pz);
				   
				   var D = new Vector();
				   D = Vector.subtract(pixel,eye);
				   //D = Vector.normalize(D);
				   var DdivA = new Vector();
				   DdivA = Vector.divide(D,radius);
				   //DdivA = Vector.normalize(DdivA);
				   var EminC = Vector.subtract(eye,center);
				   //EminC = Vector.normalize(EminC);
                   		   var EminCdivA = Vector.divide(EminC,radius);
				   //EminCdivA = Vector.normalize(EminCdivA);
				   var A = Vector.dot(DdivA,DdivA);
				   var B = Vector.dot(DdivA,EminCdivA);
				   var B = B*2
				   var C = Vector.dot(EminCdivA,EminCdivA);
				   var C = C-1;
				   
				   var div = discriminant(A,B,C);	   
				   if(div >=0)
				   {
					var t1 = positiveQuadratic(A,B,C);
					var t2 = negativeQuadratic(A,B,C);
					var closeT = 0;
					if(t1 < t2){
						closeT = t1;
						if(closeT < 1)
							closeT = t2;
					}
					else{
						closeT = t2;
						if(closeT <1)
							closeT = t1;
					}
						var intercept = new Vector;
						intercept = Vector.scale(closeT,D);
						intercept = Vector.add(eye,intercept);
					   var xIn = Math.round(x/intercept.x);
					   var yIn = Math.round(y/intercept.y);
				   	drawPixel(imagedata,Math.round(xIn),Math.round(yIn),c);
					}
			           
                }
                } // end for pixels in ellipsoid
        } // end for ellipsoids
        context.putImageData(imagedata, 0, 0);
    } // end if ellipsoids found
} // end draw rand pixels in input ellipsoids


// draw 2d projections read from the JSON file at class github
function drawInputEllipsoidsUsingArcs(context) {
    var inputEllipsoids = getInputEllipsoids();
    
    
    if (inputEllipsoids != String.null) { 
        var c = new Color(0,0,0,0); // the color at the pixel: black
        var w = context.canvas.width;
        var h = context.canvas.height;
        var n = inputEllipsoids.length; 
        
        //console.log("number of ellipsoids: " + n);

        // Loop over the ellipsoids, draw each in 2d
        for (var e=0; e<n; e++) {
            context.fillStyle = 
                "rgb(" + Math.floor(inputEllipsoids[e].diffuse[0]*255)
                +","+ Math.floor(inputEllipsoids[e].diffuse[1]*255)
                +","+ Math.floor(inputEllipsoids[e].diffuse[2]*255) +")"; // diffuse color
            context.save(); // remember previous (non-) scale
            context.translate(w*inputEllipsoids[e].x,h*inputEllipsoids[e].y); // translate ellipsoid to ctr
            context.scale(1, inputEllipsoids[e].b/inputEllipsoids[e].a); // scale by ellipsoid ratio 
            context.beginPath();
            context.arc(0,0,Math.round(w*inputEllipsoids[e].a),0,2*Math.PI);
            context.restore(); // undo scale before fill so stroke width unscaled
            context.fill();
            //console.log(context.fillStyle);
            //console.log("x: "+Math.round(w*inputEllipsoids[e].x));
            //console.log("y: "+Math.round(h*inputEllipsoids[e].y));
            //console.log("a: "+Math.round(w*inputEllipsoids[e].a));
            //console.log("b: "+Math.round(h*inputEllipsoids[e].b));
        } // end for ellipsoids
    } // end if ellipsoids found
} // end draw input ellipsoids


/* main -- here is where execution begins after window load */

function main() {

    // Get the canvas and context
    var canvas = document.getElementById("viewport"); 
    var context = canvas.getContext("2d");
 
    // Create the image
    //drawRandPixels(context);
      // shows how to draw pixels
    
    drawRandPixelsInInputEllipsoids(context);
      // shows how to draw pixels and read input file
      
    //drawInputEllipsoidsUsingArcs(context);
      // shows how to read input file, but not how to draw pixels
}
