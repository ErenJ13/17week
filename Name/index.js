function save() {
    let fio = document.getElementById("fio").value;
    let cleanfio = fio.trim();
    let lowfio = cleanfio.toLowerCase();
    let array = lowfio.split(" ");
    let last_name = array[0];
    last_name = last_name[0].toUpperCase() + last_name.slice(1);


    let first_name = array[1];
    first_name = first_name[0].toUpperCase() + first_name.slice(1);

    let ptr_name = array[2];
    ptr_name = ptr_name[0].toUpperCase() + ptr_name.slice(1);

    document.querySelector('.last').textContent = last_name;
    document.querySelector('.first').textContent = first_name;
    document.querySelector('.patronymic').textContent = ptr_name;


}



