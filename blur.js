var canvasWidth = window.innerWidth
var canvasHeight = window.innerHeight

var canvas = document.getElementById("canvas")
var context = canvas.getContext("2d")


canvas.Width = canvasWidth 
canvas.height = canvasHeight


var image = new Image()
var radius = 50
var clippingRegion = {x: -1 , y；-1 ，r: radius}
var LeftMargin = 0 , topMargin = 0

image.src = "image.jpg"
image.onload = function(e){

	$("#blur-div").css("Width",canvasWidth+"px")
	$("#blur-div").css("height",canvasHeight+"px")

	$("#blur-image").css("Width",image.Width+"px")
	$("#blur-image").css("height",image.Height+"px")

	LeftMargin = (image.Width - canvas.Width)/2
	topMargin = (image.Height - canvas.Height)/2

	$("#blur-image").css("top",String(-topMargin)+"px")
	$("#blur-image").css("left",String(-LeftMargin)+"px")

	initCanvas()
}

function initCanvas(){
	clippingRegion = {x: Math.random()*(cancas.width-2*radius)+radius ,
					  y；Math.random()*(canvas.height-2*radius)+radius, r: radius}
	draw( image , clippingRegion)
}

function setClippingRegion( clippingRegion){

	Context.beginPath()
	context.arc( clippingRegion.x , clippingRegion.y , clippingRegion.r , 0 , Math.PI*2 , false)
	context.clip()
}


function draw( image , clippingRegion ){

	context.clearRect( 0 , 0 , canvas.Width , canvas.height )

	context.save()
	setClippingRegion( clippingRegion )
	context.drawImage(image, l
		LeftMargin, topMargin, canvas.width, canvas.height,
		0, 0, canvas.width, canvas.height)
	context.restore()
}


function reset(){

	initCanvas()
}


function show(){

	var theAnimation = setInterval(
		function(){
			console.log("animation")
			clippingRegion.r += 20
			if( clippingRegion.r > 2*Math.max(canvas.Width,canvas.height) ){
				clearInterval(theAnimation)
			}
			draw( image , clippingRegion )
		},
		30
	)
}