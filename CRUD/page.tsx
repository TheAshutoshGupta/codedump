/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IpHXLAkh99H
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import * as React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", phone: "555-1234" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "555-5678" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-9012" },
  ])
  const [editingRowId, setEditingRowId] = useState(null)
  const handleAddRow = () => {
    setData([...data, { id: data.length + 1, name: "", email: "", phone: "" }])
    setEditingRowId(data.length + 1)
  }
  const handleEditRow = (id) => {
    setEditingRowId(id)
  }
  const handleSaveRow = (id, updatedData) => {
    setData(data.map((row) => (row.id === id ? { ...row, ...updatedData } : row)))
    setEditingRowId(null)
  }
  const handleDeleteRow = (id) => {
    setData(data.filter((row) => row.id !== id))
  }
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-end mb-4">
        <Button onClick={handleAddRow}>Add Row</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="w-[120px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                {editingRowId === row.id ? (
                  <Input defaultValue={row.name} onBlur={(e) => handleSaveRow(row.id, { name: e.target.value })} />
                ) : (
                  row.name
                )}
              </TableCell>
              <TableCell>
                {editingRowId === row.id ? (
                  <Input defaultValue={row.email} onBlur={(e) => handleSaveRow(row.id, { email: e.target.value })} />
                ) : (
                  row.email
                )}
              </TableCell>
              <TableCell>
                {editingRowId === row.id ? (
                  <Input defaultValue={row.phone} onBlur={(e) => handleSaveRow(row.id, { phone: e.target.value })} />
                ) : (
                  row.phone
                )}
              </TableCell>
              <TableCell className="flex justify-end gap-2">
                {editingRowId === row.id ? (
                  <>
                    <Button
                      size="sm"
                      onClick={() =>
                        handleSaveRow(row.id, {
                          name: row.name,
                          email: row.email,
                          phone: row.phone,
                        })
                      }
                    >
                      Save
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingRowId(null)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button size="sm" variant="outline" onClick={() => handleEditRow(row.id)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => handleDeleteRow(row.id)}>
                      Delete
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
