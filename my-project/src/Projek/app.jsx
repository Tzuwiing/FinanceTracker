import { useState, useEffect } from "react";
import FinanceSummary from "./FinanceSummary";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function App() {
  const [transaksi, setTransaksi] = useState([]);

  // 🔹 Muat data dari localStorage saat pertama kali
  useEffect(() => {
    const dataTersimpan = localStorage.getItem("transaksi");
    if (dataTersimpan) {
      try {
        const parsed = JSON.parse(dataTersimpan);
        if (Array.isArray(parsed)) {
          setTransaksi(parsed);
        }
      } catch (e) {
        console.error("❌ Gagal parse localStorage:", e);
      }
    }
  }, []);

  // 🔹 Simpan ke localStorage setiap kali transaksi berubah
  useEffect(() => {
    localStorage.setItem("transaksi", JSON.stringify(transaksi));
  }, [transaksi]);

  const handleAdd = (dataBaru) => {
    setTransaksi((prev) => [...prev, dataBaru]);
  };

  const handleDelete = (id) => {
    setTransaksi((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <FinanceSummary transaksi={transaksi} />
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transaksi={transaksi} onDelete={handleDelete} />
    </div>
  );
}

export default App;
