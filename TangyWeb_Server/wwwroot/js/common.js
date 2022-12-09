window.ShowToastr = (type, message) => {
    if (type == "success") {
        toastr.success(message, "Operation Successful", { timeOut: 5000 });
    }
    if (type == "error") {
        toastr.error(message, "Operation Failed", { timeOut: 5000 });
    }
}

window.ShowSwal = (type, message) => {
    if (type == "success") {
        Swal.fire(
            'Success notification!',
            message,
            'success'
        )
    }
    if (type == "error") {
        Swal.fire(
            'Error notification!',
            message,
            'error'
        )
    }
}