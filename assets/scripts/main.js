    $("#xbox").on("click", popUp);
    
    $(document).keypress(delegateKeypress);
    
    function delegateKeypress(event) {
        if(event.charCode==32)
        {
            $("xbox").trigger("click");
        }
    }
    
    function popUp() {
        var microStory = "Leave and never return please";
        
        alert(microStory)
    }