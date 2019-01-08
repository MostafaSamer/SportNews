// JavaScript Document
		/* button increase */

	$(document).ready(function(e) {
       $(".my-button-fontsize1").click(function(){
			$("q").animate({
				fontSize:'130%'});
		});
    });

		/* button increase */



		/* button decrease */
	$(document).ready(function(e) {
        $(".my-button-fontsize2").click(function(){
			$("q").animate({
				fontSize:'80%'});
		});
    });

		/* button decrease */


		/* hover element */

		$(document).ready(function(e) {
			$(".element").click(function(){
				$(this)
				.animate({width:'300px'})
				.animate({height:'300px'})
				.animate({borderWidth:'3px'})
				$("p").animate({
					fontSize:'120%'
				});
			});
		});

		/* hover element */

		/* dis hover element */

		$(document).ready(function(e) {
			$(".element").mouseleave(function(){
				$(this)
				.animate({width:'240px'},'fast')
				.animate({height:'244px'},'fast')
				.animate({borderWidth:'1px'},'fast')
				$("p").animate({
					fontSize:'100%'
				});

			});
		});

		/* dis hover element */

		/* start body slolly */

		$(document).ready(function(e) {
			$("body").fadeIn(2000)
		});

		/* end body slolly */
