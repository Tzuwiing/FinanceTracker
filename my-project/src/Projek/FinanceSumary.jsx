function FinanceSummary({ transaksi }) {
  const formatRupiah = (angka) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);

  const totalPemasukan = transaksi
    .filter((t) => t.tipe === "pemasukan")
    .reduce((total, t) => total + t.jumlah, 0);

  const totalPengeluaran = transaksi
    .filter((t) => t.tipe === "pengeluaran")
    .reduce((total, t) => total + t.jumlah, 0);

  const saldoAkhir = totalPemasukan - totalPengeluaran;

  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">Ringkasan Keuangan</h2>
      <p>
        <strong>Total Pemasukan:</strong>{" "}
        <span className="text-green-600">{formatRupiah(totalPemasukan)}</span>
      </p>
      <p>
        <strong>Total Pengeluaran:</strong>{" "}
        <span className="text-red-600">{formatRupiah(totalPengeluaran)}</span>
      </p>
      <p>
        <strong>Saldo Akhir:</strong>{" "}
        <span className="text-blue-600">{formatRupiah(saldoAkhir)}</span>
      </p>
    </div>
  );
}

export default FinanceSummary;
