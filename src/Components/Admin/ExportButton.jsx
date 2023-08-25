import React, { useState, useEffect } from 'react';
import { TiExport } from 'react-icons/ti';
import { Text } from 'your-text-component-library'; // Replace with your actual import
import XLSX from 'xlsx';
import jsPDF from 'jspdf';
import axios from 'axios';

function ExportButton() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const accessToken = 'your_access_token_here'; // Replace with your access token

    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    axios.get(`${apiUrl}/auth/users/`, { headers })
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleExportClick = () => {
    const excelData = [['Name', 'Email','Phone', 'Role'], ...users.map(user => [user.first_name, user.last_name,user.phone, user.email, user.user_type])];
    const excelSheet = XLSX.utils.aoa_to_sheet(excelData);
    const excelWorkbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(excelWorkbook, excelSheet, 'UserData');
    XLSX.writeFile(excelWorkbook, 'user_data.xlsx');

    const pdf = new jsPDF();
    pdf.text(10, 10, 'User Data');
    users.forEach((user, index) => {
      const yPos = 20 + index * 10;
      pdf.text(10, yPos, `Name: ${user.first_name} ${user.last_name}, Phone: ${user.phone}, Email: ${user.email}, Role: ${user.user_type}`);
    });
    pdf.save('user_data.pdf');
  };

  return (
    <div
      className="bg-red_900 flex flex-row gap-2 items-center justify-center sm:pl-5 pl-6 pr-3 py-2.5 rounded-lg self-stretch w-auto"
      onClick={handleExportClick}
    >
      <TiExport className="h-6 w-6 text-white_A700" alt="Export" />
      <Text className="font-normal not-italic text-left text-white_A700 w-auto" variant="body4">
        Export
      </Text>
    </div>
  );
}

export default ExportButton;
