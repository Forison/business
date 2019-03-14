function textMutation(){

	//reduce text on load 


	/* get text*/

	var whoWeAreText =$("#text").html();
    
    var whoWeAreTextLess=whoWeAreText.substr(0,300);
	
    
	/* reduce text*/

	if (whoWeAreText.length>300) {

       $("#text").html(whoWeAreTextLess).append("...<a id='read'>read more</a>");
       //on click read more do show more
       $("#read").click(function(event) {
        //show more
       	$("#text").html(whoWeAreText).append("...<a id='readLess'>read less</a>");


       	 //then on click show less show less
        $("#readLess").click(function() {
         //show less
       	 $("#text").html(whoWeAreTextLess).append("...<a id='read'>read more</a>");
        });


       });

      

	}

	//end of text reduction on load


	//trigger click function by clicking on mre button  

}
//end ofn text mutation function 
function hideProducts() {
	$("#prodSection").hide();
	


}
//end of hide product



//end ofn text mutation function 
function showProducts() {

	$("#shMor").off().on('click',function(){
		$("#prodSection").show("slow");
		$("#shMor").hide("slow");
		
	});
	
}
//end of hide product








//this is where i am going to show pop up of for messaging the companbey real time

function chatMe() {
    //hide form on load 
	$("#form").hide();
   //show form on click
	$("#but1").click(function(){
     
    $("#form").toggle("slow");
	});
}
//end of chat me pop up




function whoWeAnim(){
	$("#who").hide();

	$(window).scroll(function(){
		var myTop=$(window).scrollTop();

		if (myTop >200) {
			$("#who").show('slow');
	    console.log(myTop);		
		}else{
           $("#who").hide();			
		}
		
	});
	
}

$(document).ready(function(){

    textMutation();
    hideProducts();
    showProducts();
    chatMe();
    whoWeAnim();
   

});