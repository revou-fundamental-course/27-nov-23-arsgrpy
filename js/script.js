function hitungLuas() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(base) && !isNaN(height)) {
        var area = 0.5 * base * height;
        document.getElementById('result').innerHTML = 'Luas Segitiga: ' + area;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan angka valid untuk panjang alas dan tinggi.';
        document.getElementById('result').innerHTML = 'tampilkan hasil dari luas segitiga.';
    }
}

function hitungKeliling() {
    var base = parseFloat(document.getElementById('base').value);
    var height = parseFloat(document.getElementById('height').value);

    if (!isNaN(base) && !isNaN(height)) {
        var hypotenuse = Math.sqrt(base * base + height * height);
        var perimeter = base + height + hypotenuse;
        document.getElementById('result').innerHTML = 'Keliling Segitiga: ' + perimeter;
    } else {
        document.getElementById('result').innerHTML = 'Masukkan angka valid untuk panjang alas dan tinggi.';
        document.getElementById('result').innerHTML = 'tampilkan hasil dari keliling segitiga.';
    }
}
