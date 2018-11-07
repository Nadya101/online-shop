function showAlert(message, success = true) {
    const alertTemplate = 
        `<div class="alert alert-dismissible ${success ? 'alert-success' : 'alert-danger'}" role="alert">
          <strong>${message}</strong> 
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
        products.sort(function(b,a) {
    return b.price-a.price;
});
    const alertElement = $('body').append(alertTemplate);
    alertElement.alert();
    setTimeout(() => {
        $('.alert').alert('close');
    }, 1000);
}



