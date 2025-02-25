document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nominalInput = document.getElementById('nominal').value.replace(/\D/g, '');
    const nominal = parseFloat(nominalInput);
    const diskon = parseFloat(document.getElementById('diskon').value);

    if (isNaN(nominal) || isNaN(diskon)) {
        alert("harap Masukan Data yang Valid");
        return;
    }

    if (diskon > 100) {
        document.getElementById('discountAmount').textContent = 'Diskon Tidak Boleh Melebihi 100%';     
        document.getElementById('discountAmount').classList.add('Invalid');
        document.getElementById('totalAmount').textContent = '';
        document.getElementById('result').style.display = 'block';
        return;
    }

    if (diskon < 0) {
        document.getElementById('discountAmount').textContent = 'Diskon Tidak Boleh Kurang dari 0';
        document.getElementById('discountAmount').classList.add('Invalid');
        document.getElementById('totalAmount').textContent = '';
        document.getElementById('result').style.display = 'block';
        return;
    }

    const discountAmount = (nominal * diskon) / 100;
    const totalAmount = nominal - discountAmount;

    const formatRupiah = (angka) => {
        return "Rp " + angka.toLocaleString('id-ID');
    };

    document.getElementById('discountAmount').textContent = formatRupiah(discountAmount);
    document.getElementById('totalAmount').textContent = formatRupiah(totalAmount);

    document.getElementById('discountAmount').classList.remove('Invalid');
    document.getElementById('result').style.display = 'block';
});

document.getElementById('nominal').addEventListener('input', function(event) {
    let value = event.target.value.replace(/\D/g, '')
    if (value.length > 0) {
        event.target.value = "Rp " + parseInt(value, 10).toLocaleString('id-ID');
    } else {
        event.target.value = "";
    }
});

document.getElementById('resetBTN').addEventListener('click', function() {
    document.getElementById('discountForm').reset();
    document.getElementById('result').style.display = 'none';
    document.getElementById('discountAmount').textContent = '';
    document.getElementById('totalAmount').textContent = '';
});