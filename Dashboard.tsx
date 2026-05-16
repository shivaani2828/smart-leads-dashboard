import { useEffect, useState } from "react";
import api from "../api/axios";
import LeadTable from "../components/LeadTable";

const Dashboard = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchLeads();
    }, 500);

    return () => clearTimeout(timer);
  }, [search, status, source]);

  const fetchLeads = async () => {
    setLoading(true);

    const res = await api.get(
      `/leads?search=${search}&status=${status}&source=${source}`
    );

    setLeads(res.data.data);
    setLoading(false);
  };

  const exportCSV = () => {
    const csv = leads.map((lead) =>
      `${lead.name},${lead.email},${lead.status},${lead.source}`
    );

    const blob = new Blob([csv.join("\n")]);

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "leads.csv";
    a.click();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Smart Leads Dashboard
      </h1>

      <div className="flex gap-3 mb-4">
        <input
          className="border p-2"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Qualified">Qualified</option>
        </select>

        <select
          className="border p-2"
          onChange={(e) => setSource(e.target.value)}
        >
          <option value="">All Sources</option>
          <option value="Instagram">Instagram</option>
        </select>

        <button
          className="border px-4"
          onClick={exportCSV}
        >
          Export CSV
        </button>
      </div>

      {loading ? <p>Loading...</p> : <LeadTable leads={leads} />}
    </div>
  );
};

export default Dashboard;