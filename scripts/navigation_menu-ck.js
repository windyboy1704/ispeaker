/* function which display the hidden menu */function displayMenu(e){alert("hi");if($("."+e).css("display")=="none"){$("#toggleMenu").removeClass("toggleMenuBg").addClass("toggleMenuBgActive");alert("hi");$("#ox-container #ox-header .top").addClass("topMarginBottom");$("."+e).css("display","block");e=="navSubMenu1"?$("#navSubMenu2").css("display","none"):e=="navSubMenu2"&&$("#navSubMenu1").css("display","none")}else{$("#"+e).css("display","none");$("#toggleMenu").removeClass("toggleMenuBgActive").addClass("toggleMenuBg");$(".top").removeClass("topMarginBottom")}return!0};