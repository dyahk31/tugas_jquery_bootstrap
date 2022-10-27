const selectedRow = null;

function onFormSubmit(e){
    event.preventDefault();
    const formData = getData();
    if(selectedRow === null){
        insertData(formData);
    }else{
        updateData(formData)
    }
    resetForm();
}

function getData(){
    const formData = {};
    formData["nama"] = $("#nama").val();
    formData["nim"] = $("#nim").val();
    return formData;
}

function insertData(data){
    const table = $("#table") && $('tbody')[0];
    const newRow = table.insertRow(table.length);
    newRow.innerHTML = `
    <td>${""}</td>
    <td>${data.nama}</td>
    <td>${data.nim}</td>
    <td>
    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick = 'editData(this)'>Edit</button>
    <button type="button" class="btn btn-danger" onclick = 'deleteData(this)' id = 'del'>Delete</button>
    </td>
    `;
}

function resetForm(){
    $("#nama").val('');
    $("#nim").val('');
    // selectedRow = null;
}

function editData(td){
    const selectedRow = td.parentElement.parentElement;

    const editNama = prompt(`Ubah ${selectedRow.cells[1].innerHTML} menjadi ...`);
    const editNim = prompt(`Ubah ${selectedRow.cells[2].innerHTML} menjadi ...`);
   
   selectedRow.cells[1].innerHTML = editNama;
   selectedRow.cells[2].innerHTML = editNim; 

    // const editNama = $(selectedRow.cells[1].innerHTML);
    // const editNim = $(selectedRow.cells[2].innerHTML);

    // selectedRow.cells[1].innerHTML = editNama;
    // selectedRow.cells[2].innerHTML = editNim;
}

function updateData(formData){
    $(selectedRow).cells[1].html() = formData.val(nama);
    $(selectedRow).cells[2].html() = formData.val(nim);
}

function deleteData(){
    if(confirm("Beneran mau dihapus kah?")){
        $("#table tbody").on('click', '#del', function(){
            $(this).closest('tr').remove();
            return false;
        })
        resetForm();
    }
}

// $('#save').on('click', function(){
//    $('#nama').text($('#nama2').val());
//    $('#nama').text($('#nim2').val());
// });

// $('#save').click(funtion(){
//     var textVal = $(())
// })

// $(function() {
//     $('#exampleModal').on('show.bs.modal', function(e) {
//       $('.modalTextInput').val('');
//       let btn = $(e.relatedTarget); // e.related here is the element that opened the modal, specifically the row button
//       let id = btn.data('id'); // this is how you get the of any `data` attribute of an element
//       $('.saveEdit').data('id', id); // then pass it to the button inside the modal
//     })
  
//     $('.saveEdit').on('click', function() {
//       let id = $(this).data('id'); // the rest is just the same
//       saveNote(id);
//       $('#exampleModal').modal('toggle'); // this is to close the modal after clicking the modal button
//     })
//   })
  
//   function saveNote(id) {
//     let text = $('.modalTextInput').val();
//     $('.recentNote').data('note', text);
//     console.log($('.recentNote').data('note'));
//     console.log(text + ' --> ' + id);
//   }

// $('#submitBtn').click(function() {
//     /* when the button in the form, display the entered values in the modal */
//     $('#lname').text($('#lastname').val());
//     $('#fname').text($('#firstname').val());
// });

// $('#submit').click(function(){
//     /* when the submit button in the modal is clicked, submit the form */
//    alert('submitting');
//    $('#formfield').submit();
// });
