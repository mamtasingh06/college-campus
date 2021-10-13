// JavaScript Document
var fullImgbox = document.getElementById("fullImgbox");
var fullImg = document.getElementById("fullImg");
function openfullImg(pic)
{
  fullImgbox.style.display = "flex";
  fullImg.src = pic;
}
function closefullImg()
{
fullImgbox.style.display = "none";	
}

var fullImgbox1 = document.getElementById("fullImgbox1");
var fullImg1 = document.getElementById("fullImg1");
var img1 = document.getElementById("img1");
function openfullImg1(pic)
{
  fullImgbox1.style.display = "flex";
  fullImg1.src = pic;
  fullImg1.style.width = "600px";
  //img1.style.height = "600px";
  //fullImgbox1.style.width = "600px";
  //fullImgbox1.style.height = "600px"
}
function closefullImg1()
{
fullImgbox1.style.display = "none";	
}
var navLinks = document.getElementById("navLinks");
		  function showMenu()
		  {
		    navLinks.style.right="0";
		  }
		  function hideMenu()
		  {
		    navLinks.style.right="-400px";
		  }