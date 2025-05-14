import { useState } from "react";

function TransactionForm({ onAdd }) {
  const [deskripsi, setDeskripsi] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [tipe, setTipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deskripsi || !jumlah || jumlah <= 0 || !tipe) {
      alert("Mohon isi semua data dengan benar.");
      return;
    }

    onAdd({
      id: Date.now(),
      deskripsi,
      jumlah: parseFloat(jumlah),
      tipe,
    });

    setDeskripsi("");
    setJumlah("");
    setTipe("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Tambah Transaksi</h2>

      <input
        type="text"
        placeholder="Deskripsi"
        value={deskripsi}
        onChange={(e) => setDeskripsi(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <input
        type="number"
        placeholder="Jumlah"
        value={jumlah}
        onChange={(e) => setJumlah(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      <select
        value={tipe}
        onChange={(e) => setTipe(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      >
        <option value="">Pilih Tipe</option>
        <option value="pemasukan">Pemasukan</option>
        <option value="pengeluaran">Pengeluaran</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Tambahkan
      </button>
    </form>
  );
}

export default TransactionForm;