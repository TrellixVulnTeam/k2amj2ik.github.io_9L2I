function b() {
    $(".dim").show();
    $(".menus").removeClass("hide");
    $(".menus").addClass("active")
}
function a(){
    $(".menus").removeClass("active");
    $(".menus").addClass("hide");
    setTimeout(function() {
        $(".dim").hide();
    }, 500);
}
$(document).ready(function() {
    console.log("ready")
    $(".sp-monopoly").click(function(){
        $(".sub-container .submenu .title").parent().removeClass("active");
        $(".sp-monopoly").parent().addClass("active");
    });
    $(".sp-contributor").click(function(){
        $(".sub-container .submenu .title").parent().removeClass("active");
        $(".sp-contributor").parent().addClass("active");
    });
    $(".sp-validator").click(function(){
        $(".sub-container .submenu .title").parent().removeClass("active");
        $(".sp-validator").parent().addClass("active");
    });
    $(".sp-datasharing").click(function(){
        $(".sub-container .submenu .title").parent().removeClass("active");
        $(".sp-datasharing").parent().addClass("active");
    });
});