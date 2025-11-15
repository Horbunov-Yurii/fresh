//didn't connect
let modals = [document.getElementById("f_Modal"),document.getElementById("s_Modal")]
let btns = {
    first: {
        open: document.getElementById("f_open"),
        close: document.getElementById("f_close")
    },
    second: {
        open: document.getElementById("s_open"),
        close: document.getElementById("s_close")
    }
}

function open_close_modal( modal ){
    if (modal.style.display === "none"){
        modal.style.display = "block";
        //open modal
    }else {
        modal.style.display = "none";
        //close modal
    }
}


btns.first.open.addEventListener("click",open_close_modal( modals[0] ))
btns.first.close.addEventListener("click",open_close_modal( modals[0] ))
btns.second.open.addEventListener("click",open_close_modal( modals[1] ))
btns.second.close.addEventListener("click",open_close_modal( modals[1] ))
