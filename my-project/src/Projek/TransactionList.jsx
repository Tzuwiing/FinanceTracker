function TransactionList({ transaksi, onDelete }) {
  const formatRupiah = (angka) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-xl font-bold mb-4">Daftar Transaksi</h2>
      {transaksi.length === 0 ? (
        <p className="text-gray-500">Belum ada transaksi.</p>
      ) : (
        <ul className="space-y-2">
          {transaksi.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.deskripsi}</p>
                <p className={item.tipe === "pemasukan" ? "text-green-600" : "text-red-600"}>
                  {formatRupiah(item.jumlah)} ({item.tipe})
                </p>
              </div>
              <button
                onClick={() => onDelete(item.id)}
                className="text-red-500 hover:underline"
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;