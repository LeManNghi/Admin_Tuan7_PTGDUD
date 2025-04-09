import { useState, useEffect } from 'react';

export default function EditModal({ user, onClose, onSave }) {
  const [formData, setFormData] = useState({
    id: 0,
    customer_name: '',
    company: '',
    order_value: '',
    order_date: '',
    status: '',
    avatar: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // truyền dữ liệu đã chỉnh sửa ra ngoài
    onClose(); // đóng modal sau khi lưu
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit User</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input name="customer_name" value={formData.customer_name} onChange={handleChange} />
          </label>
          <label>
            Company:
            <input name="company" value={formData.company} onChange={handleChange} />
          </label>
          <label>
            Order Value:
            <input name="order_value" value={formData.order_value} onChange={handleChange} />
          </label>
          <label>
            Order Date:
            <input name="order_date" value={formData.order_date} onChange={handleChange} />
          </label>
          <label>
            Status:
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="New">New</option>
              <option value="In-progress">In-progress</option>
              <option value="Completed">Completed</option>
            </select>
          </label>
          <div className="modal-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          width: 400px;
          max-width: 90%;
        }
        form label {
          display: block;
          margin-bottom: 10px;
        }
        input, select {
          width: 100%;
          padding: 6px;
          margin-top: 4px;
        }
        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 15px;
        }
      `}</style>
    </div>
  );
}
