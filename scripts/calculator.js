function how_many(){
    const days = document.getElementById("result");
    let start_date = new Date(document.getElementById("start").value);
    let end_date = new Date(document.getElementById("end").value);
    if(end_date.getTime() >= start_date.getTime()){
        let r = Math.abs(end_date.getTime() - start_date.getTime());
        let final_r = Math.ceil(r / (1000 * 3600 * 24));
        days.innerHTML = final_r;
    }
    else{
        let final_r = "Start date must be earlier than end date";
        days.innerHTML = final_r;
    }
}