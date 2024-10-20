import React, { useEffect, useState } from 'react';

function AdminComplaint() {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await fetch('http://localhost:3003/complaints');
                const data = await response.json();
                if (data.success) {
                    setComplaints(data.complaints);
                } else {
                    setError(data.message);
                }
            } catch (err) {
                setError('An error occurred while fetching complaints.');
            } finally {
                setLoading(false);
            }
        };

        fetchComplaints();
    }, []);

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-danger text-center">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Complaints</h1>
            {complaints.length === 0 ? (
                <div className="alert alert-warning">No complaints found.</div>
            ) : (
                <div className="row">
                    {complaints.map((complaint) => (
                        <div className="col-md-4 mb-4" key={complaint._id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{complaint.name}</h5>
                                    <p className="card-text"><strong>Vendor Name:</strong> {complaint.v_name}</p>
                                    <p className="card-text"><strong>Company:</strong> {complaint.company}</p>
                                    <p className="card-text"><strong>Phone:</strong> {complaint.phone}</p>
                                    <p className="card-text"><strong>Email:</strong> {complaint.email}</p>
                                    <p className="card-text"><strong>Type:</strong> {complaint.type}</p>
                                    <p className="card-text"><strong>Complaint:</strong> {complaint.complaint}</p>
                                    <p className="card-text"><strong>Date:</strong> {new Date(complaint.date).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default AdminComplaint;
