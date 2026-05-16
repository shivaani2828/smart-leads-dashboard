type Lead = {
  _id: string;
  name: string;
  email: string;
  status: string;
  source: string;
};

type Props = {
  leads: Lead[];
};

const LeadTable = ({ leads }: Props) => {
  if (!leads.length) {
    return <p>No leads found</p>;
  }

  return (
    <table className="w-full border">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Source</th>
        </tr>
      </thead>

      <tbody>
        {leads.map((lead) => (
          <tr key={lead._id}>
            <td>{lead.name}</td>
            <td>{lead.email}</td>
            <td>{lead.status}</td>
            <td>{lead.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadTable;